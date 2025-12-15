import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { TrendingUp, Award, BarChart3 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stats & Records | Pakistan Cricket Board",
  description:
    "Top performers and cricketing records of the Pakistan Cricket Board.",
};

export default function StatsPage() {
  const topStats = [
    {
      title: "Most Runs (2024)",
      name: "Babar Azam",
      value: "1,250",
      icon: <TrendingUp className="text-pct-gold" />,
    },
    {
      title: "Most Wickets (2024)",
      name: "Shaheen Afridi",
      value: "45",
      icon: <BarChart3 className="text-pct-green" />,
    },
    {
      title: "Highest Score",
      name: "Fakhar Zaman",
      value: "193*",
      icon: <Award className="text-blue-400" />,
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-20">
      <div className="mb-16">
        <h1 className="text-6xl md:text-8xl font-oswald font-bold text-foreground mb-2 uppercase tracking-tighter">
          Statistics
        </h1>
        <div className="h-1 w-32 bg-pct-gold"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {topStats.map((stat, i) => (
          <GlassCard key={i} className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 transform scale-150 group-hover:scale-125 transition-transform duration-500">
              {stat.icon}
            </div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
              {stat.title}
            </h3>
            <div className="text-5xl md:text-7xl font-oswald font-bold text-foreground mb-2">
              {stat.value}
            </div>
            <div className="text-pct-gold font-bold uppercase tracking-wide">
              {stat.name}
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-10 text-center">
        <h2 className="text-3xl font-oswald text-foreground mb-4">
          FULL STATS ARCHIVE
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Detailed career statistics and historical records are being compiled.
          Access the full database soon.
        </p>
        <button className="px-8 py-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors uppercase text-xs font-bold tracking-widest">
          Coming Soon
        </button>
      </GlassCard>
    </main>
  );
}
