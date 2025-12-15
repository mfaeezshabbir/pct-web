"use client";
import React from "react";
import Image from "next/image"; // Removed unused Carousel imports
import { Crown, Trophy, Activity } from "lucide-react";
import heroBanner from "@/assets/hero_banner.webp";

export default function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-background flex flex-col justify-end pb-12">
      {/* FULL SCREEN HERO IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBanner}
          alt="Pakistan Cricket Team"
          fill
          className="object-cover"
          priority
          placeholder="blur"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* BOTTOM STATS / FOOTER AREA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {/* Left: Tagline */}
        <div className="text-left">
          <h3 className="text-muted-foreground text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
            <Activity size={14} className="text-pct-gold" /> Our Legacy
          </h3>
          <p className="text-xl md:text-3xl font-light text-white max-w-md leading-tight">
            From <span className="text-white/60">Shooting Stars</span> To{" "}
            <span className="text-pct-gold font-bold">World Champions</span>.
          </p>
        </div>

        {/* Center: Crown Doodle */}
        <div className="flex justify-center pb-2 opacity-80 hover:opacity-100 transition-opacity">
          <Crown
            size={64}
            className="text-pct-gold drop-shadow-lg animate-pulse"
            strokeWidth={1}
          />
        </div>

        {/* Right: Stats */}
        <div className="flex justify-between md:justify-end gap-16 text-center md:text-right">
          <div className="group cursor-pointer">
            <h4 className="text-4xl md:text-6xl font-oswald font-bold text-white group-hover:text-pct-gold transition-colors">
              1992
            </h4>
            <div className="text-xs text-white/60 uppercase tracking-widest mt-1">
              World Cup
            </div>
          </div>
          <div className="group cursor-pointer">
            <h4 className="text-4xl md:text-6xl font-oswald font-bold text-white group-hover:text-pct-gold transition-colors">
              No. 1
            </h4>
            <div className="text-xs text-white/60 uppercase tracking-widest mt-1">
              ODI Ranking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
