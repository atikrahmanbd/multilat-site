"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  const [currentTheme, setCurrentTheme] = useState<string>("green");

  useEffect(() => {
    // Check Initial Theme
    const checkTheme = () => {
      const classList = document.documentElement.classList;
      if (classList.contains("theme-blue")) setCurrentTheme("blue");
      else if (classList.contains("theme-green")) setCurrentTheme("green");
      else if (classList.contains("theme-red")) setCurrentTheme("red");
      else if (classList.contains("theme-orange")) setCurrentTheme("orange");
      else if (classList.contains("theme-yellow")) setCurrentTheme("yellow");
      else if (classList.contains("theme-gray")) setCurrentTheme("gray");
      else setCurrentTheme("green"); // Default
    };

    checkTheme();

    // Watch For Theme Changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const getGradient = () => {
    switch (currentTheme) {
      case "blue":
        // Blue Theme: Blue → Aqua Green → Blue
        return "linear-gradient(to right, var(--primary), #00EFAE, var(--primary))";
      case "green":
        // Green Theme: Aqua Green → Vivid Blue → Aqua Green
        return "linear-gradient(to right, var(--primary), #4079ff, var(--primary))";
      default:
        // All Other Themes: Theme Color → Aqua Green → Theme Color
        return "linear-gradient(to right, var(--primary), #00EFAE, var(--primary))";
    }
  };

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r",
        className
      )}
      style={{
        backgroundImage: getGradient(),
      }}
    >
      {children}
    </span>
  );
}
