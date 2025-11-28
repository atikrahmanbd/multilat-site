"use client";

import { motion, AnimatePresence } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Globe, RefreshCw, LogIn } from "lucide-react";
import React from "react";
import GradientText from "../ui/gradient-text";

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex flex-col items-center justify-center dark:border-white/[0.2] w-full aspect-square p-4 sm:p-5 md:p-6 relative"
    >
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-2.5 sm:-top-3 -left-2.5 sm:-left-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2.5 sm:-bottom-3 -left-2.5 sm:-left-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-2.5 sm:-top-3 -right-2.5 sm:-right-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2.5 sm:-bottom-3 -right-2.5 sm:-right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3">
        <div className="text-neutral-700 dark:text-neutral-300">{icon}</div>
        <h2 className="dark:text-white text-lg sm:text-xl font-bold text-black">
          {title}
        </h2>
        {description && (
          <p className="dark:text-neutral-400 text-xs sm:text-sm text-neutral-600 px-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export function DomainWhatsNext() {
  return (
    <div className="relative pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-40 px-4">
      <BackgroundBeams />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>What&apos;s Next?</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Take The Next Step In Your Domain Journey With Our Quick Actions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          <Card
            title="Register A Domain"
            icon={
              <Globe className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={2} />
            }
            description="Search and Register Your Perfect Domain Name With Instant Activation."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-blue-600"
              colors={[[59, 130, 246]]}
            />
          </Card>
          <Card
            title="Transfer Domain"
            icon={
              <RefreshCw
                className="h-10 w-10 sm:h-12 sm:w-12"
                strokeWidth={2}
              />
            }
            description="Move Your Domain To Multilat With Ease For Better Management and Security."
          >
            <EvervaultCard text="" />
          </Card>
          <Card
            title="Manage Existing"
            icon={
              <LogIn className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={2} />
            }
            description="Login To Your Account To Manage DNS, Renewals, and Domain Settings."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
