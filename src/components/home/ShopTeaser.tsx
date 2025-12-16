"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ShopTeaser() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden border-t border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pct-green/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pct-gold/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pct-gold/30 bg-pct-gold/10 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-pct-gold animate-pulse"></span>
              <span className="text-[10px] font-bold text-pct-gold uppercase tracking-[0.2em]">
                Official Merchandise
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-white uppercase leading-[0.9] mb-6">
              Wear Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pct-green to-pct-gold">
                Passion
              </span>
            </h2>

            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg mb-10">
              Get your hands on the official 2025 Pakistan Cricket Team jersey.
              Engineered for performance, designed for the fans. Be part of the
              legacy.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="https://shop.pcb.com.pk/"
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-pct-gold hover:bg-white text-black font-oswald font-bold text-lg uppercase tracking-widest transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1"
              >
                <ShoppingBag size={20} />
                Shop Now
              </Link>

              <Link
                href="https://shop.pcb.com.pk/products/ct-25-jersey"
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:border-pct-green text-white hover:text-pct-green font-oswald font-bold text-lg uppercase tracking-widest transition-all duration-300 rounded-lg backdrop-blur-sm"
              >
                View Kit
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Features Info */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-white/10 w-full max-w-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 text-pct-green">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-oswald font-bold uppercase tracking-wide text-sm mb-1">
                    100% Authentic
                  </h4>
                  <p className="text-xs text-gray-500">
                    Official PCB Licensed Product
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 text-pct-gold">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-oswald font-bold uppercase tracking-wide text-sm mb-1">
                    Global Shipping
                  </h4>
                  <p className="text-xs text-gray-500">
                    Delivered to your doorstep
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 w-full aspect-[1/1] flex items-center justify-center">
              {/* Product Image */}
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 bg-gradient-to-t from-pct-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <img
                  src="https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-6/483488004_684204244269394_3275682293488885346_n.jpg?_nc_cat=110&cb2=99be929b-bd9a46d7&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEfQzNp4ILHYypTq1OFu9LLskZNcDs5GseyRk1wOzkax1xnVR03rt64TosfRrFHpnvXZMHUhZX71jIywj-xua69&_nc_ohc=HS_Fm1nJgzgQ7kNvwHMHait&_nc_oc=AdnXjwUljEpICdo2b4VyVm5E-OVlGTr4jNP6GKrCxhs4UNBUajiVivEijUWOkiBKcjw&_nc_zt=23&_nc_ht=scontent-mct1-1.xx&_nc_gid=fDHR4A-Xcd9xkoHbCSqaqA&oh=00_AfnTNdpgVUv3B2495AU3ULcBJiqhZUKuNb6Qa28JFDOUUA&oe=694724E7"
                  alt="Official Pakistan Cricket Jersey"
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Float Card 1 */}
              <div className="absolute -top-4 -right-4 md:right-0 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pct-green flex items-center justify-center text-white font-bold">
                    25
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                      Season
                    </p>
                    <p className="text-white font-oswald font-bold text-lg">
                      2025/26
                    </p>
                  </div>
                </div>
              </div>

              {/* Float Card 2 */}
              <div className="absolute -bottom-4 -left-4 md:left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl">
                <p className="text-pct-gold font-oswald font-bold uppercase tracking-widest text-xs mb-1">
                  Best Seller
                </p>
                <div className="flex text-white gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-pct-gold text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white/80 text-xs">Rated 4.9 by fans</p>
              </div>
            </div>

            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-pct-green/30 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
