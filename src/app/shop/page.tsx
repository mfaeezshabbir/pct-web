import React from "react";
import { products } from "@/data/products";
import GlassCard from "@/components/ui/GlassCard";
import { ShoppingBag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Store | Pakistan Cricket Board",
  description: "Buy official PCT merchandise, jerseys, and accessories.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-20">
      <div className="mb-16 text-center">
        <h1 className="text-6xl md:text-8xl font-oswald font-bold text-white mb-6 uppercase tracking-tighter">
          Official <span className="text-pct-gold">Store</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Wear the green with pride. Official merchandise of the Pakistan
          Cricket Team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <GlassCard
            key={product.id}
            className="group p-0 overflow-hidden relative"
          >
            <div className="aspect-square bg-zinc-900 flex items-center justify-center relative">
              {/* Placeholder for Product Image */}
              <div className="text-white/20 font-oswald text-6xl font-bold uppercase rotate-45 transform group-hover:scale-110 transition-transform duration-500">
                {product.category}
              </div>

              <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-pct-gold text-black flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-white">
                <ShoppingBag size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold font-oswald text-white uppercase leading-none">
                  {product.name}
                </h3>
              </div>
              <p className="text-pct-gold font-bold text-sm tracking-wide">
                {product.price}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </main>
  );
}
