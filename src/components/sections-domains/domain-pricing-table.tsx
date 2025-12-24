import { DomainPricingTableClient } from "./domain-pricing-table-client";

interface DomainPrice {
  tld: string;
  category?: string;
  tag?: string | null;
  period?: number; // 1 = Per Year, 2 = Per 2 Years
  register: string;
  transfer: string;
  renew: string;
  grace?: string;
}

type IconName =
  | "Globe"
  | "Briefcase"
  | "Flag"
  | "Sparkles"
  | "Palette"
  | "MapPin"
  | "Trophy"
  | "Monitor"
  | "Wrench"
  | "Coins"
  | "GraduationCap"
  | "UtensilsCrossed"
  | "Gamepad2"
  | "ShoppingCart"
  | "Home"
  | "Laugh"
  | "MoreHorizontal"
  | "Star"
  | "Tag";

interface PricingCategory {
  category: string;
  iconName: IconName;
  domains: DomainPrice[];
}

// Map WHMCS Categories To Icons
const categoryIconMap: Record<string, IconName> = {
  "Spotlight": "Star",
  "Sale": "Tag",
  "Popular": "Globe",
  "Business": "Briefcase",
  "Geographic": "MapPin",
  "Sports": "Trophy",
  "Technology": "Monitor",
  "Services": "Wrench",
  "Money and Finance": "Coins",
  "Education": "GraduationCap",
  "Food and Drink": "UtensilsCrossed",
  "Leisure and Recreation": "Gamepad2",
  "Shopping": "ShoppingCart",
  "Real Estate": "Home",
  "Novelty": "Laugh",
  "Arts and Entertainment": "Palette",
  "Other": "MoreHorizontal",
};

// Fallback Data In Case API Fails
const fallbackData: PricingCategory[] = [
  {
    category: "Popular",
    iconName: "Globe",
    domains: [
      {
        tld: ".com",
        tag: null,
        register: "৳1990",
        transfer: "৳1990",
        renew: "৳1990",
        grace: "৳500",
      },
      {
        tld: ".net",
        tag: null,
        register: "৳1900",
        transfer: "৳1900",
        renew: "৳1900",
        grace: "৳500",
      },
      {
        tld: ".org",
        tag: null,
        register: "৳1600",
        transfer: "৳1600",
        renew: "৳1600",
        grace: "৳500",
      },
      {
        tld: ".xyz",
        tag: "sale",
        register: "৳200",
        transfer: "৳200",
        renew: "৳200",
        grace: "৳200",
      },
    ],
  },
  {
    category: "Business",
    iconName: "Briefcase",
    domains: [
      {
        tld: ".biz",
        tag: null,
        register: "৳1500",
        transfer: "৳1500",
        renew: "৳1500",
        grace: "৳400",
      },
      {
        tld: ".company",
        tag: null,
        register: "৳2000",
        transfer: "৳2000",
        renew: "৳2000",
        grace: "৳600",
      },
      {
        tld: ".store",
        tag: "hot",
        register: "৳1800",
        transfer: "৳1800",
        renew: "৳1800",
        grace: "৳500",
      },
    ],
  },
  {
    category: "Technology",
    iconName: "Monitor",
    domains: [
      {
        tld: ".dev",
        tag: null,
        register: "৳1500",
        transfer: "৳1500",
        renew: "৳1500",
        grace: "৳400",
      },
      {
        tld: ".app",
        tag: "new",
        register: "৳1600",
        transfer: "৳1600",
        renew: "৳1600",
        grace: "৳500",
      },
      {
        tld: ".io",
        tag: null,
        register: "৳4500",
        transfer: "৳4500",
        renew: "৳4500",
        grace: "৳1200",
      },
    ],
  },
];

interface DomainPricingResponse {
  lastUpdated: string;
  currency: string;
  spotlightTlds: DomainPrice[];
  saleTlds: DomainPrice[];
  domains: DomainPrice[];
}

