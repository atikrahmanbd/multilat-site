import { fetchDomainData } from "@/lib/domain-data";
import { CommonDomainScrollPricingClient } from "./common-domain-scroll-pricing-client";

export async function CommonDomainScrollPricing() {
  const { allDomains } = await fetchDomainData();

  // Transform To The Format Expected By Client Component
  const domainPriceData = allDomains.map((domain) => ({
    tld: domain.tld,
    register: domain.register,
  }));

  return <CommonDomainScrollPricingClient allDomains={domainPriceData} />;
}
