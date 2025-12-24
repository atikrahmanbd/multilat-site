import { fetchDomainData } from "@/lib/domain-data";
import { HomeMainHeroClient } from "./home-main-hero-client";
import { CommonDomainScrollPricing } from "@/components/sections-common/common-domain-scroll-pricing";

export async function HomeMainHero() {
  const { totalDomains } = await fetchDomainData();

  return (
    <HomeMainHeroClient
      totalDomains={totalDomains}
      domainScrollPricing={<CommonDomainScrollPricing />}
    />
  );
}
