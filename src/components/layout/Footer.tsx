"use client";
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border pt-20 pb-10 px-6 md:px-20 overflow-hidden relative">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-oswald font-bold text-foreground/5 select-none pointer-events-none whitespace-nowrap">
        PAKISTAN
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
        {/* Brand Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-border pb-12">
          <div className="max-w-md">
            <h2 className="text-4xl font-oswald mb-6 text-foreground uppercase tracking-tighter">
              {siteConfig.name}
            </h2>
            <p className="text-muted-foreground mb-8 font-light leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
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

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* LATEST */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-pct-green dark:text-pct-gold mb-6">
              Latest
            </h3>
            <ul className="space-y-0">
              {["Media Release", "Match Reports", "Features"].map((item) => (
                <li key={item} className="border-b border-border/50">
                  <Link
                    href="#"
                    className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MULTIMEDIA */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-pct-green dark:text-pct-gold mb-6">
              Multimedia
            </h3>
            <ul className="space-y-0">
              {["Podcast", "Photos", "Videos"].map((item) => (
                <li key={item} className="border-b border-border/50">
                  <Link
                    href="#"
                    className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PCB ADS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-pct-green dark:text-pct-gold mb-6">
              PCB Ads
            </h3>
            <ul className="space-y-0">
              {[
                "Career Opportunity",
                "Career Archives",
                "Current Ad",
                "Ad Archives",
              ].map((item) => (
                <li key={item} className="border-b border-border/50">
                  <Link
                    href="#"
                    className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT PCB */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-pct-green dark:text-pct-gold mb-6">
              About PCB
            </h3>
            <ul className="space-y-0">
              <li className="border-b border-border/50">
                <Link
                  href="#"
                  className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="border-b border-border/50">
                <Link
                  href="#"
                  className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li className="border-b border-border/50 py-3 flex items-center justify-between group cursor-pointer">
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Media Account:
                </span>
                <XIconSquare />
              </li>
              <li className="border-b border-border/50 py-3 flex items-center justify-between group cursor-pointer">
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Live Account:
                </span>
                <XIconSquare />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} PCB. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-foreground">
            Disclaimer
          </Link>
          <span className="text-border">|</span>
          <Link href="#" className="hover:text-foreground">
            Terms & Conditions
          </Link>
          <span className="text-border">|</span>
          <Link href="#" className="hover:text-foreground">
            Privacy Statement
          </Link>
        </div>
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
      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-pct-green hover:border-pct-green dark:hover:text-pct-gold dark:hover:border-pct-gold hover:bg-muted transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function XIconSquare() {
  return (
    <div className="w-6 h-6 bg-black flex items-center justify-center rounded-sm">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-4 h-4 fill-white"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 8.757l6.59-7.533H21.43l-8.77 10.033z"></path>
      </svg>
    </div>
  );
}
