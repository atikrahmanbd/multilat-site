"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonShape = "rectangle" | "rounded" | "pill" | "square" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  shape?: ButtonShape;
}

// Consistent Size Mappings For All Buttons
const buttonSizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-base",
  xl: "px-8 py-3 text-lg",
};

const buttonSizesRounded = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2 text-sm",
  lg: "px-8 py-2.5 text-base",
  xl: "px-10 py-3 text-lg",
};

const buttonSizesIcon = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
  xl: "h-14",
};

// Shape Mappings
const buttonShapes = {
  rectangle: "rounded-md",
  rounded: "rounded-lg",
  pill: "rounded-full",
  square: "rounded-none",
  icon: "rounded-full",
};

// Helper Function To Get Size Classes Based On Shape
const getSizeClasses = (size: ButtonSize, shape: ButtonShape) => {
  if (shape === "pill" || shape === "icon") {
    return shape === "icon" ? buttonSizesIcon[size] : buttonSizesRounded[size];
  }
  return buttonSizes[size];
};

// 1. Sketch Button
export const SketchButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center border border-black bg-white text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:border-white dark:bg-black dark:text-white dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 2. Simple Button
export const SimpleButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center border border-border bg-secondary text-secondary-foreground hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 3. Invert Button
export const InvertButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center bg-primary text-primary-foreground font-bold transition duration-200 hover:bg-background hover:text-primary border-2 border-transparent hover:border-primary cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 4. Tailwind Connect Button
export const TailwindConnectButton = ({
  children,
  className,
  size = "md",
  shape = "pill",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-slate-800 dark:bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 p-px font-semibold leading-6 text-white inline-block",
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      <span
        className={cn("absolute inset-0 overflow-hidden", buttonShapes[shape])}
      >
        <span
          className={cn(
            "absolute inset-0 bg-[image:radial-gradient(75%_100%_at_50%_0%,hsl(var(--primary)/0.6)_0%,hsl(var(--primary)/0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            buttonShapes[shape]
          )}
        />
      </span>
      <div
        className={cn(
          "relative flex space-x-2 items-center justify-center z-10 bg-zinc-950 ring-1 ring-white/10",
          getSizeClasses(size, shape),
          buttonShapes[shape]
        )}
      >
        {children}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

// 5. Gradient Button
export const GradientButton = ({
  children,
  className,
  size = "md",
  shape = "pill",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-primary-foreground font-semibold transition-all hover:shadow-lg cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 6. Unapologetic Button
export const UnapologeticButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "border border-black bg-transparent text-black dark:border-white dark:text-white relative group transition duration-200 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute -bottom-2 -right-2 bg-primary h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200",
          buttonShapes[shape]
        )}
      />
      <span className="relative">{children}</span>
    </button>
  );
};

// 7. Lit Up Borders Button
export const LitUpBordersButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center p-[3px] relative cursor-pointer",
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500",
          buttonShapes[shape]
        )}
      />
      <div
        className={cn(
          "bg-black relative group transition duration-200 text-white hover:bg-transparent",
          getSizeClasses(size, shape),
          buttonShapes[shape]
        )}
      >
        {children}
      </div>
    </button>
  );
};

// 8. Border Magic Button
export const BorderMagicButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-background cursor-pointer",
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 font-medium text-white backdrop-blur-3xl",
          buttonSizes[size],
          buttonShapes[shape]
        )}
      >
        {children}
      </span>
    </button>
  );
};

// 9. Brutal Button
export const BrutalButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "border-2 border-black dark:border-white uppercase bg-white text-black dark:bg-black dark:text-white transition duration-200 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 10. Favourite Button
export const FavouriteButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-black/80 dark:hover:bg-white/80 hover:shadow-lg transition duration-200 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 11. Primary Button
export const PrimaryButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold transition-colors hover:bg-primary/90 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 12. Outline Button
export const OutlineButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "border-2 border-primary text-primary font-semibold transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 13. Shimmer Button
export const ShimmerButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center animate-shimmer border border-border bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--muted)),55%,hsl(var(--background)))] bg-[length:200%_100%] font-semibold text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 14. Shimmer Dark Button (Aceternity Style)
export const ShimmerDarkButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 15. Next.js Blue Button
export const NextBlueButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white font-light transition duration-200 ease-linear cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 16. Next.js White Button
export const NextWhiteButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] bg-white text-[#696969] font-light transition duration-200 ease-linear cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 17. Spotify Button
export const SpotifyButton = ({
  children,
  className,
  size = "md",
  shape = "pill",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 18. Backdrop Blur Button
export const BackdropBlurButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "text-foreground backdrop-blur-sm border border-border hover:shadow-[0px_0px_4px_4px_hsl(var(--primary)/0.1)] bg-background/20 transition duration-200 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 19. Playlist Button
export const PlaylistButton = ({
  children,
  className,
  size = "md",
  shape = "pill",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center shadow-[inset_0_0_0_2px_#616467] text-black dark:text-neutral-200 tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 20. Figma Button
export const FigmaButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-bold transform hover:-translate-y-1 transition duration-400 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 21. Figma Outline Button
export const FigmaOutlineButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center shadow-[0_0_0_3px_#000000_inset] bg-transparent border border-black dark:border-white dark:text-white text-black font-bold transform hover:-translate-y-1 transition duration-400 cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 22. Top Gradient Button
export const TopGradientButton = ({
  children,
  className,
  size = "md",
  shape = "pill",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center relative bg-secondary text-secondary-foreground hover:shadow-2xl hover:shadow-primary/10 transition duration-200 border border-border cursor-pointer",
        getSizeClasses(size, shape),
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="relative z-20">{children}</span>
    </button>
  );
};

// 23. Hover Border Gradient Button
export const HoverBorderGradientButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  const borderRadiusMap = {
    rectangle: "0.375rem",
    rounded: "0.5rem",
    pill: "9999px",
    square: "0",
    icon: "9999px",
  };

  // Extract width classes from className
  const hasFlexClass = className?.includes("flex-1");

  return (
    <HoverBorderGradient
      as="button"
      containerClassName={cn(
        "cursor-pointer w-full",
        hasFlexClass && "flex-1"
      )}
      borderRadius={borderRadiusMap[shape]}
      className={cn(
        "dark:bg-black bg-white text-black dark:text-white inline-flex items-center justify-center w-full",
        getSizeClasses(size, shape),
        className
      )}
      {...props}
    >
      {children}
    </HoverBorderGradient>
  );
};

// 24. Moving Border Button
export const MovingBorderAnimatedButton = ({
  children,
  className,
  size = "md",
  shape = "rectangle",
  ...props
}: ButtonProps) => {
  const borderRadiusMap = {
    rectangle: "0.375rem",
    rounded: "0.5rem",
    pill: "1.75rem",
    square: "0",
    icon: "1.75rem",
  };

  return (
    <MovingBorderButton
      borderRadius={borderRadiusMap[shape]}
      containerClassName="cursor-pointer inline-flex"
      className={cn(
        "bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800",
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </MovingBorderButton>
  );
};
