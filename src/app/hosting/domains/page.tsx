import { DomainHero } from "@/components/sections-domains/domain-hero";
import { DomainFeatures } from "@/components/sections-domains/domain-features";
import { DomainPricingTable } from "@/components/sections-domains/domain-pricing-table";
import { DomainFaqSection } from "@/components/sections-domains/domain-faq-section";
import { DomainWhatsNext } from "@/components/sections-domains/domain-whats-next";

export default function DomainsPage() {
  return (
    <>
      <DomainHero />
      <DomainPricingTable />
      <DomainFeatures />
      <DomainFaqSection />
      <DomainWhatsNext />
    </>
  );
}
