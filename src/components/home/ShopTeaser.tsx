"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShopTeaser() {
  return (
    <section className="h-[80vh] w-full relative overflow-hidden bg-pct-green-dark flex items-center justify-center">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-6462d308q081')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>

      <div className="text-center z-10 max-w-4xl px-6">
        <h2 className="text-5xl md:text-8xl font-oswald font-bold text-white mb-6 drop-shadow-2xl">
          WEAR THE <span className="text-pct-gold">PASSION</span>
        </h2>
        <p className="text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
          Get your hands on the official Pakistan Cricket Board jersey. Be part
          of the legacy.
        </p>

        <Link
          href="/shop"
          className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-oswald font-bold text-xl uppercase tracking-widest hover:bg-pct-gold hover:text-black transition-all duration-300 rounded-full"
        >
          Shop Now <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
