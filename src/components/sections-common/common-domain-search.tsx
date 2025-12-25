"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DomainSearchResults } from "./domain-search-results";
import { checkDomainAvailability } from "@/lib/actions/domain-check";
import type { DomainCheckResult } from "@/lib/types/domain-check";
import { cn } from "@/lib/utils";
import domainPricingData from "@/data/domain-pricing.json";

// Get Actual TLD Count From Domain Pricing Data
const INITIAL_TLD_COUNT = domainPricingData.domains?.length || 550;

// WHMCS Cart URL For Adding Domains
const WHMCS_CART_URL =
  process.env.NEXT_PUBLIC_WHMCS_CART_URL ||
  "https://hub.multilat.xyz/cart.php?a=add&domain=register";

// Domain Pricing API Route (Proxied To Avoid CORS)
const DOMAIN_PRICING_API = "/api/domain-pricing";

// Debounce Delay In Milliseconds
const DEBOUNCE_DELAY = 1000;

// Default TLDs To Search (Includes Spotlight TLDs)
const DEFAULT_SEARCH_TLDS =
  "com,net,org,xyz,ai,top,shop,store,info,online,biz,tech";

// Domain Pricing Type
interface DomainPriceData {
  tld: string;
  register: string;
  transfer: string;
  renew: string;
  period?: number; // 1 = Per Year, 2 = Per 2 Years
}

