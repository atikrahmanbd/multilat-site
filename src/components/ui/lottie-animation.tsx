"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  backgroundColor?: string;
}

export function LottieAnimation({
  src,
  className,
  loop = true,
  autoplay = true,
  backgroundColor = "transparent",
}: LottieAnimationProps) {
  const isJsonFile = src.endsWith(".json");
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (isJsonFile) {
      fetch(src)
        .then((res) => res.json())
        .then((data) => setAnimationData(data));
    }
  }, [src, isJsonFile]);

  if (isJsonFile) {
    if (!animationData) return null;
    return (
      <div
        className={cn("w-full h-full", className)}
        style={{ backgroundColor }}
      >
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          style={{ background: "transparent" }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
    );
  }

  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      backgroundColor={backgroundColor}
      className={cn("w-full h-full", className)}
    />
  );
}
