"use client";

import { motion } from "motion/react";
import { MapPin, Globe, Shield, Zap } from "lucide-react";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const datacenters = [
  {
    country: "Germany",
    city: "Nuremberg & Falkenstein",
    flag: "🇩🇪",
    traffic: "20 TB",
    features: ["GDPR Compliant", "Own Data Center Parks", "High-Security Perimeter"],
    color: "yellow",
  },
  {
    country: "Finland",
    city: "Helsinki (Tuusula)",
    flag: "🇫🇮",
    traffic: "20 TB",
    features: ["GDPR Compliant", "Own Facility", "Nordic Cooling"],
    color: "blue",
  },
  {
    country: "USA",
    city: "Ashburn, VA & Hillsboro, OR",
    flag: "🇺🇸",
    traffic: "1 TB",
    features: ["East & West Coast", "Low Latency Americas", "Enterprise Grade"],
    color: "red",
  },
  {
    country: "Singapore",
    city: "Singapore",
    flag: "🇸🇬",
    traffic: "0.5 TB",
    features: ["Asia-Pacific Coverage", "Strategic Location", "Modern Infrastructure"],
    color: "green",
  },
];

const highlights = [
  {
    icon: Globe,
    title: "Global Presence",
    description: "5 Strategic Locations Across 4 Continents",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "European Data Centers Fully GDPR Certified",
  },
  {
    icon: Zap,
    title: "10 Gbit Network",
    description: "Redundant High-Speed Network Connections",
  },
];

export function CloudVpsDatacenters() {
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Global Data Center Locations
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Deploy Your VPS In Strategic Locations Worldwide For Optimal Performance
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <highlight.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="font-semibold text-foreground mb-1">{highlight.title}</p>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Data Center Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {datacenters.map((dc, index) => {
            const colors = colorClasses[dc.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassContainer className="group h-full">
                  <GlowingEffect disabled={false} proximity={200} spread={30} />
                  <div className="p-4 sm:p-5 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{dc.flag}</span>
                      <div>
                        <h3 className="font-semibold text-foreground">{dc.country}</h3>
                        <p className="text-xs text-muted-foreground">{dc.city}</p>
                      </div>
                    </div>

                    {/* Traffic Badge */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border w-fit mb-4`}>
                      <MapPin className={`w-3.5 h-3.5 ${colors.text}`} />
                      <span className={`text-xs font-medium ${colors.text}`}>
                        {dc.traffic} Traffic Included
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mt-auto">
                      {dc.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
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

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All Data Centers Feature Video-Monitored High-Security Perimeters and Redundant Power Systems
        </motion.p>
      </div>
    </section>
  );
}
