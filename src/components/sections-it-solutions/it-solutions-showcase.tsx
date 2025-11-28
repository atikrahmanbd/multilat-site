"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Building2, GraduationCap, ShoppingBag, HeartPulse } from "lucide-react";

const showcaseIndustries = [
  {
    icon: Building2,
    category: "Enterprise Solutions",
    description: "Custom ERP, CRM, And Business Management Systems For Large Organizations",
    color: "blue",
  },
  {
    icon: GraduationCap,
    category: "Education Technology",
    description: "Learning Management Systems And Educational Platforms For Institutions",
    color: "green",
  },
  {
    icon: ShoppingBag,
    category: "Retail & Commerce",
    description: "Inventory Management, POS Systems, And E-Commerce Integration Solutions",
    color: "red",
  },
  {
    icon: HeartPulse,
    category: "Healthcare IT",
    description: "HIPAA-Compliant Medical Records And Healthcare Management Systems",
    color: "purple",
  },
];

export function ItSolutionsShowcase() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Industries We Serve</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Delivering Specialized IT Solutions Across Diverse Business Sectors
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {showcaseIndustries.map((industry, index) => {
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
              colorClasses[industry.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={industry.category}
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
                      <industry.icon
                        className={`w-7 h-7 ${colors.text}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {industry.category}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {industry.description}
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
