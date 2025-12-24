"use client";

import {
  PlusIcon,
  Check,
  X,
  Server,
  Gift,
  Settings,
  Gauge,
  Globe,
  Mail,
  Database,
  Code,
  HeadphonesIcon,
  Crown,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import GradientText from "../ui/gradient-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Infinity } from "lucide-react";
import { plans } from "./hosting-plans";

interface PlanFeature {
  feature: string;
  starter: string | boolean;
  business: string | boolean;
  professional: string | boolean;
  corporate: string | boolean;
}

type IconName =
  | "Server"
  | "Gift"
  | "Settings"
  | "Gauge"
  | "Globe"
  | "Mail"
  | "Database"
  | "Code"
  | "HeadphonesIcon"
  | "Crown";

interface FeatureCategory {
  category: string;
  iconName: IconName;
  features: PlanFeature[];
}

const iconMap = {
  Server,
  Gift,
  Settings,
  Gauge,
  Globe,
  Mail,
  Database,
  Code,
  HeadphonesIcon,
  Crown,
};

const comparisonData: FeatureCategory[] = [
  {
    category: "Package Resources",
    iconName: "Server",
    features: [
      {
        feature: "Disk Space",
        starter: "5 GB NVMe",
        business: "10 GB NVMe",
        professional: "25 GB NVMe",
        corporate: "50 GB NVMe",
      },
      {
        feature: "Sites Hosted",
        starter: "2 (1 Main + 1 Addon)",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Domains Aliases",
        starter: "5",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Sub Domains",
        starter: "5",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Email Accounts",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Bandwidth",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "LVE Memory (RAM)",
        starter: "2 GB",
        business: "2 GB",
        professional: "2 GB",
        corporate: "4 GB",
      },
      {
        feature: "LVE CPU Cores",
        starter: "2 vCPU",
        business: "2 vCPU",
        professional: "2 vCPU",
        corporate: "2 vCPU",
      },
      {
        feature: "Backup",
        starter: "Daily",
        business: "Daily",
        professional: "Daily",
        corporate: "Daily",
      },
      {
        feature: "Free Domain",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
      {
        feature: "SSH Access",
        starter: false,
        business: true,
        professional: true,
        corporate: true,
      },
    ],
  },
  {
    category: "Offers & Inclusion",
    iconName: "Gift",
    features: [
      {
        feature: "Free SSL Certificates",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Free Domain",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
      {
        feature: "Uptime Guarantee",
        starter: "99.99%",
        business: "99.99%",
        professional: "99.99%",
        corporate: "99.99%",
      },
      {
        feature: "Money Back Guarantee",
        starter: "30 Days",
        business: "30 Days",
        professional: "30 Days",
        corporate: "30 Days",
      },
      {
        feature: "Free Setup",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Expert Migration",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Location Choices",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
    ],
  },
  {
    category: "Server & Security",
    iconName: "Settings",
    features: [
      {
        feature: "cPanel Control Panel",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "CloudLinux",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Softaculous",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Jetbackup",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Public Cloud",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Instant Setup",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "WP CLI",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "SitePad Sitebuilder",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Malware Protection",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Imunify360",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Firewall",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
    ],
  },
  {
    category: "CloudLinux (LVE Limits)",
    iconName: "Gauge",
    features: [
      {
        feature: "Memory (RAM)",
        starter: "2 GB",
        business: "2 GB",
        professional: "2 GB",
        corporate: "4 GB",
      },
      {
        feature: "CPU Cores",
        starter: "2 vCPU",
        business: "2 vCPU",
        professional: "2 vCPU",
        corporate: "2 vCPU",
      },
      {
        feature: "Entry Processes",
        starter: "30",
        business: "30",
        professional: "30",
        corporate: "30",
      },
      {
        feature: "Number of Inodes",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "IOPS",
        starter: "2048",
        business: "2048",
        professional: "2048",
        corporate: "5120",
      },
      {
        feature: "IO",
        starter: "50 MB/S",
        business: "50 MB/S",
        professional: "50 MB/S",
        corporate: "250 MB/S",
      },
      {
        feature: "CageFS Security",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
    ],
  },
  {
    category: "Domain Management",
    iconName: "Globe",
    features: [
      {
        feature: "DNS Editor",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "DNS Hosting",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
    ],
  },
  {
    category: "Email Features",
    iconName: "Mail",
    features: [
      {
        feature: "Email Accounts",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Secure Webmail Access",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Mailbox Size Limit",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "IMAP/POP3",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Attachment Size",
        starter: "100 MB",
        business: "100 MB",
        professional: "100 MB",
        corporate: "100 MB",
      },
      {
        feature: "Email Forwarders",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Catch All Email",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Auto Responders",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Hourly Sending Limit",
        starter: "100",
        business: "100",
        professional: "100",
        corporate: "100",
      },
      {
        feature: "Spam Protection",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Outbound Spam Filtering",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Mail Reputation Protection",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
    ],
  },
  {
    category: "Database",
    iconName: "Database",
    features: [
      {
        feature: "Databases",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "phpMyAdmin",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Remote MySQL Access",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
    ],
  },
  {
    category: "Developer Tools",
    iconName: "Code",
    features: [
      {
        feature: "PHP 4.4 To 8.3",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Node.js Support",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Python Support",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "SSH Access",
        starter: false,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "FTP & SFTP",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Cron Jobs",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "File Manager",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: ".htaccess",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Mod_rewrite",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Mod_security",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "IP Address Blocking",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Git Support",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Memcached",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Redis",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
    ],
  },
  {
    category: "Premium Features",
    iconName: "Crown",
    features: [
      {
        feature: "LiteSpeed Caching",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Premium Cloud Servers",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
      {
        feature: "PCI Compliance",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
      {
        feature: "Dedicated IP",
        starter: false,
        business: false,
        professional: false,
        corporate: "On Demand (Charge Apply)",
      },
    ],
  },
  {
    category: "Support",
    iconName: "HeadphonesIcon",
    features: [
      {
        feature: "Email & Ticket Support",
        starter: "24/7",
        business: "24/7",
        professional: "24/7",
        corporate: "24/7 Priority",
      },
      {
        feature: "Live Chat Support",
        starter: "Business Hours",
        business: "Business Hours",
        professional: "Business Hours",
        corporate: "Business Hours Priority",
      },
      {
        feature: "Phone Support",
        starter: "Business Hours",
        business: "Business Hours",
        professional: "Business Hours",
        corporate: "Business Hours Priority",
      },
      {
        feature: "Guides / Knowledge Base",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Dedicated Support Manager",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
    ],
  },
];

function renderCellValue(value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-green-500 mx-auto" />
    ) : (
      <X className="h-5 w-5 text-red-500/50 mx-auto" />
    );
  }
  if (value === "Unlimited") {
    return (
      <span className="flex items-center justify-center gap-1">
        <Infinity className="h-5 w-5" />
      </span>
    );
  }
  return value;
}

export function HostingComparisonTable() {
  // Get Pricing From Imported Plans
  const starterPlan = plans.find((p) => p.name === "Starter");
  const businessPlan = plans.find((p) => p.name === "Business");
  const professionalPlan = plans.find((p) => p.name === "Professional");
  const corporatePlan = plans.find((p) => p.name === "Corporate");

  return (
    <section className="relative py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>Detailed Plan Comparison</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Compare All Features Across Our Hosting Plans
          </p>
        </div>

        {/* Accordion Comparison Table */}
        <div className="max-w-7xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md border overflow-hidden"
            defaultValue="item-1"
          >
            {comparisonData.map((category, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="has-focus-visible:border-ring has-focus-visible:ring-ring/50 outline-none first:rounded-t-md last:rounded-b-md has-focus-visible:z-10 has-focus-visible:ring-[3px]"
              >
                <AccordionPrimitive.Header className="flex hover:bg-primary/50 hover:text-foreground hover:data-[state=open]:bg-primary/20 data-[state=open]:bg-background bg-[linear-gradient(45deg,transparent_30%,rgba(0,0,0,.15)_30%,rgba(0,0,0,.15)_50%,transparent_50%,transparent_80%,rgba(0,0,0,.15)_80%,rgba(0,0,0,.15)_100%)] dark:bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,.20)_30%,rgba(255,255,255,.20)_50%,transparent_50%,transparent_80%,rgba(255,255,255,.20)_80%,rgba(255,255,255,.20)_100%)] data-[state=open]:bg-[length:12px_12px] bg-[length:1600px_1600px] transition-all">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "group cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-3 sm:gap-4 rounded-md px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6 text-left text-base sm:text-lg font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
                    )}
                  >
                    <span className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      {(() => {
                        const Icon = iconMap[category.iconName];
                        return <Icon className="size-5 sm:size-6 shrink-0" />;
                      })()}
                      <span>{category.category}</span>
                    </span>
                    <PlusIcon className="text-muted-foreground pointer-events-none size-5 sm:size-6 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-0 pt-0">
                  <div className="bg-accent dark:bg-accent/50">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-primary/50">
                            <th className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-left text-md sm:text-lg md:text-xl font-semibold text-primary bg-accent/10 min-w-[200px]">
                              Features
                            </th>
                            <th className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-accent/20 min-w-[150px]">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-md sm:text-lg font-semibold">
                                  Starter
                                </span>
                                <span className="text-xs sm:text-sm text-primary font-bold">
                                  ৳{starterPlan?.monthlyPrice}/Month
                                </span>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-primary/10 min-w-[150px]">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-md sm:text-lg font-semibold">
                                  Business
                                </span>
                                <span className="text-xs sm:text-sm text-primary font-bold">
                                  ৳{businessPlan?.monthlyPrice}/Month
                                </span>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-accent/30 min-w-[150px]">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-md sm:text-lg font-semibold">
                                  Professional
                                </span>
                                <span className="text-xs sm:text-sm text-primary font-bold">
                                  ৳{professionalPlan?.monthlyPrice}/Month
                                </span>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-gradient-to-b from-amber-500/20 to-amber-500/5 min-w-[150px]">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-md sm:text-lg font-semibold text-amber-600 dark:text-amber-400">
                                  Corporate
                                </span>
                                <span className="text-xs sm:text-sm text-primary font-bold">
                                  ৳{corporatePlan?.monthlyPrice}/Month
                                </span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.features.map((row, i) => (
                            <tr
                              key={i}
                              className="border-b border-border/50 last:border-b-0 hover:bg-accent/20 transition-colors"
                            >
                              <td className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-sm sm:text-base font-medium bg-accent/5">
                                {row.feature}
                              </td>
                              <td className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-center text-sm sm:text-base text-muted-foreground border-l border-border/30 bg-accent/10">
                                {renderCellValue(row.starter)}
                              </td>
                              <td className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-center text-sm sm:text-base text-muted-foreground border-l border-border/30 bg-primary/5">
                                {renderCellValue(row.business)}
                              </td>
                              <td className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-center text-sm sm:text-base text-muted-foreground border-l border-border/30 bg-accent/15">
                                {renderCellValue(row.professional)}
                              </td>
                              <td className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 text-center text-sm sm:text-base text-muted-foreground border-l border-border/30 bg-amber-500/5">
                                {renderCellValue(row.corporate)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
