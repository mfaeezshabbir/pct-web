import axios from "axios";

// Types matching our UI needs
export interface RankingItem {
  format?: string;
  rank?: number;
  category?: string;
  player?: string;
  points?: number;
  country?: string;
}

export interface RankingsData {
  menTeam: RankingItem[];
  womenTeam: RankingItem[];
  menPlayers: RankingItem[];
  womenPlayers: RankingItem[];
}

const CLIENT_ID = "tPZJbRgIub3Vua93/DWtyQ==";
const BASE_URL = "https://assets-icc.sportz.io/cricket/v1/ranking";

// Map types for the API
const TYPE_MAP = {
  team: "team",
  batting: "bat",
  bowling: "bowl",
  allrounder: "allrounder",
};

const COMP_TYPE_MAP: Record<string, Record<string, string>> = {
  men: {
    test: "test",
    odi: "odi",
    t20: "t20",
  },
  women: {
    odi: "odiw",
    t20: "t20w",
  },
};

async function fetchFromApi(params: Record<string, string>) {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        client_id: CLIENT_ID,
        feed_format: "json",
        lang: "en",
        ...params,
      },
      // Short timeout to fail fast
      timeout: 5000,
    });
    return data?.data?.["bat-rank"]?.rank || [];
  } catch (error: any) {
    console.error("ICC API Error:", error.message);
    return [];
  }
}

async function getTeamRank(
  gender: "men" | "women",
  format: "test" | "odi" | "t20"
): Promise<RankingItem | null> {
  const comp_type = COMP_TYPE_MAP[gender][format];
  if (!comp_type) return null;

  const ranks = await fetchFromApi({
    type: "team",
    comp_type,
  });

  // Find Pakistan
  const pak = ranks.find(
    (r: any) =>
      r.team_name === "Pakistan" ||
      r.Country === "Pakistan" ||
      r.shortname === "PAK"
  );

  if (pak) {
    return {
      format: format.toUpperCase(),
      rank: parseInt(pak.no, 10),
      points: parseInt(pak.Points, 10),
      country: "Pakistan",
    };
  }
  return null;
}

async function getPlayerRank(
  gender: "men" | "women",
  category: "batting" | "bowling" | "allrounder",
  format: "test" | "odi" | "t20"
): Promise<RankingItem | null> {
  const comp_type = COMP_TYPE_MAP[gender][format];
  if (!comp_type) return null;

  const type_param = TYPE_MAP[category];

  const ranks = await fetchFromApi({
    type: type_param, // e.g. 'bat', 'bowl'
    comp_type,
  });

  // Iterate to handle "=" in rank
  let lastRank = 0;
  let pakPlayer = null;

  for (const r of ranks) {
    let rankVal = parseInt(r.no, 10);
    if (isNaN(rankVal)) {
      // If it's "=", it shares the last rank
      rankVal = lastRank;
    } else {
      lastRank = rankVal;
    }

    // Update the object with resolved rank for easier usage
    r.resolvedRank = rankVal;

    // Check if Pakistan
    const isPak =
      r.Country === "Pakistan" ||
      r.Country === "PAK" ||
      r.Country_name === "Pakistan" ||
      r.team_name === "Pakistan" ||
      (r.country_name && r.country_name.includes("Pakistan"));

    if (isPak) {
      pakPlayer = r;
      break; // Found the top one
    }
  }

  if (pakPlayer) {
    let catDisplayName = "BAT";
    if (category === "bowling") catDisplayName = "BOWL";
    if (category === "allrounder") catDisplayName = "ALL";

    return {
      category: catDisplayName,
      player:
        pakPlayer["Player-name"] || pakPlayer.player_name || pakPlayer.name,
      rank: pakPlayer.resolvedRank,
      country: "Pakistan",
    };
  }
  return null;
}

export async function fetchRankings(): Promise<RankingsData> {
  // Parallel fetching could be faster but let's be gentle with the API
  const menTest = await getTeamRank("men", "test");
  const menOdi = await getTeamRank("men", "odi");
  const menT20 = await getTeamRank("men", "t20");

  const womenOdi = await getTeamRank("women", "odi");
  const womenT20 = await getTeamRank("women", "t20");

  // Fetch top Pakistani players for specific formats/categories
  // We'll pick a mix to show variety
  const menBat = await getPlayerRank("men", "batting", "test"); // Babar usually high in ODI/T20, let's check Test too
  // Actually usually users care about ODI/T20 more? Let's do one of each format
  const menBowl = await getPlayerRank("men", "bowling", "t20");
  const menAll = await getPlayerRank("men", "allrounder", "odi");

  const womenBat = await getPlayerRank("women", "batting", "odi");
  const womenBowl = await getPlayerRank("women", "bowling", "t20");
  const womenAll = await getPlayerRank("women", "allrounder", "t20");

  return {
    menTeam: [menTest, menOdi, menT20].filter((i): i is RankingItem => !!i),
    womenTeam: [womenOdi, womenT20].filter((i): i is RankingItem => !!i),
    menPlayers: [menBat, menBowl, menAll].filter((i): i is RankingItem => !!i),
    womenPlayers: [womenBat, womenBowl, womenAll].filter(
      (i): i is RankingItem => !!i
    ),
  };
}
