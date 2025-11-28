"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TechStackLogo = ({
  name,
  className,
  animationPhase,
}: {
  name: string;
  className?: string;
  animationPhase?: "normal" | "disappearing" | "appearing";
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
      setMounted(true);
    }, 0);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const getOpacity = () => {
    if (animationPhase === "disappearing") return 0;
    if (animationPhase === "appearing") return 1;
    return 1;
  };

  if (!mounted) {
    return <div className={className} />;
  }

  return (
    <Image
      src={`/tech-stack-logos/${name}-${theme}.svg`}
      alt={name}
      width={32}
      height={32}
      className={cn("tech-stack-logo transition-all duration-1000", className)}
      style={{
        opacity: getOpacity(),
      }}
    />
  );
};

const techStacks = [
  "reactjs",
  "nextjs",
  "nodejs",
  "tailwind",
  "typescript",
  "html5",
  "js",
  "css",
  "vuejs",
  "angular",
  "python",
  "php",
  "laravel",
  "django",
  "mongodb",
  "mysql",
  "postgresql",
  "firebase",
  "docker",
  "aws",
  "git",
  "github",
  "figma",
  "graphql",
  "redux",
  "flutter",
  "swift",
  "go",
  "ruby",
  "rails",
  "webpack",
  "vitejs",
  "netlify",
  "digitalOcean",
  "google-cloud",
  "wordpress",
  "nuxtjs",
  "sveltejs",
];

export const Skeleton = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<
    "normal" | "disappearing" | "appearing"
  >("normal");

  const visibleStacks = useMemo(() => {
    const stacks = [];
    for (let i = 0; i < 7; i++) {
      stacks.push(techStacks[(currentIndex + i) % techStacks.length]);
    }
    return stacks;
  }, [currentIndex]);

  useEffect(() => {
    let isRunning = true;

    const runIconChange = async () => {
      while (isRunning) {
        // Wait Before Starting Transition
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Start Disappearing Animation
        setAnimationPhase("disappearing");

        // Wait For Disappearing Animation
        await new Promise((resolve) => setTimeout(resolve, 700));

        // Change The Index
        setCurrentIndex((prev) => (prev + 1) % techStacks.length);

        // Wait A Moment For DOM Update
        await new Promise((resolve) => setTimeout(resolve, 50));

        // Start Appearing Animation
        setAnimationPhase("appearing");

        // Wait For Appearing Animation To Complete
        await new Promise((resolve) => setTimeout(resolve, 700));

        // Back To Normal State
        setAnimationPhase("normal");
      }
    };

    runIconChange();

    return () => {
      isRunning = false;
    };
  }, []);

  useEffect(() => {
    const runAnimation = async () => {
      const y = [0, 8, -8, 0];

      while (true) {
        await animate(".circle-1", { y }, { duration: 1.5 });
        await animate(".circle-2", { y }, { duration: 1.5 });
        await animate(".circle-3", { y }, { duration: 1.5 });
        await animate(".circle-4", { y }, { duration: 1.5 });
        await animate(".circle-5", { y }, { duration: 1.5 });
        await animate(".circle-6", { y }, { duration: 1.5 });
        await animate(".circle-7", { y }, { duration: 1.5 });

        // Delay Before Repeating
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    runAnimation();
  }, []);

  const getSize = (index: number) => {
    if (index === 3) return "h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28"; // Center (4th icon) - largest
    if (index === 2 || index === 4)
      return "h-14 w-14 sm:h-18 sm:w-18 md:h-24 md:w-24"; // Positions 3 and 5
    if (index === 1 || index === 5)
      return "h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"; // Positions 2 and 6
    return "h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16"; // First and last - smallest
  };

  const getIconSize = (index: number) => {
    if (index === 3) return "h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24"; // Center - largest
    if (index === 2 || index === 4)
      return "h-12 w-12 sm:h-14 sm:w-14 md:h-18 md:w-18"; // Positions 3 and 5
    if (index === 1 || index === 5)
      return "h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16"; // Positions 2 and 6
    return "h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16"; // First and last - smallest
  };

  return (
    <div className="p-2 sm:p-4 md:p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-1 sm:gap-2 md:gap-4">
        <Container className={`${getSize(0)} circle-1 hidden md:flex`}>
          <TechStackLogo
            name={visibleStacks[0]}
            className={`${getIconSize(0)}`}
            animationPhase={animationPhase}
          />
        </Container>
        <Container className={`${getSize(1)} circle-2 flex`}>
          <TechStackLogo
            name={visibleStacks[1]}
            className={`${getIconSize(1)}`}
            animationPhase={animationPhase}
          />
        </Container>
        <Container className={`${getSize(2)} circle-3 flex`}>
          <TechStackLogo
            name={visibleStacks[2]}
            className={`${getIconSize(2)}`}
            animationPhase={animationPhase}
          />
        </Container>
        <Container className={`${getSize(3)} circle-4 flex`}>
          <TechStackLogo
            name={visibleStacks[3]}
            className={`${getIconSize(3)}`}
            animationPhase={animationPhase}
          />
        </Container>
        <Container className={`${getSize(4)} circle-5 flex`}>
          <TechStackLogo
            name={visibleStacks[4]}
            className={`${getIconSize(4)}`}
            animationPhase={animationPhase}
          />
        </Container>
        <Container className={`${getSize(5)} circle-6 flex`}>
          <TechStackLogo
            name={visibleStacks[5]}
            className={`${getIconSize(5)}`}
            animationPhase={animationPhase}
          />
        </Container>
        <Container className={`${getSize(6)} circle-7 hidden md:flex`}>
          <TechStackLogo
            name={visibleStacks[6]}
            className={`${getIconSize(6)}`}
            animationPhase={animationPhase}
          />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-1/2 -translate-y-1/2 left-0 z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const [mounted, setMounted] = useState(false);
  const [sparkles] = useState(() =>
    [...Array(12)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      topMove: Math.random() * 2 - 1,
      leftMove: Math.random() * 2 - 1,
      opacity: Math.random(),
      duration: Math.random() * 2 + 4,
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0">
      {sparkles.map((sparkle, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${sparkle.top}% + ${sparkle.topMove}px)`,
            left: `calc(${sparkle.left}% + ${sparkle.leftMove}px)`,
            opacity: sparkle.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center
        bg-gray-100 dark:bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)_inset,0px_8px_16px_-8px_rgba(0,0,0,0.2)]
        dark:shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        border border-gray-200 dark:border-transparent
    `,
        className
      )}
    >
      {children}
    </motion.div>
  );
};
