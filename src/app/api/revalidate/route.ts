import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Protect The Endpoint With A Secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json(
      { error: "Invalid Secret", revalidated: false },
      { status: 401 }
    );
  }

  try {
    // Revalidate The Domains Page
    revalidatePath("/domains");

    return NextResponse.json({
      revalidated: true,
      message: "Domains Page Revalidated Successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed To Revalidate",
        revalidated: false,
        details: error instanceof Error ? error.message : "Unknown Error",
      },
      { status: 500 }
    );
  }
}
