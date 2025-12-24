import { HomeMainHero } from "@/components/sections-home/home-main-hero";
import { HomeServicesOffered } from "@/components/sections-home/home-services-offered";
import { HomeAdditionalServices } from "@/components/sections-home/home-additional-services";
import { HomeWhyChooseUs } from "@/components/sections-home/home-why-choose-us";
import { HomeFaqSection } from "@/components/sections-home/home-faq-section";
import { CommonPortalPreview } from "@/components/sections-common/common-portal-preview";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";
import { CommonWhatsNext } from "@/components/sections-common/common-whats-next";
import { CommonFeaturesShowcase } from "@/components/sections-common/common-features-showcase";
import { CommonBetterExperience } from "@/components/sections-common/common-better-experience";
import { GridLinesSection } from "@/components/ui/grid-lines";

export default function Home() {
  return (
    <>
      {/* Hero - 2 Lines At Edges */}
      <GridLinesSection
        linePositions={[0, 100]}
        showTopIntersections={false}
        showBottomIntersections={false}
      >
        <HomeMainHero />
      </GridLinesSection>

      {/* Additional Services - 2 Lines At Edges */}
      <GridLinesSection
        linePositions={[0, 100]}
        showBottomIntersections={false}
      >
        <HomeAdditionalServices />
      </GridLinesSection>

      {/* Services - 4 Lines: 0%, 33%, 66%, 100% */}
      <GridLinesSection linePositions={[0, 100]}>
        <HomeServicesOffered />
      </GridLinesSection>

      {/* Portal Preview - 2 Lines At Edges */}
      <GridLinesSection linePositions={[0, 100]}>
        <CommonPortalPreview />
      </GridLinesSection>

      {/* Why Choose Us - Custom: 2/4, 1/4, 1/4 Distribution */}
      <GridLinesSection
        linePositions={[0, 100]}
        showBottomIntersections={false}
      >
        <HomeWhyChooseUs />
      </GridLinesSection>
      {/* Features - 5 Lines Evenly Distributed */}
      <GridLinesSection
        linePositions={[0, 100]}
        showBottomIntersections={false}
      >
        <CommonFeaturesShowcase />
      </GridLinesSection>

      {/* Testimonials - 3 Lines: 0%, 50%, 100% */}
      <GridLinesSection
        linePositions={[0, 100]}
        showBottomIntersections={false}
      >
        <CommonTestimonials />
      </GridLinesSection>

      {/* Trusted Brands - 2 Lines At Edges */}
      <GridLinesSection
        linePositions={[0, 100]}
        showBottomIntersections={false}
      >
        <CommonTrustedBrands />
      </GridLinesSection>

      {/* Better Experience - 2 Lines At Edges */}
      <GridLinesSection
        linePositions={[0, 100]}
        showBottomIntersections={false}
      >
        <CommonBetterExperience />
      </GridLinesSection>

      {/* FAQ - 3 Lines: 0%, 50%, 100% */}
      <GridLinesSection
        linePositions={[0, 100]}
        showBottomIntersections={false}
      >
        <HomeFaqSection />
      </GridLinesSection>

      {/* What's Next - 2 Lines At Edges */}
      <GridLinesSection
        linePositions={[0, 100]}
        showTopIntersections={false}
        showBottomIntersections={false}
      >
        <CommonWhatsNext />
      </GridLinesSection>
    </>
  );
}
