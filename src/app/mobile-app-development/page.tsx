import { MobileAppHero } from "@/components/sections-mobile-app/mobile-app-hero";
import { MobileAppServices } from "@/components/sections-mobile-app/mobile-app-services";
import { MobileAppProcess } from "@/components/sections-mobile-app/mobile-app-process";
import { MobileAppShowcase } from "@/components/sections-mobile-app/mobile-app-showcase";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";
import { MobileAppFaq } from "@/components/sections-mobile-app/mobile-app-faq";
import { MobileAppWhatsNext } from "@/components/sections-mobile-app/mobile-app-whats-next";

export default function MobileAppPage() {
  return (
    <>
      <MobileAppHero />
      <MobileAppServices />
      <MobileAppProcess />
      <MobileAppShowcase />
      <CommonTestimonials />
      <CommonTrustedBrands />
      <MobileAppFaq />
      <MobileAppWhatsNext />
    </>
  );
}
