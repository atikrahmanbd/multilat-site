import React from "react";
import { TextHoverEffectBrand } from "@/components/ui/text-hover-effect-brand";

export function FooterBrandText() {
  return (
    <div className="w-full bg-background dark:bg-background">
      <div className="mx-auto max-w-7xl pt-8 px-4 sm:px-6 lg:px-8">
        {/* <div className="w-full h-4 bg-red-500 mb-2"></div> */}
        <TextHoverEffectBrand />
      </div>
    </div>
  );
}
