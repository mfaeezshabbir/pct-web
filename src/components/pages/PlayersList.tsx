"use client";
import React, { useState } from "react";
import { players } from "@/data/players";
import GlassCard from "@/components/ui/GlassCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function PlayersList() {
  const [filter, setFilter] = useState("All");

  const filteredPlayers =
    filter === "All" ? players : players.filter((p) => p.category === filter);

  useGSAP(() => {
    gsap.fromTo(
      ".player-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true,
      }
    );
  }, [filter]);

  const categories = [
    "All",
    "Batter",
    "Bowler",
    "All-Rounder",
    "Wicket-Keeper",
  ];

  return (
    <>
      <div className="mb-16 text-center">
        <h1 className="text-6xl md:text-8xl font-oswald font-bold text-foreground mb-6 uppercase tracking-tighter">
          The <span className="text-pct-green">Squad</span>
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border border-border uppercase text-xs font-bold tracking-widest transition-all duration-300 ${
                filter === cat
                  ? "bg-pct-green text-white border-pct-green"
                  : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredPlayers.map((player) => (
          <GlassCard
            key={player.id}
            className="player-card relative overflow-hidden group min-h-[450px] flex flex-col justify-end p-0 border-border"
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${player.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
            ></div>

            {/* Big Number */}
            <div className="absolute top-4 right-4 text-9xl font-oswald font-bold text-foreground/5 select-none transition-transform group-hover:scale-110 duration-700">
              {player.number}
            </div>

            <div className="relative z-10 p-8 pt-20 bg-gradient-to-t from-background via-background/80 to-transparent">
              <h2 className="text-3xl font-oswald font-bold uppercase mb-1 text-foreground">
                {player.name}
              </h2>
              <p className="text-pct-gold text-xs font-bold uppercase tracking-widest mb-6">
                {player.role}
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
                {Object.entries(player.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-muted-foreground text-[10px] uppercase tracking-widest">
                      {key}
                    </div>
                    <div className="text-xl font-oswald font-bold text-foreground">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-pct-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </GlassCard>
        ))}
      </div>
    </>
  );
}
