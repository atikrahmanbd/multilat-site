"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Search, FileText, Rocket, BarChart } from "lucide-react";
import { BackgroundDot } from "../ui/background-dot";

const processSteps = [
  {
    number: "1",
    title: "Audit & Research",
    description:
      "Analyze Your Current Performance, Competitors, And Market To Identify Opportunities.",
    icon: Search,
    color: "blue",
  },
  {
    number: "2",
    title: "Strategy",
    description:
      "Develop Comprehensive Marketing Plan With Clear Goals, KPIs, And Action Steps.",
    icon: FileText,
    color: "purple",
  },
  {
    number: "3",
    title: "Execution",
    description:
      "Implement Campaigns Across Channels With Continuous Optimization And Testing.",
    icon: Rocket,
    color: "green",
  },
  {
    number: "4",
    title: "Measure & Optimize",
    description:
      "Track Results, Generate Reports, And Refine Strategies For Maximum ROI.",
    icon: BarChart,
    color: "yellow",
  },
];

export function SeoMarketingProcess() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background border-t border-border overflow-hidden">
      <BackgroundDot backgroundColor="bg-background" fadeDirection="bottom" />
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Our Marketing Process</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            A Proven Methodology To Drive Results And Maximize Your Marketing ROI
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {processSteps.map((step, index) => {
            const colorClasses = {
              yellow: {
                bg: "bg-yellow-500/10 group-hover:bg-yellow-500/20",
                text: "text-yellow-500",
                number: "text-yellow-500/20",
              },
              purple: {
                bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
                text: "text-purple-500",
                number: "text-purple-500/20",
              },
              blue: {
                bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
                text: "text-blue-500",
                number: "text-blue-500/20",
              },
              green: {
                bg: "bg-green-500/10 group-hover:bg-green-500/20",
                text: "text-green-500",
                number: "text-green-500/20",
              },
            };
            const colors =
              colorClasses[step.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <GlassContainer className="group h-full overflow-hidden">
                  <GlowingEffect disabled={false} proximity={200} spread={30} />
                  <div className="p-6 relative flex flex-col items-center text-center">
                    {/* Large Background Number */}
                    <div
                      className={`absolute -bottom-[50%] text-center text-[300px] font-bold ${colors.number} opacity-50 select-none leading-none`}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} transition-colors relative z-10`}
                    >
                      <step.icon
                        className={`w-6 h-6 ${colors.text}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold mb-3 text-foreground relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </GlassContainer>

                {/* Connecting Line (Hidden On Mobile, Shown On Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r from-border to-border transform -translate-y-1/2 z-10"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
