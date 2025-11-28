"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useThemeColor } from "@/components/theme-context";

const colorThemes = [
  {
    name: "Blue",
    value: "blue",
    color: "oklch(0.5295 0.256 268.21)",
  },
  {
    name: "Green",
    value: "green",
    color: "oklch(0.8435 0.177686 164.8509)",
  },
  {
    name: "Red",
    value: "red",
    color: "oklch(0.577 0.245 27.325)",
  },
  {
    name: "Orange",
    value: "orange",
    color: "oklch(0.68 0.19 55)",
  },
  {
    name: "Yellow",
    value: "yellow",
    color: "oklch(0.828 0.189 84.429)",
  },
  {
    name: "Gray",
    value: "gray",
    color: "oklch(0.43 0.02 264.5)",
  },
];

export function ThemeColorSwitch() {
  const { themeColor, setThemeColor } = useThemeColor();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleColorClick = React.useCallback(
    (colorKey: string) => {
      setThemeColor(
        colorKey as "green" | "blue" | "red" | "orange" | "yellow" | "gray"
      );
    },
    [setThemeColor]
  );

  // Render Placeholder During SSR To Prevent Hydration Mismatch
  if (!mounted) {
    return (
      <div className="relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border">
        <div className="h-6 w-6 rounded-full" />
        <div className="h-6 w-6 rounded-full" />
        <div className="h-6 w-6 rounded-full" />
        <div className="h-6 w-6 rounded-full" />
        <div className="h-6 w-6 rounded-full" />
        <div className="h-6 w-6 rounded-full" />
      </div>
    );
  }

  return (
    <div className="relative isolate flex h-8 gap-3 rounded-full bg-background py-1.5 px-2.5 ring-1 ring-border">
      {colorThemes.map(({ value, color, name }) => {
        const isActive = themeColor === value;
        return (
          <button
            aria-label={name}
            className="relative h-5 w-5 p-0.75 rounded-full"
            key={value}
            onClick={() => handleColorClick(value)}
            type="button"
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: color }}
                layoutId="activeColor"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <div
              className={cn(
                "relative z-10 h-full w-full rounded-full flex items-center justify-center",
                !isActive && "ring-1 ring-inset ring-border"
              )}
              style={{
                backgroundColor: isActive ? "transparent" : color,
              }}
            >
              {isActive && (
                <Check className="h-4 w-4 text-white dark:text-black" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
