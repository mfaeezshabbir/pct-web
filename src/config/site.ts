export const siteConfig = {
  name: "Pakistan Cricket Board",
  description:
    "Official-inspired immersive web experience for the Pakistan Cricket Board.",
  mainNav: [
    { name: "Home", href: "/" },
    { name: "Matches", href: "/matches" },
    { name: "Players", href: "/players" },
    { name: "Stats", href: "/stats" },
    { name: "Shop", href: "https://shop.pcb.com.pk/" },
  ],
  links: {
    twitter: "https://twitter.com/TheRealPCB",
    instagram: "https://instagram.com/therealpcb",
    facebook: "https://facebook.com/PakistanCricketBoard",
    youtube: "https://youtube.com/user/PakistanCricketBoard",
  },
  contact: {
    email: "info@pcb.com.pk",
    address: "Gaddafi Stadium, Lahore, Pakistan",
  },
};

export type SiteConfig = typeof siteConfig;
