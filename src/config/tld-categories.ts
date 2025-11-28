export const TLD_CATEGORIES = {
  popular: [
    ".com",
    ".net",
    ".org",
    ".xyz",
    ".tech",
    ".online",
    ".site",
    ".store",
    ".fun",
    ".live",
    ".world",
    ".info",
  ],
  business: [
    ".biz",
    ".company",
    ".business",
    ".trade",
    ".market",
    ".shop",
    ".boutique",
    ".enterprise",
    ".solutions",
    ".services",
    ".industries",
    ".partners",
    ".ventures",
    ".holdings",
    ".limited",
    ".llc",
    ".inc",
  ],
  countryCode: [
    ".bd",
    ".us",
    ".uk",
    ".co.uk",
    ".ca",
    ".au",
    ".de",
    ".fr",
    ".in",
    ".cn",
    ".jp",
    ".br",
    ".mx",
    ".ru",
    ".it",
    ".es",
    ".nl",
    ".se",
    ".no",
    ".dk",
    ".fi",
    ".pl",
    ".ch",
    ".at",
    ".be",
    ".ie",
    ".nz",
    ".sg",
    ".hk",
    ".my",
    ".ph",
    ".id",
    ".th",
    ".vn",
    ".kr",
    ".tw",
    ".ae",
    ".sa",
    ".tr",
    ".za",
    ".ng",
  ],
  special: [
    ".dev",
    ".app",
    ".io",
    ".ai",
    ".cloud",
    ".digital",
    ".email",
    ".host",
    ".web",
    ".website",
    ".blog",
    ".news",
    ".media",
    ".video",
    ".studio",
    ".design",
    ".graphics",
    ".photography",
    ".art",
    ".gallery",
    ".music",
    ".agency",
    ".marketing",
    ".seo",
    ".social",
    ".network",
    ".link",
    ".click",
    ".space",
    ".zone",
    ".codes",
    ".software",
    ".systems",
    ".technology",
  ],
} as const;

export type CategoryKey = keyof typeof TLD_CATEGORIES;

export function categorizeTLD(tld: string): CategoryKey | null {
  const normalizedTld = tld.toLowerCase().startsWith(".")
    ? tld.toLowerCase()
    : `.${tld.toLowerCase()}`;

  for (const [category, tlds] of Object.entries(TLD_CATEGORIES)) {
    if ((tlds as readonly string[]).includes(normalizedTld)) {
      return category as CategoryKey;
    }
  }

  return null;
}

export function getCategoryDisplayName(category: CategoryKey): string {
  const displayNames: Record<CategoryKey, string> = {
    popular: "Popular Domains",
    business: "Business Domains",
    countryCode: "Country Code Domains",
    special: "Special Domains",
  };

  return displayNames[category];
}
