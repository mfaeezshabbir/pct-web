"use client";
import React from "react";
import { news } from "@/data/news";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NewsSection() {
  useGSAP(() => {
    gsap.from(".news-card", {
      scrollTrigger: {
        trigger: ".news-container",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <section className="py-20 px-6 md:px-20 bg-background flex flex-col news-container relative border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-6xl md:text-7xl font-oswald text-foreground mb-2">
            LATEST <span className="text-pct-gold">NEWS</span>
          </h2>
          <div className="h-1 w-20 bg-pct-green"></div>
        </div>
        <button className="group flex items-center gap-2 text-foreground hover:text-pct-gold transition-colors uppercase tracking-widest text-sm font-bold">
          View All News{" "}
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, i) => (
          <GlassCard
            key={item.id}
            className={`news-card group p-0 overflow-hidden min-h-[400px] flex flex-col justify-end relative hover:border-pct-gold/50 transition-colors duration-500 ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-105">
              <div className="w-full h-full bg-[linear-gradient(to_top,black_0%,transparent_100%)] z-10 absolute inset-0"></div>
              <div className="w-full h-full flex items-center justify-center text-white/10 font-oswald text-9xl font-bold uppercase">
                News
              </div>
            </div>

            <div className="relative z-20 p-8">
              <span className="text-pct-gold text-xs font-bold uppercase tracking-widest mb-2 block">
                {item.category}
              </span>
              <h3 className="text-3xl font-oswald font-bold leading-tight mb-4 text-white group-hover:text-pct-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 line-clamp-2 md:line-clamp-3 font-light mb-6">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest">
                <span>{item.date}</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
