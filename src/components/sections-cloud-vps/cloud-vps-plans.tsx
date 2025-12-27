"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  HardDrive,
  Check,
  Cpu,
  MemoryStick,
  ArrowLeftRight,
  ArrowRight,
  Globe,
} from "lucide-react";
import GradientIcon from "@/components/ui/gradient-icon";
import { cn } from "@/lib/utils";

// Category Types
type ResourceType = "shared" | "dedicated";
type Category = "cost-optimized" | "regular-performance" | "general-purpose";
type Location = "germany" | "finland" | "singapore" | "usa";
type Architecture = "x86" | "arm64";

// Location Data
const locations = [
  {
    id: "germany" as Location,
    name: "Germany",
    flag: "🇩🇪",
    datacenters: ["NBG1", "FSN1"],
  },
  {
    id: "finland" as Location,
    name: "Finland",
    flag: "🇫🇮",
    datacenters: ["HEL1"],
  },
  {
    id: "singapore" as Location,
    name: "Singapore",
    flag: "🇸🇬",
    datacenters: ["SIN"],
  },
  {
    id: "usa" as Location,
    name: "USA",
    flag: "🇺🇸",
    datacenters: ["HIL", "ASH"],
  },
];

// Category Data
const categories = {
  shared: [
    {
      id: "cost-optimized" as Category,
      name: "Cost-Optimized",
      description:
        "Cost-efficient on older hardware generations with limited availability. Ideal for flexible workloads that can tolerate variable CPU performance. Optimized for low and inconsistent CPU usage patterns.",
      tags: [
        "Cost Effective",
        "Low CPU Usage",
        "Medium Traffic Applications",
        "🇩🇪 🇫🇮 Europe Only",
      ],
      architecture: "x86 (Intel®/AMD)" as string,
      hasLocationSelector: false,
      hasArchitectureSelector: true,
      limitedAvailability: true,
    },
    {
      id: "regular-performance" as Category,
      name: "Regular Performance",
      description:
        "Higher CPU performance on newer hardware generations. Ideal for flexible workloads that can accommodate variable CPU performance. Optimized for low to medium CPU usage with fluctuating demands.",
      tags: [
        "Best Price/Performance",
        "Low To Medium CPU Usage",
        "Medium Traffic Applications",
      ],
      architecture: "x86 (AMD)" as string,
      hasLocationSelector: true,
      hasArchitectureSelector: false,
    },
    {
      id: "general-purpose" as Category,
      name: "Dedicated Resources",
      description:
        "Provides dedicated vCPUs on the latest hardware generation. Delivers consistent performance for demanding workloads. Ideal for production environments with sustained CPU usage.",
      tags: [
        "Predictable Performance",
        "Critical Production",
        "Sustained High CPU Usage",
        "High Traffic Applications",
      ],
      architecture: "x86 (AMD)" as string,
      hasLocationSelector: true,
      hasArchitectureSelector: false,
    },
  ],
  dedicated: [],
};

