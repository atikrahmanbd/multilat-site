"use client";
import Link from "next/link";
import {
  Layers,
  Code2,
  ArrowRight,
  Clock,
  Zap,
  Headphones,
} from "lucide-react";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "motion/react";
import { IconBrandWordpress } from "@tabler/icons-react";
import GradientText from "../ui/gradient-text";
import { CommonOrbitalDomainIcons } from "@/components/sections-common/common-orbital-domain-icons";
import {
  SingleVerticalLine,
  MultipleVerticalLines,
  MultipleHorizontalLines,
} from "@/components/ui/grid-lines";

export function HomeServicesOffered() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        {/* Title And Subheading */}
        <div className="text-center py-8 sm:py-16 md:py-20 relative">
          <h2 className="px-2 pb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>Services Offered</GradientText>
          </h2>
          <p className="max-w-2xl mx-auto px-4 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Comprehensive Hosting Solutions And Domain Services Tailored To
            Power Your Digital Presence
          </p>
        </div>

        {/* Grid With 2 Columns On Larger Screens */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 pb-4 sm:pb-0">
          <MultipleHorizontalLines
            lines={[
              { position: 0, showLeftPlus: true, showRightPlus: true },
              { position: 100, showLeftPlus: true, showRightPlus: true },
            ]}
          />
          {/* Left Column - Web Hosting Services */}
          <div className="relative flex flex-col justify-between">
            {/* Vertical Divider On Right Edge - Visible On md+ */}
            <SingleVerticalLine
              position={99.5}
              className="hidden md:block"
              showTopPlus={true}
              showBottomPlus={true}
            />
            <div className="py-4 px-2 sm:px-0 sm:p-6 md:p-8 text-center md:text-left">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
              >
                <span className="sm:inline">Web Hosting Services</span>
                <ArrowRight className="size-5 sm:size-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <p className="text-muted-foreground font-normal mt-2 text-sm sm:text-base text-balance">
                High-Performance Hosting With Fast Speeds, 99.99% Uptime, and
                Reliable Customer Support Tailored For Businesses of All Sizes
              </p>
            </div>
            <div className="relative h-80 sm:h-60 flex flex-col md:h-90 pt-2 overflow-hidden">
              {/* Placeholder For Visual Content */}
              <motion.div
                className="w-full sm:max-w-[22rem] lg:max-w-sm mx-auto absolute inset-x-0 pb-0 px-2 sm:px-0"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative">
                  <GlowingEffect
                    blur={0}
                    borderWidth={2}
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                    className="rounded-t-3xl"
                  />
                  <GlassContainer
                    className="rounded-t-3xl rounded-b-none border-b-0"
                    innerClassName="rounded-t-2xl gap-3 flex flex-col border-b-0"
                    outerBorderRadius="rounded-t-3xl rounded-b-none"
                    innerBorderRadius="rounded-t-2xl rounded-b-none"
                    outerPadding="px-4 pt-4 pb-0"
                    innerPadding="pt-3 px-3 pb-0"
                  >
                    {/* Service Cards */}
                    <motion.div
                      className="p-3 sm:p-4 gap-3 sm:gap-4 border bg-card/80 border-border ring-1 rounded-lg ring-border/50 flex items-start"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="size-5 sm:size-6 shrink-0 rounded-full bg-primary flex mt-0.5 sm:mt-1 items-center justify-center">
                        <Layers className="size-3 sm:size-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base md:text-md font-bold text-foreground">
                          Shared Hosting
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground text-balance">
                          Ideal For Small Websites and Blogs With Reliable
                          Performance and Affordable Pricing
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-3 sm:p-4 gap-3 sm:gap-4 border bg-card/80 border-border ring-1 rounded-lg ring-border/50 flex items-start"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <div className="size-5 sm:size-6 shrink-0 rounded-full bg-primary flex mt-0.5 sm:mt-1 items-center justify-center">
                        <IconBrandWordpress className="size-3 sm:size-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base md:text-md font-bold text-foreground">
                          WordPress Hosting
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground text-balance">
                          Optimized WordPress Hosting With Enhanced Security,
                          Auto Updates, and Lightning-Fast Performance
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-3 sm:p-4 gap-3 sm:gap-4 border bg-card/80 border-border ring-1 rounded-lg ring-border/50 flex items-start"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <div className="size-5 sm:size-6 shrink-0 rounded-full bg-primary flex mt-0.5 sm:mt-1 items-center justify-center">
                        <Code2 className="size-3 sm:size-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base md:text-md font-bold text-foreground">
                          Frontend Tech Stack Hosting
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground text-balance">
                          Hosting Optimized For Modern Frameworks Like Vue,
                          Next.js, React, Svelte, And More — Perfect For
                          Developers
                        </p>
                      </div>
                    </motion.div>
                  </GlassContainer>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Right Column - Domains */}
          <div>
            <div className="relative h-[32rem] md:h-[36rem] lg:h-[32rem] mx-auto overflow-hidden">
              {/* Text Content - Above Orbital System */}
              <div className="absolute top-0 left-0 right-0 py-4 px-2 sm:p-6 md:p-8 z-[30] text-center md:text-left">
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  <span className="sm:inline">Domains - 400+ Extensions</span>
                  <ArrowRight className="size-5 sm:size-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
                <p className="text-muted-foreground font-normal mt-2 text-sm sm:text-base">
                  Choose From Over 400 Domain Extensions To Secure Your Online
                  Identity With Instant Registration and Activation
                </p>
              </div>

              {/* Center icon with orbiting domain icons */}
              <CommonOrbitalDomainIcons />
            </div>
          </div>
        </div>

        {/* Bottom Grid - 3 Column Features */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <MultipleVerticalLines
            lines={[
              { position: 33.33, showTopPlus: false, showBottomPlus: true },
              { position: 66.66, showTopPlus: false, showBottomPlus: true },
            ]}
            className="hidden md:block"
          />
          {/* Column 1 - With Right Border */}
          <div className="text-center md:text-left p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-2 justify-center md:justify-start">
              <Clock className="size-8 md:size-5 text-primary mb-2 md:mb-0" />
              <h3 className="font-bold text-base sm:text-lg text-muted-foreground">
                <GradientText>99.99% Uptime</GradientText>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Ensure Your Website Stays Online With Industry-Standard Uptime
              Guaranteed.
            </p>
          </div>
          {/* Column 2 - With Right Border */}
          <div className="text-center md:text-left p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-2 justify-center md:justify-start">
              <Zap className="size-8 md:size-5 text-primary mb-2 md:mb-0" />
              <h3 className="font-bold text-base sm:text-lg text-muted-foreground">
                <GradientText>Instant Activation</GradientText>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Register and Activate Your Domain Instantly With Access To Over
              400+ Extensions.
            </p>
          </div>
          {/* Column 3 - No Right Border */}
          <div className="sm:col-span-2 md:col-span-1 text-center md:text-left p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-2 justify-center md:justify-start">
              <Headphones className="size-8 md:size-5 text-primary mb-2 md:mb-0" />
              <h3 className="font-bold text-base sm:text-lg text-muted-foreground">
                <GradientText>Reliable Support</GradientText>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Access Friendly and Helpful Support During Business Hours Via
              Chat, Email, or Phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
