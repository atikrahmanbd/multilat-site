/**
 * Domain Check Types
 * Shared Between Server Action And Client Components
 */

export interface DomainCheckResult {
  domain: string;
  tld: string;
  available: boolean;
  status: string;
  premium?: boolean;
  period?: number; // 1 = Per Year, 2 = Per 2 Years
  pricing: {
    register: string | null;
    transfer: string | null;
    renew: string | null;
    period?: number;
  } | null;
  premiumPricing?: {
    register: string;
    renew: string;
  };
  error?: string;
}

export interface DomainCheckResponse {
  success: boolean;
  query: string;
  currency?: {
    code: string;
    prefix: string;
    suffix: string;
  };
  totalTlds?: number;
  results: DomainCheckResult[];
  error?: string;
  code?: string;
}
