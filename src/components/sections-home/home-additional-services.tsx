"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  CardSkeletonContainer,
  CardTitle,
  CardDescription,
} from "@/components/ui/3d-card";
import { Skeleton } from "@/components/ui/3d-card";
import { BackgroundDot } from "@/components/ui/background-dot";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CircleCheckBig } from "lucide-react";
import { motion } from "motion/react";
import GradientText from "../ui/gradient-text";

const SoftwareDevelopmentHeader = () => (
  <div className="absolute inset-0 p-4 sm:p-6 md:p-6 flex flex-col">
    <CardSkeletonContainer className="mb-3 sm:mb-4 flex-shrink-0">
      <Skeleton />
    </CardSkeletonContainer>
    <CardTitle className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 sm:mb-2">
      <GradientText>Software &amp; App Development</GradientText>
    </CardTitle>
    <CardDescription className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
      Custom Software Solutions Tailored To Your Business Needs — From Concept
      To Deployment.
    </CardDescription>
  </div>
);

const SEOMarketingHeader = () => (
  <div className="absolute inset-0 flex flex-col justify-between">
    <BackgroundDot className="opacity-50" fadeDirection="none" />
    <div className="p-4 sm:p-6 h-32 sm:h-40 relative z-10">
      <h3 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
        SEO & Marketing
      </h3>
      <p className="mt-2 max-w-xs text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
        Boost Your Online Presence With Strategic SEO and Digital Marketing
        Solutions.
      </p>
    </div>
    <div className="relative h-full w-full overflow-hidden z-10">
      <div className="mt-2 ml-3 sm:ml-6 h-full w-full rounded-tl-lg border border-neutral-200 bg-neutral-100/50 dark:border-neutral-700 dark:bg-neutral-800/50 backdrop-blur-sm p-2 sm:p-4">
        <Image
          src="/images/semrush-dash.png"
          alt="SEO Marketing Dashboard"
          width={500}
          height={500}
          className="w-full rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
);

const ITSolutionsHeader = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };

  return (
    <div className="absolute inset-0 flex flex-col p-4 sm:p-6 dark:bg-black/50">
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-1 sm:space-x-2 mb-2"
      >
        <motion.div
          variants={first}
          className="h-full w-1/3 rounded-xl sm:rounded-2xl bg-white p-2 sm:p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
            IT
          </div>
          <p className="text-xs sm:text-sm text-center font-semibold text-neutral-500 mt-2 sm:mt-4">
            Cloud Infrastructure
          </p>
          <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-1.5 sm:px-2 py-0.5 mt-2 sm:mt-4">
            Scalable
          </p>
        </motion.div>
        <motion.div className="h-full relative z-20 w-1/3 rounded-xl sm:rounded-2xl bg-white p-2 sm:p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
            AI
          </div>
          <p className="text-xs sm:text-sm text-center font-semibold text-neutral-500 mt-2 sm:mt-4">
            Custom AI Solutions
          </p>
          <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-1.5 sm:px-2 py-0.5 mt-2 sm:mt-4">
            Intelligent
          </p>
        </motion.div>
        <motion.div
          variants={second}
          className="h-full w-1/3 rounded-xl sm:rounded-2xl bg-white p-2 sm:p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
            DB
          </div>
          <p className="text-xs sm:text-sm text-center font-semibold text-neutral-500 mt-2 sm:mt-4">
            Database Management
          </p>
          <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-1.5 sm:px-2 py-0.5 mt-2 sm:mt-4">
            Reliable
          </p>
        </motion.div>
      </motion.div>
      <h3 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-100 mt-3 sm:mt-4 mb-2">
        IT &amp; Custom Solutions
      </h3>
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
        Tailored IT Infrastructure and Custom Technology Solutions To Power Your
        Business.
      </p>
    </div>
  );
};

const WebDesignStep = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 sm:gap-3 items-start">
      <CircleCheckBig className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 shrink-0" />
      <p className="text-sm sm:text-base text-neutral-700 dark:text-white">{title}</p>
    </li>
  );
};

const WebDesignHeader = () => (
  <div className="absolute inset-0">
    <CardSpotlight className="h-full w-full bg-white dark:bg-black/80 border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 md:p-10">
      <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 sm:mb-4 relative z-20">
        <GradientText>Web Design</GradientText>
      </h3>
      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-3 sm:mb-4 relative z-20">
        Modern, Responsive Websites That Captivate Your Audience and Drive
        Results.
      </p>
      <div className="relative z-20">
        <ul className="list-none mt-2 space-y-2 sm:space-y-3">
          <WebDesignStep title="Custom UI/UX Design" />
          <WebDesignStep title="WordPress Development" />
          <WebDesignStep title="Shopify E-Commerce" />
          <WebDesignStep title="Responsive Web Applications" />
          <WebDesignStep title="Landing Page Design" />
        </ul>
      </div>
    </CardSpotlight>
  </div>
);

export function HomeAdditionalServices() {
  const items = [
    {
      header: <SoftwareDevelopmentHeader />,
      className: "md:col-span-3",
    },
    {
      header: <WebDesignHeader />,
      className: "md:col-span-2",
    },
    {
      header: <ITSolutionsHeader />,
      className: "md:col-span-2",
    },
    {
      header: <SEOMarketingHeader />,
      className: "md:col-span-3",
    },
  ];

  return (
    <section className="relative pt-0 pb-12 sm:pb-16 md:pb-20 px-4">
      <div className="mx-auto my-10 sm:my-16 md:my-20 w-full max-w-7xl px-2 sm:px-4 md:px-8">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300">
            Additional Services
          </h2>
          <p className="mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed px-4 sm:px-0">
            Comprehensive Digital Solutions To Elevate Your Business Presence
          </p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "group/bento shadow-input row-span-1 rounded-xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-card dark:shadow-none relative overflow-hidden min-h-[16rem] sm:min-h-[20rem] md:min-h-[22rem]",
                item.className
              )}
            >
              {item.header}
            </div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
