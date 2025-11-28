import { SeoMarketingHero } from "@/components/sections-seo-marketing/seo-marketing-hero";
import { SeoMarketingServices } from "@/components/sections-seo-marketing/seo-marketing-services";
import { SeoMarketingProcess } from "@/components/sections-seo-marketing/seo-marketing-process";
import { SeoMarketingPlans } from "@/components/sections-seo-marketing/seo-marketing-plans";
import { SeoMarketingComparisonTable } from "@/components/sections-seo-marketing/seo-marketing-comparison-table";
import { SeoMarketingShowcase } from "@/components/sections-seo-marketing/seo-marketing-showcase";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";
import { SeoMarketingFaq } from "@/components/sections-seo-marketing/seo-marketing-faq";
import { SeoMarketingWhatsNext } from "@/components/sections-seo-marketing/seo-marketing-whats-next";

export default function SeoMarketingPage() {
  return (
    <>
      <SeoMarketingHero />
      <SeoMarketingServices />
      <SeoMarketingProcess />
      <SeoMarketingPlans />
      <SeoMarketingComparisonTable />
      <SeoMarketingShowcase />
      <CommonTestimonials />
      <CommonTrustedBrands />
      <SeoMarketingFaq />
      <SeoMarketingWhatsNext />
    </>
  );
}
