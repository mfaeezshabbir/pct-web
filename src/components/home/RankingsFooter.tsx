"use client";
import React, { useEffect, useState } from "react";
import { Trophy, Users, Shield, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

import menTest from "@/assets/team/MTEST.png";
import menODI from "@/assets/team/MODI.png";
import menT20 from "@/assets/team/MT20.png";
import womenODI from "@/assets/team/WODI.png";
import womenT20 from "@/assets/team/WT20.png";

// Define the comprehensive structure we expect from the API now
interface RankingItem {
  rank?: number;
  player?: string;
  points?: number;
  country?: string;
}

interface FormatData {
  men: {
    team: RankingItem | null;
    batting: RankingItem | null;
    bowling: RankingItem | null;
    allrounder: RankingItem | null;
  };
  women: {
    team: RankingItem | null;
    batting: RankingItem | null;
    bowling: RankingItem | null;
    allrounder: RankingItem | null;
  };
}

interface RankingsDataTree {
  test: FormatData;
  odi: FormatData;
  t20: FormatData;
}

export default function RankingsFooter() {
  const [activeTab, setActiveTab] = useState<"test" | "odi" | "t20">("t20");
  const [data, setData] = useState<RankingsDataTree | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch("/api/rankings");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const currentData = data ? data[activeTab] : null;

  // --- Skeleton Loader ---
  const RankingsSkeleton = () => (
    <div className="w-full bg-white dark:bg-black/95 border-t border-gray-100 dark:border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-white/10 animate-pulse" />
            <div className="space-y-2">
              <div className="h-6 w-32 bg-gray-200 dark:bg-white/10 rounded animate-pulse" />
              <div className="h-3 w-24 bg-gray-200 dark:bg-white/10 rounded animate-pulse" />
            </div>
          </div>
          <div className="h-10 w-64 bg-gray-200 dark:bg-white/10 rounded-lg animate-pulse" />
        </div>

        {/* Content Skeleton */}
        <div className="space-y-16">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-6">
              {/* Divider Skeleton */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 dark:bg-white/10 rounded animate-pulse" />
                <div className="h-px bg-gray-200 dark:bg-white/10 grow" />
              </div>
              {/* Team Card Skeleton */}
              <div className="h-48 md:h-64 w-full rounded-2xl bg-gray-200 dark:bg-white/10 animate-pulse" />
              {/* Player Cards Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="h-24 w-full rounded-xl bg-gray-200 dark:bg-white/10 animate-pulse"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (!data && loading) {
    return <RankingsSkeleton />;
  }

  // Render a player card
  const PlayerRankCard = ({
    title,
    item,
  }: {
    title: string;
    item: RankingItem | null;
  }) => {
    const rank = item?.rank || "N/A";
    const name = item?.player || "N/A";

    return (
      <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300">
        {/* Rank Box */}
        <div className="flex flex-col items-center justify-center bg-pct-green/10 dark:bg-pct-gold/10 text-pct-green dark:text-pct-gold min-w-[3.5rem] h-14 rounded-lg">
          <span className="text-[10px] uppercase font-bold tracking-wider opacity-60 leading-none mb-1">
            Rank
          </span>
          <span className="text-2xl font-oswald font-bold leading-none">
            {rank}
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] text-gray-400 dark:text-white/40 uppercase tracking-widest font-bold mb-1">
            {title}
          </span>
          <span className="text-base font-bold text-gray-900 dark:text-white truncate">
            {name}
          </span>
        </div>
      </div>
    );
  };

  // Image Assets Mapping
  const TEAM_IMAGES = {
    menTest,
    menODI,
    menT20,
    womenODI,
    womenT20,
  };

  // Render a team card
  const TeamRankCard = ({
    item,
    title,
    image,
  }: {
    item: RankingItem | null;
    title: string;
    image?: string | StaticImageData;
  }) => {
    const rank = item?.rank || "-";
    const points = item?.points || 0;

    return (
      <div className="col-span-1 md:col-span-3 h-64 relative bg-pct-green dark:bg-gradient-to-br dark:from-pct-green/20 dark:to-black/50 rounded-2xl p-6 md:px-12 flex items-center justify-between overflow-visible shadow-2xl group border border-white/10">
        {/* Left Content: Title & Name */}
        <div className="relative z-10 flex flex-col justify-center h-full w-1/3">
          <span className="text-xs font-bold text-pct-gold uppercase tracking-[0.2em] mb-2">
            {title}
          </span>
          <h3 className="text-5xl md:text-7xl font-oswald font-bold text-white italic tracking-tight mb-4">
            PAKISTAN
          </h3>
          <div className="inline-flex items-center bg-black/20 backdrop-blur-md rounded-full px-4 py-1.5 w-fit border border-white/10">
            <span className="text-xs font-bold text-white">
              {points} Rating Points
            </span>
          </div>
        </div>

        {/* Center Image: Pop-out Trio */}
        {image && (
          <div className="absolute inset-x-0 bottom-0 top-[-20%] md:top-[-40%] z-20 pointer-events-none flex justify-center items-end overflow-visible">
            <div className="relative h-full w-full max-w-lg">
              <img
                src={typeof image === "string" ? image : image.src}
                alt="Team Trio"
                className="w-full h-full object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Right Content: Big Rank */}
        <div className="relative z-10 flex flex-col items-end justify-center h-full w-1/3">
          {/* Rank Box */}
          <div className="relative z-10 bg-black/20 backdrop-blur-sm rounded-2xl w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center border border-white/10 shadow-xl">
            <span className="text-[10px] text-white/80 uppercase font-bold tracking-[0.2em] mb-1">
              Rank
            </span>
            <span className="text-5xl md:text-6xl font-oswald font-bold text-white leading-none">
              {rank}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white dark:bg-black/95 border-t border-gray-100 dark:border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-pct-green/10 dark:bg-pct-gold/10 rounded-xl text-pct-green dark:text-pct-gold">
              <Trophy size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-2xl font-oswald font-bold text-gray-900 dark:text-white leading-none mb-1">
                ICC RANKINGS
              </h2>
              <p className="text-sm text-gray-500 dark:text-white/50 font-medium">
                Live updates from ICC
              </p>
            </div>
          </div>

          {/* Segmented Control Tabs */}
          <div className="flex p-1.5 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
            {(["test", "odi", "t20"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 relative z-10",
                  activeTab === tab
                    ? "bg-pct-green text-white shadow-md dark:bg-pct-gold dark:text-black"
                    : "text-gray-500 hover:text-gray-900 dark:text-white/40 dark:hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid - Vertical Stack now */}
        <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-12">
          {/* MEN'S SECTION */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="p-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/50">
                <Users size={14} />
              </span>
              <span className="text-xs font-bold text-pct-green dark:text-pct-gold uppercase tracking-[0.2em]">
                Men's Team
              </span>
              <div className="h-px bg-gray-200 dark:bg-white/10 grow"></div>
            </div>

            <div className="flex flex-col gap-12">
              <TeamRankCard
                item={currentData?.men.team || null}
                image={
                  activeTab === "test"
                    ? TEAM_IMAGES.menTest
                    : activeTab === "odi"
                    ? TEAM_IMAGES.menODI
                    : TEAM_IMAGES.menT20
                }
                title="Team Ranking"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PlayerRankCard
                  title="Top Batter"
                  item={currentData?.men.batting || null}
                />
                <PlayerRankCard
                  title="Top Bowler"
                  item={currentData?.men.bowling || null}
                />
                <PlayerRankCard
                  title="Top All-Rounder"
                  item={currentData?.men.allrounder || null}
                />
              </div>
            </div>
          </div>

          {/* WOMEN'S SECTION */}
          {/* No test rankings for womens */}
          {activeTab !== "test" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="p-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/50">
                  <Users size={14} />
                </span>
                <span className="text-xs font-bold text-pct-green dark:text-pct-gold uppercase tracking-[0.2em]">
                  Women's Team
                </span>
                <div className="h-px bg-gray-200 dark:bg-white/10 grow"></div>
              </div>

              <div className="flex flex-col gap-12">
                <TeamRankCard
                  item={currentData?.women.team || null}
                  image={
                    activeTab === "odi"
                      ? TEAM_IMAGES.womenODI
                      : TEAM_IMAGES.womenT20
                  }
                  title="Team Ranking"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PlayerRankCard
                    title="Top Batter"
                    item={currentData?.women.batting || null}
                  />
                  <PlayerRankCard
                    title="Top Bowler"
                    item={currentData?.women.bowling || null}
                  />
                  <PlayerRankCard
                    title="Top All-Rounder"
                    item={currentData?.women.allrounder || null}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Link */}
        <div className="mt-12 flex justify-center md:justify-end border-t border-gray-100 dark:border-white/5 pt-8">
          <a
            href="https://www.icc-cricket.com/rankings"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-xs uppercase font-bold text-gray-400 hover:text-pct-green dark:text-white/30 dark:hover:text-pct-gold transition-colors"
          >
            Full Rankings on ICC
            <span className="group-hover:translate-x-1 transition-transform">
              <ChevronRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
