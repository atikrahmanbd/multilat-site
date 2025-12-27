"use client";

import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import GradientText from "@/components/ui/gradient-text";
import {
  Server,
  Shield,
  HardDrive,
  Cpu,
  Globe,
  Terminal,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  Gauge,
  Network,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Multi-Arch vCPU",
    description:
      "AMD EPYC, Intel® Xeon, and Ampere® Altra vCPUs With Isolated Resources",
    color: "blue",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD RAID10",
    description:
      "Ultra-Fast NVMe SSD Storage In RAID10 For High Speed, Low Latency, and Redundancy",
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Free DDoS Protection",
    description:
      "Enterprise-Grade DDoS Mitigation Protecting Your VPS From Network Attacks",
    color: "purple",
  },
  {
    icon: Globe,
    title: "IPv4 & IPv6",
    description:
      "Primary IPv4 and IPv6 Addresses With Floating IP and Dual-Stack Support",
    color: "sky",
  },
  {
    icon: Rocket,
    title: "Instant Deployment",
    description:
      "VPS Instances Provisioned Instantly After Verification With No Delays",
    color: "yellow",
  },
  {
    icon: Terminal,
    title: "Full Root Access",
    description:
      "Full Administrative Control With Secure Root-Level SSH Access To Your VPS",
    color: "emerald",
  },
  {
    icon: Server,
    title: "Multiple OS Options",
    description:
      "Choose From Ubuntu, Debian, CentOS, Rocky Linux, and Other OS Options",
    color: "indigo",
  },
  {
    icon: Shield,
    title: "Stateful Firewalls",
    description:
      "Configurable Stateful Firewalls Included To Secure and Control Traffic",
    color: "orange",
  },
  {
    icon: RefreshCw,
    title: "Snapshots & Backups",
    description:
      "On-Demand Snapshots and Automated Backups For Fast Data Recovery",
    color: "pink",
  },
  {
    icon: Network,
    title: "10 Gbit Network",
    description:
      "High-Speed 10 Gbit Redundant Network With Private VLAN Support",
    color: "cyan",
  },
  {
    icon: Gauge,
    title: "Block Storage",
    description:
      "Scalable Block Storage Volumes Expandable Up To 10 TB Per Volume",
    color: "teal",
  },
  {
    icon: LifeBuoy,
    title: "Expert Support",
    description:
      "Experienced Technical Support Team Ready To Assist When Needed",
    color: "red",
  },
];

export function CloudVpsFeatures() {
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
            <GradientText>Powerful VPS Features</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Everything You Need To Run Your Applications And Websites
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
