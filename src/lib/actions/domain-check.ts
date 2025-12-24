"use server";

/**
 * Domain Check Server Action
 *
 * Executes On Server Only - No Public API Endpoint Exposed
 * Calls WHMCS Domain Check Endpoint Which Queries ResellerClub
 */

import type { DomainCheckResult, DomainCheckResponse } from "@/lib/types/domain-check";

// WHMCS Domain Check Endpoint (Calls ResellerClub From Server With Whitelisted IP)
const WHMCS_DOMAINCHECK_URL =
  process.env.WHMCS_DOMAINCHECK_URL || "https://hub.multilat.xyz/mtl_domaincheck.php";
const WHMCS_DOMAINCHECK_KEY = process.env.WHMCS_DOMAINCHECK_KEY || "";

// Default TLDs To Check If No Specific TLD Provided (Fallback If Frontend Doesn't Pass)
const DEFAULT_TLDS = ["com", "net", "org", "xyz", "online", "store"];

// WHMCS Domain Check Response Type
interface WhmcsDomainCheckResponse {
  success: boolean;
  query: string;
  results: Array<{
    domain: string;
    tld: string;
    available: boolean;
    status: string;
    premium: boolean;
    pricing: null;
    premiumPricing?: {
      register: string;
      renew: string;
      transfer: string;
    };
  }>;
  error?: string;
}

/**
 * Call WHMCS Domain Check Endpoint
 * The PHP Script On WHMCS Server Calls ResellerClub Directly
 * (WHMCS Server IP Is Whitelisted With ResellerClub)
 */
async function checkDomainsWithWhmcs(
  sld: string,
  tlds: string[]
): Promise<WhmcsDomainCheckResponse> {
  // Build URL With Parameters
  const url = new URL(WHMCS_DOMAINCHECK_URL);
  url.searchParams.set("key", WHMCS_DOMAINCHECK_KEY);
  url.searchParams.set("sld", sld);
  url.searchParams.set("tlds", tlds.join(","));

  const response = await fetch(url.toString(), {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`WHMCS Domain Check Returned ${response.status}`);
  }

  const data: WhmcsDomainCheckResponse = await response.json();

  if (!data.success) {
    throw new Error(data.error || "WHMCS Domain Check Failed");
  }

  return data;
}

/**
 * Check Domain Availability - Server Action
 *
 * This Function Runs On The Server Only
 * No Public API Endpoint Is Exposed
 *
 * @param domainInput - Domain Name To Check (e.g., "example" Or "example.com")
 * @param tldsParam - Optional Comma-Separated TLDs To Check
 */
export async function checkDomainAvailability(
  domainInput: string,
  tldsParam?: string
): Promise<DomainCheckResponse> {
  if (!domainInput || !domainInput.trim()) {
    return {
      success: false,
      query: "",
      results: [],
      error: "Domain Parameter Required",
      code: "MISSING_DOMAIN",
    };
  }

  try {
    // Clean Domain Input
    const cleanDomain = domainInput
      .toLowerCase()
      .trim()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "");

    // Extract SLD And TLD
    let sld = cleanDomain;
    let requestedTld: string | null = null;

    if (cleanDomain.includes(".")) {
      const parts = cleanDomain.split(".");
      sld = parts[0];
      requestedTld = parts.slice(1).join("."); // Without Dot Prefix For ResellerClub
    }

    // Determine TLDs To Check (Without Dot Prefix)
    let tldsToCheck: string[] = [];

    // Get Base TLD List From Param Or Default
    const baseTlds = tldsParam
      ? tldsParam.split(",").map((t) => t.trim().replace(/^\./, ""))
      : DEFAULT_TLDS;

    if (requestedTld) {
      // User Typed A Specific TLD (e.g., "example.amsterdam")
      // Put That TLD First, Then Add Others From The List
      tldsToCheck = [requestedTld];
      for (const tld of baseTlds) {
        if (tld !== requestedTld && !tldsToCheck.includes(tld)) {
          tldsToCheck.push(tld);
        }
      }
    } else {
      // No Specific TLD Typed, Use The Full List
      tldsToCheck = baseTlds;
    }

    // Check All Domains Via WHMCS Endpoint (Which Calls ResellerClub)
    const whmcsResponse = await checkDomainsWithWhmcs(sld, tldsToCheck);

    // Use Results From WHMCS (Already Formatted With Premium Pricing)
    const results: DomainCheckResult[] = whmcsResponse.results.map((result) => ({
      domain: result.domain,
      tld: result.tld,
      available: result.available,
      status: result.status,
      premium: result.premium,
      pricing: null, // Pricing Merged By Frontend
      premiumPricing: result.premiumPricing,
    }));

    // Sort Results: Requested TLD First (Regardless Of Availability), Then Available First
    results.sort((a, b) => {
      // If User Typed A Full Domain (e.g., "testing.online"), That TLD Comes First
      if (requestedTld) {
        const reqTldWithDot = "." + requestedTld;
        const aIsRequested = a.tld === reqTldWithDot;
        const bIsRequested = b.tld === reqTldWithDot;

        if (aIsRequested && !bIsRequested) return -1;
        if (!aIsRequested && bIsRequested) return 1;
      }

      // Then Sort By Availability (Available First)
      if (a.available && !b.available) return -1;
      if (!a.available && b.available) return 1;

      return 0;
    });

    return {
      success: true,
      query: sld,
      results: results,
    };
  } catch (error) {
    console.error("Domain Check Error:", error);

    return {
      success: false,
      query: domainInput,
      results: [],
      error: "Failed To Check Domain Availability",
      code: "API_ERROR",
    };
  }
}
