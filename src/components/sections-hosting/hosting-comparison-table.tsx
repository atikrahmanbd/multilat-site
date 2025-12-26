"use client";

import { useState } from "react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Infinity } from "lucide-react";
import { plans } from "./hosting-plans";

interface PlanFeature {
  feature: string;
  tooltip?: string;
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
        tooltip:
          "Fast NVMe Storage For Website Files, Emails, and Databases.",
        starter: "5 GB NVMe",
        business: "10 GB NVMe",
        professional: "25 GB NVMe",
        corporate: "50 GB NVMe",
      },
      {
        feature: "Sites Hosted",
        tooltip:
          "Number of Separate Websites You Can Host Under Your Single Hosting Account.",
        starter: "2 (1 Main + 1 Addon)",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Domain Aliases",
        tooltip:
          "Additional Domain Names That Point To Your Primary Website.",
        starter: "5",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Sub Domains",
        tooltip:
          "Ability To Create Subdomains Such as: blog.yoursite.com or shop.yoursite.com.",
        starter: "5",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Email Accounts",
        tooltip:
          "Create Professional Email Addresses Using Your Domain Name (e.g., info@yoursite.com).",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Bandwidth",
        tooltip:
          "Data Transfer Capacity That Allows Visitors To Access Your Website Content.",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "LVE Memory (RAM)",
        tooltip:
          "Dedicated CloudLinux LVE Memory Allocated To Run Applications Smoothly.",
        starter: "2 GB",
        business: "2 GB",
        professional: "2 GB",
        corporate: "4 GB",
      },
      {
        feature: "LVE CPU Cores",
        tooltip:
          "CloudLinux LVE Virtual CPU Cores Assigned To Process Website Requests.",
        starter: "2 vCPU",
        business: "2 vCPU",
        professional: "2 vCPU",
        corporate: "2 vCPU",
      },
      {
        feature: "Backup",
        tooltip:
          "Automatic Daily Backups To Protect Website Files and Databases.",
        starter: "Daily",
        business: "Daily",
        professional: "Daily",
        corporate: "Daily",
      },
      {
        feature: "Free Domain",
        tooltip:
          "Free .COM Domain Registration Included With Eligible Hosting Plans.",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
      {
        feature: "SSH Access",
        tooltip:
          "Secure Command-Line Access For Advanced Server and Application Management.",
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
        tooltip:
          "SSL Encryption To Secure Websites With HTTPS and Protect Visitor Data.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Uptime Guarantee",
        tooltip:
          "Service-Level Commitment Ensuring Maximum Website Availability.",
        starter: "99.99%",
        business: "99.99%",
        professional: "99.99%",
        corporate: "99.99%",
      },
      {
        feature: "Money Back Guarantee",
        tooltip:
          "Full Refund If You Are Not Satisfied Within The Guarantee Period.",
        starter: "30 Days",
        business: "30 Days",
        professional: "30 Days",
        corporate: "30 Days",
      },
      {
        feature: "Free Setup",
        tooltip:
          "Hosting Account Provisioned and Ready Without Any Setup Fees.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Expert Migration",
        tooltip:
          "Free Website Migration From Another Host With Minimal Downtime.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Location Choices",
        tooltip:
          "Option To Choose Server Location Based On Target Audience.",
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
        tooltip:
          "Industry-Standard Control Panel For Managing Websites, Emails, and Databases.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "CloudLinux",
        tooltip:
          "Operating System That Isolates Accounts For Improved Stability and Security.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Softaculous",
        tooltip:
          "One-Click Installer For Popular CMS and Web Applications (400+ Apps).",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "JetBackup",
        tooltip:
          "Backup and Restore System For Files, Databases, and Emails.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Public Cloud",
        tooltip:
          "Hosting Environment Built On Enterprise-Grade Cloud Infrastructure.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Instant Setup",
        tooltip:
          "Hosting Account Activated Immediately After Payment Confirmation.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "WP CLI",
        tooltip:
          "Command-Line Interface For Managing WordPress Installations.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "SitePad Sitebuilder",
        tooltip:
          "Drag-and-Drop Website Builder With 100+ Pre-Designed Templates.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Malware Protection",
        tooltip:
          "Automated Scanning and Removal of Malicious Files.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Imunify360",
        tooltip:
          "Advanced Security Suite With Firewall and Malware Defense.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Firewall",
        tooltip:
          "Web Application Firewall Protecting Against Common Cyber Attacks.",
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
        tooltip:
          "Maximum CloudLinux LVE Memory Available To Your Hosting Account.",
        starter: "2 GB",
        business: "2 GB",
        professional: "2 GB",
        corporate: "4 GB",
      },
      {
        feature: "CPU Cores",
        tooltip:
          "CloudLinux LVE CPU Resources Allocated For Website Processing.",
        starter: "2 vCPU",
        business: "2 vCPU",
        professional: "2 vCPU",
        corporate: "2 vCPU",
      },
      {
        feature: "Entry Processes",
        tooltip:
          "Limit On Simultaneous Web Requests Handled By Your Account.",
        starter: "30",
        business: "30",
        professional: "30",
        corporate: "30",
      },
      {
        feature: "Number of Inodes",
        tooltip:
          "Maximum Count of Files and Folders Allowed In Your Hosting Account.",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "IOPS",
        tooltip:
          "Disk Read and Write Operations Allowed Per Second.",
        starter: "2048",
        business: "2048",
        professional: "2048",
        corporate: "5120",
      },
      {
        feature: "IO",
        tooltip:
          "Maximum Disk Throughput Speed Available To Your Hosting Account.",
        starter: "50 MB/S",
        business: "50 MB/S",
        professional: "50 MB/S",
        corporate: "250 MB/S",
      },
      {
        feature: "CageFS Security",
        tooltip:
          "Virtualized File System That Prevents Cross-Account Access.",
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
        tooltip:
          "Manage DNS Records Such as: A, CNAME, MX, and TXT.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "DNS Hosting",
        tooltip:
          "Host DNS Records Using Our Nameservers Independent of Website Hosting.",
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
        tooltip:
          "Professional Email Addresses Created Using Your Domain Name.",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "Secure Webmail Access",
        tooltip:
          "Access Emails Through Web-Based Clients From Any Browser.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Mailbox Size Limit",
        tooltip:
          "Email Storage Capacity Controlled By Overall Hosting Disk Space.",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "IMAP / POP3",
        tooltip:
          "Standard Email Protocols For Desktop and Mobile Email Clients.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Attachment Size",
        tooltip:
          "Maximum File Size Allowed Per Email Attachment.",
        starter: "100 MB",
        business: "100 MB",
        professional: "100 MB",
        corporate: "100 MB",
      },
      {
        feature: "Email Forwarders",
        tooltip:
          "Automatically Forward Incoming Emails To Another Address.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Catch All Email",
        tooltip:
          "Receive Emails Sent To Non-Existing Addresses On Your Domain.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Auto Responders",
        tooltip:
          "Automatic Reply Messages For Specific Email Accounts.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Hourly Sending Limit",
        tooltip:
          "Limit On Emails Sent Per Hour To Prevent Spam Abuse.",
        starter: "100",
        business: "100",
        professional: "100",
        corporate: "100",
      },
      {
        feature: "Spam Protection",
        tooltip:
          "Inbound Email Filtering To Block Unwanted and Malicious Messages.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Outbound Spam Filtering",
        tooltip:
          "Monitoring Outgoing Emails To Protect Domain Reputation.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Mail Reputation Protection",
        tooltip:
          "Safeguards To Maintain Email Deliverability and Sender Trust Using SpamExperts or MailChannels.",
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
        tooltip:
          "MySQL and MariaDB Databases For Storing Website Data.",
        starter: "Unlimited",
        business: "Unlimited",
        professional: "Unlimited",
        corporate: "Unlimited",
      },
      {
        feature: "phpMyAdmin",
        tooltip:
          "Web Interface For Managing Databases Easily.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Remote MySQL Access",
        tooltip:
          "Allow External Applications To Connect To Your Database.",
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
        tooltip:
          "Support For Multiple PHP Versions For Application Compatibility.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Node.js Support",
        tooltip:
          "Run JavaScript-Based Server Applications.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Python Support",
        tooltip:
          "Deploy Python Applications and Frameworks.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "SSH Access",
        tooltip:
          "Secure Terminal Access For Development and Server Tasks.",
        starter: false,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "FTP & SFTP",
        tooltip:
          "File Transfer Access For Uploading and Managing Website Files.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Cron Jobs",
        tooltip:
          "Schedule Automated Tasks at Defined Intervals.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "File Manager",
        tooltip:
          "Web-Based File Management Without FTP Software.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: ".htaccess",
        tooltip:
          "Apache Configuration File For Redirects and Access Control.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Mod_rewrite",
        tooltip:
          "URL Rewriting Module For SEO-Friendly Links.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Mod_security",
        tooltip:
          "Web Security Rules Protecting Against Exploits.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "IP Address Blocking",
        tooltip:
          "Restrict Access From Specific IP Addresses.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Git Support",
        tooltip:
          "Deploy Code Directly From Git Repositories.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Memcached",
        tooltip:
          "In-Memory Caching To Improve Website Performance.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Redis",
        tooltip:
          "Advanced Caching and Data Storage For High-Performance Applications.",
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
        tooltip:
          "Server-Level Caching For Faster Website Loading.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Premium Cloud Servers",
        tooltip:
          "Higher-Tier Cloud Infrastructure With Enhanced Performance.",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
      {
        feature: "PCI Compliance",
        tooltip:
          "Hosting Environment Suitable For Secure Online Payments.",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
      {
        feature: "Dedicated IP",
        tooltip:
          "Unique IP Address Assigned Exclusively To Your Website.",
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
        tooltip:
          "Submit Support Requests Through Email or Ticket System.",
        starter: "24/7",
        business: "24/7",
        professional: "24/7",
        corporate: "24/7 Priority",
      },
      {
        feature: "Live Chat Support",
        tooltip:
          "Real-Time Assistance During Business Hours.",
        starter: "Business Hours",
        business: "Business Hours",
        professional: "Business Hours",
        corporate: "Business Hours Priority",
      },
      {
        feature: "Phone Support",
        tooltip:
          "Direct Phone Support During Business Hours.",
        starter: "Business Hours",
        business: "Business Hours",
        professional: "Business Hours",
        corporate: "Business Hours Priority",
      },
      {
        feature: "Guides / Knowledge Base",
        tooltip:
          "Self-Help Documentation and Tutorials.",
        starter: true,
        business: true,
        professional: true,
        corporate: true,
      },
      {
        feature: "Dedicated Support Manager",
        tooltip:
          "Assigned Account Manager For Priority Assistance.",
        starter: false,
        business: false,
        professional: false,
        corporate: true,
      },
    ],
  },
];

// Feature With Tooltip Component
function FeatureWithTooltip({
  feature,
  tooltip,
}: {
  feature: string;
  tooltip?: string;
}) {
  const [open, setOpen] = useState(false);

  if (!tooltip) {
    return <span>{feature}</span>;
  }

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <span
          className="cursor-help border-b border-transparent hover:border-dashed hover:border-primary hover:text-primary transition-colors"
          onClick={() => setOpen((prev) => !prev)}
        >
          {feature}
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        align="start"
        arrowAlign="start"
        sideOffset={8}
        className="max-w-64"
        onPointerDownOutside={() => setOpen(false)}
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

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
                                <FeatureWithTooltip
                                  feature={row.feature}
                                  tooltip={row.tooltip}
                                />
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
