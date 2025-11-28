"use client";

import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  ShieldCheck,
  Users,
  Zap,
  ThumbsUp,
  HeartHandshake,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import GradientText from "@/components/ui/gradient-text";

export function AboutWhyChoose() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Trusted & Reliable",
      description:
        "Years Of Proven Track Record Serving Businesses Across Bangladesh",
      color: "blue",
    },
    {
      icon: ThumbsUp,
      title: "Quality Service",
      description:
        "Premium Services At Competitive Prices With No Hidden Costs",
      color: "green",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced Professionals Dedicated To Your Success",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description:
        "Quick Setup And Lightning-Fast Performance For All Services",
      color: "yellow",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-The-Clock Assistance Via Email And Live Chat",
      color: "red",
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description: "Your Satisfaction Is Our Top Priority In Everything We Do",
      color: "pink",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Solutions That Scale With Your Business As It Grows",
      color: "orange",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description:
        "Recognized For Excellence In Technology And Service Quality",
      color: "cyan",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      text: "text-blue-500",
    },
    green: {
      bg: "bg-green-500/10 group-hover:bg-green-500/20",
      text: "text-green-500",
    },
    purple: {
      bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
      text: "text-purple-500",
    },
    yellow: {
      bg: "bg-yellow-500/10 group-hover:bg-yellow-500/20",
      text: "text-yellow-500",
    },
    red: {
      bg: "bg-red-500/10 group-hover:bg-red-500/20",
      text: "text-red-500",
    },
    pink: {
      bg: "bg-pink-500/10 group-hover:bg-pink-500/20",
      text: "text-pink-500",
    },
    orange: {
      bg: "bg-orange-500/10 group-hover:bg-orange-500/20",
      text: "text-orange-500",
    },
    cyan: {
      bg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
      text: "text-cyan-500",
    },
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            <GradientText>Why Choose Multilat?</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            We Stand Out Through Our Commitment To Excellence, Innovation, And
            Customer Satisfaction
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center max-w-7xl mx-auto px-4 md:px-8">
          {reasons.map((reason, index) => {
            const colors =
              colorClasses[reason.color as keyof typeof colorClasses];
            return (
              <GlassContainer key={index} className="group">
                <GlowingEffect disabled={false} proximity={200} spread={30} />
                <div className="p-3 sm:p-4">
                  <div
                    className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${colors.bg} transition-colors`}
                  >
                    <reason.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </GlassContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
