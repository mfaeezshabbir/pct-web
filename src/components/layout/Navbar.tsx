"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import pctLogo from "@/assets/Pakistan_cricket_team_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isOpen]);

  const navLinks = siteConfig.mainNav;

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={pctLogo}
            alt="PCT Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:text-pct-gold transition-colors"
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* Full Screen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 transform translate-x-full border-l border-white/10 flex flex-col justify-center items-center"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-pct-gold transition-colors"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              className="text-5xl md:text-7xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 hover:to-pct-gold transition-all duration-300 uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
