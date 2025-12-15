"use client";
import React from "react";
import { matches } from "@/data/matches";
import GlassCard from "@/components/ui/GlassCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function MatchCenter() {
  useGSAP(() => {
    gsap.from(".match-card", {
      scrollTrigger: {
        trigger: ".match-center-container",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
  });

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 bg-zinc-950 flex flex-col justify-center match-center-container relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pct-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mb-12 z-10">
        <h2 className="text-6xl md:text-8xl font-oswald text-transparent bg-clip-text bg-gradient-to-r from-pct-green to-pct-gold mb-4">
          MATCH CENTER
        </h2>
        <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl">
          Stay updated with the latest fixtures and results of the Shaheens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {matches.map((match) => (
          <GlassCard
            key={match.id}
            className="match-card p-6 flex flex-col gap-4 group hover:bg-white/10 border-white/5"
          >
            <div className="flex justify-between items-center mb-2">
              <span
                className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full ${
                  match.status === "completed"
                    ? "bg-pct-green/20 text-pct-green"
                    : match.status === "live"
                    ? "bg-red-500/20 text-red-500 animate-pulse"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {match.status}
              </span>
              <span className="text-pct-gold text-xs font-bold tracking-widest uppercase">
                {match.series}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-center">
                <div className="text-4xl">🇵🇰</div>
                <span className="font-bold text-lg font-oswald">PAK</span>
              </div>
              <div className="text-2xl font-oswald text-white/20">VS</div>
              <div className="text-center">
                <div className="text-4xl">{match.opponentFlag}</div>
                <span className="font-bold text-lg font-oswald uppercase">
                  {match.opponent.substring(0, 3)}
                </span>
              </div>
            </div>

            {match.result && (
              <div className="text-center py-4 bg-white/5 rounded-lg border border-white/5 mt-2">
                <p className="text-pct-gold font-bold uppercase tracking-wide">
                  {match.result}
                </p>
              </div>
            )}

            <div className="mt-auto space-y-2 text-sm text-white/50 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-pct-gold" />
                <span>{match.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-pct-gold" />
                <span>{match.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-pct-gold" />
                <span>{match.venue}</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
