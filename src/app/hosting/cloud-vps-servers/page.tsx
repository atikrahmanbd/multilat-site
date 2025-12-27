import { CloudVpsHero } from "@/components/sections-cloud-vps/cloud-vps-hero";
import { CloudVpsPlans } from "@/components/sections-cloud-vps/cloud-vps-plans";
import { CloudVpsFeatures } from "@/components/sections-cloud-vps/cloud-vps-features";
import { CloudVpsOsApps } from "@/components/sections-cloud-vps/cloud-vps-os-apps";
import { CloudVpsCta } from "@/components/sections-cloud-vps/cloud-vps-cta";
import { CloudVpsFaq } from "@/components/sections-cloud-vps/cloud-vps-faq";
import { CloudVpsWhatsNext } from "@/components/sections-cloud-vps/cloud-vps-whats-next";

export default function CloudVpsPage() {
  return (
    <>
      <CloudVpsHero />
      <CloudVpsPlans />
      <CloudVpsFeatures />
      <CloudVpsOsApps />
      <CloudVpsCta />
      <CloudVpsFaq />
      <CloudVpsWhatsNext />
    </>
  );
}
