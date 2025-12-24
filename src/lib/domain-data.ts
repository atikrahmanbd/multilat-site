// Import Local Domain Pricing As Fallback (Stale Data)
import fallbackPricingData from "@/data/domain-pricing.json";

interface DomainPriceData {
  tld: string;
  category?: string;
  tag?: string | null;
  register: string;
  transfer: string;
  renew: string;
  grace?: string;
}

interface DomainPricingResponse {
  lastUpdated: string;
  currency: string;
  spotlightTlds: DomainPriceData[];
  domains: DomainPriceData[];
}

// Extended Fallback TLD List (For Spotlight Selection)
const FALLBACK_TLDS = [
  ".com",
  ".net",
  ".org",
  ".xyz",
  ".online",
  ".store",
  ".tech",
  ".site",
  ".fun",
  ".info",
];

export interface DomainDataResult {
  spotlightDomains: { extension: string; price: string; tag?: string | null }[];
  totalDomains: number;
  allDomains: DomainPriceData[];
}

/**
 * Build Domain Data Result From Domains Array
 * Used For Both Fresh API Data And Fallback Data
 */
function buildDomainDataResult(
  allDomains: DomainPriceData[],
  spotlightTlds: DomainPriceData[] = []
): DomainDataResult {
  // Create A Map For Quick Price Lookup From All Domains
  const domainPriceMap = new Map<
    string,
    { register: string; tag?: string | null }
  >();
  allDomains.forEach((domain) => {
    domainPriceMap.set(domain.tld.toLowerCase(), {
      register: domain.register,
      tag: domain.tag,
    });
  });

  // Get First 6 Spotlight TLDs
  const spotlightDomainsFromApi = spotlightTlds.slice(0, 6).map((domain) => ({
    extension: domain.tld,
    price: domain.register,
    tag: domain.tag,
  }));

  // If We Have 6 Or More Spotlight TLDs, Return First 6
  if (spotlightDomainsFromApi.length >= 6) {
    return {
      spotlightDomains: spotlightDomainsFromApi,
      totalDomains: allDomains.length,
      allDomains,
    };
  }

  // If Less Than 6, Fill Remaining From Fallback List
  const spotlightTldSet = new Set(
    spotlightDomainsFromApi.map((d) => d.extension.toLowerCase())
  );

  const result = [...spotlightDomainsFromApi];

  for (const fallbackTld of FALLBACK_TLDS) {
    if (result.length >= 6) break;

    // Skip If Already In Spotlight List
    if (spotlightTldSet.has(fallbackTld.toLowerCase())) continue;

    // Get Price From Domains Map
    const domainInfo = domainPriceMap.get(fallbackTld.toLowerCase());
    if (domainInfo) {
      result.push({
        extension: fallbackTld,
        price: domainInfo.register,
        tag: domainInfo.tag || null,
      });
    }
  }

  return {
    spotlightDomains: result,
    totalDomains: allDomains.length,
    allDomains,
  };
}

/**
 * Get Fallback Data From Local JSON File
 * Used When API Is Unavailable
 */
function getFallbackData(): DomainDataResult {
  // Convert Local JSON To DomainPriceData Format
  const fallbackDomains: DomainPriceData[] = fallbackPricingData.domains.map(
    (domain) => ({
      tld: domain.tld,
      register: domain.register,
      transfer: domain.transfer,
      renew: domain.renew,
      grace: domain.grace,
      tag: null,
    })
  );

  return buildDomainDataResult(fallbackDomains, []);
}

export async function fetchDomainData(): Promise<DomainDataResult> {
  try {
    const externalJsonUrl =
      process.env.NEXT_PUBLIC_DOMAIN_PRICING_URL ||
      "https://hub.multilat.xyz/domain-prices.json";

    const response = await fetch(externalJsonUrl, {
      next: { revalidate: 3600 }, // Cache For 1 Hour
    });

    if (!response.ok) {
      throw new Error(`Failed To Fetch Domain Pricing: ${response.status}`);
    }

    const data: DomainPricingResponse = await response.json();
    const spotlightTlds = data.spotlightTlds || [];
    const allDomains = data.domains || [];

    return buildDomainDataResult(allDomains, spotlightTlds);
  } catch (error) {
    console.error("Error Fetching Domain Data:", error);

    // Use Local JSON File As Stale Fallback Data
    return getFallbackData();
  }
}

// Get Price For A Specific TLD From All Domains
export function getDomainPrice(
  allDomains: DomainPriceData[],
  tld: string
): string | null {
  const domain = allDomains.find(
    (d) => d.tld.toLowerCase() === tld.toLowerCase()
  );
  return domain?.register || null;
}
