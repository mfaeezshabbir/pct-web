export interface RankingItem {
  format?: string; // TEST, ODI, T20I
  rank?: number;
  category?: string; // BAT, BOWL, ALL
  player?: string;
  points?: number;
}

export const menTeamRankings = [
  { format: "TEST", rank: 6 },
  { format: "ODI", rank: 1 },
  { format: "T20I", rank: 7 },
];

export const womenTeamRankings = [
  { format: "ODI", rank: 10 },
  { format: "T20I", rank: 8 },
];

export const menPlayerRankings = [
  { category: "BAT", player: "Babar Azam", rank: 1 },
  { category: "BOWL", player: "Shaheen Afridi", rank: 3 },
  { category: "ALL", player: "Shadab Khan", rank: 10 },
];

export const womenPlayerRankings = [
  { category: "BAT", player: "Sidra Ameen", rank: 24 },
  { category: "BOWL", player: "Sadia Iqbal", rank: 3 },
  { category: "ALL", player: "Nida Dar", rank: 9 },
];
