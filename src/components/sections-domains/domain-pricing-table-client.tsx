"use client";

import { useState, useMemo } from "react";
import {
  PlusIcon,
  Globe,
  Briefcase,
  Flag,
  Sparkles,
  Palette,
  MapPin,
  Trophy,
  Monitor,
  Wrench,
  Coins,
  GraduationCap,
  UtensilsCrossed,
  Gamepad2,
  ShoppingCart,
  Home,
  Laugh,
  MoreHorizontal,
  Flame,
  Tag,
  Zap,
  Star,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import GradientText from "../ui/gradient-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { PricingSearchInput } from "@/components/sections-domains/pricing-search-input";
import { cn } from "@/lib/utils";

interface DomainPrice {
  tld: string;
  tag?: string | null;
  period?: number; // 1 = Per Year, 2 = Per 2 Years
  register: string;
  transfer: string;
  renew: string;
  grace?: string;
}

type IconName =
  | "Globe"
  | "Briefcase"
  | "Flag"
  | "Sparkles"
  | "Palette"
  | "MapPin"
  | "Trophy"
  | "Monitor"
  | "Wrench"
  | "Coins"
  | "GraduationCap"
  | "UtensilsCrossed"
  | "Gamepad2"
  | "ShoppingCart"
  | "Home"
  | "Laugh"
  | "MoreHorizontal"
  | "Star"
  | "Tag";

interface PricingCategory {
  category: string;
  iconName: IconName;
  domains: DomainPrice[];
}

const iconMap = {
  Globe,
  Briefcase,
  Flag,
  Sparkles,
  Palette,
  MapPin,
  Trophy,
  Monitor,
  Wrench,
  Coins,
  GraduationCap,
  UtensilsCrossed,
  Gamepad2,
  ShoppingCart,
  Home,
  Laugh,
  MoreHorizontal,
  Star,
  Tag,
};

// Period Badge Component (For 2-Year TLDs)
function PeriodBadge({ period }: { period: number }) {
  if (period !== 2) return null;
  return (
    <span className="text-xs text-muted-foreground font-normal ml-1">
      /2yr
    </span>
  );
}

// Tag Badge Component
function TagBadge({ tag }: { tag: string }) {
  const tagConfig: Record<
    string,
    { label: string; icon: React.ReactNode; className: string }
  > = {
    sale: {
      label: "Sale",
      icon: <Tag className="size-3" />,
      className: "bg-primary text-primary-foreground",
    },
    hot: {
      label: "Hot",
      icon: <Flame className="size-3" />,
      className: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    },
    new: {
      label: "New",
      icon: <Zap className="size-3" />,
      className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
    },
  };

  const config = tagConfig[tag.toLowerCase()];
  if (!config) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold shadow-md ml-2",
        config.className
      )}
    >
      {config.icon}
      {config.label}
    </span>
  );
}

interface DomainPricingTableClientProps {
  pricingData: PricingCategory[];
  lastUpdated: string | null;
}

