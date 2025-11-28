"use client";

import { BackgroundDot } from "@/components/ui/background-dot";
import GradientText from "@/components/ui/gradient-text";
import { motion } from "motion/react";
import {
  ArrowRight,
  Smartphone,
  Tablet,
  Zap,
  Users,
} from "lucide-react";
import {
  BorderMagicButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function MobileAppHero() {
  const features = [
    { icon: Smartphone, text: "React Native", color: "blue" },
    { icon: Tablet, text: "Flutter", color: "purple" },
    { icon: Zap, text: "High Performance", color: "yellow" },
    { icon: Users, text: "User-Centric", color: "green" },
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
              <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
                <GradientText>Mobile App Development Services</GradientText>
              </h1>
              <p className="mb-8 sm:mb-12 max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
                Transform Your Ideas Into Powerful Mobile Applications For iOS And Android - Custom Solutions That Engage Users And Drive Growth
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#services">
                  <BorderMagicButton
                    size="lg"
                    shape="pill"
                    className="shadow-2xl shadow-zinc-900"
                  >
                    Explore Services{" "}
                    <ArrowRight className="h-4 w-4 ml-2 -mr-2" />
                  </BorderMagicButton>
                </a>
                <a href="/contact">
                  <TailwindConnectButton size="lg" shape="pill">
                    Get A Quote
                  </TailwindConnectButton>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const colorClasses = {
                yellow: {
                  bg: "bg-yellow-500/10 group-hover:bg-yellow-500/20",
                  text: "text-yellow-500",
                },
                purple: {
                  bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
                  text: "text-purple-500",
                },
                blue: {
                  bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
                  text: "text-blue-500",
                },
                green: {
                  bg: "bg-green-500/10 group-hover:bg-green-500/20",
                  text: "text-green-500",
                },
              };
              const colors =
                colorClasses[feature.color as keyof typeof colorClasses];

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
                        <feature.icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {feature.text}
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
