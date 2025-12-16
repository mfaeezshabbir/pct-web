"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const highlights = [
  {
    id: 1,
    title: "Shaheen's 5-Wicket Haul vs Australia",
    duration: "10:24",
    image:
      "https://www.geosuper.tv/assets/uploads/updates/2023-10-21/29160_7020148_updates.jpg",
  },
  {
    id: 2,
    title: "Babar Azam Century Highlights",
    duration: "15:30",
    image:
      "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/lsci/db/PICTURES/CMS/409200/409287.6.jpg",
  },
  {
    id: 3,
    title: "Final Over Thriller! Pakistan Wins by 1 Run",
    duration: "05:12",
    image: "https://i.ytimg.com/vi/mvYK6SOdNSQ/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Best Fielding Moments of 2024",
    duration: "08:45",
    image: "https://i.dawn.com/primary/2025/10/68f6a2a8240e2.jpg",
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-oswald text-white uppercase mb-2">
              Match <span className="text-pct-gold">Highlights</span>
            </h2>
            <div className="h-1 w-20 bg-pct-green"></div>
          </div>
          <button className="text-sm font-bold text-white/60 hover:text-pct-gold transition-colors uppercase tracking-widest">
            View All Videos
          </button>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {highlights.map((video) => (
              <CarouselItem
                key={video.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative aspect-video bg-zinc-900 rounded-lg overflow-hidden cursor-pointer border border-white/5 hover:border-pct-gold/50 transition-colors">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-pct-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-pct-gold/50 group-hover:scale-110 transition-transform">
                      <Play
                        size={32}
                        className="text-pct-gold ml-1 fill-pct-gold"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <span className="text-[10px] font-bold bg-black/60 text-white px-2 py-1 rounded backdrop-blur-md mb-2 inline-block">
                      {video.duration}
                    </span>
                    <h3 className="text-lg font-bold text-white font-oswald uppercase leading-none line-clamp-2 group-hover:text-pct-gold transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <div className="relative static translate-y-0">
              <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 hover:bg-pct-gold hover:text-black" />
              <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 hover:bg-pct-gold hover:text-black" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
