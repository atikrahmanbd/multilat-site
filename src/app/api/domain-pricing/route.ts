import { NextResponse } from "next/server";

// Cache The Response For 1 Hour
export const revalidate = 3600;

const DOMAIN_PRICING_URL =
  process.env.NEXT_PUBLIC_DOMAIN_PRICING_URL ||
  "https://hub.multilat.xyz/domain-prices.json";

export async function GET() {
  try {
    const response = await fetch(DOMAIN_PRICING_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed To Fetch Domain Pricing: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Domain Pricing Fetch Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed To Fetch Domain Pricing",
      },
      { status: 500 }
    );
  }
}
