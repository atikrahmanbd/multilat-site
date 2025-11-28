"use client";

import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Server,
  Shield,
  AppWindow,
  HardDrive,
  Mail,
  Code,
  LifeBuoy,
  Download,
  ShieldCheck,
  Gauge,
  Rocket,
  Rotate3D,
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "cPanel Control Panel",
    description: "Industry-Standard Control Panel For Easy Website Management",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Free SSL Certificates",
    description:
      "Automatic SSL Installation And Renewal For Secure HTTPS Connection",
    color: "purple",
  },
  {
    icon: HardDrive,
    title: "Pure NVMe Storage",
    description:
      "Ultra-Fast NVMe Drives Delivering Maximum Speed And Performance",
    color: "green",
  },
  {
    icon: Download,
    title: "Daily Backups",
    description:
      "Automated Daily Backups With Easy One-Click Restore From cPanel",
    color: "sky",
  },
  {
    icon: Gauge,
    title: "Super Fast",
    description:
      "Lightning-Fast Loading Speeds With LiteSpeed And Advanced Caching",
    color: "yellow",
  },
  {
    icon: Rocket,
    title: "LiteSpeed Cache",
    description:
      "Built-In LiteSpeed Cache Plugin For Exceptional WordPress Performance",
    color: "emerald",
  },
  {
    icon: Mail,
    title: "Clean Mail Server",
    description:
      "Properly Configured Mail Server With High Deliverability Rates",
    color: "indigo",
  },
  {
    icon: ShieldCheck,
    title: "Imunify360",
    description:
      "Advanced Security Suite Protecting Against Malware And Attacks",
    color: "orange",
  },
  {
    icon: AppWindow,
    title: "Softaculous",
    description:
      "One-Click Installation For 400+ Applications Including WordPress",
    color: "pink",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Support For PHP, Python, Node.js, Git, SSH Access, And More",
    color: "cyan",
  },
  {
    icon: Rotate3D,
    title: "Free Migration",
    description:
      "Professional Website Migration Service From Your Current Host To Ours",
    color: "teal",
  },
  {
    icon: LifeBuoy,
    title: "Reliable Support",
    description:
      "24/7 Technical Support Via Email And Live Chat Whenever Needed",
    color: "red",
  },
];

export function HostingFeatures() {
  const colorClasses = {
    blue: {
      bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      text: "text-blue-500",
    },
    purple: {
      bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
      text: "text-purple-500",
    },
    green: {
      bg: "bg-green-500/10 group-hover:bg-green-500/20",
      text: "text-green-500",
    },
    sky: {
      bg: "bg-sky-500/10 group-hover:bg-sky-500/20",
      text: "text-sky-500",
    },
    yellow: {
      bg: "bg-yellow-500/10 group-hover:bg-yellow-500/20",
      text: "text-yellow-500",
    },
    emerald: {
      bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
      text: "text-emerald-500",
    },
    indigo: {
      bg: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
      text: "text-indigo-500",
    },
    orange: {
      bg: "bg-orange-500/10 group-hover:bg-orange-500/20",
      text: "text-orange-500",
    },
    pink: {
      bg: "bg-pink-500/10 group-hover:bg-pink-500/20",
      text: "text-pink-500",
    },
    cyan: {
      bg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
      text: "text-cyan-500",
    },
    teal: {
      bg: "bg-teal-500/10 group-hover:bg-teal-500/20",
      text: "text-teal-500",
    },
    red: {
      bg: "bg-red-500/10 group-hover:bg-red-500/20",
      text: "text-red-500",
    },
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Everything You Need
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            All Hosting Plan Comes With Powerful Features and Tools
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center max-w-7xl mx-auto px-4 md:px-8">
          {features.map((feature, index) => {
            const colors =
              colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <GlassContainer key={index} className="group">
                <GlowingEffect disabled={false} proximity={200} spread={30} />
                <div className="p-3 sm:p-4">
                  <div
                    className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${colors.bg} transition-colors`}
                  >
                    <feature.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mb-1.5 sm:mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </GlassContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
