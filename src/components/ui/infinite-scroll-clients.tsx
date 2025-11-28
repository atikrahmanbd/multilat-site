"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ClientLogo {
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

export const InfiniteScrollClients = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
  imageWidth = 160,
  imageHeight = 80,
}: {
  items: ClientLogo[];
  direction?: "left" | "right";
  speed?: "fast" | "medium" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
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
          "flex w-max min-w-full shrink-0 gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="relative flex h-20 w-40 items-center justify-center rounded-lg border border-border bg-background/50 p-4 transition-all hover:bg-background hover:shadow-lg hover:grayscale overflow-hidden"
          >
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(rgba(100,100,100,0.4)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
            <Image
              src={item.logo}
              alt={item.name}
              width={item.width ?? imageWidth}
              height={item.height ?? imageHeight}
              className="h-auto w-auto max-h-16 max-w-full object-contain relative z-10"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
