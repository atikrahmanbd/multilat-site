"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const useThemeTextColor = () => {
  const [isGreenTheme, setIsGreenTheme] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const classList = document.documentElement.classList;
      // Green theme or no theme class = use black text
      const isGreen =
        !classList.contains("theme-blue") &&
        !classList.contains("theme-red") &&
        !classList.contains("theme-orange") &&
        !classList.contains("theme-yellow") &&
        !classList.contains("theme-gray");
      setIsGreenTheme(isGreen);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isGreenTheme;
};

type Particle = {
  x: number;
  y: number;
  r: number;
  color: string;
};

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const isGreenTheme = useThemeTextColor();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAnimation = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  }, [placeholders.length]);

  const handleVisibilityChange = useCallback(() => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear The Interval When The Tab Is Not Visible
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation(); // Restart The Interval When The Tab Becomes Visible
    }
  }, [startAnimation]);

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [startAnimation, handleVisibilityChange]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<Particle[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    const fontStyle = computedStyles.getPropertyValue("font-style");
    const fontVariant = computedStyles.getPropertyValue("font-variant");
    const fontWeight = computedStyles.getPropertyValue("font-weight");
    const fontFamily = computedStyles.fontFamily;
    const letterSpacing = computedStyles.getPropertyValue("letter-spacing");

    // Build Complete Font String (font-style font-variant font-weight font-size font-family)
    // Always Include Font Weight To Match Input Exactly
    const fontParts = [];
    if (fontStyle && fontStyle !== "normal") fontParts.push(fontStyle);
    if (fontVariant && fontVariant !== "normal") fontParts.push(fontVariant);
    fontParts.push(fontWeight || "400"); // Always Include Weight
    fontParts.push(`${fontSize * 2}px`);
    fontParts.push(fontFamily);

    ctx.font = fontParts.join(" ");
    ctx.fillStyle = "#FFF";
    ctx.textBaseline = "middle";

    // Improve Text Rendering Quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Apply Letter Spacing If Set
    if (letterSpacing && letterSpacing !== "normal") {
      const spacing = parseFloat(letterSpacing);
      if (!isNaN(spacing)) {
        ctx.letterSpacing = `${spacing * 2}px`;
      }
    }

    // X: Use Same Padding As Input (24px = 6 * 4, Scaled By 2 = 48px)
    // Y: Center Vertically (Input Height 56px / 2 = 28px, Scaled By 2 = 56px)
    ctx.fillText(value, 48, 56);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: Array<{ x: number; y: number; color: number[] }> = [];

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  // Reveal Animation - Particles Move Outward Then Converge To Form Text
  const animateReveal = useCallback(() => {
    if (!canvasRef.current || newDataRef.current.length === 0) {
      setAnimating(false);
      return;
    }

    const particles = newDataRef.current.map((p) => {
      const offsetX = (Math.random() - 0.5) * 150;
      const offsetY = (Math.random() - 0.5) * 150;
      return {
        ...p,
        currentX: p.x, // Start At Final Position
        currentY: p.y,
        maxOffsetX: p.x + offsetX, // Move Out To This Point
        maxOffsetY: p.y + offsetY,
        targetX: p.x, // Then Return To Final Position
        targetY: p.y,
      };
    });

    let progress = 0;
    const totalDuration = 40; // Total Frames For Animation
    const expandDuration = 15; // Frames To Expand Outward
    const contractDuration = 25; // Frames To Contract Inward

    const animateFrame = () => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, 800, 800);
      progress += 1;

      particles.forEach((particle) => {
        if (progress <= expandDuration) {
          // Phase 1: Move Outward From Center
          const t = progress / expandDuration;
          const easeOut = 1 - Math.pow(1 - t, 2); // Ease Out Quad
          particle.currentX =
            particle.targetX +
            (particle.maxOffsetX - particle.targetX) * easeOut;
          particle.currentY =
            particle.targetY +
            (particle.maxOffsetY - particle.targetY) * easeOut;
        } else {
          // Phase 2: Contract Inward To Form Text
          const t = (progress - expandDuration) / contractDuration;
          const easeIn = t * t; // Ease In Quad
          particle.currentX =
            particle.maxOffsetX +
            (particle.targetX - particle.maxOffsetX) * easeIn;
          particle.currentY =
            particle.maxOffsetY +
            (particle.targetY - particle.maxOffsetY) * easeIn;
        }

        ctx.beginPath();
        ctx.rect(particle.currentX, particle.currentY, particle.r, particle.r);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      if (progress < totalDuration) {
        animationFrameRef.current = requestAnimationFrame(animateFrame);
      } else {
        setAnimating(false);
        animationFrameRef.current = null;
      }
    };

    animateFrame();
  }, []);

  // Vanish Animation - Particles Scatter From Text
  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const previousValueRef = useRef("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const previousValue = previousValueRef.current;

    // Only Trigger Reveal Animation When Text Is Added (Not Deleted)
    if (newValue.length > previousValue.length && newValue.length > 0) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setAnimating(true);
      setValue(newValue);

      // Wait For Draw To Complete, Then Animate Reveal
      setTimeout(() => {
        animateReveal();
      }, 10);
    } else {
      setValue(newValue);
    }

    previousValueRef.current = newValue;

    if (onChange) {
      onChange(e);
    }
  };

  // Cleanup Animation On Unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <form
      className={cn(
        "w-full relative max-w-xl mx-auto rounded-full transition duration-200 p-2.5",
        "bg-white/30 dark:bg-black/20 backdrop-blur-lg",
        "border border-border shadow-2xl",
        value && "bg-white/30 dark:bg-black/40"
      )}
      onSubmit={handleSubmit}
    >
      <div className="relative h-14 rounded-full bg-white dark:bg-black backdrop-blur-sm overflow-hidden border border-primary/60 dark:border-primary/30">
        <canvas
          className={cn(
            "absolute pointer-events-none text-base transform scale-50 top-0 left-0 origin-top-left filter invert dark:invert-0 pr-20 transition-opacity duration-200",
            animating ? "opacity-100" : "opacity-0"
          )}
          ref={canvasRef}
        />
        <input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          value={value}
          type="text"
          className={cn(
            "w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-6 pr-6 transition-opacity duration-200 lowercase",
            animating && "text-transparent dark:text-transparent"
          )}
        />

        <button
          type="submit"
          onClick={(e) => {
            if (!value) {
              e.preventDefault();
            }
          }}
          className={cn(
            "absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 rounded-full flex items-center justify-center gap-1.5 transition-all px-3",
            value
              ? "bg-primary hover:bg-primary/90 active:scale-95 cursor-pointer"
              : "bg-muted-foreground/80 dark:bg-muted/50 border border-border cursor-default text-white",
            value && (isGreenTheme ? "text-black" : "text-white")
          )}
        >
          <Search className="h-4 w-4 flex-shrink-0" />
          <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">
            Search Domain
          </span>
        </button>

        <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
          <AnimatePresence mode="wait">
            {!value && (
              <motion.p
                initial={{
                  y: 5,
                  opacity: 0,
                }}
                key={`current-placeholder-${currentPlaceholder}`}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -15,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                }}
                className="text-sm sm:text-base font-normal text-neutral-500 pl-6 text-left w-[calc(100%-2rem)] truncate"
              >
                {placeholders[currentPlaceholder]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}
