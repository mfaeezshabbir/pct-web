import { NextResponse } from "next/server";
import { fetchRankings } from "@/lib/scraper";

// Cache for 1 hour to avoid spamming ICC
export const revalidate = 3600;

export async function GET() {
  try {
    const data = await fetchRankings();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch rankings" },
      { status: 500 }
    );
  }
}
