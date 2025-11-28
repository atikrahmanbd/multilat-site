import { AboutHero } from "@/components/sections-about/about-hero";
import { CommonFeaturesShowcase } from "@/components/sections-common/common-features-showcase";
import { CommonBetterExperience } from "@/components/sections-common/common-better-experience";
import { AboutWhyChoose } from "@/components/sections-about/about-why-choose";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonWhatsNext } from "@/components/sections-common/common-whats-next";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CommonFeaturesShowcase />
      <CommonBetterExperience />
      <AboutWhyChoose />
      <CommonTestimonials />
      <CommonTrustedBrands />
      <CommonWhatsNext />
    </>
  );
}
