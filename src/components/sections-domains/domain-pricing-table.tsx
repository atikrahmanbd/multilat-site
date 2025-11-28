import { DomainPricingTableClient } from "./domain-pricing-table-client";
import {
  type CategoryKey,
  categorizeTLD,
} from "@/config/tld-categories";

interface DomainPrice {
  tld: string;
  register: string;
  transfer: string;
  renew: string;
  grace: string;
}

type IconName = "Globe" | "Briefcase" | "Flag" | "Sparkles";

interface PricingCategory {
  category: string;
  iconName: IconName;
  domains: DomainPrice[];
}

// Fallback Data In Case API Fails
const fallbackData: PricingCategory[] = [
  {
    category: "Popular Domains",
    iconName: "Globe",
    domains: [
      {
        tld: ".com",
        register: "৳1990",
        transfer: "৳1990",
        renew: "৳1990",
        grace: "৳500",
      },
      {
        tld: ".net",
        register: "৳1900",
        transfer: "৳1900",
        renew: "৳1900",
        grace: "৳500",
      },
      {
        tld: ".org",
        register: "৳1600",
        transfer: "৳1600",
        renew: "৳1600",
        grace: "৳500",
      },
      {
        tld: ".xyz",
        register: "৳200",
        transfer: "৳200",
        renew: "৳200",
        grace: "৳200",
      },
      {
        tld: ".tech",
        register: "৳1700",
        transfer: "৳1700",
        renew: "৳1700",
        grace: "৳500",
      },
    ],
  },
  {
    category: "Business Domains",
    iconName: "Briefcase",
    domains: [
      {
        tld: ".biz",
        register: "৳1500",
        transfer: "৳1500",
        renew: "৳1500",
        grace: "৳400",
      },
      {
        tld: ".company",
        register: "৳2000",
        transfer: "৳2000",
        renew: "৳2000",
        grace: "৳600",
      },
      {
        tld: ".store",
        register: "৳1800",
        transfer: "৳1800",
        renew: "৳1800",
        grace: "৳500",
      },
    ],
  },
  {
    category: "Country Code Domains",
    iconName: "Flag",
    domains: [
      {
        tld: ".bd",
        register: "৳3000",
        transfer: "৳3000",
        renew: "৳3000",
        grace: "৳800",
      },
      {
        tld: ".us",
        register: "৳1200",
        transfer: "৳1200",
        renew: "৳1200",
        grace: "৳400",
      },
      {
        tld: ".uk",
        register: "৳1100",
        transfer: "৳1100",
        renew: "৳1100",
        grace: "৳400",
      },
    ],
  },
  {
    category: "Special Domains",
    iconName: "Sparkles",
    domains: [
      {
        tld: ".dev",
        register: "৳1500",
        transfer: "৳1500",
        renew: "৳1500",
        grace: "৳400",
      },
      {
        tld: ".app",
        register: "৳1600",
        transfer: "৳1600",
        renew: "৳1600",
        grace: "৳500",
      },
      {
        tld: ".online",
        register: "৳550",
        transfer: "৳550",
        renew: "৳550",
        grace: "৳300",
      },
    ],
  },
];

const categoryIcons: Record<CategoryKey, IconName> = {
  popular: "Globe",
  business: "Briefcase",
  countryCode: "Flag",
  special: "Sparkles",
};

async function fetchDomainPricing(): Promise<PricingCategory[]> {
  try {
    // Try To Fetch From External JSON URL First
    let allDomains: DomainPrice[] = [];

    try {
      const externalJsonUrl = process.env.NEXT_PUBLIC_DOMAIN_PRICING_URL || "https://my.bst.com.bd/domain-prices.json";
      const response = await fetch(externalJsonUrl, {
        next: { revalidate: 3600 }, // Cache For 1 Hour (Update More Frequently)
      });

      if (response.ok) {
        const data = await response.json();
        // Handle Both Formats: { domains: [...] } or [...]
        allDomains = Array.isArray(data) ? data : (data.domains || []);
      } else {
        throw new Error("External JSON Fetch Failed");
      }
    } catch {
      console.log("Falling Back To Local Static JSON Data");
      // Fallback To Local Static JSON Data
      const pricingDataFile = await import("@/data/domain-pricing.json");
      allDomains = pricingDataFile.domains;
    }

    // Organize Domains By Category
    const categorizedDomains: Record<CategoryKey, DomainPrice[]> = {
      popular: [],
      business: [],
      countryCode: [],
      special: [],
    };

    // Categorize Each Domain
    allDomains.forEach((domain) => {
      const category = categorizeTLD(domain.tld);
      if (category && categorizedDomains[category]) {
        categorizedDomains[category].push(domain);
      }
    });

    // Convert To Component Format
    const pricingData: PricingCategory[] = (
      Object.keys(categorizedDomains) as CategoryKey[]
    )
      .filter((key) => categorizedDomains[key].length > 0)
      .map((key) => ({
        category:
          key === "popular"
            ? "Popular Domains"
            : key === "business"
              ? "Business Domains"
              : key === "countryCode"
                ? "Country Code Domains"
                : "Special Domains",
        iconName: categoryIcons[key],
        domains: categorizedDomains[key].sort((a, b) =>
          a.tld.localeCompare(b.tld)
        ),
      }));

    return pricingData.length > 0 ? pricingData : fallbackData;
  } catch (error) {
    console.error("Error Fetching Domain Pricing:", error);
    return fallbackData;
  }
}

export async function DomainPricingTable() {
  const pricingData = await fetchDomainPricing();

  return <DomainPricingTableClient pricingData={pricingData} />;
}
