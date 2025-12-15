"use client";
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-white/10 pt-20 pb-10 px-6 md:px-20 overflow-hidden relative">
      {/* Background Text */}
      <div className="absolute -top-20 -left-20 text-[20vw] font-oswald font-bold text-white/5 select-none pointer-events-none whitespace-nowrap">
        PAKISTAN CRICKET
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-oswald mb-6 text-white uppercase tracking-tighter">
            {siteConfig.name}
          </h2>
          <p className="text-white/60 mb-8 max-w-md font-light">
            {siteConfig.description}
          </p>
          <div className="flex gap-4">
            <SocialLink
              href={siteConfig.links.twitter}
              icon={<Twitter size={20} />}
            />
            <SocialLink
              href={siteConfig.links.instagram}
              icon={<Instagram size={20} />}
            />
            <SocialLink
              href={siteConfig.links.facebook}
              icon={<Facebook size={20} />}
            />
            <SocialLink
              href={siteConfig.links.youtube}
              icon={<Youtube size={20} />}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase tracking-widest text-pct-gold mb-6">
            Explore
          </h3>
          <ul className="space-y-4">
            {siteConfig.mainNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white/60 hover:text-white transition-colors uppercase text-sm tracking-wider"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase tracking-widest text-pct-gold mb-6">
            Contact
          </h3>
          <ul className="space-y-4 text-white/60 text-sm font-light">
            <li>{siteConfig.contact.address}</li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} PCB. All Rights Reserved.</p>
        <p>Designed with Passion.</p>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-pct-gold hover:border-pct-gold hover:bg-white/5 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
