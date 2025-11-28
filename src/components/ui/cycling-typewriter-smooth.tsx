"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CyclingTypewriterSmoothProps {
  sentences: {
    text: string;
    className?: string;
  }[][];
  className?: string;
  cursorClassName?: string;
  pauseDuration?: number;
  typingDuration?: number;
}

export function CyclingTypewriterSmooth({
  sentences,
  className,
  cursorClassName,
  pauseDuration = 2000,
  typingDuration = 2000,
}: CyclingTypewriterSmoothProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealing, setIsRevealing] = useState(true);

  useEffect(() => {
    if (isRevealing) {
      // After Revealing, Wait Then Start Hiding
      const revealTimer = setTimeout(() => {
        setIsRevealing(false);
      }, typingDuration + pauseDuration);

      return () => clearTimeout(revealTimer);
    } else {
      // After Hiding, Move To Next Sentence And Start Revealing
      const hideTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sentences.length);
        setIsRevealing(true);
      }, typingDuration);

      return () => clearTimeout(hideTimer);
    }
  }, [
    isRevealing,
    currentIndex,
    sentences.length,
    pauseDuration,
    typingDuration,
  ]);

  const currentSentence = sentences[currentIndex];

  const renderWords = () => {
    return (
      <div>
        {currentSentence.map((word, idx) => (
          <span
            key={`word-${idx}`}
            className={cn(`dark:text-white text-black`, word.className)}
          >
            {word.text}
            {idx < currentSentence.length - 1 && " "}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        key={`${currentIndex}-${isRevealing ? "reveal" : "hide"}`}
        className="overflow-hidden pb-2"
        initial={{
          width: isRevealing ? "0%" : "fit-content",
        }}
        animate={{
          width: isRevealing ? "fit-content" : "0%",
        }}
        transition={{
          duration: typingDuration / 1000,
          ease: "linear",
        }}
      >
        <div
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-6 sm:h-7 md:h-8 lg:h-10 xl:h-14 -translate-y-1 sm:-translate-y-1 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
}
