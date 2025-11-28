"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function CommonDomainSearch() {
  const placeholders = [
    "Search Domain Names...",
    "Check Availability...",
    "400+ Domain Extensions...",
    "Instant Purchase & Activation...",
    "Domain ID Protection...",
    "Start Building Your Web Presence...",
  ];

  const handleChange = () => {
    // Handle Input Change
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle Form Submission
  };

  return (
    <div className="mb-6 sm:mb-8 px-4 sm:px-6">
      <div className="relative w-full max-w-xl mx-auto rounded-full">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow={true}
          disabled={false}
          proximity={48}
          inactiveZone={0.01}
        />
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
