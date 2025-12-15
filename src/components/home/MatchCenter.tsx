"use client";
import React from "react";
import { matches } from "@/data/matches";
import GlassCard from "@/components/ui/GlassCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MatchCenter() {
  // Logic to find the featured match (Live > First Upcoming > Last Completed)
  const featuredMatch =
    matches.find((m) => m.status === "live") ||
    matches.find((m) => m.status === "upcoming") ||
    matches[0];

  const otherMatches = matches.filter((m) => m.id !== featuredMatch.id);

  /* Entry animations removed for better visibility */

  return (
    <section className="py-20 px-6 md:px-20 bg-zinc-950 flex flex-col justify-center match-center-container relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pct-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mb-12 z-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-6xl md:text-8xl font-oswald text-transparent bg-clip-text bg-gradient-to-r from-pct-green to-pct-gold mb-4">
            MATCH CENTER
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl">
            Stay updated with the latest fixtures and results of the Shaheens.
          </p>
        </div>
        <Link
          href="/matches"
          className="text-pct-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2"
        >
          View All Fixtures <ArrowRight size={16} />
        </Link>
      </div>

      <div className="z-10 flex flex-col gap-8">
        {/* FEATURED MATCH CARD */}
        <GlassCard className="featured-match w-full p-8 md:p-12 relative overflow-hidden group border-pct-gold/20">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-pct-green/10 to-transparent opacity-50`}
          ></div>
          <div className="absolute top-0 right-0 p-32 bg-pct-gold/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Status Badge */}
            <div className="absolute top-0 left-0">
              <span
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-br-2xl ${
                  featuredMatch.status === "completed"
                    ? "bg-pct-green text-white"
                    : featuredMatch.status === "live"
                    ? "bg-red-600 text-white animate-pulse"
                    : "bg-white text-black"
                }`}
              >
                {featuredMatch.status === "live"
                  ? "LIVE NOW"
                  : featuredMatch.status}
              </span>
            </div>

            {/* Teams Large View */}
            <div className="flex items-center gap-8 md:gap-20 w-full justify-center md:justify-start">
              <div className="text-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-6xl md:text-8xl mb-4">🇵🇰</div>
                <span className="font-bold text-2xl md:text-4xl font-oswald tracking-tighter">
                  PAK
                </span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-oswald text-white/20 font-bold italic">
                  VS
                </span>
                <span className="text-pct-gold text-xs font-bold uppercase tracking-widest mt-2">
                  {featuredMatch.series}
                </span>
              </div>

              <div className="text-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-6xl md:text-8xl mb-4">
                  {featuredMatch.opponentFlag}
                </div>
                <span className="font-bold text-2xl md:text-4xl font-oswald tracking-tighter uppercase">
                  {featuredMatch.opponent.substring(0, 3)}
                </span>
              </div>
            </div>

            {/* Details & Action */}
            <div className="flex flex-col items-center md:items-end gap-6 min-w-[300px] text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10">
              <div>
                <div className="text-2xl font-oswald font-bold text-white mb-2">
                  {featuredMatch.venue}
                </div>
                <div className="flex items-center gap-4 text-white/60 text-sm justify-center md:justify-end">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-pct-gold" />{" "}
                    {featuredMatch.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-pct-gold" />{" "}
                    {featuredMatch.time}
                  </span>
                </div>
              </div>

              {featuredMatch.result ? (
                <div className="text-3xl font-oswald font-bold text-pct-gold animate-pulse">
                  {featuredMatch.result}
                </div>
              ) : (
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-white text-black font-bold uppercase text-sm tracking-widest hover:bg-pct-gold transition-colors rounded-full">
                    Match Center
                  </button>
                  <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold uppercase text-sm tracking-widest hover:bg-white/10 transition-colors rounded-full">
                    Buy Tickets
                  </button>
                </div>
              )}
            </div>
          </div>
        </GlassCard>

        {/* OTHER MATCHES - Horizontal Scroll or Grid */}
        <div className="other-matches-list grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherMatches.slice(0, 3).map((match) => (
            <GlassCard
              key={match.id}
              className="other-match-card p-6 flex flex-col justify-between group hover:bg-white/10 border-white/5 opacity-80 hover:opacity-100 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                    {match.series}
                  </span>
                  <span className="text-lg font-oswald font-bold text-white">
                    {match.venue.split(",")[0]}
                  </span>
                </div>
                <span
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded ${
                    match.status === "completed"
                      ? "bg-white/10 text-white/60"
                      : "bg-pct-gold/20 text-pct-gold"
                  }`}
                >
                  {match.status}
                </span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇵🇰</span>
                  <span className="font-oswald font-bold">PAK</span>
                </div>
                <span className="text-white/20 text-xs">VS</span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{match.opponentFlag}</span>
                  <span className="font-oswald font-bold uppercase">
                    {match.opponent.substring(0, 3)}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs text-white/50">{match.date}</span>
                {match.result ? (
                  <span className="text-xs font-bold text-pct-gold">
                    {match.result}
                  </span>
                ) : (
                  <span className="text-xs font-bold text-white hover:text-pct-gold transition-colors cursor-pointer">
                    Preview &rarr;
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
