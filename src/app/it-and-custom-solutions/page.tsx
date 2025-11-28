import { ItSolutionsHero } from "@/components/sections-it-solutions/it-solutions-hero";
import { ItSolutionsServices } from "@/components/sections-it-solutions/it-solutions-services";
import { ItSolutionsProcess } from "@/components/sections-it-solutions/it-solutions-process";
import { ItSolutionsShowcase } from "@/components/sections-it-solutions/it-solutions-showcase";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";
import { ItSolutionsFaq } from "@/components/sections-it-solutions/it-solutions-faq";
import { ItSolutionsWhatsNext } from "@/components/sections-it-solutions/it-solutions-whats-next";

export default function ItSolutionsPage() {
  return (
    <>
      <ItSolutionsHero />
      <ItSolutionsServices />
      <ItSolutionsProcess />
      <ItSolutionsShowcase />
      <CommonTestimonials />
      <CommonTrustedBrands />
      <ItSolutionsFaq />
      <ItSolutionsWhatsNext />
    </>
  );
}
