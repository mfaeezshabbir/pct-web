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
    <section className="py-20 px-6 md:px-20 bg-background flex flex-col justify-center match-center-container relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pct-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mb-12 z-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-pct-green dark:text-pct-gold uppercase tracking-tight mb-6">
            Match Center
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light tracking-wide max-w-2xl mb-8">
            Stay updated with the latest fixtures and results of the Shaheens.
          </p>
          <div className="h-1 w-20 bg-[#E31E24] rounded-full"></div>
        </div>
        <Link
          href="/matches"
          className="text-pct-gold hover:text-foreground transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2"
        >
          View All Fixtures <ArrowRight size={16} />
        </Link>
      </div>

      <div className="z-10 flex flex-col gap-8">
        {/* FEATURED MATCH CARD */}
        <div className="featured-match w-full relative group">
          {/* Ticket Layout Container */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-2xl flex flex-col md:flex-row min-h-[400px]">
            {/* Graphics / Left Side */}
            <div className="relative w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              {/* Dynamic Background Image - Placeholder for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-pct-green/90 to-black z-10 mix-blend-multiply transition-colors dark:from-pct-green/90 dark:to-black"></div>
              <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 z-10 pointer-events-none"></div>
              {/* Abstract shapes */}
              <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-pct-gold/20 rounded-full blur-[100px] z-0"></div>

              {/* Header */}
              <div className="relative z-20 flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-pct-gold font-bold tracking-[0.2em] text-xs uppercase mb-1">
                    {featuredMatch.series}
                  </span>
                  <span className="text-white/80 text-sm font-light flex items-center gap-2">
                    <MapPin size={12} className="text-pct-gold" />{" "}
                    {featuredMatch.venue}
                  </span>
                </div>
                <div
                  className={`px-4 py-2 rounded-full border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest ${
                    featuredMatch.status === "live"
                      ? "bg-red-600 border-red-500 animate-pulse text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {featuredMatch.status === "live"
                    ? "● LIVE"
                    : featuredMatch.status}
                </div>
              </div>

              {/* Main Matchup */}
              {/* Main Matchup */}
              <div className="relative z-20 flex flex-col md:flex-row items-center gap-8 md:gap-16 my-8 md:my-0">
                <div className="text-center transform group-hover:-translate-y-2 transition-transform duration-500 z-10">
                  <div className="text-6xl md:text-8xl mb-2 relative">🇵🇰</div>
                  <div className="text-2xl font-oswald font-bold text-white tracking-widest relative">
                    PAKISTAN
                  </div>
                </div>

                <div className="flex flex-col items-center z-10">
                  <span className="text-4xl font-oswald text-pct-gold italic font-bold">
                    VS
                  </span>
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent my-2"></div>
                </div>

                <div className="text-center transform group-hover:-translate-y-2 transition-transform duration-500 z-10">
                  <div className="text-6xl md:text-8xl mb-2 relative">
                    {featuredMatch.opponentFlag}
                  </div>
                  <div className="text-2xl font-oswald font-bold text-white tracking-widest uppercase relative">
                    {featuredMatch.opponent}
                  </div>
                </div>
              </div>

              {/* Footer Info */}
              <div className="relative z-20">
                <div className="flex items-center gap-6 text-sm text-white/60 font-mono">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {featuredMatch.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} /> {featuredMatch.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Ticket Stub / Actions - Right Side */}
            <div className="relative w-full md:w-1/3 bg-background/50 dark:bg-white/5 backdrop-blur-xl border-l border-border p-8 flex flex-col justify-center items-center text-center">
              {/* Perforated Line Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-border -ml-[1px] hidden md:block"></div>

              {/* Cutout circles for ticket effect */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-background rounded-full hidden md:block shadow-inner border-b border-r border-border/50"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-background rounded-full hidden md:block shadow-inner border-t border-r border-border/50"></div>

              <div className="mb-6">
                <h3 className="text-pct-gold font-oswald text-xl mb-2">
                  MATCH DAY
                </h3>
                <p className="text-xs text-muted-foreground max-w-[200px] mx-auto">
                  Purchase online to secure your seat at the stadium.
                </p>
              </div>

              {featuredMatch.result ? (
                <div className="py-4 px-6 bg-pct-green/20 border border-pct-green/50 rounded-lg">
                  <p className="text-pct-green font-bold uppercase tracking-widest text-sm">
                    {featuredMatch.result}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 w-full max-w-[200px]">
                  <button className="w-full py-3 bg-pct-gold text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors rounded">
                    Buy Tickets
                  </button>
                  <button className="w-full py-3 bg-transparent border border-border text-foreground font-bold uppercase text-xs tracking-widest hover:bg-white/10 dark:hover:bg-white/10 hover:bg-black/5 transition-colors rounded">
                    Match Data
                  </button>
                </div>
              )}

              {/* Fake Barcode */}
              <div className="mt-8 opacity-50">
                <div className="flex gap-1 h-8 justify-center">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-[${
                        i % 2 === 0 || i % 5 === 0 ? "2px" : "4px"
                      }] bg-foreground h-full inline-block`}
                    ></div>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-muted-foreground tracking-[0.5em] mt-1 block">
                  84930219
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER MATCHES - Horizontal Scroll or Grid */}
        <div className="other-matches-list grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherMatches.slice(0, 3).map((match) => (
            <GlassCard
              key={match.id}
              className="other-match-card p-6 flex flex-col justify-between group hover:bg-white/10 dark:hover:bg-white/10 hover:bg-black/5 border-border opacity-80 hover:opacity-100 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    {match.series}
                  </span>
                  <span className="text-lg font-oswald font-bold text-foreground">
                    {match.venue.split(",")[0]}
                  </span>
                </div>
                <span
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded ${
                    match.status === "completed"
                      ? "bg-muted text-muted-foreground"
                      : "bg-pct-gold/20 text-pct-gold"
                  }`}
                >
                  {match.status}
                </span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇵🇰</span>
                  <span className="font-oswald font-bold text-foreground">
                    PAK
                  </span>
                </div>
                <span className="text-muted-foreground text-xs">VS</span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{match.opponentFlag}</span>
                  <span className="font-oswald font-bold uppercase text-foreground">
                    {match.opponent.substring(0, 3)}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  {match.date}
                </span>
                {match.result ? (
                  <span className="text-xs font-bold text-pct-gold">
                    {match.result}
                  </span>
                ) : (
                  <span className="text-xs font-bold text-foreground hover:text-pct-gold transition-colors cursor-pointer">
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
