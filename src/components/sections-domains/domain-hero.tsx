"use client";

import { BackgroundDot } from "@/components/ui/background-dot";
import GradientText from "@/components/ui/gradient-text";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DomainOrbitalIcons } from "@/components/sections-domains/domain-orbital-icons";
import { motion } from "motion/react";
import { CircleCheckBig } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function DomainHero() {
  const placeholders = [
    "Search Domain Names...",
    "Check Availability...",
    "400+ Domain Extensions...",
    "Instant Purchase & Activation...",
    "Domain ID Protection...",
    "Start Building Your Web Presence...",
  ];

  const popularDomains = [
    { extension: ".com", price: "৳1990", popular: true },
    { extension: ".net", price: "৳1900", popular: false },
    { extension: ".org", price: "৳1600", popular: false },
    { extension: ".fun", price: "৳1200", popular: false },
    { extension: ".xyz", price: "৳200", popular: true },
    { extension: ".tech", price: "৳1700", popular: false },
  ];

  const features = [
    "DNS Management",
    "Email Forwarding",
    "Domain Forwarding",
    "Domain Theft Protection",
    "On-Demand Privacy Protect+",
  ];

  const handleChange = () => {
    // Handle Input Change
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle Form Submission
  };

  return (
    <div className="relative w-full overflow-hidden bg-background py-16 sm:py-24 md:py-32">
      <BackgroundDot backgroundColor="bg-background" fadeDirection="bottom" />

      {/* Orbital Domain Icons - Bottom Half Only */}
      <div className="absolute -top-4/6 left-1/2 -translate-x-1/2 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl aspect-square z-10">
        <DomainOrbitalIcons />
      </div>

      <div className="relative z-20 flex items-center justify-center">
        <div className="mx-auto w-full">
          {/* Heading */}
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
                <GradientText>Find Your Perfect Domain</GradientText>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-foreground max-w-xl mx-auto">
                Search From 400+ Domain Extensions With Instant Activation And
                Competitive Pricing
              </p>
            </motion.div>

            {/* Domain Search */}
            <div className="mb-8 sm:mb-12">
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
          </div>

          {/* Pricing & Features Split Layout */}
          <div className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
            {/* Left Side - Pricing Grid (3/5) */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {popularDomains.map((domain, index) => (
                  <motion.div
                    key={domain.extension}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`relative p-6 rounded-xl ${
                      domain.popular
                        ? "border border-primary bg-primary/5"
                        : "border-2 border-border bg-card"
                    } hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/25 hover:transition-shadow duration-300`}
                  >
                    {domain.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        {domain.extension}
                      </h3>
                      <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                        {domain.price}
                      </p>
                      <p className="text-sm text-muted-foreground">Per Year</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - What's Included (2/5) */}
            <motion.div
              className="md:col-span-2 relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CardSpotlight className="h-full w-full rounded-xl border-2 !border-primary bg-card p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 sm:mb-4 relative z-20">
                  <GradientText>What&apos;s Included</GradientText>
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-4 relative z-20">
                  Every Domain Comes With Premium Features To Help You Build
                  Your Online Presence.
                </p>
                <div className="relative z-20">
                  <ul className="list-none mt-2 space-y-3">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex gap-2 sm:gap-3 items-start"
                      >
                        <CircleCheckBig className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                        <p className="text-sm sm:text-base text-neutral-700 dark:text-white">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardSpotlight>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
