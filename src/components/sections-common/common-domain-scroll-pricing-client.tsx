"use client";

import {
  InfiniteScrollDomains,
  DomainCard,
} from "@/components/ui/infinite-scroll-domains";

// Map Domain Extensions To Their Icon Paths
const DOMAIN_ICONS: Record<string, string> = {
  ".com": "/domains/bark-hosting-dot-com-domain.svg",
  ".org": "/domains/bark-hosting-dot-org-domain.svg",
  ".net": "/domains/bark-hosting-dot-net-domain.svg",
  ".xyz": "/domains/bark-hosting-dot-xyz-domain.svg",
  ".fun": "/domains/bark-hosting-dot-fun-domain.svg",
  ".store": "/domains/bark-hosting-dot-store-domain.svg",
  ".shop": "/domains/bark-hosting-dot-shop-domain.svg",
  ".cloud": "/domains/bark-hosting-dot-cloud-domain.svg",
  ".online": "/domains/bark-hosting-dot-online-domain.svg",
  ".design": "/domains/bark-hosting-dot-design-domain.svg",
  ".biz": "/domains/bark-hosting-dot-biz-domain.svg",
  ".tech": "/domains/bark-hosting-dot-tech-domain.svg",
  ".info": "/domains/bark-hosting-dot-info-domain.svg",
  ".site": "/domains/bark-hosting-dot-site-domain.svg",
};

// Default Icon For TLDs Without Specific Icon
const DEFAULT_ICON = "/domains/bark-hosting-dot-com-domain.svg";

// Preferred TLDs For Scroll Display (In Order)
const PREFERRED_TLDS = [
  ".com",
  ".org",
  ".net",
  ".xyz",
  ".fun",
  ".store",
  ".shop",
  ".cloud",
  ".online",
  ".design",
  ".biz",
  ".tech",
];

interface DomainPriceData {
  tld: string;
  register: string;
}

interface CommonDomainScrollPricingClientProps {
  allDomains: DomainPriceData[];
}

export function CommonDomainScrollPricingClient({
  allDomains,
}: CommonDomainScrollPricingClientProps) {
  // Create A Map For Quick Price Lookup
  const priceMap = new Map<string, string>();
  allDomains.forEach((domain) => {
    priceMap.set(domain.tld.toLowerCase(), domain.register);
  });

  // Build Domain Cards From Preferred TLDs With Prices From JSON
  const domains: DomainCard[] = PREFERRED_TLDS.map((tld) => ({
    extension: tld,
    price: priceMap.get(tld.toLowerCase()) || "N/A",
    icon: DOMAIN_ICONS[tld] || DEFAULT_ICON,
  })).filter((domain) => domain.price !== "N/A");

  return (
    <div className="mb-8 sm:mb-12 px-2 sm:px-4">
      <InfiniteScrollDomains
        items={domains}
        direction="left"
        speed="medium"
        pauseOnHover={true}
      />
    </div>
  );
}
