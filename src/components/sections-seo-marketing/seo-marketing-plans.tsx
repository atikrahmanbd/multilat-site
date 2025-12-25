"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import GradientText from "@/components/ui/gradient-text";
import {
  BorderMagicButton,
  HoverBorderGradientButton,
} from "@/components/ui/buttons";
import ElectricBorder from "@/components/ui/react-bits/ElectricBorder";
import { useState } from "react";

export const plans = [
  {
    name: "Basic",
    monthlyPrice: 15000,
    description: "Perfect For Small Businesses & Local SEO",
    features: [
      "10 Target Keywords",
      "On-Page SEO Optimization",
      "Local SEO Setup",
      "Google My Business",
      "2 Blog Posts/Month",
      "Monthly Reports",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 25000,
    description: "Ideal For Growing Businesses",
    features: [
      "25 Target Keywords",
      "Advanced On-Page SEO",
      "Technical SEO Audit",
      "Link Building Campaign",
      "4 Blog Posts/Month",
      "Social Media Marketing",
      "Email Marketing Setup",
      "Bi-Weekly Reports",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 45000,
    description: "For Large Businesses & E-Commerce",
    features: [
      "50+ Target Keywords",
      "Comprehensive SEO Strategy",
      "Advanced Technical SEO",
      "Aggressive Link Building",
      "8 Blog Posts/Month",
      "Full Social Media Management",
      "Email Marketing Campaigns",
      "Google/Facebook Ads Management",
      "Weekly Reports & Meetings",
      "Dedicated Account Manager",
      "AI Content Generation",
    ],
    popular: false,
  },
];

export function SeoMarketingPlans() {
  const [selectedMonths, setSelectedMonths] = useState<3 | 6 | 12>(3);

  const monthOptions = [
    { months: 3, label: "3 Months", discount: 0 },
    { months: 6, label: "6 Months", discount: 5 },
    { months: 12, label: "12 Months", discount: 15 },
  ] as const;

  const calculatePrice = (monthlyPrice: number) => {
    const selectedOption = monthOptions.find(
      (opt) => opt.months === selectedMonths
    );
    const discount = selectedOption?.discount || 0;
    const totalPrice = monthlyPrice * selectedMonths;
    const discountedPrice = totalPrice * (1 - discount / 100);
    const monthlyDiscounted = discountedPrice / selectedMonths;
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
    <section id="plans" className="relative py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>SEO & Marketing Pricing Plans</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Flexible Monthly Plans With Contract Discounts - All Plans Are
            Renewable
          </p>

          {/* Contract Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {monthOptions.map((option) => (
              <button
                key={option.months}
                onClick={() => setSelectedMonths(option.months)}
                className={`px-4 py-3 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                  selectedMonths === option.months
                    ? "bg-primary text-black shadow-lg"
                    : "bg-card border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                <span>{option.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-sm font-bold ${
                    selectedMonths === option.months
                      ? "bg-black/25 text-white dark:bg-primary-foreground/20 dark:text-primary-foreground"
                      : "bg-primary/50 text-foreground dark:bg-primary/15 dark:text-primary"
                  }`}
                >
                  {option.discount}% Off
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
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
                        <div className="bg-blue-500/30 group-hover:bg-blue-400/30 text-blue-300 px-3 py-1.5 rounded-sm text-xs font-semibold shadow-lg">
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
                                  ৳{pricing.originalMonthly.toLocaleString()}
                                </span>
                              )}
                              <span className="text-3xl font-bold text-primary">
                                ৳{pricing.discountedMonthly.toLocaleString()}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                /Month
                              </span>
                            </div>
                            <p className="text-sm text-primary mt-2">
                              Total: ৳{pricing.totalPrice.toLocaleString()} For{" "}
                              {selectedMonths} Months
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
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a href="/contact" className="w-full">
                        <HoverBorderGradientButton className="w-full justify-center">
                          Get Started
                        </HoverBorderGradientButton>
                      </a>
                    </div>
                  </div>

                  {/* Desktop Version - Electric Border */}
                  <div className="hidden lg:block h-full">
                    <ElectricBorder
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
                    <div className="p-8 flex flex-col h-full rounded-2xl bg-card">
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <div className="bg-blue-500/30 group-hover:bg-blue-400/30 text-blue-300 px-3 py-1.5 rounded-sm text-xs font-semibold shadow-lg">
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
                                    ৳{pricing.originalMonthly.toLocaleString()}
                                  </span>
                                )}
                                <span className="text-3xl font-bold text-primary">
                                  ৳{pricing.discountedMonthly.toLocaleString()}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  /Month
                                </span>
                              </div>
                              <p className="text-sm text-primary mt-2">
                                Total: ৳{pricing.totalPrice.toLocaleString()}{" "}
                                For {selectedMonths} Months
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
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <a href="/contact" className="w-full">
                          <HoverBorderGradientButton className="w-full justify-center">
                            Get Started
                          </HoverBorderGradientButton>
                        </a>
                      </div>
                    </div>
                  </ElectricBorder>
                  </div>
                </>
              ) : (
                <div className="p-8 flex flex-col h-full rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
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
                                ৳{pricing.originalMonthly.toLocaleString()}
                              </span>
                            )}
                            <span className="text-3xl font-bold">
                              ৳{pricing.discountedMonthly.toLocaleString()}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              /Month
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Total: ৳{pricing.totalPrice.toLocaleString()} For{" "}
                            {selectedMonths} Months
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
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="/contact" className="w-full">
                      <BorderMagicButton className="w-full justify-center">
                        Get Started
                      </BorderMagicButton>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
