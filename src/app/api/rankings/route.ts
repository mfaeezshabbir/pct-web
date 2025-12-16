import { NextResponse } from "next/server";
import { fetchRankings } from "@/lib/scraper";

// We'll use dynamic Headers to set Cache-Control manually
export const dynamic = "force-dynamic";

function getSecondsUntilThursday(): number {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, ... 4=Thu
  const daysUntilThu = (4 - day + 7) % 7;

  // Target: Thursday at 12:00 AM
  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilThu);
  target.setHours(0, 0, 0, 0);

  // If today is Thursday, cache for 1 day (86400s) until Friday
  // Otherwise cache until the upcoming Thursday
  if (daysUntilThu === 0) {
    return 86400;
  }

  let diffSeconds = Math.floor((target.getTime() - now.getTime()) / 1000);
  // Fallback if calculation is weird, minimum 1 hour
  if (diffSeconds < 3600) diffSeconds = 3600;

  return diffSeconds;
}

export async function GET() {
  try {
    const data = await fetchRankings();

    // Calculate cache duration
    const sMaxAge = getSecondsUntilThursday();
    // stale-while-revalidate for 1 hour to allow background updates
    const staleVal = 3600;

    return NextResponse.json(data, {
      headers: {
        // Vercel Edge Cache
        "Cache-Control": `public, s-maxage=${sMaxAge}, stale-while-revalidate=${staleVal}`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch rankings" },
      { status: 500 }
    );
  }
}
