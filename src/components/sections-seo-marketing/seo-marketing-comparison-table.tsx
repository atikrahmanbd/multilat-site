"use client";

import {
  PlusIcon,
  Check,
  X,
  Search,
  FileText,
  TrendingUp,
  BarChart3,
  Mail,
  Share2,
  Megaphone,
  Bot,
  HeadphonesIcon,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { plans } from "./seo-marketing-plans";

interface PlanFeature {
  feature: string;
  basic: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

type IconName =
  | "Search"
  | "FileText"
  | "TrendingUp"
  | "Mail"
  | "Share2"
  | "Megaphone"
  | "Bot"
  | "BarChart3"
  | "HeadphonesIcon";

interface FeatureCategory {
  category: string;
  iconName: IconName;
  features: PlanFeature[];
}

const iconMap = {
  Search,
  FileText,
  TrendingUp,
  Mail,
  Share2,
  Megaphone,
  Bot,
  BarChart3,
  HeadphonesIcon,
};

const comparisonData: FeatureCategory[] = [
  {
    category: "SEO Services",
    iconName: "Search",
    features: [
      {
        feature: "Target Keywords",
        basic: "10",
        professional: "25",
        enterprise: "50+",
      },
      {
        feature: "On-Page SEO",
        basic: "Basic",
        professional: "Advanced",
        enterprise: "Comprehensive",
      },
      {
        feature: "Technical SEO Audit",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Link Building",
        basic: false,
        professional: "Monthly Campaign",
        enterprise: "Aggressive Campaign",
      },
      {
        feature: "Local SEO",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Google My Business",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Competitor Analysis",
        basic: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Content Marketing",
    iconName: "FileText",
    features: [
      {
        feature: "Blog Posts Per Month",
        basic: "2",
        professional: "4",
        enterprise: "8",
      },
      {
        feature: "Content Strategy",
        basic: "Basic",
        professional: "Advanced",
        enterprise: "Comprehensive",
      },
      {
        feature: "SEO Content Optimization",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "AI Content Generation",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Video Marketing",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Infographics",
        basic: false,
        professional: false,
        enterprise: "2/Month",
      },
    ],
  },
  {
    category: "Marketing & Advertising",
    iconName: "Megaphone",
    features: [
      {
        feature: "Social Media Marketing",
        basic: false,
        professional: "Basic",
        enterprise: "Full Management",
      },
      {
        feature: "Email Marketing",
        basic: false,
        professional: "Setup",
        enterprise: "Full Campaigns",
      },
      {
        feature: "Google Ads Management",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Facebook/Instagram Ads",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "LinkedIn Advertising",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Ad Creative Design",
        basic: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "AI & Automation",
    iconName: "Bot",
    features: [
      {
        feature: "AI Marketing Automation",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Automated Segmentation",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Predictive Lead Scoring",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Smart Campaign Triggers",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Personalized Workflows",
        basic: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Reporting & Analytics",
    iconName: "BarChart3",
    features: [
      {
        feature: "Performance Reports",
        basic: "Monthly",
        professional: "Bi-Weekly",
        enterprise: "Weekly",
      },
      {
        feature: "Google Analytics Setup",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Custom Dashboards",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        feature: "ROI Tracking",
        basic: "Basic",
        professional: "Advanced",
        enterprise: "Comprehensive",
      },
      {
        feature: "Conversion Tracking",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        feature: "Strategy Meetings",
        basic: false,
        professional: "Monthly",
        enterprise: "Weekly",
      },
    ],
  },
  {
    category: "Support & Communication",
    iconName: "HeadphonesIcon",
    features: [
      {
        feature: "Support Channel",
        basic: "Email",
        professional: "Email & Chat",
        enterprise: "Priority All Channels",
      },
      {
        feature: "Response Time",
        basic: "24-48 Hours",
        professional: "12-24 Hours",
        enterprise: "2-4 Hours",
      },
      {
        feature: "Dedicated Account Manager",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        feature: "Training & Onboarding",
        basic: "Basic",
        professional: "Standard",
        enterprise: "Comprehensive",
      },
      {
        feature: "Monthly Strategy Calls",
        basic: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
];

export function SeoMarketingComparisonTable() {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-600 dark:text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-600 dark:text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm text-foreground">{value}</span>;
  };

  return (
    <section className="relative pb-12 sm:pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Compare All Features Across Our SEO & Marketing Plans
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md border overflow-hidden"
            defaultValue="item-1"
          >
            {comparisonData.map((item, index) => {
              const Icon = iconMap[item.iconName];
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="has-focus-visible:border-ring has-focus-visible:ring-ring/50 outline-none first:rounded-t-md last:rounded-b-md has-focus-visible:z-10 has-focus-visible:ring-[3px]"
                >
                  <AccordionPrimitive.Header className="flex hover:bg-primary/50 hover:text-foreground hover:data-[state=open]:bg-primary/20 data-[state=open]:bg-background bg-[linear-gradient(45deg,transparent_30%,rgba(0,0,0,.15)_30%,rgba(0,0,0,.15)_50%,transparent_50%,transparent_80%,rgba(0,0,0,.15)_80%,rgba(0,0,0,.15)_100%)] dark:bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,.20)_30%,rgba(255,255,255,.20)_50%,transparent_50%,transparent_80%,rgba(255,255,255,.20)_80%,rgba(255,255,255,.20)_100%)] data-[state=open]:bg-[length:12px_12px] bg-[length:1600px_1600px] transition-all">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-3 sm:gap-4 rounded-md px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6 text-left text-base sm:text-lg font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      <span className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <Icon className="size-5 sm:size-6 shrink-0" />
                        <span>{item.category}</span>
                      </span>
                      <PlusIcon className="text-muted-foreground pointer-events-none size-5 sm:size-6 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="pb-0 pt-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-accent/50">
                            <th className="text-left px-3 sm:px-4 md:px-5 py-3 text-sm font-semibold min-w-[200px]">
                              Feature
                            </th>
                            <th className="text-center px-3 sm:px-4 py-3 text-sm font-semibold min-w-[120px]">
                              {plans[0].name}
                            </th>
                            <th className="text-center px-3 sm:px-4 py-3 text-sm font-semibold min-w-[120px] bg-primary/10">
                              {plans[1].name}
                            </th>
                            <th className="text-center px-3 sm:px-4 py-3 text-sm font-semibold min-w-[120px]">
                              {plans[2].name}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.features.map((feature, i) => (
                            <tr
                              key={i}
                              className={`border-b last:border-b-0 ${
                                i % 2 === 0 ? "bg-accent/20" : ""
                              }`}
                            >
                              <td className="px-3 sm:px-4 md:px-5 py-3 text-sm text-muted-foreground">
                                {feature.feature}
                              </td>
                              <td className="px-3 sm:px-4 py-3 text-center">
                                {renderValue(feature.basic)}
                              </td>
                              <td className="px-3 sm:px-4 py-3 text-center bg-primary/5">
                                {renderValue(feature.professional)}
                              </td>
                              <td className="px-3 sm:px-4 py-3 text-center">
                                {renderValue(feature.enterprise)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
