"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GlassCard from "@/components/ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

const players = [
  {
    name: "Babar Azam",
    role: "King / Top Order Batter",
    number: "56",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Shaheen Afridi",
    role: "The Eagle / Pacer",
    number: "10",
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Naseem Shah",
    role: "Speedster",
    number: "71",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "M. Rizwan",
    role: "Superman / WK",
    number: "16",
    color: "from-white to-gray-400",
  },
];

export default function SquadSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track || !sectionRef.current) return;

      // Horizontal scroll animation
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, {
        x: getScrollAmount,
        ease: "none",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full relative overflow-hidden bg-zinc-950 flex flex-col justify-center"
    >
      <div className="absolute top-10 left-10 z-10">
        <h2 className="text-6xl md:text-8xl font-oswald text-transparent bg-clip-text bg-gradient-to-r from-pct-green to-pct-gold">
          THE SQUAD
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex gap-10 px-10 md:px-20 w-max h-[70vh] items-center"
      >
        {players.map((player, i) => (
          <GlassCard
            key={i}
            className="w-[80vw] md:w-[400px] h-full flex flex-col justify-between p-8 relative overflow-hidden group"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${player.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>

            <div className="z-10">
              <h3 className="text-9xl font-bold opacity-10 absolute -right-10 -top-10 font-oswald text-outlined">
                {player.number}
              </h3>
              <h4 className="text-4xl font-oswald uppercase relative">
                {player.name}
              </h4>
              <p className="text-pct-gold font-light tracking-widest text-sm">
                {player.role}
              </p>
            </div>

            <div className="h-1/2 w-full bg-black/20 rounded-xl backdrop-blur-sm flex items-center justify-center border border-white/5">
              <span className="text-xs uppercase text-white/30">
                Player Image
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pct-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </GlassCard>
        ))}
        {/* Spacer for end */}
        <div className="w-[10vw]"></div>
      </div>
    </section>
  );
}
