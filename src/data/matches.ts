export interface Match {
  id: string;
  opponent: string;
  opponentFlag: string; // URL or emoji
  date: string;
  time: string;
  venue: string;
  result?: string;
  status: "completed" | "upcoming" | "live";
  series: string;
}

export const matches: Match[] = [
  {
    id: "m1",
    opponent: "Australia",
    opponentFlag: "🇦🇺",
    date: "2024-11-04",
    time: "08:30 AM PKT",
    venue: "MCG, Melbourne",
    result: "Pak won by 2 wickets",
    status: "completed",
    series: "ODI Series",
  },
  {
    id: "m2",
    opponent: "Australia",
    opponentFlag: "🇦🇺",
    date: "2024-11-08",
    time: "08:30 AM PKT",
    venue: "Adelaide Oval, Adelaide",
    result: "Pak won by 9 wickets",
    status: "completed",
    series: "ODI Series",
  },
  {
    id: "m3",
    opponent: "South Africa",
    opponentFlag: "🇿🇦",
    date: "2024-12-10",
    time: "01:00 PM PKT",
    venue: "Centurion",
    status: "upcoming",
    series: "T20I Series",
  },
  {
    id: "m4",
    opponent: "South Africa",
    opponentFlag: "🇿🇦",
    date: "2024-12-14",
    time: "01:00 PM PKT",
    venue: "Wanderers",
    status: "upcoming",
    series: "T20I Series",
  },
  {
    id: "m5",
    opponent: "England",
    opponentFlag: "🇬🇧",
    date: "2025-01-15",
    time: "02:00 PM PKT",
    venue: "National Stadium, Karachi",
    status: "upcoming",
    series: "Champions Trophy",
  },
];
