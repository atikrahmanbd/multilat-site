"use client";

import { motion } from "motion/react";
import { MessageCircle, Mail } from "lucide-react";
import {
  BorderMagicButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import { BackgroundBeams } from "@/components/ui/background-beams";
import GradientText from "@/components/ui/gradient-text";

export function SeoMarketingWhatsNext() {
  return (
    <div className="relative pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-40 px-4">
      <BackgroundBeams />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <div className="mb-8">
            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
              <GradientText>Ready To Grow Your Business?</GradientText>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let&apos;s Create A Winning Marketing Strategy To Drive Traffic, Leads, And Revenue
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
                Get Free Audit
              </TailwindConnectButton>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
