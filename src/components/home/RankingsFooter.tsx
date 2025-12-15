"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  menTeamRankings,
  menPlayerRankings,
  womenTeamRankings,
  womenPlayerRankings,
} from "@/data/rankings";
import { Trophy, TrendingUp, User } from "lucide-react";

export default function RankingsFooter() {
  const AUTOPLAY_DELAY = 4000;
  return (
    <div className="relative z-20 w-full border-t border-white/10 bg-black/90 backdrop-blur-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {/* GRID 1: Men's Team Rankings */}
        <div className="p-6 md:p-8 flex flex-col justify-center h-40 relative overflow-hidden group">
          {/* Background Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/5 group-hover:text-white/10 transition-colors">
            <Trophy size={100} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <h3 className="text-[10px] md:text-xs font-bold text-pct-gold uppercase tracking-[0.2em] mb-1">
              Men's Team Rank
            </h3>

            <Carousel
              plugins={[Autoplay({ delay: 4000 })]}
              opts={{ loop: true }}
              className="w-full mt-auto"
            >
              <CarouselContent>
                {menTeamRankings.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col">
                      <span className="text-5xl font-oswald font-bold text-white">
                        {item.rank}
                        <span className="text-lg align-top opacity-50 ml-1">
                          #
                        </span>
                      </span>
                      <span className="text-sm font-light text-white/70 tracking-widest uppercase">
                        {item.format}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* GRID 2: Men's Individual Rankings */}
        <div className="p-6 md:p-8 flex flex-col justify-center h-40 relative overflow-hidden group">
          {/* Background Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/5 group-hover:text-white/10 transition-colors">
            <User size={100} strokeWidth={1} />
          </div>

          <div className="relative z-10 w-full pr-12">
            <h3 className="text-[10px] md:text-xs font-bold text-pct-gold uppercase tracking-[0.2em] mb-1">
              Men's Top Stars
            </h3>

            <Carousel
              plugins={[Autoplay({ delay: 4000 })]}
              opts={{ loop: true }}
              className="w-full mt-auto"
            >
              <CarouselContent>
                {menPlayerRankings.map((p, i) => (
                  <CarouselItem key={i}>
                    <div className="flex flex-col">
                      <div className="flex items-start leading-none mb-1">
                        <span className="text-6xl md:text-7xl font-oswald font-bold text-white">
                          {p.rank}
                        </span>
                        <div className="flex flex-col ml-2 mt-2">
                          <span className="text-lg font-bold text-white/50 leading-none">
                            #
                          </span>
                          <span className="inline-block bg-pct-gold text-black text-[10px] font-bold px-1.5 py-0.5 rounded-sm mt-1">
                            {p.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-lg font-medium text-white truncate max-w-full">
                        {p.player}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* GRID 3: Women's Team Rankings */}
        <div className="p-6 md:p-8 flex flex-col justify-center h-40 relative overflow-hidden group">
          {/* Background Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/5 group-hover:text-white/10 transition-colors">
            <TrendingUp size={100} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <h3 className="text-[10px] md:text-xs font-bold text-pct-gold uppercase tracking-[0.2em] mb-1">
              Women's Team Rank
            </h3>

            <Carousel
              plugins={[Autoplay({ delay: 4000 })]}
              opts={{ loop: true }}
              className="w-full mt-auto"
            >
              <CarouselContent>
                {womenTeamRankings.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col">
                      <div className="flex items-start leading-none">
                        <span className="text-6xl md:text-7xl font-oswald font-bold text-white">
                          {item.rank}
                        </span>
                        <span className="text-xl md:text-2xl font-bold text-white/50 mt-1">
                          #
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white/60 tracking-widest uppercase mt-1">
                        {item.format}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* GRID 4: Women's Individual Rankings */}
        <div className="p-6 md:p-8 flex flex-col justify-center h-40 relative overflow-hidden group">
          {/* Background Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/5 group-hover:text-white/10 transition-colors">
            <User size={100} strokeWidth={1} />
          </div>

          <div className="relative z-10 w-full pr-12">
            <h3 className="text-[10px] md:text-xs font-bold text-pct-gold uppercase tracking-[0.2em] mb-1">
              Women's Top Stars
            </h3>
            <Carousel
              plugins={[Autoplay({ delay: 4000 })]}
              opts={{ loop: true }}
              className="w-full mt-auto"
            >
              <CarouselContent>
                {womenPlayerRankings.map((p, i) => (
                  <CarouselItem key={i}>
                    <div className="flex flex-col">
                      <div className="flex items-start leading-none mb-1">
                        <span className="text-6xl md:text-7xl font-oswald font-bold text-white">
                          {p.rank}
                        </span>
                        <div className="flex flex-col ml-2 mt-2">
                          <span className="text-lg font-bold text-white/50 leading-none">
                            #
                          </span>
                          <span className="inline-block bg-pct-gold text-black text-[10px] font-bold px-1.5 py-0.5 rounded-sm mt-1">
                            {p.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-lg font-medium text-white truncate max-w-full">
                        {p.player}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
