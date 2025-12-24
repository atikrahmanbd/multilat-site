import { HostingHero } from "@/components/sections-hosting/hosting-hero";
import { HostingPlans } from "@/components/sections-hosting/hosting-plans";
import { HostingNeedHelp } from "@/components/sections-hosting/hosting-need-help";
import { HostingComparisonTable } from "@/components/sections-hosting/hosting-comparison-table";
import { HostingFeatures } from "@/components/sections-hosting/hosting-features";
import { HostingFaqSection } from "@/components/sections-hosting/hosting-faq-section";
import { HostingWhatsNext } from "@/components/sections-hosting/hosting-whats-next";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";

export default function WebHostingPage() {
  return (
    <>
      <HostingHero />
      <HostingPlans />
      <HostingComparisonTable />
      <HostingFeatures />
      <CommonTestimonials />
      <CommonTrustedBrands />
      <HostingNeedHelp />
      <HostingFaqSection />
      <HostingWhatsNext />
    </>
  );
}
