"use client";
import Hero from "@/components/home/Hero";
import SquadSection from "@/components/home/SquadSection";
import MatchCenter from "@/components/home/MatchCenter";
import NewsSection from "@/components/home/NewsSection";
import ShopTeaser from "@/components/home/ShopTeaser";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <SquadSection />
      <MatchCenter />
      <ShopTeaser />
      <NewsSection />
      <section className="h-[50vh] w-full flex items-center justify-center bg-black border-t border-white/10">
        <h2 className="text-sm text-gray-500 font-oswald tracking-widest">
          © 2024 PAKISTAN CRICKET TEAM
        </h2>
      </section>
    </main>
  );
}
