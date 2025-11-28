"use client";

import { GlassContainer } from "@/components/ui/glass-container";
import {
  Globe,
  Shield,
  Settings,
  Zap,
  Lock,
  RefreshCw,
  Mail,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import GradientText from "../ui/gradient-text";

export function DomainFeatures() {
  const features = [
    {
      icon: Settings,
      title: "DNS Management",
      description:
        "Full Control Over Your DNS Records. Add, Edit, And Remove A, AAAA, CNAME, MX, TXT Records With Ease.",
      bgClass: "bg-blue-500/10",
      hoverBgClass: "group-hover:bg-blue-500/20",
      iconClass: "text-blue-500",
    },
    {
      icon: Globe,
      title: "Name Server Management",
      description:
        "Point Your Domain To Any Name Server. Change NS Records Instantly For Custom Hosting Solutions.",
      bgClass: "bg-purple-500/10",
      hoverBgClass: "group-hover:bg-purple-500/20",
      iconClass: "text-purple-500",
    },
    {
      icon: Shield,
      title: "WHOIS Privacy Protect+",
      description:
        "Protect Your Personal Information From Public WHOIS Database. Free Privacy Protection Included.",
      bgClass: "bg-sky-500/10",
      hoverBgClass: "group-hover:bg-sky-500/20",
      iconClass: "text-sky-500",
    },
    {
      icon: Lock,
      title: "Domain Lock",
      description:
        "Secure Your Domain From Unauthorized Transfers. Enable Domain Lock With One Click.",
      bgClass: "bg-yellow-500/10",
      hoverBgClass: "group-hover:bg-yellow-500/20",
      iconClass: "text-yellow-500",
    },
    {
      icon: ShieldCheck,
      title: "Theft Protection",
      description:
        "Advanced Security Measures To Protect Your Domain From Unauthorized Access And Theft.",
      bgClass: "bg-red-500/10",
      hoverBgClass: "group-hover:bg-red-500/20",
      iconClass: "text-red-500",
    },
    {
      icon: RefreshCw,
      title: "Domain Control Panel",
      description:
        "Get Full Control Over Your Domain Through Our Domain Control Panel. Manage DNS, Transfer, and All Domain Settings.",
      bgClass: "bg-green-500/10",
      hoverBgClass: "group-hover:bg-green-500/20",
      iconClass: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email Forwarding",
      description:
        "Forward Emails From Your Domain To Any Email Address. Create Professional Email Addresses.",
      bgClass: "bg-indigo-500/10",
      hoverBgClass: "group-hover:bg-indigo-500/20",
      iconClass: "text-indigo-500",
    },
    {
      icon: FileText,
      title: "Easy Domain Transfer",
      description:
        "Transfer Your Domains From Other Registrars Easily. Simple Process With Free Extension On Transfer.",
      bgClass: "bg-orange-500/10",
      hoverBgClass: "group-hover:bg-orange-500/20",
      iconClass: "text-orange-500",
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description:
        "Get Your Domain Activated Within Minutes. No Waiting Time For Domain Registration Or Transfer.",
      bgClass: "bg-pink-500/10",
      hoverBgClass: "group-hover:bg-pink-500/20",
      iconClass: "text-pink-500",
    },
  ];

  return (
    <section className="relative w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 sm:pb-24 md:pb-32 lg:pb-40 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>Domain Management Features</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Powerful Tools To Manage Your Domains Effortlessly
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center max-w-7xl mx-auto px-4 md:px-8">
          {features.map((feature, index) => (
            <GlassContainer key={index} className="group">
              <GlowingEffect disabled={false} proximity={200} spread={30} />
              <div className="p-3 sm:p-4">
                <div
                  className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${feature.bgClass} ${feature.hoverBgClass} transition-colors`}
                >
                  <feature.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconClass}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
