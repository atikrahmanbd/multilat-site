"use client";

import { motion } from "motion/react";
import {
  Check,
  X,
  Crown,
  Zap,
  Globe,
  HardDrive,
  ArrowLeftRight,
  Mail,
  Lock,
  LayoutDashboard,
  Database,
  Headphones,
  Gauge,
  Activity,
  ShieldCheck,
  MousePointerClick,
  Cloud,
  Rocket,
} from "lucide-react";
import GradientText from "@/components/ui/gradient-text";
import {
  BorderMagicButton,
  HoverBorderGradientButton,
} from "@/components/ui/buttons";
import ElectricBorder from "@/components/ui/react-bits/ElectricBorder";
import { useState } from "react";

// Feature Can Be String (Included) or Object With excluded: true
type PlanFeature = string | { name: string; excluded: true };

export const plans: {
  name: string;
  monthlyPrice: number;
  description: string;
  features: PlanFeature[];
  popular: boolean;
}[] = [
  {
    name: "Starter",
    monthlyPrice: 250,
    description: "Perfect For Personal Websites and Blogs",
    features: [
      "5 GB NVMe Storage",
      "cPanel Control Panel",
      "2 Websites (1 Main + 1 Addon)",
      "Unlimited Email Accounts",
      "Unlimited Bandwidth",
      "2 GB RAM & 2 vCPU",
      "Free SSL Certificate",
      "PHP 4.4 To 8.X Support",
      "Node.js & Python Support",
      "LiteSpeed Cache",
      "Daily Backups",
      { name: "SSH Access", excluded: true },
      "24/7 Email Support",
    ],
    popular: false,
  },
  {
    name: "Business",
    monthlyPrice: 450,
    description: "Ideal For Growing Businesses",
    features: [
      "10 GB NVMe Storage",
      "cPanel Control Panel",
      "Unlimited Websites",
      "Unlimited Email Accounts",
      "Unlimited Bandwidth",
      "2 GB RAM & 2 vCPU",
      "Free SSL Certificate",
      "PHP 4.4 To 8.X Support",
      "Node.js & Python Support",
      "LiteSpeed Cache",
      "Daily Backups",
      "SSH Access",
      "24/7 Email Support",
    ],
    popular: true,
  },
  {
    name: "Professional",
    monthlyPrice: 850,
    description: "For High-Traffic Sites and Applications",
    features: [
      "25 GB NVMe Storage",
      "cPanel Control Panel",
      "Unlimited Websites",
      "Unlimited Email Accounts",
      "Unlimited Bandwidth",
      "2 GB RAM & 2 vCPU",
      "Free SSL Certificate",
      "PHP 4.4 To 8.X Support",
      "Node.js & Python Support",
      "LiteSpeed Cache",
      "Daily Backups",
      "SSH Access",
      "24/7 Email Support",
    ],
    popular: false,
  },
  {
    name: "Corporate",
    monthlyPrice: 1500,
    description: "Enterprise-Grade For Large Organizations",
    features: [
      "50 GB NVMe Storage",
      "Unlimited Websites",
      "4 GB RAM & 2 vCPU",
      "Free Domain (1 Year)",
      "Premium Cloud Servers",
      "PCI Compliance",
      "PHP 4.4 To 8.X Support",
      "Node.js & Python Support",
      "Dedicated Support Manager",
      "Priority Support",
    ],
    popular: false,
  },
];

