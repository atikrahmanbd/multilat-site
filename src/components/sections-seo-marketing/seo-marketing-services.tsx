"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Search, Mail, Share2, Megaphone, Bot, Sparkles } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improve Your Search Rankings With Technical SEO, On-Page Optimization, And Link Building Strategies.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
    ],
    color: "blue",
    backgroundImage: "/tech-stack-logos/bing.svg",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Build And Nurture Customer Relationships With Targeted Email Campaigns That Convert.",
    features: [
      "Campaign Management",
      "List Segmentation",
      "Automation Workflows",
      "Performance Analytics",
    ],
    color: "green",
    backgroundImage: "/tech-stack-logos/gmail.svg",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Engage Your Audience And Build Brand Awareness Across Social Media Platforms.",
    features: [
      "Content Strategy",
      "Community Management",
      "Paid Advertising",
      "Influencer Outreach",
    ],
    color: "red",
    backgroundImage: "/tech-stack-logos/insta.svg",
  },
  {
    icon: Megaphone,
    title: "Ads and Boosting",
    description:
      "Maximize ROI With Strategic Paid Advertising Campaigns Across Google, Facebook, And LinkedIn.",
    features: [
      "Google Ads",
      "Facebook/Instagram Ads",
      "LinkedIn Advertising",
      "Ad Creative Optimization",
    ],
    color: "purple",
    backgroundImage: "/tech-stack-logos/meta.svg",
  },
  {
    icon: Bot,
    title: "AI Marketing Automation",
    description:
      "Leverage AI To Automate Marketing Tasks, Personalize Customer Journeys, And Predict Outcomes.",
    features: [
      "Automated Segmentation",
      "Predictive Lead Scoring",
      "Smart Campaign Triggers",
      "Personalized Workflows",
    ],
    color: "yellow",
    backgroundImage: "/tech-stack-logos/semrush.svg",
  },
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description:
      "Create High-Quality Marketing Content At Scale Using AI-Powered Copywriting And Optimization.",
    features: [
      "AI Copywriting",
      "Social Media Content",
      "SEO Content Optimization",
      "A/B Test Variations",
    ],
    color: "blue",
    backgroundImage: "/tech-stack-logos/canva.svg",
  },
];

export function SeoMarketingServices() {
  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 md:py-20 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Complete Digital Marketing Solutions</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            From SEO To Social Media - Comprehensive Marketing Strategies To
            Grow Your Online Presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
