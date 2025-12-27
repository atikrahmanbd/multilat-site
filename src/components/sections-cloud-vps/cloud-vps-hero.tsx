"use client";

import { BackgroundDot } from "@/components/ui/background-dot";
import GradientText from "@/components/ui/gradient-text";
import { motion } from "motion/react";
import { Server, ArrowRight, MapPin } from "lucide-react";
import {
  BorderMagicButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CyclingTypewriterSmooth } from "@/components/ui/cycling-typewriter-smooth";

const heroSentences = [
  [
    { text: "99.9%", className: "text-green-500 dark:text-green-500" },
    { text: "Uptime" },
    { text: "SLA", className: "text-primary dark:text-primary" },
  ],
  [
    { text: "Starting" },
    { text: "৳650", className: "text-primary dark:text-primary" },
    { text: "/Month" },
  ],
  [
    { text: "10 Gbit", className: "text-primary dark:text-primary" },
    { text: "Network" },
  ],
  [
    { text: "Full" },
    { text: "Root", className: "text-primary dark:text-primary" },
    { text: "Access" },
  ],
  [
    { text: "NVMe", className: "text-blue-500 dark:text-blue-500" },
    { text: "SSD", className: "text-primary dark:text-primary" },
    { text: "Storage" },
  ],
  [
    { text: "Free" },
    { text: "DDoS", className: "text-red-500 dark:text-red-500" },
    { text: "Protection" },
  ],
  [
    { text: "Instant", className: "text-primary dark:text-primary" },
    { text: "Deployment" },
  ],
  [
    { text: "4", className: "text-primary dark:text-primary" },
    { text: "Global" },
    { text: "Locations", className: "text-blue-500 dark:text-blue-500" },
  ],
];

export function CloudVpsHero() {
  const datacenters = [
    {
      country: "Germany",
      cities: ["Nuremberg", "Falkenstein"],
      flag: "🇩🇪",
      traffic: "60 TB",
      features: [
        "GDPR Compliant",
        "Own Data Center Parks",
        "High-Security Perimeter",
      ],
      color: "yellow",
    },
    {
      country: "Finland",
      cities: ["Helsinki (Tuusula)", "More TBA"],
      flag: "🇫🇮",
      traffic: "60 TB",
      features: ["GDPR Compliant", "Own Facility", "Nordic Cooling"],
      color: "blue",
    },
    {
      country: "USA",
      cities: ["Ashburn, VA", "Hillsboro, OR"],
      flag: "🇺🇸",
      traffic: "8 TB",
      features: [
        "East & West Coast",
        "Low Latency Americas",
        "Enterprise Grade",
      ],
      color: "red",
    },
    {
      country: "Singapore",
      cities: ["Singapore", "More TBA"],
      flag: "🇸🇬",
      traffic: "8 TB",
      features: [
        "Asia-Pacific Coverage",
        "Strategic Location",
        "Modern Infrastructure",
      ],
      color: "green",
    },
  ];

  const colorClasses = {
    yellow: {
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      text: "text-yellow-500",
    },
    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      text: "text-blue-500",
    },
    red: {
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      text: "text-red-500",
    },
    green: {
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-500",
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-background py-16 sm:py-24 md:py-32">
      <BackgroundDot backgroundColor="bg-background" fadeDirection="bottom" />

      <div className="relative z-20 flex items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Server className="size-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Cloud VPS Servers
                </span>
              </motion.div>

              <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
                <GradientText>High-Performance Cloud VPS</GradientText>
              </h1>
              <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
                Scalable Virtual Private Servers With Dedicated Resources, Full
                Root Access, and Enterprise-Grade Infrastructure
              </p>

              <CyclingTypewriterSmooth
                sentences={heroSentences}
                className="flex justify-center items-center pb-0 my-0 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-700 dark:text-slate-300 leading-relaxed px-2 mb-8 sm:mb-12"
                cursorClassName="bg-primary"
                typingDuration={800}
                pauseDuration={2500}
              />

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-10">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">
                    <GradientText>99.9%</GradientText>
                  </p>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">
                    <GradientText>48</GradientText>
                  </p>
                  <p className="text-sm text-muted-foreground">Max vCPUs</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">
                    <GradientText>192 GB</GradientText>
                  </p>
                  <p className="text-sm text-muted-foreground">Max RAM</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">
                    <GradientText>60 TB</GradientText>
                  </p>
                  <p className="text-sm text-muted-foreground">Max Traffic</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a href="#plans">
                  <BorderMagicButton
                    size="lg"
                    shape="pill"
                    className="shadow-2xl shadow-zinc-900"
                  >
                    View Plans <ArrowRight className="h-4 w-4 ml-2 -mr-2" />
                  </BorderMagicButton>
                </a>
                <a href="/contact">
                  <TailwindConnectButton size="lg" shape="pill">
                    Contact Sales
                  </TailwindConnectButton>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Data Center Location Title */}
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Global Data Center Locations
            </p>
          </div>

          {/* Data Center Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {datacenters.map((dc, index) => {
              const colors =
                colorClasses[dc.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassContainer className="group h-full">
                    <GlowingEffect
                      disabled={false}
                      proximity={200}
                      spread={30}
                    />
                    <div className="p-2 sm:p-3 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{dc.flag}</span>
                        <h3 className="font-semibold text-foreground">
                          {dc.country}
                        </h3>
                      </div>

                      {/* Cities */}
                      <div className="divide-y divide-border border-y border-border mb-4">
                        {dc.cities.map((city, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 py-2 text-sm text-muted-foreground"
                          >
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{city}</span>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <ul className="space-y-2 mt-auto pt-4">
                        <li className="pb-4">
                          <span
                            className={`flex items-center justify-center w-full px-3 py-1.5 rounded-sm ${colors.bg} ${colors.border} border text-xs font-medium ${colors.text}`}
                          >
                            Upto {dc.traffic} Monthly Traffic
                          </span>
                        </li>
                        {dc.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassContainer>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
