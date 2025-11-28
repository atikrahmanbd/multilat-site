import { ContactHero } from "@/components/sections-contact/contact-hero";
import { ContactForm } from "@/components/sections-contact/contact-form";
import { ContactInfo } from "@/components/sections-contact/contact-info";
import { CommonWhatsNext } from "@/components/sections-common/common-whats-next";
import { CommonBetterExperience } from "@/components/sections-common/common-better-experience";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <CommonBetterExperience />
      <CommonWhatsNext />
    </>
  );
}
