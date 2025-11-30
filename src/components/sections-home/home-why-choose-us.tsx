"use client";
import { GlassContainer } from "@/components/ui/glass-container";
import {
  Lightbulb,
  Shield,
  Truck,
  Zap,
  Users,
  Code,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function HomeWhyChooseUs() {
  return (
    <section className="relative w-full pt-0 pb-16 sm:pb-24 md:pb-32 lg:pb-40 bg-background">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Why Choose Us
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Eight Core Values That Drive Our Success And Ensure Your Project
            Excellence
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center max-w-7xl mx-auto px-4 md:px-8">
          <GlassContainer className="group">
            <GlowingEffect disabled={false} proximity={200} spread={30} />
            <div className="p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                Expertise
              </h3>
              <p className="text-sm text-muted-foreground">
                Experienced Professionals Delivering Reliable Digital Solutions
              </p>
            </div>
          </GlassContainer>
          <GlassContainer className="group">
            <GlowingEffect disabled={false} proximity={200} spread={30} />
            <div className="p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Security</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-Grade Protection For Your Data and Online Assets
              </p>
            </div>
          </GlassContainer>
          <GlassContainer className="group">
            <GlowingEffect disabled={false} proximity={200} spread={30} />
            <div className="p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-sky-500/10 group-hover:bg-sky-500/20 transition-colors">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Swift Project Execution And Efficient Service Deployment
              </p>
            </div>
          </GlassContainer>
          <GlassContainer className="group">
            <GlowingEffect disabled={false} proximity={200} spread={30} />
            <div className="p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                Performance
              </h3>
              <p className="text-sm text-muted-foreground">
                Lightning-Fast Hosting and Optimized Digital Infrastructure
              </p>
            </div>
          </GlassContainer>
          <GlassContainer className="group">
            <GlowingEffect disabled={false} proximity={200} spread={30} />
            <div className="p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">Support</h3>
              <p className="text-sm text-muted-foreground">
                Helpful Assistance During Business Hours Via Chat, Email, and
                Phone
              </p>
            </div>
          </GlassContainer>
          <GlassContainer className="group">
            <GlowingEffect disabled={false} proximity={200} spread={30} />
            <div className="p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                Innovation
              </h3>
              <p className="text-sm text-muted-foreground">
                Cutting-Edge Tools and Frameworks To Keep Your Business Ahead
              </p>
            </div>
          </GlassContainer>
          <GlassContainer className="group">
            <GlowingEffect disabled={false} proximity={200} spread={30} />
            <div className="p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                Scalability
              </h3>
              <p className="text-sm text-muted-foreground">
                Growth-Ready Hosting and Services That Expand With Your Business
              </p>
            </div>
          </GlassContainer>
          <GlassContainer className="group">
            <GlowingEffect disabled={false} proximity={200} spread={30} />
            <div className="p-3 sm:p-4">
              <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                Partnership
              </h3>
              <p className="text-sm text-muted-foreground">
                Dedicated To Supporting Your Business For The Long Run With Care
              </p>
            </div>
          </GlassContainer>
        </div>
      </div>
    </section>
  );
}