export function DomainPricingTableClient({
  pricingData,
  lastUpdated,
}: DomainPricingTableClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [exactMatch, setExactMatch] = useState(false);

  // Get All Domains Flattened For Search
  const allDomains = useMemo(() => {
    const domains: DomainPrice[] = [];
    pricingData.forEach((category) => {
      category.domains.forEach((domain) => {
        // Avoid Duplicates (Spotlight/Sale May Have Same Domains)
        if (!domains.find((d) => d.tld === domain.tld)) {
          domains.push(domain);
        }
      });
    });
    return domains;
  }, [pricingData]);

  // Filter Domains Based On Search Query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().replace(/^\./, "");
    return allDomains.filter((domain) => {
      const tld = domain.tld.toLowerCase().replace(/^\./, "");
      return exactMatch ? tld === query : tld.includes(query);
    });
  }, [searchQuery, allDomains, exactMatch]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <section className="relative py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>Domain Pricing</GradientText>
          </h2>
          <p className="px-4 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Transparent Pricing For{" "}
            <span className="font-semibold text-primary">
              {allDomains.length}+
            </span>{" "}
            Domain Extensions
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Search Bar Card */}
          <div className="mb-6 p-4 rounded-md border bg-card shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Search Input With Vanish Effect */}
              <div className="w-full sm:w-[28rem]">
                <PricingSearchInput
                  placeholders={[
                    "Search Extension...",
                    "Try .com, .net, .xyz...",
                    "Find Domain Prices...",
                  ]}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onSubmit={(e) => e.preventDefault()}
                  onClear={() => setSearchQuery("")}
                  buttonText="Clear"
                  exactMatch={exactMatch}
                  onExactMatchChange={setExactMatch}
                />
              </div>

              {/* Last Updated */}
              {lastUpdated && (
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Prices Updated:{" "}
                  {new Date(lastUpdated).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              )}
            </div>
          </div>

          {/* Search Results */}
          {isSearching && (
            <div className="mb-6 rounded-md border overflow-hidden">
              <div
                className={cn(
                  "px-4 sm:px-6 py-4 sm:py-5 border-b",
                  searchResults.length > 0
                    ? "bg-primary-alt"
                    : "bg-red-500/10 dark:bg-red-900/20"
                )}
              >
                <p
                  className={cn(
                    "text-base sm:text-lg font-semibold",
                    searchResults.length === 0 &&
                      "text-red-600 dark:text-red-400"
                  )}
                >
                  {searchResults.length > 0
                    ? `Found ${searchResults.length} Result${
                        searchResults.length > 1 ? "s" : ""
                      } For ".${searchQuery.replace(/^\./, "")}"`
                    : `We Don't Offer ".${searchQuery.replace(
                        /^\./,
                        ""
                      )}" Domain Extension Yet`}
                </p>
              </div>
              {searchResults.length > 0 && (
                <div className="bg-accent dark:bg-accent/50">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-primary/50">
                          <th className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-left text-sm sm:text-base font-semibold text-foreground bg-accent/10">
                            TLDs
                          </th>
                          <th className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-accent/20">
                            Register
                          </th>
                          <th className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-accent/30">
                            Transfer
                          </th>
                          <th className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-accent/40">
                            Renew
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchResults.map((domain, i) => (
                          <tr
                            key={i}
                            className="border-b border-border/50 last:border-b-0 hover:bg-accent/20 transition-colors"
                          >
                            <td className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold bg-accent/5">
                              <span className="inline-flex items-center">
                                <span className="text-primary">.</span>
                                <span className="text-foreground">
                                  {domain.tld.substring(1)}
                                </span>
                                {domain.tag && <TagBadge tag={domain.tag} />}
                              </span>
                            </td>
                            <td className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-base sm:text-lg text-muted-foreground border-l border-border/30 bg-accent/10">
                              {domain.register}
                              <PeriodBadge period={domain.period || 1} />
                            </td>
                            <td className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-base sm:text-lg text-muted-foreground border-l border-border/30 bg-accent/15">
                              {domain.transfer}
                              <PeriodBadge period={domain.period || 1} />
                            </td>
                            <td className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-base sm:text-lg text-muted-foreground border-l border-border/30 bg-accent/20">
                              {domain.renew}
                              <PeriodBadge period={domain.period || 1} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md border overflow-hidden"
            defaultValue="item-1"
          >
            {pricingData.map((item, index) => (
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
                        const Icon = iconMap[item.iconName];
                        return <Icon className="size-5 sm:size-6 shrink-0" />;
                      })()}
                      <span>{item.category}</span>
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
                            <th className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-left text-sm sm:text-base font-semibold text-foreground bg-accent/10">
                              TLDs
                            </th>
                            <th className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-accent/20">
                              Register
                            </th>
                            <th className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-accent/30">
                              Transfer
                            </th>
                            <th className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-sm sm:text-base font-semibold text-foreground border-l border-border/30 bg-accent/40">
                              Renew
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.domains.map((domain, i) => (
                            <tr
                              key={i}
                              className="border-b border-border/50 last:border-b-0 hover:bg-accent/20 transition-colors"
                            >
                              <td className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold bg-accent/5">
                                <span className="inline-flex items-center">
                                  <span className="text-primary">.</span>
                                  <span className="text-foreground">
                                    {domain.tld.substring(1)}
                                  </span>
                                  {domain.tag && <TagBadge tag={domain.tag} />}
                                </span>
                              </td>
                              <td className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-base sm:text-lg text-muted-foreground border-l border-border/30 bg-accent/10">
                                {domain.register}
                                <PeriodBadge period={domain.period || 1} />
                              </td>
                              <td className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-base sm:text-lg text-muted-foreground border-l border-border/30 bg-accent/15">
                                {domain.transfer}
                                <PeriodBadge period={domain.period || 1} />
                              </td>
                              <td className="px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-center text-base sm:text-lg text-muted-foreground border-l border-border/30 bg-accent/20">
                                {domain.renew}
                                <PeriodBadge period={domain.period || 1} />
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
