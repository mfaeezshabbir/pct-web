import React from "react";
import PlayersList from "@/components/pages/PlayersList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Squad | Pakistan Cricket Board",
  description: "Meet the Shaheens. Full squad list and player profiles.",
};

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-20">
      <PlayersList />
    </main>
  );
}
