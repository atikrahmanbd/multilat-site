"use client";

import { BackgroundDot } from "@/components/ui/background-dot";
import { HomeMainContent } from "@/components/sections-home/home-main-content";
import { CommonDomainSearch } from "@/components/sections-common/common-domain-search";
import { CommonDomainScrollPricing } from "@/components/sections-common/common-domain-scroll-pricing";
import {
  BorderMagicButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import { Rocket, ArrowRight } from "lucide-react";

export function HomeMainHero() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16 sm:py-24 md:py-32">
      <BackgroundDot backgroundColor="bg-background" fadeDirection="bottom" />

      <div className="relative z-20 flex items-center justify-center">
        <div className="mx-auto max-w-5xl text-center w-full">
          <HomeMainContent />
          <CommonDomainSearch />
          <CommonDomainScrollPricing />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6">
            <BorderMagicButton
              onClick={() => console.log("Start Free Trial Clicked")}
              shape="pill"
              size="lg"
              className="shadow-2xl shadow-zinc-900 w-full sm:w-auto text-sm sm:text-base"
            >
              <Rocket className="h-4 w-4 mr-2" />
              Hosting Plans
            </BorderMagicButton>
            <TailwindConnectButton
              onClick={() => console.log("View Pricing Clicked")}
              shape="pill"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              Domain Pricing
              <ArrowRight className="h-4 w-4 ml-2 -mr-2" />
            </TailwindConnectButton>
          </div>
        </div>
      </div>
    </div>
  );
}
