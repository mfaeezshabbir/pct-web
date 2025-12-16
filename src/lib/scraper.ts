import axios from "axios";
import https from "https";

// --- Types ---
export interface RankingItem {
  rank?: number;
  player?: string; // or team name
  country?: string;
  points?: number;
  category?: string; // BAT, BOWL, ALL
}

export interface FormatData {
  men: {
    team: RankingItem | null;
    batting: RankingItem | null;
    bowling: RankingItem | null;
    allrounder: RankingItem | null;
  };
  women: {
    team: RankingItem | null;
    batting: RankingItem | null;
    bowling: RankingItem | null;
    allrounder: RankingItem | null;
  };
}

export interface RankingsDataTree {
  test: FormatData;
  odi: FormatData;
  t20: FormatData;
}

// --- Config ---
const CLIENT_ID = "tPZJbRgIub3Vua93/DWtyQ==";
const BASE_URL = "https://assets-icc.sportz.io/cricket/v1/ranking";
const agent = new https.Agent({ family: 4 });

const TYPE_MAP: Record<string, string> = {
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

// --- Helpers ---
async function fetchFromApi(params: Record<string, string>) {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        client_id: CLIENT_ID,
        feed_format: "json",
        lang: "en",
        ...params,
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
      httpsAgent: agent,
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
  const comp_type = COMP_TYPE_MAP[gender]?.[format];
  if (!comp_type) return null;

  const ranks = await fetchFromApi({
    type: "team",
    comp_type,
  });

  const pak = ranks.find(
    (r: any) =>
      r.team_name === "Pakistan" ||
      r.Country === "Pakistan" ||
      r.shortname === "PAK"
  );

  if (pak) {
    return {
      rank: parseInt(pak.no, 10),
      player: "Pakistan", // Using 'player' field to store name for generic usage
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
  const comp_type = COMP_TYPE_MAP[gender]?.[format];
  if (!comp_type) return null;

  const ranks = await fetchFromApi({
    type: TYPE_MAP[category],
    comp_type,
  });

  let lastRank = 0;
  let pakPlayer = null;

  for (const r of ranks) {
    let rankVal = parseInt(r.no, 10);
    if (isNaN(rankVal)) {
      rankVal = lastRank;
    } else {
      lastRank = rankVal;
    }

    const isPak =
      r.Country === "Pakistan" ||
      r.Country === "PAK" ||
      r.Country_name === "Pakistan" ||
      r.team_name === "Pakistan" ||
      (r.country_name && r.country_name.includes("Pakistan"));

    if (isPak) {
      pakPlayer = { ...r, resolvedRank: rankVal };
      break;
    }
  }

  if (pakPlayer) {
    return {
      rank: pakPlayer.resolvedRank,
      player:
        pakPlayer["Player-name"] || pakPlayer.player_name || pakPlayer.name,
      country: "Pakistan",
      category: category.toUpperCase(),
    };
  }
  return null;
}

// --- Main Fetch ---
export async function fetchRankings(): Promise<RankingsDataTree> {
  // We need data for ALL combinations.
  // We'll organize specific functions to fetch a full "FormatData" block.

  const fetchFormatData = async (
    format: "test" | "odi" | "t20"
  ): Promise<FormatData> => {
    // Men
    const [mTeam, mBat, mBowl, mAll] = await Promise.all([
      getTeamRank("men", format),
      getPlayerRank("men", "batting", format),
      getPlayerRank("men", "bowling", format),
      getPlayerRank("men", "allrounder", format),
    ]);

    // Women (Note: Test often missing for women in API, handle nulls)
    const [wTeam, wBat, wBowl, wAll] = await Promise.all([
      getTeamRank("women", format),
      getPlayerRank("women", "batting", format),
      getPlayerRank("women", "bowling", format),
      getPlayerRank("women", "allrounder", format),
    ]);

    return {
      men: { team: mTeam, batting: mBat, bowling: mBowl, allrounder: mAll },
      women: { team: wTeam, batting: wBat, bowling: wBowl, allrounder: wAll },
    };
  };

  const [testData, odiData, t20Data] = await Promise.all([
    fetchFormatData("test"),
    fetchFormatData("odi"),
    fetchFormatData("t20"),
  ]);

  return {
    test: testData,
    odi: odiData,
    t20: t20Data,
  };
}
