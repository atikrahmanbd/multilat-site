"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface DomainCard {
  extension: string;
  price: string;
  icon: string;
}

export const InfiniteScrollDomains = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: DomainCard[];
  direction?: "left" | "right";
  speed?: "fast" | "medium" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);

  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "medium") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  React.useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.extension}-${idx}`}
            className="relative flex h-20 w-20 sm:h-24 sm:w-24 flex-col items-center justify-between rounded-lg sm:rounded-xl border border-border bg-background/80 p-2 sm:p-3 shadow-md transition-all hover:shadow-lg dark:bg-white dark:border-black"
          >
            <div className="relative flex h-10 sm:h-12 w-full items-center justify-center">
              <Image
                src={item.icon}
                alt={item.extension}
                width={64}
                height={48}
                className="h-auto w-auto max-h-10 sm:max-h-12 object-contain"
              />
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-base font-semibold text-foreground dark:text-black">
                {item.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
