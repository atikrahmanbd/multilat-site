"use client";
import React from "react";
import {
  SketchButton,
  SimpleButton,
  InvertButton,
  TailwindConnectButton,
  GradientButton,
  UnapologeticButton,
  LitUpBordersButton,
  BorderMagicButton,
  BrutalButton,
  FavouriteButton,
  PrimaryButton,
  OutlineButton,
  ShimmerButton,
  ShimmerDarkButton,
  NextBlueButton,
  NextWhiteButton,
  SpotifyButton,
  BackdropBlurButton,
  PlaylistButton,
  FigmaButton,
  FigmaOutlineButton,
  TopGradientButton,
  HoverBorderGradientButton,
  MovingBorderAnimatedButton,
  type ButtonSize,
  type ButtonShape,
} from "@/components/ui/buttons";
import { BackgroundDot } from "@/components/ui/background-dot";

export function ButtonsShowcase() {
  const sizes: ButtonSize[] = ["sm", "md", "lg", "xl"];
  const shapes: ButtonShape[] = ["rectangle", "rounded", "pill", "square"];

  const buttons: Array<{
    name: string;
    description: string;
    Component: React.ComponentType<{
      size?: ButtonSize;
      shape?: ButtonShape;
      children: React.ReactNode;
    }>;
    label: string;
  }> = [
    {
      name: "Sketch",
      description: "Sketch Button For Your Website",
      Component: SketchButton,
      label: "Sketch",
    },
    {
      name: "Simple",
      description: "Elegant Button For Your Website",
      Component: SimpleButton,
      label: "Simple",
    },
    {
      name: "Invert",
      description: "Simple Button That Inverts On Hover",
      Component: InvertButton,
      label: "Invert",
    },
    {
      name: "Tailwind Connect",
      description: "Button Featured On Tailwindcss Connect Website",
      Component: TailwindConnectButton,
      label: "Connect",
    },
    {
      name: "Gradient",
      description: "Simple Gradient Button With Rounded Corners",
      Component: GradientButton,
      label: "Gradient",
    },
    {
      name: "Unapologetic",
      description: "Unapologetic Button With Perfect Corners",
      Component: UnapologeticButton,
      label: "Bold",
    },
    {
      name: "Lit Up Borders",
      description: "Gradient Border Button",
      Component: LitUpBordersButton,
      label: "Lit",
    },
    {
      name: "Border Magic",
      description: "Animated Border Button",
      Component: BorderMagicButton,
      label: "Magic",
    },
    {
      name: "Brutal",
      description: "Brutal Button For Your Website",
      Component: BrutalButton,
      label: "Brutal",
    },
    {
      name: "Favourite",
      description: "Favourite Button For Your Website",
      Component: FavouriteButton,
      label: "Fav",
    },
    {
      name: "Primary",
      description: "Primary Theme Button",
      Component: PrimaryButton,
      label: "Primary",
    },
    {
      name: "Outline",
      description: "Outline Theme Button",
      Component: OutlineButton,
      label: "Outline",
    },
    {
      name: "Shimmer",
      description: "Shimmer Button For Your Website",
      Component: ShimmerButton,
      label: "Shimmer",
    },
    {
      name: "Shimmer Dark",
      description: "Dark Shimmer Button (Aceternity Style)",
      Component: ShimmerDarkButton,
      label: "Shimmer",
    },
    {
      name: "Next Blue",
      description: "Next.js Blue Button For Your Website",
      Component: NextBlueButton,
      label: "Next",
    },
    {
      name: "Next White",
      description: "Next.js White Button For Your Website",
      Component: NextWhiteButton,
      label: "Next",
    },
    {
      name: "Spotify",
      description: "Spotify Button For Your Website",
      Component: SpotifyButton,
      label: "Spotify",
    },
    {
      name: "Backdrop Blur",
      description: "Backdrop Blur Button",
      Component: BackdropBlurButton,
      label: "Blur",
    },
    {
      name: "Playlist",
      description: "Playlist Button For Your Website",
      Component: PlaylistButton,
      label: "Play",
    },
    {
      name: "Figma",
      description: "Figma Button For Your Website",
      Component: FigmaButton,
      label: "Figma",
    },
    {
      name: "Figma Outline",
      description: "Figma Outline Button For Your Website",
      Component: FigmaOutlineButton,
      label: "Figma",
    },
    {
      name: "Top Gradient",
      description: "Top Gradient Button",
      Component: TopGradientButton,
      label: "Top",
    },
    {
      name: "Hover Gradient",
      description: "Animated Gradient Border On Hover",
      Component: HoverBorderGradientButton,
      label: "Hover",
    },
    {
      name: "Moving Border",
      description: "Continuously Animated Border",
      Component: MovingBorderAnimatedButton,
      label: "Move",
    },
  ];

  return (
    <div className="py-20 px-4 w-full bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
          Button Styles Showcase
        </h2>
        <p className="mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
          All 24 Button Styles With All Sizes And Shapes
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {buttons.map((button, idx) => {
            const { Component, name, description, label } = button;
            return (
              <div
                key={idx}
                className="relative border border-border rounded-lg bg-card overflow-hidden"
              >
                {/* Background Dots */}
                <BackgroundDot fadeDirection="center" />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col">
                  {/* Header */}
                  <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  {/* Shape Variations */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide text-center">
                      Shapes
                    </h4>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {shapes.map((shape) => (
                        <div
                          key={shape}
                          className="flex flex-col items-center gap-2"
                        >
                          <Component shape={shape}>{label}</Component>
                          <span className="text-xs text-muted-foreground capitalize">
                            {shape}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Size Variations */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide text-center">
                      Sizes
                    </h4>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {sizes.map((size) => (
                        <div
                          key={size}
                          className="flex flex-col items-center gap-2"
                        >
                          <Component size={size}>{label}</Component>
                          <span className="text-xs text-muted-foreground uppercase">
                            {size}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
