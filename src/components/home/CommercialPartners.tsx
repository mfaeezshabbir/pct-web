"use client";

import React from "react";
import { Users, Handshake, Tv, GraduationCap, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

// Data Interfaces
interface Logo {
  name: string;
  url: string;
  height?: number;
}

interface PartnerCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  logos: Logo[];
  headerColor: string;
  iconColor?: string;
}

// Data Structure for Partners with Styles
const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: "men-team",
    label: "Pakistan Men's National Cricket Team",
    icon: <Users size={20} />,
    headerColor:
      "bg-[#E8F5E9] text-green-800 dark:bg-green-900/20 dark:text-green-400",
    logos: [
      {
        name: "Pepsi",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1200px-Pepsi_2023.svg.png",
      },
      {
        name: "TCL",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_of_the_TCL_Corporation.svg",
      },
      {
        name: "ParkView City",
        url: "https://parkviewcity.com.pk/wp-content/uploads/2023/11/PVC_Black.png",
      },
    ],
  },
  {
    id: "commercial",
    label: "Pakistan Cricket Team Commercial Partners",
    icon: <Handshake size={20} />,
    headerColor:
      "bg-[#FFEBEE] text-red-800 dark:bg-red-900/20 dark:text-red-400",
    logos: [
      {
        name: "Trans Group",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriHI3uIGMhvschMx15VzHzjO2jHpJiWlgPg&s",
      },
    ],
  },
  {
    id: "women-team",
    label: "Pakistan Women's Team Commercial Partner",
    icon: <Trophy size={20} />,
    headerColor:
      "bg-[#F3E5F5] text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    logos: [
      {
        name: "Pepsi",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1200px-Pepsi_2023.svg.png",
      },
      {
        name: "Cadbury Dairy Milk",
        url: "https://logos-world.net/wp-content/uploads/2023/03/Cadbury-Dairy-Milk-Logo-2013.png",
      },
    ],
  },
  {
    id: "broadcast",
    label: "Broadcast & Live Streaming",
    icon: <Tv size={20} />,
    headerColor:
      "bg-[#E3F2FD] text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    logos: [
      {
        name: "A Sports",
        url: "https://upload.wikimedia.org/wikipedia/en/0/0c/A_Sports_Logo.png",
      },
      {
        name: "Tamasha",
        url: "https://play-lh.googleusercontent.com/0mUFCkOpoFlK-GiSrSHiNqmXGJESPRciHmLBS4vzFd-tZ2nkBKcFpIaE65q1mGkOfivwcoxYdcoaVfk64V48NSw",
      },
      {
        name: "Trans Group",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriHI3uIGMhvschMx15VzHzjO2jHpJiWlgPg&s",
      },
    ],
  },
  {
    id: "pathway",
    label: "Pathway Cricket Programme",
    icon: <GraduationCap size={20} />,
    headerColor:
      "bg-[#E8F5E9] text-green-800 dark:bg-green-900/20 dark:text-green-400",
    logos: [
      {
        name: "Engro Cricket Coaching",
        url: "https://www.pcb.com.pk/timthumb.php?src=images/news_images/featured_images/860ee3e4b98b.png&w=675",
        height: 60,
      },
    ],
  },
];

// Reusable Card Component
const PartnerCard = ({
  category,
  className,
}: {
  category: PartnerCategory;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-white dark:bg-white/5 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300",
      className
    )}
  >
    {/* Colored Header */}
    <div
      className={cn(
        "px-6 py-4 flex items-center gap-3 font-oswald font-bold uppercase tracking-wide",
        category.headerColor
      )}
    >
      {category.icon}
      <span>{category.label}</span>
    </div>

    {/* Body */}
    <div className="p-8 flex items-center justify-center grow bg-gray-50/30 dark:bg-black/20">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 w-full">
        {category.logos.map((logo) => (
          <div
            key={logo.name}
            className="relative group p-4 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className={cn(
                "w-auto object-contain transition-all duration-500 rounded-sm"
              )}
              style={{
                height: logo.height ? `${logo.height}px` : "48px",
                maxHeight: "60px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function CommercialPartners() {
  // Split categories for layout
  const fullWidthCategories = PARTNER_CATEGORIES.slice(0, 3);
  const gridCategories = PARTNER_CATEGORIES.slice(3, 5);

  return (
    <section className="w-full bg-gray-50 dark:bg-black py-20 border-t border-gray-100 dark:border-white/10 relative z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-pct-green dark:text-pct-gold uppercase tracking-tight mb-6">
            Commercial Partners
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
            We are proud to collaborate with world-class brands that support the
            growth and success of Pakistan Cricket.
          </p>
          <div className="h-1 w-20 bg-[#E31E24] mx-auto rounded-full"></div>
        </div>

        {/* Stacked Layout */}
        <div className="flex flex-col gap-8 mb-8">
          {fullWidthCategories.map((category) => (
            <PartnerCard key={category.id} category={category} />
          ))}
        </div>

        {/* Grid Layout (Bottom Two) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridCategories.map((category) => (
            <PartnerCard
              key={category.id}
              category={category}
              className="h-full"
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-oswald font-bold text-gray-900 dark:text-white uppercase mb-4">
            Interested in partnering with us?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm leading-relaxed">
            Join us in shaping the future of cricket. Reach out to our
            commercial team for opportunities.
          </p>
          <button className="bg-pct-green hover:bg-pct-green/90 dark:bg-pct-gold dark:text-black dark:hover:bg-pct-gold/90 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Contact Commercial Team
          </button>
        </div>
      </div>
    </section>
  );
}
