"use client";

import DotGrid from "@/components/ui/react-bits/DotGrid";
import { HomeMainContent } from "@/components/sections-home/home-main-content";
import { CommonDomainSearch } from "@/components/sections-common/common-domain-search";
import {
  BorderMagicButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import { Rocket, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface HomeMainHeroClientProps {
  totalDomains: number;
  domainScrollPricing: ReactNode;
}

export function HomeMainHeroClient({
  domainScrollPricing,
}: HomeMainHeroClientProps) {
  return (
    <div className="relative w-full bg-background py-16 sm:py-24 md:py-32">
      {/* Interactive Dot Grid Background With Mask Fade - z-0 below lines */}
      <div className="absolute inset-0 z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_75%,rgba(0,0,0,0.5)_90%,rgba(0,0,0,0.2)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
        <DotGrid
          dotSize={2}
          gap={16}
          proximity={120}
          shockRadius={300}
          shockStrength={5}
          resistance={1000}
          returnDuration={2}
        />
      </div>

      {/* Content - z-10 above lines (z-[5]) */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="mx-auto max-w-5xl text-center w-full">
          <HomeMainContent />
          <CommonDomainSearch />
          {domainScrollPricing}

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