// Cost-Optimized Plans - x86 (Intel/AMD) - Germany & Finland Only
// Prices: EUR * 145 (BDT rate) * 1.5 (50% markup)
const costOptimizedX86Plans = [
  {
    name: "CX23",
    processor: "Intel/AMD",
    category: "cost-optimized" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 650, // €2.99
    specs: {
      vCPU: "2",
      ram: "4 GB",
      storage: "40 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CX33",
    processor: "Intel/AMD",
    category: "cost-optimized" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 1100, // €4.99
    specs: {
      vCPU: "4",
      ram: "8 GB",
      storage: "80 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CX43",
    processor: "Intel/AMD",
    category: "cost-optimized" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 2000, // €8.99
    specs: {
      vCPU: "8",
      ram: "16 GB",
      storage: "160 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CX53",
    processor: "Intel/AMD",
    category: "cost-optimized" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 3700, // €16.99
    specs: {
      vCPU: "16",
      ram: "32 GB",
      storage: "320 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
];

// Cost-Optimized Plans - Arm64 (Ampere) - Germany & Finland Only
const costOptimizedArm64Plans = [
  {
    name: "CAX11",
    processor: "Ampere",
    category: "cost-optimized" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 700, // €3.29
    specs: {
      vCPU: "2",
      ram: "4 GB",
      storage: "40 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CAX21",
    processor: "Ampere",
    category: "cost-optimized" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 1300, // €5.99
    specs: {
      vCPU: "4",
      ram: "8 GB",
      storage: "80 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CAX31",
    processor: "Ampere",
    category: "cost-optimized" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 2600, // €11.99
    specs: {
      vCPU: "8",
      ram: "16 GB",
      storage: "160 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CAX41",
    processor: "Ampere",
    category: "cost-optimized" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 5200, // €23.99
    specs: {
      vCPU: "16",
      ram: "32 GB",
      storage: "320 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
];

// VPS Plans Data - Shared Regular Performance by Location
// Prices: EUR * 145 (BDT rate) * 1.5 (50% markup)
const sharedPlansGermanyFinland = [
  {
    name: "CPX22",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 1300, // €5.99
    specs: {
      vCPU: "2",
      ram: "4 GB",
      storage: "80 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX32",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 2300, // €10.49
    specs: {
      vCPU: "4",
      ram: "8 GB",
      storage: "160 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX42",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 4200, // €19.49
    specs: {
      vCPU: "8",
      ram: "16 GB",
      storage: "320 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX52",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 6100, // €27.99
    specs: {
      vCPU: "12",
      ram: "24 GB",
      storage: "480 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX62",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 8400, // €38.49
    specs: {
      vCPU: "16",
      ram: "32 GB",
      storage: "640 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
];

const sharedPlansSingapore = [
  {
    name: "CPX12",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 1300, // €5.99
    specs: {
      vCPU: "1",
      ram: "2 GB",
      storage: "40 GB",
      traffic: "0.5 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX22",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 2600, // €11.99
    specs: {
      vCPU: "2",
      ram: "4 GB",
      storage: "80 GB",
      traffic: "1 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX32",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 5400, // €24.99
    specs: {
      vCPU: "4",
      ram: "8 GB",
      storage: "160 GB",
      traffic: "2 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX42",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 9400, // €42.99
    specs: {
      vCPU: "8",
      ram: "16 GB",
      storage: "320 GB",
      traffic: "3 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX52",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 12900, // €59.99
    specs: {
      vCPU: "12",
      ram: "24 GB",
      storage: "480 GB",
      traffic: "4 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX62",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 16800, // €76.99
    specs: {
      vCPU: "16",
      ram: "32 GB",
      storage: "640 GB",
      traffic: "5 TB",
      ipv4: "Free",
    },
  },
];

const sharedPlansUSA = [
  {
    name: "CPX11",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 1000, // €4.49
    specs: {
      vCPU: "2",
      ram: "2 GB",
      storage: "40 GB",
      traffic: "1 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX21",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 2000, // €8.99
    specs: {
      vCPU: "3",
      ram: "4 GB",
      storage: "80 GB",
      traffic: "2 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX31",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 3500, // €15.99
    specs: {
      vCPU: "4",
      ram: "8 GB",
      storage: "160 GB",
      traffic: "3 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX41",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 6500, // €29.99
    specs: {
      vCPU: "8",
      ram: "16 GB",
      storage: "240 GB",
      traffic: "4 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CPX51",
    processor: "AMD",
    category: "regular-performance" as Category,
    resourceType: "shared" as ResourceType,
    monthlyPrice: 12900, // €59.99
    specs: {
      vCPU: "16",
      ram: "32 GB",
      storage: "360 GB",
      traffic: "5 TB",
      ipv4: "Free",
    },
  },
];

// Dedicated General Purpose Plans - Germany/Finland (High Traffic)
// Prices: EUR * 145 (BDT rate) * 1.5 (50% markup)
const dedicatedPlansGermanyFinland = [
  {
    name: "CCX13",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 2600, // €11.99
    specs: {
      vCPU: "2",
      ram: "8 GB",
      storage: "80 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX23",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 5200, // €23.99
    specs: {
      vCPU: "4",
      ram: "16 GB",
      storage: "160 GB",
      traffic: "20 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX33",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 10500, // €47.99
    specs: {
      vCPU: "8",
      ram: "32 GB",
      storage: "240 GB",
      traffic: "30 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX43",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 20900, // €95.99
    specs: {
      vCPU: "16",
      ram: "64 GB",
      storage: "360 GB",
      traffic: "40 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX53",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 41800, // €191.99
    specs: {
      vCPU: "32",
      ram: "128 GB",
      storage: "600 GB",
      traffic: "50 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX63",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 62600, // €287.99
    specs: {
      vCPU: "48",
      ram: "192 GB",
      storage: "960 GB",
      traffic: "60 TB",
      ipv4: "Free",
    },
  },
];

// Dedicated General Purpose Plans - Singapore
// Prices: EUR * 145 (BDT rate) * 1.5 (50% markup)
const dedicatedPlansSingapore = [
  {
    name: "CCX13",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 4600, // €21.00
    specs: {
      vCPU: "2",
      ram: "8 GB",
      storage: "80 GB",
      traffic: "1 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX23",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 8600, // €39.40
    specs: {
      vCPU: "4",
      ram: "16 GB",
      storage: "160 GB",
      traffic: "2 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX33",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 16200, // €74.40
    specs: {
      vCPU: "8",
      ram: "32 GB",
      storage: "240 GB",
      traffic: "3 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX43",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 29800, // €137.00
    specs: {
      vCPU: "16",
      ram: "64 GB",
      storage: "360 GB",
      traffic: "4 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX53",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 64000, // €294.00
    specs: {
      vCPU: "32",
      ram: "128 GB",
      storage: "600 GB",
      traffic: "6 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX63",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 104800, // €482.00
    specs: {
      vCPU: "48",
      ram: "192 GB",
      storage: "960 GB",
      traffic: "8 TB",
      ipv4: "Free",
    },
  },
];

// Dedicated General Purpose Plans - USA
// Prices: EUR * 145 (BDT rate) * 1.5 (50% markup)
const dedicatedPlansUSA = [
  {
    name: "CCX13",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 2800, // €12.99
    specs: {
      vCPU: "2",
      ram: "8 GB",
      storage: "80 GB",
      traffic: "1 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX23",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 5600, // €25.99
    specs: {
      vCPU: "4",
      ram: "16 GB",
      storage: "160 GB",
      traffic: "2 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX33",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 10900, // €49.99
    specs: {
      vCPU: "8",
      ram: "32 GB",
      storage: "240 GB",
      traffic: "3 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX43",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 21800, // €99.99
    specs: {
      vCPU: "16",
      ram: "64 GB",
      storage: "360 GB",
      traffic: "4 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX53",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 43500, // €199.99
    specs: {
      vCPU: "32",
      ram: "128 GB",
      storage: "600 GB",
      traffic: "6 TB",
      ipv4: "Free",
    },
  },
  {
    name: "CCX63",
    processor: "AMD",
    category: "general-purpose" as Category,
    resourceType: "dedicated" as ResourceType,
    monthlyPrice: 65200, // €299.99
    specs: {
      vCPU: "48",
      ram: "192 GB",
      storage: "960 GB",
      traffic: "8 TB",
      ipv4: "Free",
    },
  },
];

// What's Included (Shared Across All Plans)
const whatsIncluded = [
  "Free DDoS Protection & Firewalls",
  "Full Root Access & 10 Gbit Network",
  "Apps/Snapshots/Images/Backup/Volumes",
];

// Get Plans By Location, Category, and Architecture
function getPlansByLocationAndCategory(
  location: Location,
  category: Category,
  architecture: Architecture = "x86"
): typeof dedicatedPlansGermanyFinland {
  // Cost-Optimized - Germany & Finland Only
  if (category === "cost-optimized") {
    return architecture === "arm64"
      ? costOptimizedArm64Plans
      : costOptimizedX86Plans;
  }

  if (category === "general-purpose") {
    // Dedicated General Purpose
    switch (location) {
      case "germany":
      case "finland":
        return dedicatedPlansGermanyFinland;
      case "singapore":
        return dedicatedPlansSingapore;
      case "usa":
        return dedicatedPlansUSA;
      default:
        return dedicatedPlansGermanyFinland;
    }
  }

  // Shared Regular Performance
  switch (location) {
    case "germany":
    case "finland":
      return sharedPlansGermanyFinland;
    case "singapore":
      return sharedPlansSingapore;
    case "usa":
      return sharedPlansUSA;
    default:
      return sharedPlansGermanyFinland;
  }
}

// Reusable Plan Card Component
function VpsPlanCard({
  plan,
  index,
}: {
  plan: (typeof dedicatedPlansGermanyFinland)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(128,128,128,.1)_30%,rgba(128,128,128,.1)_50%,transparent_50%,transparent_80%,rgba(128,128,128,.1)_80%,rgba(128,128,128,.1)_100%)] bg-[length:16px_16px]" />

        <div className="relative p-4 sm:p-5">
          {/* Main Content - Specs Cards + What's Included */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5">
            {/* Specs Cards (5 cards) */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
              {/* vCPU Card */}
              <div className="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4079ff] hover:to-[#00efae] hover:border-0">
                <GradientIcon
                  icon={Cpu}
                  size="size-6 sm:size-8"
                  className="mb-2"
                />
                <p className="text-xl sm:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                  {plan.specs.vCPU}
                </p>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                  vCPU
                </p>
              </div>

              {/* RAM Card */}
              <div className="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4079ff] hover:to-[#00efae] hover:border-0">
                <GradientIcon
                  icon={MemoryStick}
                  size="size-6 sm:size-8"
                  className="mb-2"
                />
                <p className="text-xl sm:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                  {plan.specs.ram}
                </p>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                  RAM
                </p>
              </div>

              {/* Storage Card */}
              <div className="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4079ff] hover:to-[#00efae] hover:border-0">
                <GradientIcon
                  icon={HardDrive}
                  size="size-6 sm:size-8"
                  className="mb-2"
                />
                <p className="text-xl sm:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                  {plan.specs.storage}
                </p>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                  NVMe SSD
                </p>
              </div>

              {/* Traffic Card */}
              <div className="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4079ff] hover:to-[#00efae] hover:border-0">
                <GradientIcon
                  icon={ArrowLeftRight}
                  size="size-6 sm:size-8"
                  className="mb-2"
                />
                <p className="text-xl sm:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                  {plan.specs.traffic}
                </p>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                  Traffic
                </p>
              </div>

              {/* IPv4 Card - Hidden on Mobile */}
              <div className="hidden sm:flex group flex-col items-center justify-center p-5 sm:p-6 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4079ff] hover:to-[#00efae] hover:border-0">
                <GradientIcon
                  icon={Globe}
                  size="size-6 sm:size-8"
                  className="mb-2"
                />
                <p className="text-xl sm:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                  {plan.specs.ipv4}
                </p>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                  IPv4 & IPv6
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="lg:col-span-2 rounded-xl px-6 py-5 sm:px-7 sm:py-6 bg-card border border-border">
              <ul className="space-y-2 sm:space-y-3">
                {whatsIncluded.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="size-5 text-primary shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row - Plan Name, Processor, Price & Order Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 px-4 sm:px-5 py-4 border-t border-primary/30 bg-card/80 rounded-b-2xl">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-xl sm:text-2xl font-bold text-gradient-blue-aqua">
                {plan.name}
              </span>
              <span className="text-sm sm:text-base text-muted-foreground">
                ({plan.processor})
              </span>
              <span className="w-px h-6 sm:h-7 bg-muted-foreground/50" />
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                ৳{plan.monthlyPrice.toLocaleString()}
              </span>
              <span className="text-base text-muted-foreground">/ Monthly</span>
            </div>

            <a
              href="/order"
              className="shrink-0 bg-slate-800 dark:bg-slate-900 no-underline group cursor-pointer relative shadow-xl p-px font-semibold text-white inline-block rounded-full text-center"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(0,239,174,0.6)_0%,rgba(0,239,174,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex items-center justify-center gap-2 z-10 rounded-full bg-zinc-950 px-8 py-3 ring-1 ring-white/10">
                <span className="text-base font-semibold">Order Now</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </div>
              <span className="absolute -bottom-0 left-4 h-px w-[calc(100%-2rem)] bg-gradient-to-r from-cyan-500/0 via-cyan-500/90 to-cyan-500/0 transition-opacity duration-500 group-hover:opacity-40" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Get Plan Count By Location and Category
function getPlanCountByLocation(
  location: Location,
  category: Category
): number {
  // Cost-Optimized doesn't use location selector
  if (category === "cost-optimized") {
    return 0;
  }

  if (category === "general-purpose") {
    switch (location) {
      case "germany":
      case "finland":
        return dedicatedPlansGermanyFinland.length;
      case "singapore":
        return dedicatedPlansSingapore.length;
      case "usa":
        return dedicatedPlansUSA.length;
      default:
        return 0;
    }
  }

  // Shared Regular Performance
  switch (location) {
    case "germany":
    case "finland":
      return sharedPlansGermanyFinland.length;
    case "singapore":
      return sharedPlansSingapore.length;
    case "usa":
      return sharedPlansUSA.length;
    default:
      return 0;
  }
}

// Location Selector Component
function LocationSelector({
  selectedLocation,
  onLocationChange,
  selectedCategory,
}: {
  selectedLocation: Location;
  onLocationChange: (location: Location) => void;
  selectedCategory: Category;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3 rounded-2xl border border-border bg-card/50">
      {locations.map((location) => {
        const isSelected = selectedLocation === location.id;
        const planCount = getPlanCountByLocation(location.id, selectedCategory);

        return (
          <button
            key={location.id}
            onClick={() => onLocationChange(location.id)}
            className={cn(
              "flex items-center gap-3 px-4 py-2 md:py-3 rounded-xl border transition-all cursor-pointer",
              isSelected
                ? "border-primary bg-primary/10"
                : "border-border bg-card hover:border-primary/50"
            )}
          >
            {/* Radio Indicator */}
            <div
              className={cn(
                "size-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0",
                isSelected
                  ? "border-primary bg-primary"
                  : "border-muted-foreground/40"
              )}
            >
              {isSelected && (
                <div className="size-2 rounded-full bg-primary-foreground" />
              )}
            </div>

            <span className="text-2xl shrink-0">{location.flag}</span>

            <div className="text-left flex-1">
              <p className="text-sm font-medium text-foreground">
                {location.name}
                <span className="text-muted-foreground font-normal ml-2">
                  ({location.datacenters.join(" • ")})
                </span>
              </p>
            </div>

            {/* Plan Count Badge */}
            <span
              className={cn(
                "ml-auto px-2 py-0.5 text-xs font-medium rounded-full shrink-0",
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {planCount}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Category Card Component
function CategoryCard({
  category,
  isSelected,
  onSelect,
  selectedArchitecture,
  onArchitectureChange,
}: {
  category: (typeof categories.shared)[0];
  isSelected: boolean;
  onSelect: () => void;
  selectedArchitecture?: Architecture;
  onArchitectureChange?: (arch: Architecture) => void;
}) {
  const hasLimitedAvailability =
    "limitedAvailability" in category && category.limitedAvailability;
  const hasArchitectureSelector =
    "hasArchitectureSelector" in category && category.hasArchitectureSelector;

  return (
    <div
      onClick={onSelect}
      className={cn(
        "relative flex flex-col p-5 rounded-xl border cursor-pointer transition-all duration-300 overflow-hidden",
        isSelected
          ? "border-primary bg-card"
          : "border-border bg-card/50 hover:border-muted-foreground/50"
      )}
    >
      {/* Selection Ribbon - Top Right Corner */}
      {isSelected && (
        <div className="absolute right-0 top-0 size-20 overflow-hidden">
          <div className="absolute right-[-40px] top-[-40px] size-20 bg-primary rotate-45" />
          <Check
            className="absolute right-2 top-2 size-5 text-primary-foreground"
            strokeWidth={3}
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
        {hasLimitedAvailability && (
          <span className="px-2 py-0.5 text-xs font-medium bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded-full border border-yellow-500/30">
            Limited Availability
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4">
        {category.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {category.tags.map((tag, i) => {
          const isEuropeTag = tag.includes("Europe Only");
          return (
            <span
              key={i}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-full border",
                isEuropeTag
                  ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30"
                  : "bg-muted/50 text-muted-foreground border-border"
              )}
            >
              {tag}
            </span>
          );
        })}
      </div>

      {/* Architecture */}
      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {hasArchitectureSelector ? "Arch" : "Architecture"}
        </p>
        {hasArchitectureSelector &&
        selectedArchitecture &&
        onArchitectureChange ? (
          <div className="flex items-center gap-4">
            {/* x86 Radio */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onArchitectureChange("x86");
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={cn(
                  "size-5 rounded-full border-2 flex items-center justify-center transition-all",
                  isSelected && selectedArchitecture === "x86"
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/40"
                )}
              >
                {isSelected && selectedArchitecture === "x86" && (
                  <div className="size-2 rounded-full bg-primary-foreground" />
                )}
              </div>
              <span className="text-sm text-foreground whitespace-nowrap">
                x86 (Intel<sup>®</sup>/AMD)
              </span>
            </button>
            {/* Arm64 Radio */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onArchitectureChange("arm64");
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={cn(
                  "size-5 rounded-full border-2 flex items-center justify-center transition-all",
                  isSelected && selectedArchitecture === "arm64"
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/40"
                )}
              >
                {isSelected && selectedArchitecture === "arm64" && (
                  <div className="size-2 rounded-full bg-primary-foreground" />
                )}
              </div>
              <span className="text-sm text-foreground whitespace-nowrap">
                Arm64 (Ampere<sup>®</sup>)
              </span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground">
              {"architecture" in category
                ? (category.architecture as string)
                : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// All Categories Combined
const allCategories = [...categories.shared, ...categories.dedicated];

export function CloudVpsPlans() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    "regular-performance"
  );
  const [selectedLocation, setSelectedLocation] = useState<Location>("germany");
  const [selectedArchitecture, setSelectedArchitecture] =
    useState<Architecture>("x86");

  // Get Current Category Data
  const currentCategory = allCategories.find((c) => c.id === selectedCategory);
  const showLocationSelector = currentCategory?.hasLocationSelector ?? false;

  // Get Plans Based on Selected Category, Location, and Architecture
  const filteredPlans = getPlansByLocationAndCategory(
    selectedLocation,
    selectedCategory,
    selectedArchitecture
  );

  return (
    <section
      id="plans"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-blue-aqua">Cloud VPS</span> Plans
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Scalable Virtual Private Servers With Dedicated Resources and Full
            Root Access
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20"
        >
          {allCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              onSelect={() => {
                setSelectedCategory(category.id);
                if (category.id === "cost-optimized") {
                  setSelectedArchitecture("x86");
                }
              }}
              selectedArchitecture={selectedArchitecture}
              onArchitectureChange={setSelectedArchitecture}
            />
          ))}
        </motion.div>

        {/* Location Selector (only for Regular Performance and General Purpose) */}
        {showLocationSelector && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <LocationSelector
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
              selectedCategory={selectedCategory}
            />
          </motion.div>
        )}

        {/* VPS Plans List */}
        <div className="space-y-6">
          {filteredPlans.length > 0 ? (
            filteredPlans.map((plan, index) => (
              <VpsPlanCard key={plan.name} plan={plan} index={index} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                No plans available for this category. Coming soon!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
