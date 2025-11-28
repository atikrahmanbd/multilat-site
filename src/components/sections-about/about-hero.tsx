"use client";

import { BackgroundDot } from "@/components/ui/background-dot";
import GradientText from "@/components/ui/gradient-text";
import { motion } from "motion/react";
import { Building2, Users, Award, Sparkles } from "lucide-react";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShimmerDarkButton } from "../ui/buttons";
import { EncryptedText } from "../ui/encrypted-text";

export function AboutHero() {
  const stats = [
    { icon: Building2, label: "Years In Business", value: "5+", color: "blue" },
    { icon: Users, label: "Happy Clients", value: "500+", color: "green" },
    {
      icon: Award,
      label: "Projects Delivered",
      value: "1000+",
      color: "purple",
    },
    { icon: Sparkles, label: "Team Members", value: "15+", color: "yellow" },
  ];

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
              {/* Top Badge */}
              <div className="mb-6 sm:mb-8 inline-block">
                <ShimmerDarkButton
                  shape="pill"
                  size="md"
                  className="cursor-default pointer-events-none py-1.5 sm:py-2 text-xs sm:text-sm"
                >
                  <EncryptedText
                    text="One-Stop Digital, Creative & Technology Solutions Provider"
                    revealedClassName="text-primary"
                    encryptedClassName="text-muted-foreground/50"
                  />
                </ShimmerDarkButton>
              </div>
              <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
                <GradientText>About Us</GradientText>
              </h1>
              <p className="mb-8 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
                We Are A Leading Provider Of Web Hosting, Domain Registration,
                And Digital Solutions In Bangladesh.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
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
              };
              const colors =
                colorClasses[stat.color as keyof typeof colorClasses];

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
                    <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center h-full">
                      <div
                        className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${colors.bg} transition-colors`}
                      >
                        <stat.icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {stat.label}
                      </p>
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
