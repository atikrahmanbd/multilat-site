"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import GradientText from "../ui/gradient-text";
import { LogIn, Rocket } from "lucide-react";
import {
  HoverBorderGradientButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";

export function CommonPortalPreview() {
  return (
    <div className="relative mx-auto my-6 sm:my-8 md:my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-6 sm:py-8 md:py-12 lg:py-20">
        <h2 className="text-center mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
          <GradientText>Simple, Easy, Full Control</GradientText>
        </h2>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-2xl mb-6 sm:mb-8 md:mb-12 text-center text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed px-4"
        >
          Access and Manage Your Hosting, Domains, Billing, and Support Tools
          Effortlessly — All From One Clean Client Dashboard.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-4 px-4 max-w-2xl mx-auto"
        >
          <TailwindConnectButton
            size="lg"
            shape="pill"
            className="flex-1 border-[1.5px] shadow-none"
          >
            <Rocket className="size-4 mr-2" />
            <span>Get Started</span>
          </TailwindConnectButton>
          <HoverBorderGradientButton
            size="lg"
            shape="pill"
            className="flex-1 shadow-none"
          >
            <LogIn className="size-4 mr-2" />
            <span>Login To Account</span>
          </HoverBorderGradientButton>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl border border-border bg-secondary/30 p-3 sm:p-4 shadow-md"
        >
          <GlowingEffect
            blur={8}
            borderWidth={10}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="w-full sm:max-w-5xl overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/portal-green-for-dark.png"
              alt="Multilat Portal Preview"
              className="aspect-[1680/1164] h-auto object-cover dark:hidden"
              height={1164}
              width={1680}
            />
            <Image
              src="/images/portal-green-for-light.png"
              alt="Multilat Portal Preview"
              className="hidden aspect-[1680/1164] h-auto object-cover dark:block"
              height={1164}
              width={1680}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
