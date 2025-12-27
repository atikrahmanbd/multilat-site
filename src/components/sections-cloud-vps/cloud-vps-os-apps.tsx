"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GradientText from "@/components/ui/gradient-text";

interface LogoItem {
  name: string;
  logo: string;
  version?: string;
}

const osImages: LogoItem[] = [
  { name: "Ubuntu", logo: "/vps-images/os/ubuntu.svg", version: "24.04 LTS" },
  { name: "Debian", logo: "/vps-images/os/debian.svg", version: "13" },
  { name: "CentOS", logo: "/vps-images/os/centos.svg", version: "Stream 10" },
  { name: "Fedora", logo: "/vps-images/os/fedora.svg", version: "43" },
  { name: "Rocky Linux", logo: "/vps-images/os/rocky-liux.svg", version: "10" },
  { name: "AlmaLinux", logo: "/vps-images/os/alma-linux.svg", version: "10" },
  { name: "openSUSE", logo: "/vps-images/os/openSUSE.svg", version: "16" },
  {
    name: "Arch Linux",
    logo: "/vps-images/os/arch-linux.svg",
    version: "Latest",
  },
];

const apps: LogoItem[] = [
  { name: "Docker CE", logo: "/vps-images/apps/docker.svg", version: "Latest" },
  { name: "WordPress", logo: "/vps-images/apps/wordpress.svg", version: "6.7" },
  {
    name: "Nextcloud",
    logo: "/vps-images/apps/nextcloud.svg",
    version: "30.0",
  },
  { name: "GitLab CE", logo: "/vps-images/apps/gitlab.svg", version: "17.8" },
  { name: "LAMP Stack", logo: "/vps-images/apps/lamp.svg", version: "Latest" },
  { name: "Coolify", logo: "/vps-images/apps/coolify.svg", version: "Latest" },
  {
    name: "Jitsi Meet",
    logo: "/vps-images/apps/jitsi-meet.svg",
    version: "Latest",
  },
  {
    name: "WireGuard",
    logo: "/vps-images/apps/wireguard.svg",
    version: "Latest",
  },
  {
    name: "Prometheus",
    logo: "/vps-images/apps/prometheus.svg",
    version: "Latest",
  },
  {
    name: "PhotoPrism",
    logo: "/vps-images/apps/photoprism.svg",
    version: "Latest",
  },
  { name: "Owncast", logo: "/vps-images/apps/owncast.svg", version: "Latest" },
  {
    name: "RustDesk",
    logo: "/vps-images/apps/rustdesk.svg",
    version: "Latest",
  },
];

const InfiniteLogoScroll = ({
  items,
  direction = "left",
  speed = "slow",
  className,
}: {
  items: LogoItem[];
  direction?: "left" | "right";
  speed?: "fast" | "medium" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Set direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // Set speed
    const speeds = {
      fast: "20s",
      medium: "30s",
      normal: "40s",
      slow: "60s",
    };
    containerRef.current.style.setProperty("--animation-duration", speeds[speed]);

    // Duplicate items for seamless scroll
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    // Start animation
    scrollerRef.current.classList.add("animate-scroll");
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className="flex w-max min-w-full shrink-0 gap-4 py-4 hover:[animation-play-state:paused]"
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="group relative flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 min-w-[140px] transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
              <Image
                src={item.logo}
                alt={item.name}
                width={48}
                height={48}
                className="w-auto h-auto max-h-12 max-w-12 object-contain"
              />
            </div>
            <p className="text-sm font-medium text-foreground text-center">
              {item.name}
            </p>
            {item.version && (
              <p className="text-xs text-muted-foreground mt-1">
                {item.version}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export function CloudVpsOsApps() {
  const [activeTab, setActiveTab] = useState<"os" | "apps">("os");

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>Pre-Installed Images and Apps</GradientText>
          </h2>
          <p className="px-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Choose From Popular Operating Systems and One-Click Apps Ready To
            Deploy
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setActiveTab("os")}
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all",
                activeTab === "os"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              OS Images
            </button>
            <button
              onClick={() => setActiveTab("apps")}
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition-all",
                activeTab === "apps"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Apps
            </button>
          </div>
        </div>

        {/* Logo Scrollers */}
        <div className="relative">
          {activeTab === "os" && (
            <InfiniteLogoScroll
              items={osImages}
              direction="left"
              speed="slow"
            />
          )}
          {activeTab === "apps" && (
            <InfiniteLogoScroll items={apps} direction="right" speed="slow" />
          )}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All Images Come Pre-Configured and Ready To Use Within Minutes
        </p>
      </div>
    </section>
  );
}
