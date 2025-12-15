import React from "react";
import { matches } from "@/data/matches";
import GlassCard from "@/components/ui/GlassCard";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixtures & Results | Pakistan Cricket Board",
  description:
    "Upcoming matches, results, and schedule for the Pakistan Cricket Board.",
};

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-20">
      <div className="mb-16 text-center">
        <h1 className="text-6xl md:text-8xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 uppercase tracking-tighter">
          Fixtures & Results
        </h1>
        <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
          Follow the journey of the Shaheens across the globe.
        </p>
      </div>

      <div className="space-y-6 max-w-5xl mx-auto">
        {matches.map((match) => (
          <GlassCard
            key={match.id}
            className="p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-pct-gold/30 transition-all duration-300"
          >
            {/* Date & Time */}
            <div className="flex flex-col items-center md:items-start min-w-[150px]">
              <div className="text-sm text-pct-gold font-bold uppercase tracking-widest mb-1">
                {match.date}
              </div>
              <div className="text-white/40 text-xs flex items-center gap-1">
                <Clock size={12} /> {match.time}
              </div>
            </div>

            {/* Matchup */}
            <div className="flex items-center gap-8 flex-1 justify-center">
              <div className="text-center">
                <span className="text-5xl block mb-2">🇵🇰</span>
                <span className="font-oswald font-bold text-xl">PAK</span>
              </div>
              <div className="text-center px-4 py-1 bg-white/5 rounded-full border border-white/10">
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  VS
                </span>
              </div>
              <div className="text-center">
                <span className="text-5xl block mb-2">
                  {match.opponentFlag}
                </span>
                <span className="font-oswald font-bold text-xl uppercase">
                  {match.opponent.substring(0, 3)}
                </span>
              </div>
            </div>

            {/* Info & Result */}
            <div className="flex flex-col items-center md:items-end min-w-[200px] text-center md:text-right">
              <div className="text-white/60 text-sm mb-1 flex items-center gap-1">
                <MapPin size={12} className="text-pct-gold" /> {match.venue}
              </div>
              <div className="text-xs text-white/30 uppercase tracking-widest mb-2">
                {match.series}
              </div>

              {match.status === "completed" ? (
                <div className="text-pct-gold font-bold uppercase text-sm border border-pct-gold/20 bg-pct-gold/5 px-3 py-1 rounded">
                  {match.result}
                </div>
              ) : (
                <button className="px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-pct-gold transition-colors rounded-full">
                  Buy Tickets
                </button>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </main>
  );
}
