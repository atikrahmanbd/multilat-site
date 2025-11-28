"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Globe } from "lucide-react";
import {
  SiReact,
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";
import Image from "next/image";

const services = [
  {
    icon: SiReact,
    title: "React Native",
    description:
      "Build Cross-Platform Mobile Apps With React Native - One Codebase For iOS And Android.",
    features: [
      "JavaScript & React",
      "Hot Reload",
      "Native Components",
      "Large Community",
    ],
    color: "blue",
    backgroundImage: "/tech-stack-logos/reactjs-dark.svg",
    crossPlatform: true,
  },
  {
    icon: SiFlutter,
    title: "Flutter",
    description:
      "Create Beautiful Native Apps With Flutter - Fast Development And Stunning UI Performance.",
    features: [
      "Dart Language",
      "Rich Widgets",
      "Hot Reload",
      "High Performance",
    ],
    color: "purple",
    backgroundImage: "/tech-stack-logos/flutter-dark.svg",
    crossPlatform: true,
  },
  {
    icon: Globe,
    title: "Progressive Web Apps",
    description:
      "Build Modern Web Apps That Work Offline And Feel Like Native Applications.",
    features: [
      "Offline Functionality",
      "App-Like Experience",
      "Cross-Platform",
      "Easy Distribution",
    ],
    color: "yellow",
    backgroundImage: "/tech-stack-logos/nextjs-dark.svg",
    crossPlatform: false,
  },
];

const mobileFrameworks = [
  {
    icon: SiReact,
    title: "React Native",
    description: "Cross-Platform Framework For Building Native Mobile Apps",
    color: "blue",
  },
  {
    icon: SiFlutter,
    title: "Flutter",
    description: "Google's UI Toolkit For Beautiful Native Applications",
    color: "blue",
  },
  {
    icon: SiFirebase,
    title: "Firebase",
    description:
      "Google's Backend Platform For Real-Time Data & Authentication",
    color: "yellow",
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    description: "Flexible NoSQL Database For Modern Mobile Applications",
    color: "green",
  },
  {
    icon: SiSupabase,
    title: "Supabase",
    description: "Open Source Firebase Alternative With PostgreSQL Backend",
    color: "green",
  },
];

export function MobileAppServices() {
  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 md:py-20 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Complete Mobile Solutions</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            React Native, Flutter, And Progressive Web App Solutions - Creating
            Engaging Mobile Experiences For Your Users
          </p>
        </div>

        {/* Services Grid - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          {services.map((service, index) => {
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
              red: {
                bg: "bg-red-500/10 group-hover:bg-red-500/20",
                text: "text-red-500",
              },
            };
            const colors =
              colorClasses[service.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassContainer className="group h-full overflow-hidden relative">
                  <GlowingEffect disabled={false} proximity={200} spread={40} />

                  {/* Cross-Platform Badge */}
                  {service.crossPlatform && (
                    <div
                      className={`absolute top-4 right-4 z-10 ${colors.bg} ${colors.text} px-3 py-1.5 rounded-sm text-xs font-semibold shadow-lg`}
                    >
                      Cross-Platform
                    </div>
                  )}

                  {/* Background Logo */}
                  <div className="absolute -bottom-70 -right-80 w-[800px] h-[800px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none">
                    <Image
                      src={service.backgroundImage}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="p-6 sm:p-8 relative">
                    {/* Icon */}
                    <div
                      className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} transition-colors`}
                    >
                      <service.icon
                        className={`w-7 h-7 ${colors.text}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="mr-2 mt-0.5 text-primary">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassContainer>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Frameworks Section */}
        <div className="max-w-7xl mt-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassContainer className="group overflow-hidden relative">
              <GlowingEffect disabled={false} proximity={200} spread={40} />

              {/* React Native Logo - Top Right */}
              <div className="absolute -top-90 -right-80 w-[800px] h-[800px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none">
                <Image
                  src="/tech-stack-logos/reactjs-light.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Flutter Logo - Bottom Left */}
              <div className="absolute -bottom-90 -left-80 w-[800px] h-[800px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none">
                <Image
                  src="/tech-stack-logos/flutter-light.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 relative">
                {/* Section Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    <GradientText>
                      Mobile Technologies & Frameworks
                    </GradientText>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Modern Tools And Technologies For Building High-Quality
                    Mobile Applications
                  </p>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                  {mobileFrameworks.map((tech, idx) => {
                    const colorClasses = {
                      yellow: {
                        bg: "bg-yellow-500/10 group-hover/tech:bg-yellow-500/20",
                        text: "text-yellow-500",
                      },
                      purple: {
                        bg: "bg-purple-500/10 group-hover/tech:bg-purple-500/20",
                        text: "text-purple-500",
                      },
                      blue: {
                        bg: "bg-blue-500/10 group-hover/tech:bg-blue-500/20",
                        text: "text-blue-500",
                      },
                      green: {
                        bg: "bg-green-500/10 group-hover/tech:bg-green-500/20",
                        text: "text-green-500",
                      },
                      red: {
                        bg: "bg-red-500/10 group-hover/tech:bg-red-500/20",
                        text: "text-red-500",
                      },
                    };
                    const colors =
                      colorClasses[tech.color as keyof typeof colorClasses];

                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center group/tech cursor-pointer"
                      >
                        <div
                          className={`mb-3 inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} transition-colors`}
                        >
                          <tech.icon
                            className={`w-7 h-7 ${colors.text}`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <p className="font-semibold text-foreground mb-2">
                          {tech.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
