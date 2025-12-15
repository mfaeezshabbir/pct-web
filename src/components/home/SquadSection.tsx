"use client";
import React, { useRef } from "react";
import { players } from "@/data/players";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SquadSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useGSAP(() => {
    // Subtle entry animation for the whole section
    gsap.from(".squad-title", {
      scrollTrigger: {
        trigger: ".squad-section",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".squad-card", {
      scrollTrigger: {
        trigger: ".squad-section",
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
  });

  return (
    <section className="squad-section py-24 bg-background relative overflow-hidden flex flex-col justify-center">
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pct-green/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="px-6 md:px-20 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 z-10">
        <div>
          <h2 className="text-6xl md:text-8xl font-oswald text-foreground squad-title">
            <span className="text-pct-green">THE</span> SQUAD
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md">
            Meet the Shaheens representing Pakistan on the world stage.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-20 pb-12 snap-x snap-mandatory hide-scrollbar z-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {players.map((player) => (
          <div
            key={player.id}
            className="squad-card min-w-[300px] md:min-w-[350px] snap-center"
          >
            <GlassCard className="h-[500px] relative overflow-hidden group p-0 border-border hover:border-pct-gold/50 transition-colors duration-500">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${player.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Image Placeholder - In real app, use Next Image */}
              <div className="absolute inset-0 flex items-end justify-center mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                {/* Placeholder for player image */}
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-oswald font-bold text-foreground/5 group-hover:text-foreground/20 transition-colors duration-500">
                    {player.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 dark:border-white/20 border-black/20 flex items-center justify-center group-hover:bg-pct-gold group-hover:border-pct-gold group-hover:text-black transition-all duration-300 text-foreground">
                    <ArrowRight
                      size={14}
                      className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-oswald font-bold text-foreground uppercase leading-none mb-2">
                    {player.name}
                  </h3>
                  <p className="text-pct-gold text-xs font-bold uppercase tracking-widest mb-6">
                    {player.role}
                  </p>

                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="text-center">
                      <div className="text-muted-foreground text-[10px] uppercase">
                        Matches
                      </div>
                      <div className="text-foreground font-bold">
                        {player.stats.matches}
                      </div>
                    </div>
                    {player.stats.runs && (
                      <div className="text-center">
                        <div className="text-muted-foreground text-[10px] uppercase">
                          Runs
                        </div>
                        <div className="text-foreground font-bold">
                          {player.stats.runs}
                        </div>
                      </div>
                    )}
                    {player.stats.wickets && (
                      <div className="text-center">
                        <div className="text-muted-foreground text-[10px] uppercase">
                          Wkts
                        </div>
                        <div className="text-foreground font-bold">
                          {player.stats.wickets}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        ))}

        {/* View All Card */}
        <div className="min-w-[200px] snap-center flex items-center justify-center">
          <Link
            href="/players"
            className="group flex flex-col items-center gap-4 text-foreground hover:text-pct-gold transition-colors"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/5">
              <ArrowRight size={24} />
            </div>
            <span className="font-oswald font-bold uppercase tracking-widest text-sm">
              View Full Squad
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