export function HostingPlans() {
  const [selectedYears, setSelectedYears] = useState<1 | 2 | 3>(1);

  const yearOptions = [
    { years: 1, label: "One Year", discount: 0 },
    { years: 2, label: "Two Years", discount: 5 },
    { years: 3, label: "Three Years", discount: 15 },
  ] as const;

  const calculatePrice = (monthlyPrice: number) => {
    const selectedOption = yearOptions.find(
      (opt) => opt.years === selectedYears
    );
    const discount = selectedOption?.discount || 0;
    const totalMonths = selectedYears * 12;
    const totalPrice = monthlyPrice * totalMonths;
    const discountedPrice = totalPrice * (1 - discount / 100);
    const monthlyDiscounted = discountedPrice / totalMonths;
    const savedAmount = totalPrice - discountedPrice;

    return {
      originalMonthly: monthlyPrice,
      discountedMonthly: Math.round(monthlyDiscounted),
      totalPrice: Math.round(discountedPrice),
      savedAmount: Math.round(savedAmount),
      hasDiscount: discount > 0,
    };
  };

  return (
    <section id="plans" className="relative py-12 sm:py-16 md:py-20 md:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Choose Your Plan</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Flexible Hosting Plans Designed To Grow With Your Business
          </p>

          {/* Year Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {yearOptions.map((option) => (
              <button
                key={option.years}
                onClick={() => setSelectedYears(option.years)}
                className={`px-4 py-3 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                  selectedYears === option.years
                    ? "bg-primary text-black shadow-lg"
                    : "bg-card border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                <span>{option.label}</span>
                {/* {option.discount > 0 && ( */}
                <span
                  className={`px-2 py-0.5 rounded-full text-sm font-bold ${
                    selectedYears === option.years
                      ? "bg-black/25 text-white dark:bg-primary-foreground/20 dark:text-primary-foreground"
                      : "bg-primary/50 text-foreground dark:bg-primary/15 dark:text-primary"
                  }`}
                >
                  {option.discount}% Off
                </span>
                {/* )} */}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans
            .filter((plan) => plan.name !== "Corporate")
            .map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full"
              >
                {plan.popular ? (
                  <>
                    {/* Mobile Version - Dotted Border */}
                    <div className="lg:hidden p-8 flex flex-col h-full rounded-2xl bg-primary/5 border-2 border-primary hover:border-dashed border-dotted transition-colors">
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <div className="bg-primary/20 group-hover:bg-primary/30 text-primary px-3 py-1.5 rounded-sm text-xs font-semibold shadow-lg">
                            Popular
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {plan.description}
                        </p>
                        {(() => {
                          const pricing = calculatePrice(plan.monthlyPrice);
                          return (
                            <div>
                              <div className="flex items-baseline gap-2">
                                {pricing.hasDiscount && (
                                  <span className="text-xl font-semibold text-muted-foreground line-through">
                                    ৳{pricing.originalMonthly}
                                  </span>
                                )}
                                <span className="text-3xl font-bold text-primary">
                                  ৳{pricing.discountedMonthly}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  /Month
                                </span>
                              </div>
                              <p className="text-sm text-primary mt-2">
                                Total: ৳{pricing.totalPrice.toLocaleString()}{" "}
                                For {selectedYears}{" "}
                                {selectedYears === 1 ? "Year" : "Years"}
                              </p>
                              {pricing.hasDiscount && (
                                <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                                  (৳{pricing.savedAmount.toLocaleString()}{" "}
                                  Saved)
                                </p>
                              )}
                            </div>
                          );
                        })()}
                      </div>

                      <div className="flex-1 flex flex-col">
                        <ul className="space-y-3 mb-8 flex-1">
                          {plan.features.map((feature, i) => {
                            const isExcluded =
                              typeof feature === "object" && feature.excluded;
                            const featureName =
                              typeof feature === "string"
                                ? feature
                                : feature.name;
                            return (
                              <li key={i} className="flex items-start gap-3">
                                {isExcluded ? (
                                  <X className="h-5 w-5 text-red-500/50 shrink-0 mt-0.5" />
                                ) : (
                                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                )}
                                <span
                                  className={`text-sm ${
                                    isExcluded ? "text-muted-foreground" : ""
                                  }`}
                                >
                                  {featureName}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <a href="/order" className="block w-full cursor-pointer">
                        <BorderMagicButton
                          className="w-full cursor-pointer"
                          size="lg"
                          shape="pill"
                        >
                          Get Started
                        </BorderMagicButton>
                      </a>
                    </div>

                    {/* Desktop Version - ElectricBorder */}
                    <div className="hidden lg:block h-full">
                      <ElectricBorder
                        color="#00EFAE"
                        speed={0.8}
                        chaos={0.3}
                        thickness={4}
                        style={{
                          borderRadius: 16,
                          overflow: "visible",
                          position: "relative",
                          zIndex: 20,
                        }}
                        className="h-full"
                      >
                        <div className="p-8 flex flex-col h-full rounded-2xl backdrop-blur-sm overflow-visible bg-primary/5 shadow-xl border border-white/5">
                          <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-2xl font-bold">
                                {plan.name}
                              </h3>
                              <div className="bg-primary/20 group-hover:bg-primary/30 text-primary px-3 py-1.5 rounded-sm text-xs font-semibold shadow-lg">
                                Popular
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              {plan.description}
                            </p>
                            {(() => {
                              const pricing = calculatePrice(plan.monthlyPrice);
                              return (
                                <div>
                                  <div className="flex items-baseline gap-2">
                                    {pricing.hasDiscount && (
                                      <span className="text-xl font-semibold text-muted-foreground line-through">
                                        ৳{pricing.originalMonthly}
                                      </span>
                                    )}
                                    <span className="text-3xl font-bold text-primary">
                                      ৳{pricing.discountedMonthly}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                      /Month
                                    </span>
                                  </div>
                                  <p className="text-sm font-semibold dark:text-primary mt-2">
                                    Total: ৳
                                    {pricing.totalPrice.toLocaleString()} For{" "}
                                    {selectedYears}{" "}
                                    {selectedYears === 1 ? "Year" : "Years"}
                                  </p>
                                  {pricing.hasDiscount && (
                                    <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                                      (৳{pricing.savedAmount.toLocaleString()}{" "}
                                      Saved)
                                    </p>
                                  )}
                                </div>
                              );
                            })()}
                          </div>

                          <div className="flex-1 flex flex-col">
                            <ul className="space-y-3 mb-8 flex-1">
                              {plan.features.map((feature, i) => {
                                const isExcluded =
                                  typeof feature === "object" &&
                                  feature.excluded;
                                const featureName =
                                  typeof feature === "string"
                                    ? feature
                                    : feature.name;
                                return (
                                  <li
                                    key={i}
                                    className="flex items-start gap-3"
                                  >
                                    {isExcluded ? (
                                      <X className="h-5 w-5 text-red-500/50 shrink-0 mt-0.5" />
                                    ) : (
                                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    )}
                                    <span
                                      className={`text-sm ${
                                        isExcluded
                                          ? "text-muted-foreground"
                                          : ""
                                      }`}
                                    >
                                      {featureName}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          <a
                            href="/order"
                            className="block w-full cursor-pointer"
                          >
                            <BorderMagicButton
                              className="w-full cursor-pointer"
                              size="lg"
                              shape="pill"
                            >
                              Get Started
                            </BorderMagicButton>
                          </a>
                        </div>
                      </ElectricBorder>
                    </div>
                  </>
                ) : (
                  <div
                    className="p-8 flex flex-col h-full rounded-2xl bg-card/80 border-2 hover:border-dashed border-dotted transition-colors"
                    style={{
                      borderColor:
                        plan.name === "Starter" ? "#007FFF" : "#e7000b",
                    }}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {plan.description}
                      </p>
                      {(() => {
                        const pricing = calculatePrice(plan.monthlyPrice);
                        return (
                          <div>
                            <div className="flex items-baseline gap-2">
                              {pricing.hasDiscount && (
                                <span className="text-xl font-semibold text-muted-foreground line-through">
                                  ৳{pricing.originalMonthly}
                                </span>
                              )}
                              <span className="text-3xl font-bold text-primary">
                                ৳{pricing.discountedMonthly}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                /Month
                              </span>
                            </div>
                            <p className="text-sm font-semibold dark:text-primary mt-2">
                              Total: ৳{pricing.totalPrice.toLocaleString()} For{" "}
                              {selectedYears}{" "}
                              {selectedYears === 1 ? "Year" : "Years"}
                            </p>
                            {pricing.hasDiscount && (
                              <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                                (৳{pricing.savedAmount.toLocaleString()} Saved)
                              </p>
                            )}
                          </div>
                        );
                      })()}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, i) => {
                          const isExcluded =
                            typeof feature === "object" && feature.excluded;
                          const featureName =
                            typeof feature === "string"
                              ? feature
                              : feature.name;
                          return (
                            <li key={i} className="flex items-start gap-3">
                              {isExcluded ? (
                                <X className="h-5 w-5 text-red-500/50 shrink-0 mt-0.5" />
                              ) : (
                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              )}
                              <span
                                className={`text-sm ${
                                  isExcluded ? "text-muted-foreground" : ""
                                }`}
                              >
                                {featureName}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <a href="/order" className="block w-full cursor-pointer">
                      <HoverBorderGradientButton
                        className="w-full cursor-pointer"
                        size="lg"
                        shape="pill"
                      >
                        Get Started
                      </HoverBorderGradientButton>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
        </div>

        {/* Full-Width Corporate Plan Section */}
        {(() => {
          const corporatePlan = plans.find((p) => p.name === "Corporate");
          if (!corporatePlan) return null;

          const pricing = calculatePrice(corporatePlan.monthlyPrice);

          const featureCards = [
            { icon: HardDrive, value: "50 GB", label: "NVMe SSD" },
            { icon: LayoutDashboard, value: "cPanel", label: "Control" },
            { icon: Headphones, value: "Priority", label: "Support" },
            { icon: Globe, value: "Unlimited", label: "Websites" },
            { icon: Mail, value: "Unlimited", label: "Emails" },
            { icon: ArrowLeftRight, value: "Unlimited", label: "Bandwidth" },
            { icon: Lock, value: "Free", label: "SSL" },
            { icon: Database, value: "Daily", label: "Backups" },
            { icon: Activity, value: "99.99%", label: "Uptime" },
            { icon: Gauge, value: "4 GB", label: "LVE RAM" },
            { icon: ShieldCheck, value: "PCI", label: "Compliant" },
            { icon: MousePointerClick, value: "1-Click", label: "Install" },
          ];

          const whatsIncluded = [
            "Free SSL Certificate",
            "Free Domain For First Year",
            "PHP 4.4 To 8.X Support",
            "Node.js & Python Support",
            "On Demand Dedicated IP",
            "Firewall & Malware Protection",
            "Dedicated Support Manager",
          ];

          const performanceFeatures = [
            { icon: HardDrive, label: "50 GB NVMe Storage" },
            { icon: Rocket, label: "LiteSpeed Web Server" },
            { icon: Cloud, label: "Premium Cloud Servers" },
            { icon: Zap, label: "5120 IOPS & 250 MB/S IO" },
            { icon: Gauge, label: "4 GB RAM & 2 vCPU (LVE)" },
            { icon: Activity, label: "Speed Without Overcrowding" },
          ];

          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 sm:mt-20 max-w-7xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/10 via-background to-amber-500/5">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(245,158,11,.05)_30%,rgba(245,158,11,.05)_50%,transparent_50%,transparent_80%,rgba(245,158,11,.05)_80%,rgba(245,158,11,.05)_100%)] bg-[length:24px_24px]" />

                <div className="relative p-6 sm:p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b-2 border-dotted border-amber-500/50">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-amber-500/20 shrink-0">
                        <Crown className="size-5 sm:size-10 text-amber-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400">
                            Corporate Plan
                          </h3>
                          <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-600 dark:text-amber-400">
                            Enterprise
                          </span>
                        </div>
                        {/* Description - Hidden on mobile, shown on sm+ */}
                        <p className="hidden sm:block text-base text-muted-foreground mt-1">
                          {corporatePlan.description}
                        </p>
                      </div>
                    </div>
                    {/* Description - Shown only on mobile, full width */}
                    <p className="sm:hidden text-sm text-muted-foreground -mt-2">
                      {corporatePlan.description}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400">
                        <Zap className="size-3 sm:size-4" />
                        Priority Resources
                      </span>
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400">
                        <Headphones className="size-3 sm:size-4" />
                        Dedicated Manager
                      </span>
                    </div>
                  </div>

                  {/* Main Content Grid - Features Left, Cards Right */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    {/* Left Side - Feature Cards Grid (3 columns) */}
                    <div className="lg:col-span-3 grid grid-cols-3 gap-3">
                      {featureCards.map((feature, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl border border-border bg-card/40 hover:border-amber-500/50 transition-colors"
                        >
                          <feature.icon className="size-6 sm:size-7 text-amber-500 mb-2" />
                          <p className="text-base sm:text-xl font-bold text-amber-600 dark:text-amber-400">
                            {feature.value}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {feature.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Right Side - Two Stacked Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                      {/* What's Included Card */}
                      <div className="flex-1 rounded-xl p-5 sm:p-6 bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                          What&apos;s Included
                        </h4>
                        <ul className="space-y-3">
                          {whatsIncluded.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <Check className="size-5 text-white shrink-0" />
                              <span className="text-sm sm:text-base text-white/90">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Performance Features Card */}
                      <div className="flex-1 rounded-xl p-5 sm:p-6 bg-gradient-to-br from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                          Performance Features
                        </h4>
                        <ul className="space-y-3">
                          {performanceFeatures.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <item.icon className="size-5 text-white/80 shrink-0" />
                              <span className="text-sm sm:text-base text-white/90">
                                {item.label}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Pricing Section */}
                  <div className="mt-8 p-5 sm:p-6 rounded-xl bg-card/40 border border-amber-500/40">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Pricing Details - Left */}
                      <div className="flex flex-col gap-1 text-center sm:text-left">
                        <div className="flex items-baseline justify-center sm:justify-start gap-2">
                          {pricing.hasDiscount && (
                            <span className="text-lg font-semibold text-muted-foreground line-through">
                              ৳{pricing.originalMonthly}
                            </span>
                          )}
                          <span className="text-3xl sm:text-4xl font-bold text-primary">
                            ৳{pricing.discountedMonthly}
                          </span>
                          <span className="text-muted-foreground">/Month</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                          <p className="text-sm font-semibold dark:text-primary">
                            Total: ৳{pricing.totalPrice.toLocaleString()} For{" "}
                            {selectedYears}{" "}
                            {selectedYears === 1 ? "Year" : "Years"}
                          </p>
                          {pricing.hasDiscount && (
                            <p className="text-sm text-green-600 dark:text-green-500">
                              (৳{pricing.savedAmount.toLocaleString()} Saved)
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Get Started Button - Right */}
                      <a
                        href="/order"
                        className="bg-slate-800 dark:bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 p-px font-semibold leading-6 text-white inline-block rounded-full"
                      >
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(245,158,11,0.6)_0%,rgba(245,158,11,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 px-8 py-3 ring-1 ring-white/10">
                          <span>Get Started</span>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-amber-500/0 via-amber-500/90 to-amber-500/0 transition-opacity duration-500 group-hover:opacity-40" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
}
