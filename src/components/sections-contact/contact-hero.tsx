"use client";

import { motion } from "motion/react";
import { BackgroundDot } from "@/components/ui/background-dot";
import { MessageSquare, Ticket } from "lucide-react";
import GradientText from "@/components/ui/gradient-text";
import {
  BorderMagicButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";

export function ContactHero() {
  return (
    <div className="relative w-full overflow-hidden bg-background pt-20 sm:pt-28 md:pt-32 pb-16">
      <BackgroundDot backgroundColor="bg-background" fadeDirection="bottom" />

      <div className="relative z-20 flex items-center justify-center">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              <GradientText>How Can We Help You?</GradientText>
            </h1>
            <p className="mb-8 sm:mb-12 max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
              Have A Question, Need Assistance, or Just Want To Say Hello? Our
              Friendly Support Team Is Available To Help You.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <BorderMagicButton
                  size="lg"
                  shape="pill"
                  className="shadow-2xl shadow-zinc-900"
                >
                  <Ticket className="h-4 w-4 mr-2 -ml-2" />
                  Open Ticket
                </BorderMagicButton>
              </a>
              <a href="/contact">
                <TailwindConnectButton size="lg" shape="pill">
                  <MessageSquare className="h-4 w-4 mr-2 -ml-2" />
                  Live Chat
                </TailwindConnectButton>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
