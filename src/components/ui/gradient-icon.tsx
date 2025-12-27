"use client";

import React, { useRef, useState, useEffect, ComponentType } from "react";
import { cn } from "@/lib/utils";

interface GradientIconProps {
  icon: ComponentType<{ className?: string }>;
  className?: string;
  size?: string;
}

export default function GradientIcon({
  icon: Icon,
  className,
  size = "size-6",
}: GradientIconProps) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const [maskUrl, setMaskUrl] = useState<string>("");

  useEffect(() => {
    if (iconRef.current) {
      const svg = iconRef.current.querySelector("svg");
      if (svg) {
        const svgString = new XMLSerializer().serializeToString(svg);
        const encoded = encodeURIComponent(svgString);
        setMaskUrl(`url("data:image/svg+xml,${encoded}")`);
      }
    }
  }, []);

  return (
    <>
      {/* Hidden Icon to Extract SVG */}
      <span ref={iconRef} className="absolute opacity-0 pointer-events-none">
        <Icon className={size} />
      </span>
      {/* Gradient With Icon Mask */}
      <span
        className={cn(
          "inline-block bg-gradient-to-br from-[#4079ff] to-[#00efae]",
          size,
          className
        )}
        style={{
          WebkitMaskImage: maskUrl,
          maskImage: maskUrl,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </>
  );
}
