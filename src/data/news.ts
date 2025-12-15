export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

export const news: NewsItem[] = [
  {
    id: "n1",
    title: "Pakistan Announces Squad for Champions Trophy",
    excerpt:
      "The selection committee has unveiled the 15-man squad for the upcoming ICC Champions Trophy 2025 hosted in Pakistan.",
    date: "2025-01-02",
    category: "Team News",
  },
  {
    id: "n2",
    title: "Shaheen Afridi reaches 100 ODI Wickets Milestone",
    excerpt:
      "The eagle strikes again! Shaheen becomes the fastest pacer to reach 100 ODI wickets during the clash against Australia.",
    date: "2024-11-09",
    category: "Records",
  },
  {
    id: "n3",
    title: "Gaddafi Stadium Upgrades Completed via PCB",
    excerpt:
      "State of the art facilities have been installed at the HQ of Pakistan Cricket ahead of major tournaments.",
    date: "2024-12-20",
    category: "PCB",
  },
];
