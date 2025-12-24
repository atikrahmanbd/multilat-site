"use client";

import { BackgroundDot } from "@/components/ui/background-dot";
import GradientText from "@/components/ui/gradient-text";
import { CommonDomainSearch } from "@/components/sections-common/common-domain-search";
import { DomainOrbitalIcons } from "@/components/sections-domains/domain-orbital-icons";
import { motion } from "motion/react";
import {
  CircleCheckBig,
  Flame,
  Tag,
  Zap,
  LayoutDashboard,
  ArrowLeftRight,
} from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

interface SpotlightDomain {
  extension: string;
  price: string;
  tag?: string | null;
}

interface DomainHeroClientProps {
  spotlightDomains: SpotlightDomain[];
  totalDomains: number;
}

// Tag Badge Component For Domain Cards
function DomainTagBadge({ tag }: { tag: string }) {
  const tagConfig: Record<
    string,
    { label: string; icon: React.ReactNode; className: string }
  > = {
    sale: {
      label: "Sale",
      icon: <Tag className="size-3" />,
      className: "bg-primary text-primary-foreground",
    },
    hot: {
      label: "Hot",
      icon: <Flame className="size-3" />,
      className: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    },
    new: {
      label: "New",
      icon: <Zap className="size-3" />,
      className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
    },
  };

  const config = tagConfig[tag.toLowerCase()];
  if (!config) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold",
        config.className
      )}
    >
      {config.icon}
      {config.label}
    </span>
  );
}

export function DomainHeroClient({
  spotlightDomains,
  totalDomains,
}: DomainHeroClientProps) {
  const features = [
    "DNS Management",
    "Email Forwarding",
    "Domain Forwarding",
    "Domain Theft Protection",
    "On-Demand Privacy Protect+",
  ];

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
                Search From{" "}
                <span className="font-semibold text-primary">
                  {totalDomains}+
                </span>{" "}
                Domain Extensions With Instant Activation and Competitive
                Pricing
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { label: "Domain Control Panel", Icon: LayoutDashboard },
                { label: "Easy Transfer", Icon: ArrowLeftRight },
                { label: "Instant Activation", Icon: Zap },
              ].map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border"
                >
                  <feature.Icon className="size-4 text-primary" />
                  <span className="text-sm font-medium">
                    <GradientText>{feature.label}</GradientText>
                  </span>
                </span>
              ))}
            </motion.div>

            {/* Domain Search */}
            <CommonDomainSearch />
          </div>

          {/* Pricing & Features Split Layout */}
          <div className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
            {/* Left Side - Pricing Grid (3/5) */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {spotlightDomains.map((domain, index) => (
                  <motion.div
                    key={domain.extension}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`relative p-6 rounded-xl ${
                      domain.tag
                        ? "border border-primary bg-primary/5"
                        : "border-2 border-border bg-card"
                    } hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/25 hover:transition-shadow duration-300`}
                  >
                    {domain.tag && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <DomainTagBadge tag={domain.tag} />
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
