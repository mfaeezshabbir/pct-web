export interface Player {
  id: string;
  name: string;
  role: string;
  number: string;
  image?: string; // Placeholder for real usage
  color: string;
  stats: {
    matches: number;
    runs?: number;
    wickets?: number;
    average?: number;
  };
  category: "Batter" | "Bowler" | "All-Rounder" | "Wicket-Keeper";
}

export const players: Player[] = [
  {
    id: "p1",
    name: "Babar Azam",
    role: "Top Order Batter",
    number: "56",
    color: "from-blue-600 to-indigo-700",
    stats: { matches: 117, runs: 3890, average: 45.3 },
    category: "Batter",
    image:
      "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/8322/59429.png",
  },
  {
    id: "p2",
    name: "Shaheen Afridi",
    role: "Left-arm Fast",
    number: "10",
    color: "from-green-600 to-emerald-800",
    stats: { matches: 70, wickets: 96, average: 20.4 },
    category: "Bowler",
    image:
      "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/8322/66833.png",
  },
  {
    id: "p3",
    name: "Naseem Shah",
    role: "Right-arm Fast",
    number: "71",
    color: "from-red-600 to-orange-700",
    stats: { matches: 45, wickets: 55, average: 22.1 },
    category: "Bowler",
    image:
      "https://static-files.cricket-australia.pulselive.com/headshots/288/3763-camedia.png",
  },
  {
    id: "p4",
    name: "M. Rizwan",
    role: "Wicket Keeper Batter",
    number: "16",
    color: "from-gray-100 to-gray-500",
    stats: { matches: 102, runs: 3200, average: 48.9 },
    category: "Wicket-Keeper",
    image:
      "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/generic/colored/20286.png",
  },
  {
    id: "p5",
    name: "Shadab Khan",
    role: "All-Rounder",
    number: "7",
    color: "from-yellow-500 to-orange-600",
    stats: { matches: 90, runs: 1200, wickets: 105 },
    category: "All-Rounder",
    image:
      "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/6122/65739.png",
  },
  {
    id: "p6",
    name: "Fakhar Zaman",
    role: "Opening Batter",
    number: "39",
    color: "from-teal-500 to-cyan-600",
    stats: { matches: 82, runs: 3500, average: 46.1 },
    category: "Batter",
    image:
      "https://static-files.cricket-australia.pulselive.com/headshots/288/566-camedia.png",
  },
];
