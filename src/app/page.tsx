"use client";
import Hero from "@/components/home/Hero";
import RankingsFooter from "@/components/home/RankingsFooter";
import SquadSection from "@/components/home/SquadSection";
import MatchCenter from "@/components/home/MatchCenter";
import NewsSection from "@/components/home/NewsSection";
import ShopTeaser from "@/components/home/ShopTeaser";
import HighlightsSection from "@/components/home/HighlightsSection";
import CommercialPartners from "@/components/home/CommercialPartners";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <RankingsFooter />
      <NewsSection />
      <MatchCenter />
      <HighlightsSection />
      <SquadSection />
      <ShopTeaser />
      <CommercialPartners />
    </main>
  );
}
