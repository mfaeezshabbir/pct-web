"use client";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SquadSection from "@/components/home/SquadSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <SquadSection />
      <section className="h-[50vh] w-full flex items-center justify-center bg-black border-t border-white/10">
        <h2 className="text-sm text-gray-500 font-oswald tracking-widest">
          © 2024 PAKISTAN CRICKET TEAM
        </h2>
      </section>
    </main>
  );
}
