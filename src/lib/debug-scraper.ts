import { fetchRankings } from "./scraper";

console.log("Starting scraper debug...");
fetchRankings()
  .then((data) => {
    console.log("Scraper Result:");
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error("Scraper failed:", err);
  });