interface FetchResult {
  pricingData: PricingCategory[];
  lastUpdated: string | null;
}

async function fetchDomainPricing(): Promise<FetchResult> {
  try {
    // Try To Fetch From External JSON URL First
    let allDomains: DomainPrice[] = [];
    let spotlightTlds: DomainPrice[] = [];
    let saleTlds: DomainPrice[] = [];
    let lastUpdated: string | null = null;

    try {
      const externalJsonUrl =
        process.env.NEXT_PUBLIC_DOMAIN_PRICING_URL ||
        "https://hub.multilat.xyz/domain-prices.json";
      const response = await fetch(externalJsonUrl, {
        next: { revalidate: 3600 }, // Cache For 1 Hour
      });

      if (!response.ok) {
        throw new Error("External JSON Fetch Failed");
      }

      const data: DomainPricingResponse = await response.json();
      allDomains = Array.isArray(data) ? data : data.domains || [];
      spotlightTlds = data.spotlightTlds || [];
      saleTlds = data.saleTlds || [];
      lastUpdated = data.lastUpdated || null;
    } catch (err) {
      console.error("Error Fetching Domain Pricing:", err);
      // Will Use Hardcoded Fallback Data Below
    }

    // Organize Domains By Category (Using API Category Field)
    const categorizedDomains: Record<string, DomainPrice[]> = {};

    // Group Domains By Their Category From API
    allDomains.forEach((domain) => {
      const category = domain.category || "Other";
      if (!categorizedDomains[category]) {
        categorizedDomains[category] = [];
      }
      categorizedDomains[category].push(domain);
    });

    // Define Category Display Order (Spotlight First If Available)
    const categoryOrder = [
      "Popular",
      "Business",
      "Technology",
      "Geographic",
      "Arts and Entertainment",
      "Services",
      "Shopping",
      "Money and Finance",
      "Education",
      "Sports",
      "Food and Drink",
      "Leisure and Recreation",
      "Real Estate",
      "Novelty",
      "Other",
    ];

    // Start With Empty Pricing Data Array
    const pricingData: PricingCategory[] = [];

    // Add Spotlight Category First If We Have At Least 1 Spotlight TLD
    // Keep Original Order From Backend (No Sorting)
    if (spotlightTlds.length > 0) {
      pricingData.push({
        category: "Spotlight",
        iconName: "Star",
        domains: spotlightTlds,
      });
    }

    // Add Sale Category Second If We Have At Least 1 Sale TLD
    // Keep Original Order From Backend (No Sorting)
    if (saleTlds.length > 0) {
      pricingData.push({
        category: "Sale",
        iconName: "Tag",
        domains: saleTlds,
      });
    }

    // Add Remaining Categories In Order
    categoryOrder
      .filter((category) => categorizedDomains[category]?.length > 0)
      .forEach((category) => {
        pricingData.push({
          category,
          iconName: categoryIconMap[category] || "MoreHorizontal",
          domains: categorizedDomains[category].sort((a, b) =>
            a.tld.localeCompare(b.tld)
          ),
        });
      });

    // Add Any Categories Not In The Order List
    Object.keys(categorizedDomains).forEach((category) => {
      if (
        !categoryOrder.includes(category) &&
        categorizedDomains[category].length > 0
      ) {
        pricingData.push({
          category,
          iconName: categoryIconMap[category] || "MoreHorizontal",
          domains: categorizedDomains[category].sort((a, b) =>
            a.tld.localeCompare(b.tld)
          ),
        });
      }
    });

    return {
      pricingData: pricingData.length > 0 ? pricingData : fallbackData,
      lastUpdated,
    };
  } catch (error) {
    console.error("Error Fetching Domain Pricing:", error);
    return { pricingData: fallbackData, lastUpdated: null };
  }
}

export async function DomainPricingTable() {
  const { pricingData, lastUpdated } = await fetchDomainPricing();

  return (
    <DomainPricingTableClient
      pricingData={pricingData}
      lastUpdated={lastUpdated}
    />
  );
}
