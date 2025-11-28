"use client";

import { motion } from "motion/react";
import { MapPin, Clock, Phone } from "lucide-react";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function ContactInfo() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Company Address",
      value: (
        <>
          House 02, Road 10, Sector 10
          <br />
          Uttara, Dhaka 1230, Bangladesh
        </>
      ),
      color: "blue",
    },
    {
      icon: Clock,
      label: "Support Hours",
      value: (
        <>
          Sunday - Friday
          <br />
          10:00 AM - 06:00 PM [BST]
        </>
      ),
      color: "green",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: (
        <>
          <a
            href="tel:+880-1725-414-131"
            className="hover:text-primary transition-colors"
          >
            +880-1725-414-131
          </a>
          <br />
          WhatsApp
        </>
      ),
      color: "purple",
    },
  ];

  return (
    <section className="pt-12 pb-2 sm:pb-4 md:pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {contactInfo.map((info, index) => {
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
            };
            const colors =
              colorClasses[info.color as keyof typeof colorClasses];

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
                  <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center h-full">
                    <div
                      className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${colors.bg} transition-colors`}
                    >
                      <info.icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                      {info.label}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </GlassContainer>
              </motion.div>
            );
          })}
        </div>
        {/* Sparkles Separator */}
        <div className="mt-30 w-full relative">
          <div className="w-full h-8 relative overflow-hidden">
            {/* Gradients */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />
          </div>
        </div>
      </div>
    </section>
  );
}