export function CommonDomainSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<DomainCheckResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tldCount, setTldCount] = useState(INITIAL_TLD_COUNT);

  // Refs For Debouncing And Click Outside
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cache Domain Pricing Data
  const pricingCacheRef = useRef<Map<string, DomainPriceData>>(new Map());
  const pricingLoadedRef = useRef(false);

  // Load Domain Pricing On Mount
  useEffect(() => {
    if (pricingLoadedRef.current) return;

    const loadPricing = async () => {
      try {
        const response = await fetch(DOMAIN_PRICING_API);
        if (!response.ok) return;

        const data = await response.json();
        const allDomains = [
          ...(data.spotlightTlds || []),
          ...(data.domains || []),
        ];

        allDomains.forEach((domain: DomainPriceData) => {
          const tld = domain.tld.toLowerCase().startsWith(".")
            ? domain.tld.toLowerCase()
            : `.${domain.tld.toLowerCase()}`;
          pricingCacheRef.current.set(tld, domain);
        });

        // Update TLD Count From API
        const domainsCount = data.domains?.length || INITIAL_TLD_COUNT;
        setTldCount(domainsCount);

        pricingLoadedRef.current = true;
      } catch (error) {
        console.error("Failed To Load Domain Pricing:", error);
      }
    };

    loadPricing();
  }, []);

  // Handle Click Outside To Close Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const placeholders = [
    "Search Domain Names...",
    "Check Availability...",
    `${tldCount}+ Domain Extensions...`,
    "Instant Purchase & Activation...",
    "Domain ID Protection...",
    "Start Building Your Web Presence...",
  ];

  // Search Function Using Server Action
  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      setIsDropdownOpen(false);
      return;
    }

    setIsLoading(true);
    setIsDropdownOpen(true);

    try {
      // Call Server Action (Not A Public API Endpoint)
      const data = await checkDomainAvailability(
        query.trim(),
        DEFAULT_SEARCH_TLDS
      );

      if (data.success && data.results) {
        // Merge Pricing From Cache If Backend Didn't Provide It
        const resultsWithPricing = data.results.map((result) => {
          // If Pricing Already Has Register Price, Use It
          if (
            result.pricing?.register &&
            typeof result.pricing.register === "string"
          ) {
            return result;
          }

          // Otherwise, Get From Cache
          const tld = result.tld.toLowerCase();
          const cachedPricing = pricingCacheRef.current.get(tld);

          if (cachedPricing) {
            return {
              ...result,
              period: cachedPricing.period || 1,
              pricing: {
                register: cachedPricing.register,
                transfer: cachedPricing.transfer,
                renew: cachedPricing.renew,
                period: cachedPricing.period || 1,
              },
            };
          }

          return result;
        });

        setResults(resultsWithPricing);
        setIsDropdownOpen(true);
      } else {
        console.error("Domain Check Failed:", data.error);
        setResults([]);
      }
    } catch (error) {
      console.error("Domain Check Error:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Sanitize Domain Input
   * - Extract domain from URLs (strip protocol, www, path, query, fragment)
   * - Allow: letters (including Unicode/IDN), numbers, hyphens, dots
   * - Remove: spaces, underscores, special characters
   * - Hyphens cannot be at start/end of domain name or TLD parts
   */
  const sanitizeDomainInput = (input: string): string => {
    let cleaned = input.trim().toLowerCase();

    // Strip Protocol (http://, https://, ftp://, etc.) - Allow Spaces Around : And //
    cleaned = cleaned.replace(/^[a-z][a-z0-9+.-]*\s*:\s*\/\s*\/\s*/i, "");

    // Strip www. Prefix - Allow Optional Spaces Around www And Dot
    cleaned = cleaned.replace(/^\s*www\s*\.\s*/i, "");

    // Remove Any Remaining Leading/Trailing Spaces
    cleaned = cleaned.replace(/\s+/g, "");

    // Strip Path, Query String, And Fragment (Everything After First /)
    cleaned = cleaned.replace(/[/?#].*$/, "");

    // Strip Port Number (e.g., :8080, :443)
    cleaned = cleaned.replace(/:\d+$/, "");

    // Strip Trailing Dot (Some URLs End With Dot For FQDN)
    cleaned = cleaned.replace(/\.$/, "");

    // Now Apply Standard Domain Sanitization
    return cleaned
      .replace(/[\s_]/g, "") // Remove Spaces And Underscores
      .replace(/[^a-zA-Z0-9\u0080-\uFFFF.\-]/g, "") // Keep Alphanumeric, Unicode, Dots, Hyphens
      .replace(/\.{2,}/g, ".") // Replace Multiple Dots With Single Dot
      .replace(/-{2,}/g, "-") // Replace Multiple Hyphens With Single Hyphen
      .replace(/^[-.]|[-.]$/g, "") // Remove Leading/Trailing Hyphens Or Dots
      .replace(/-\./g, ".") // Remove Hyphen Before Dot (test-.com → test.com)
      .replace(/\.-/g, ".") // Remove Hyphen After Dot (.com-test → .comtest, then handle)
      .split(".") // Split By Dots
      .map((part) => part.replace(/^-+|-+$/g, "")) // Remove Leading/Trailing Hyphens From Each Part
      .filter((part) => part.length > 0) // Remove Empty Parts
      .join("."); // Rejoin
  };

  // Handle Input Change With Debounced Search
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const sanitizedValue = sanitizeDomainInput(rawValue);
      setSearchQuery(sanitizedValue);

      // Clear Previous Timer
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      // If Input Is Empty, Clear Results
      if (!sanitizedValue.trim()) {
        setResults([]);
        setIsDropdownOpen(false);
        return;
      }

      // Set New Debounce Timer
      debounceTimerRef.current = setTimeout(() => {
        performSearch(sanitizedValue);
      }, DEBOUNCE_DELAY);
    },
    [performSearch]
  );

  // Cleanup Debounce Timer On Unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  // Handle Form Submit (Immediate Search)
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Clear Debounce Timer And Search Immediately
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      performSearch(searchQuery);
    },
    [searchQuery, performSearch]
  );

  // Handle Buy Now Click
  const handleBuyNow = useCallback((domain: string) => {
    const [sld, ...tldParts] = domain.split(".");
    const tld = tldParts.join(".");

    const cartUrl = `${WHMCS_CART_URL}&sld=${encodeURIComponent(
      sld
    )}&tld=.${encodeURIComponent(tld)}`;
    window.open(cartUrl, "_blank");
  }, []);

  // Handle Clear - Reset Everything
  const handleClear = useCallback(() => {
    setSearchQuery("");
    setResults([]);
    setIsDropdownOpen(false);
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
  }, []);

  const showDropdown = isDropdownOpen && (isLoading || results.length > 0);

  return (
    <div className="mb-6 sm:mb-8 px-4 sm:px-6">
      <div
        ref={containerRef}
        className={cn(
          "relative w-full max-w-3xl mx-auto transition-all duration-300 ease-out",
          showDropdown ? "rounded-t-2xl rounded-b-xl" : "rounded-full"
        )}
      >
        {/* Glowing Effect Wrapper */}
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow={true}
          disabled={false}
          proximity={48}
          inactiveZone={0.01}
        />

        {/* Search Input */}
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          onClear={handleClear}
          hasDropdown={showDropdown}
          disableVanish={true}
        />

        {/* Connected Dropdown Results */}
        <AnimatePresence>
          {showDropdown && (
            <DomainSearchResults
              results={results}
              isLoading={isLoading}
              query={searchQuery}
              onAddToCart={handleBuyNow}
              isConnected={true}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
