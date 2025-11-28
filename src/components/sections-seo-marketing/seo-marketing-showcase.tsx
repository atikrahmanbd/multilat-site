"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShoppingBag, Briefcase, Building2, Users } from "lucide-react";

const showcaseTypes = [
  {
    icon: ShoppingBag,
    category: "E-Commerce Marketing",
    description: "Product Listings, Shopping Ads, And Conversion Optimization For Online Stores",
    color: "blue",
  },
  {
    icon: Briefcase,
    category: "B2B Marketing",
    description: "Lead Generation, Account-Based Marketing, And Professional Services Promotion",
    color: "green",
  },
  {
    icon: Building2,
    category: "Local Business SEO",
    description: "Google My Business, Local Citations, And Geographic-Targeted Campaigns",
    color: "red",
  },
  {
    icon: Users,
    category: "Brand Awareness",
    description: "Multi-Channel Campaigns To Build Recognition And Engage Target Audiences",
    color: "purple",
  },
];

export function SeoMarketingShowcase() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Marketing Solutions For Every Business</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Tailored Strategies For Different Business Models And Marketing Objectives
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {showcaseTypes.map((type, index) => {
            const colorClasses = {
              blue: {
                bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
                text: "text-blue-500",
              },
              green: {
                bg: "bg-green-500/10 group-hover:bg-green-500/20",
                text: "text-green-500",
              },
              red: {
                bg: "bg-red-500/10 group-hover:bg-red-500/20",
                text: "text-red-500",
              },
              purple: {
                bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
                text: "text-purple-500",
              },
            };
            const colors =
              colorClasses[type.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassContainer className="group h-full">
                  <GlowingEffect disabled={false} proximity={200} spread={30} />
                  <div className="p-6 flex gap-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} transition-colors`}
                    >
                      <type.icon
                        className={`w-7 h-7 ${colors.text}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {type.category}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </GlassContainer>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
