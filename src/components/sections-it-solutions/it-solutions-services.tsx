"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Server, Cloud, Shield, Database, Code2, Settings } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Code2,
    title: "Tailored Software",
    description:
      "Build Tailored Software Solutions That Perfectly Fit Your Business Requirements And Workflows.",
    features: [
      "Business Automation",
      "Legacy System Modernization",
      "API Development",
      "Third-Party Integration",
    ],
    color: "blue",
    backgroundImage: "/tech-stack-logos/nodejs-dark.svg",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Migrate And Manage Your Infrastructure On AWS, Azure, Or Google Cloud For Scalability And Reliability.",
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps & CI/CD",
      "Cloud Optimization",
    ],
    color: "purple",
    backgroundImage: "/tech-stack-logos/aws-dark.svg",
  },
  {
    icon: Shield,
    title: "IT Security & Compliance",
    description:
      "Protect Your Business With Comprehensive Security Solutions And Regulatory Compliance Management.",
    features: [
      "Security Audits",
      "Data Protection",
      "Compliance Management",
      "Penetration Testing",
    ],
    color: "yellow",
    backgroundImage: "/tech-stack-logos/auth0-dark.svg",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Design, Optimize, And Maintain Robust Database Systems For Efficient Data Storage And Retrieval.",
    features: [
      "Database Design",
      "Performance Tuning",
      "Data Migration",
      "Backup Solutions",
    ],
    color: "green",
    backgroundImage: "/tech-stack-logos/postgresql-dark.svg",
  },
  {
    icon: Server,
    title: "Server & Infrastructure",
    description:
      "Setup And Maintain Reliable Server Infrastructure With High Availability And Performance.",
    features: [
      "Server Configuration",
      "Load Balancing",
      "Monitoring & Alerts",
      "Disaster Recovery",
    ],
    color: "red",
    backgroundImage: "/tech-stack-logos/ubuntu-dark.svg",
  },
  {
    icon: Settings,
    title: "System Integration",
    description:
      "Connect And Integrate Different Systems And Applications For Seamless Data Flow And Operations.",
    features: [
      "API Integration",
      "Data Synchronization",
      "Workflow Automation",
      "ERP Integration",
    ],
    color: "blue",
    backgroundImage: "/tech-stack-logos/graphql-dark.svg",
  },
];

export function ItSolutionsServices() {
  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 md:py-20 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Comprehensive IT Solutions</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            From Custom Software To Cloud Infrastructure - Complete Technology
            Solutions For Your Business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      </div>
    </section>
  );
}
