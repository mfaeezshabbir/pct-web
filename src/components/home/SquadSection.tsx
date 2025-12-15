"use client";
import React, { useRef } from "react";
import { players } from "@/data/players";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
            className="squad-card min-w-[300px] md:min-w-[350px] snap-center py-4"
          >
            <div className="group relative h-[500px] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pct-gold/20 cursor-pointer">
              {/* Main Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${player.color} opacity-100 transition-all duration-500`}
              ></div>

              {/* Texture/Noise Overlay */}
              <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-soft-light"></div>

              {/* Stadium Light Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-white/30 to-transparent blur-3xl opacity-50"></div>

              {/* Large Background Number */}
              <div className="absolute top-2 left-4 z-10">
                <span className="font-oswald font-bold text-[180px] leading-none text-white/10 select-none">
                  {player.number}
                </span>
              </div>

              {/* Top Right Arrow */}
              <div className="absolute top-6 right-6 z-30">
                <div className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowRight
                    size={16}
                    className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Player Image */}
              <div className="absolute inset-x-0 bottom-0 h-[85%] z-20 transition-transform duration-700 group-hover:scale-105 origin-bottom">
                {player.image && (
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                )}
              </div>

              {/* Bottom Info Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-30"></div>

              {/* Player Info */}
              <div className="absolute bottom-8 left-6 right-6 z-40 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-oswald font-bold text-white uppercase leading-none mb-1 drop-shadow-lg">
                  {player.name}
                </h3>
                <p className="text-pct-gold text-sm font-bold uppercase tracking-widest drop-shadow-md flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-pct-gold inline-block"></span>
                  {player.role}
                </p>
              </div>
            </div>
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
