"use client";

import {
  InfiniteScrollDomains,
  DomainCard,
} from "@/components/ui/infinite-scroll-domains";

export function CommonDomainScrollPricing() {
  const domains: DomainCard[] = [
    {
      extension: ".com",
      price: "৳1899.99",
      icon: "/domains/bark-hosting-dot-com-domain.svg",
    },
    {
      extension: ".org",
      price: "৳900",
      icon: "/domains/bark-hosting-dot-org-domain.svg",
    },
    {
      extension: ".net",
      price: "৳1000",
      icon: "/domains/bark-hosting-dot-net-domain.svg",
    },
    {
      extension: ".xyz",
      price: "৳200",
      icon: "/domains/bark-hosting-dot-xyz-domain.svg",
    },
    {
      extension: ".fun",
      price: "৳350",
      icon: "/domains/bark-hosting-dot-fun-domain.svg",
    },
    {
      extension: ".store",
      price: "৳750",
      icon: "/domains/bark-hosting-dot-store-domain.svg",
    },
    {
      extension: ".shop",
      price: "৳600",
      icon: "/domains/bark-hosting-dot-shop-domain.svg",
    },
    {
      extension: ".cloud",
      price: "৳450",
      icon: "/domains/bark-hosting-dot-cloud-domain.svg",
    },
    {
      extension: ".online",
      price: "৳550",
      icon: "/domains/bark-hosting-dot-online-domain.svg",
    },
    {
      extension: ".design",
      price: "৳800",
      icon: "/domains/bark-hosting-dot-design-domain.svg",
    },
    {
      extension: ".biz",
      price: "৳900",
      icon: "/domains/bark-hosting-dot-biz-domain.svg",
    },
    {
      extension: ".tech",
      price: "৳700",
      icon: "/domains/bark-hosting-dot-tech-domain.svg",
    },
  ];

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
