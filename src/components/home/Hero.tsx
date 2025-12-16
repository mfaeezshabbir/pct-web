"use client";
import React from "react";
import Image from "next/image"; // Removed unused Carousel imports
import { Crown, Trophy, Activity } from "lucide-react";
import heroBanner from "@/assets/hero_banner.webp";

export default function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-background flex flex-col justify-end pb-0">
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
    </section>
  );
}
