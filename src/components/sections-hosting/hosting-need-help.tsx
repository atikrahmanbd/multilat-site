"use client";

import { motion } from "motion/react";
import { MessageCircle, Mail, Users, Layers, Headphones } from "lucide-react";
import {
  BorderMagicButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import GradientText from "@/components/ui/gradient-text";
import { SparklesCore } from "@/components/ui/sparkles";

export function HostingNeedHelp() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <GlassContainer className="relative overflow-hidden">
            <GlowingEffect disabled={false} proximity={200} spread={40} />
            <div className="p-8 sm:p-10 md:p-12 text-center">
              {/* Heading */}
              <div className="mb-8">
                <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
                  <GradientText>Need Help With Your Hosting?</GradientText>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Our Expert Team Is Here To Guide You. Get Instant Support
                  Through Live Chat or Reach Out Via Email.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://tawk.to/chat/your-chat-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <BorderMagicButton
                    size="lg"
                    shape="pill"
                    className="w-full sm:w-auto shadow-2xl shadow-zinc-900"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Start Live Chat
                  </BorderMagicButton>
                </a>
                <a href="/contact" className="w-full sm:w-auto">
                  <TailwindConnectButton
                    size="lg"
                    shape="pill"
                    className="w-full sm:w-auto"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Us
                  </TailwindConnectButton>
                </a>
              </div>

              {/* Sparkles Separator */}
              <div className="mt-8 w-full relative">
                <div className="w-full h-40 relative overflow-hidden">
                  {/* Gradients */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

                  {/* Core Component */}
                  <div className="w-full h-full [mask-image:radial-gradient(ellipse_400px_150px_at_center_top,white_0%,transparent_100%)]">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={1200}
                      className="w-full h-full"
                      particleColor="#00EFAE"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="-mt-24 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
                  <div className="flex flex-col items-center">
                    <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 transition-colors">
                      <Headphones
                        className="w-6 h-6 text-green-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="font-semibold text-foreground mb-1">
                      Reliable Support
                    </p>
                    <p>24/7 Support via Email & Chat</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 transition-colors">
                      <Layers
                        className="w-6 h-6 text-purple-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="font-semibold text-foreground mb-1">
                      Multiple Channels
                    </p>
                    <p>Live Chat & Email Support</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 transition-colors">
                      <Users
                        className="w-6 h-6 text-blue-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="font-semibold text-foreground mb-1">
                      Expert Team
                    </p>
                    <p>Expert Technical Support</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassContainer>
        </motion.div>
      </div>
    </section>
  );
}
