"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  X,
  Loader2,
  ShoppingCart,
  ArrowRight,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { DomainCheckResult } from "@/lib/types/domain-check";

interface DomainSearchResultsProps {
  results: DomainCheckResult[];
  isLoading: boolean;
  query: string;
  onAddToCart?: (domain: string) => void;
  isConnected?: boolean;
}

export function DomainSearchResults({
  results,
  isLoading,
  query,
  onAddToCart,
  isConnected = false,
}: DomainSearchResultsProps) {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "w-full overflow-hidden",
          isConnected ? "" : "max-w-3xl mx-auto mt-4"
        )}
      >
        <div
          className={cn(
            "bg-card/95 backdrop-blur-sm border-x border-b border-border p-4",
            isConnected ? "rounded-b-xl border-t-0" : "rounded-xl border"
          )}
        >
          <div className="flex items-center justify-center gap-3">
            <Loader2 className="size-5 animate-spin text-primary" />
            <span className="text-sm text-muted-foreground">
              Checking Availability For <strong>{query}</strong>...
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  // Count Available Domains For Header (But Keep Backend Sort Order)
  const availableCount = results.filter((r) => r.available).length;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "w-full overflow-hidden",
        isConnected ? "" : "max-w-3xl mx-auto mt-4"
      )}
    >
      <div
        className={cn(
          "bg-card/95 backdrop-blur-sm overflow-hidden",
          isConnected
            ? "rounded-b-xl border-x border-b border-border"
            : "rounded-xl border border-border"
        )}
      >
        {/* Results Header */}
        <div
          className={cn(
            "px-4 py-2.5 border-b border-border bg-muted/30",
            isConnected && "border-t"
          )}
        >
          <p className="text-sm text-muted-foreground">
            Found{" "}
            <span className="font-semibold text-primary">{availableCount}</span>{" "}
            Available Domain{availableCount !== 1 ? "s" : ""} For{" "}
            <strong>&quot;{query}&quot;</strong>
          </p>
        </div>

        {/* Results List - Respects Backend Sort Order (Typed Domain First) */}
        <div className="divide-y divide-border max-h-[320px] overflow-y-auto">
          <AnimatePresence mode="popLayout">
            {results.map((result, index) => (
              <DomainResultRow
                key={result.domain}
                result={result}
                index={index}
                onAddToCart={onAddToCart}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-border bg-muted/30">
          <a
            href="/domains"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            View All Domain Pricing
            <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

interface DomainResultRowProps {
  result: DomainCheckResult;
  index: number;
  onAddToCart?: (domain: string) => void;
}

function DomainResultRow({ result, index, onAddToCart }: DomainResultRowProps) {
  const isAvailable = result.available;
  const isPremium = result.premium;

  // Get Registration Price - Handle Various Formats (String, Number, Object)
  const rawPrice = isPremium
    ? result.premiumPricing?.register
    : result.pricing?.register;

  // Safely Convert Price To Displayable String (Remove Decimals For BDT)
  const getDisplayPrice = (value: unknown): string | null => {
    if (typeof value === "string" && value.trim()) {
      // Remove Decimal Part (e.g., "৳15,000.00" → "৳15,000")
      return value.replace(/\.\d+$/, "");
    }
    if (typeof value === "number") {
      return Math.round(value).toLocaleString();
    }
    return null;
  };

  const price = getDisplayPrice(rawPrice);

  // Get Period (1 = Per Year, 2 = Per 2 Years)
  const period = result.period || result.pricing?.period || 1;
  const periodLabel = period === 2 ? "Per 2 Years" : "Per Year";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.15, delay: index * 0.03 }}
      className={cn(
        "flex items-center justify-between px-4 py-3 gap-4",
        isAvailable
          ? "bg-primary/5 hover:bg-primary/10"
          : "bg-muted/20 hover:bg-muted/30",
        "transition-colors"
      )}
    >
      {/* Left Side: Domain Name And Status */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Status Icon */}
        <div
          className={cn(
            "size-9 rounded-full flex items-center justify-center shrink-0",
            isAvailable
              ? "bg-green-500/20 text-green-600 dark:text-green-400"
              : "bg-red-500/20 text-red-600 dark:text-red-400"
          )}
        >
          {isAvailable ? (
            <Check className="size-4" />
          ) : (
            <X className="size-4" />
          )}
        </div>

        {/* Domain Name And Availability */}
        <div className="min-w-0 text-left">
          <div className="flex items-center gap-2">
            <p
              className={cn(
                "text-sm sm:text-base font-semibold truncate text-left",
                isAvailable ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {result.domain}
            </p>
            {/* Premium Tag - Beside Domain On Desktop */}
            {isPremium && isAvailable && (
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-medium bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
                <Crown className="size-3" />
                Premium
              </span>
            )}
          </div>
          {/* Premium Tag - Below Domain On Mobile */}
          {isPremium && isAvailable && (
            <span className="sm:hidden inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-medium bg-amber-500/20 text-amber-600 dark:text-amber-400 mt-0.5">
              <Crown className="size-3" />
              Premium
            </span>
          )}
          <p className={cn(
            "text-xs text-muted-foreground text-left mt-0.5",
            isPremium && isAvailable && "hidden sm:block"
          )}>
            {isAvailable
              ? isPremium
                ? "Premium Domain Available"
                : "Available For Registration"
              : "Already Registered"}
          </p>
        </div>
      </div>

      {/* Right Side: Price And Action */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Price */}
        {isAvailable && price && (
          <div className="text-right">
            <p className="text-sm sm:text-base font-bold text-primary">{price}</p>
            <p className="text-xs text-muted-foreground">{periodLabel}</p>
          </div>
        )}

        {/* Action Button */}
        {isAvailable ? (
          <button
            onClick={() => onAddToCart?.(result.domain)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-primary/20 ring-1 ring-primary/60 text-sm font-semibold transition-colors hover:bg-primary/30 hover:ring-primary/80 cursor-pointer text-primary focus:outline-none focus:ring-2 focus:ring-primary/70"
          >
            <ShoppingCart className="size-3.5" />
            <span className="hidden sm:inline">Buy Now</span>
          </button>
        ) : (
          <span className="text-sm text-muted-foreground">Taken</span>
        )}
      </div>
    </motion.div>
  );
}
