import { WebDesignHero } from "@/components/sections-web-design/web-design-hero";
import { WebDesignServices } from "@/components/sections-web-design/web-design-services";
import { WebDesignProcess } from "@/components/sections-web-design/web-design-process";
import { WebDesignShowcase } from "@/components/sections-web-design/web-design-showcase";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";
import { WebDesignFaq } from "@/components/sections-web-design/web-design-faq";
import { WebDesignWhatsNext } from "@/components/sections-web-design/web-design-whats-next";

export default function WebDesignPage() {
  return (
    <>
      <WebDesignHero />
      <WebDesignServices />
      <WebDesignProcess />
      <WebDesignShowcase />
      <CommonTestimonials />
      <CommonTrustedBrands />
      <WebDesignFaq />
      <WebDesignWhatsNext />
    </>
  );
}
