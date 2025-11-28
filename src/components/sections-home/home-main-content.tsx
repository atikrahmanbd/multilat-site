"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";
import { ShimmerDarkButton } from "@/components/ui/buttons";
import GradientText from "@/components/ui/gradient-text";
import { CyclingTypewriterSmooth } from "@/components/ui/cycling-typewriter-smooth";
import { motion } from "motion/react";

export function HomeMainContent() {
  const heroSentences = [
    [{ text: "হাই-পারফরম্যান্স" }, { text: "ওয়েব" }, { text: "হোস্টিং" }],
    [
      { text: "মাত্র" },
      { text: "৳২৫০", className: "text-primary dark:text-primary" },
      { text: "টাকায়" },
      { text: "ওয়েব হোস্টিং" },
    ],
    [{ text: "সহজেই" }, { text: "ডোমেইন" }, { text: "রেজিস্ট্রেশন" }],
    [
      { text: "৪০০+", className: "text-primary dark:text-primary" },
      { text: "ডোমেইন" },
      { text: "এক্সটেনশন" },
    ],
    [
      { text: "পুরোপুরি", className: "text-primary dark:text-primary" },
      { text: "অটোমেটেড" },
      { text: "বিলিং" },
      { text: "ও" },
      { text: "এক্টিভেশন" },
    ],
    [
      { text: "বিকাশ", className: "text-pink-500 dark:text-pink-500" },
      { text: "সহ" },
      { text: "সকল" },
      { text: "মোবাইল", className: "text-primary dark:text-primary" },
      { text: "ব্যাংকিং সাপোর্ট", className: "text-primary dark:text-primary" },
    ],
    [
      { text: "ওয়েব ডিজাইন", className: "text-blue-500 dark:text-blue-500" },
      { text: "ও" },
      { text: "ডেভেলপমেন্ট", className: "text-primary dark:text-primary" },
    ],
    [{ text: "ডিজিটাল" }, { text: "মার্কেটিং" }, { text: "সার্ভিস" }],
    [
      { text: "Meets" },
      { text: "Complete" },
      { text: "Digital" },
      { text: "Solutions" },
    ],
  ];

  return (
    <div className="mx-auto max-w-5xl text-center px-4 sm:px-6">
      {/* Top Badge */}
      <div className="mb-6 sm:mb-8 inline-block">
        <ShimmerDarkButton
          shape="pill"
          size="md"
          className="cursor-default pointer-events-none py-1.5 sm:py-2 text-xs sm:text-sm"
        >
          <EncryptedText
            text="One-Stop Digital, Creative & Technology Solutions Provider"
            revealedClassName="text-primary"
            encryptedClassName="text-muted-foreground/50"
          />
        </ShimmerDarkButton>
      </div>

      {/* Main Heading */}
      <motion.div
        className="mb-4 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative z-10 mx-auto max-w-7xl text-center font-bold leading-tight">
          <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
            <GradientText>Fast & Secure Web Hosting</GradientText>
          </h1>
          <CyclingTypewriterSmooth
            sentences={heroSentences}
            className="flex justify-center items-center pb-0 my-0 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-slate-700 dark:text-slate-300 leading-relaxed px-2"
            cursorClassName="bg-primary"
            typingDuration={800}
            pauseDuration={2500}
          />
        </div>
      </motion.div>

      {/* Subheading */}
      <p className="mb-8 sm:mb-12 max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
        Experience High-Performance Hosting Supported By A Full Suite Of
        Services — From Domain Registration To Design, Apps, And Marketing.
      </p>
    </div>
  );
}
