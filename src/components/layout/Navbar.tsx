"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import pctLogo from "@/assets/Pakistan_cricket_team_logo.png";
import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={cn(
          "fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all duration-300",
          // isScrolled ?
          "bg-background/80 backdrop-blur-md border-b border-border py-3"
          // : "bg-transparent py-6"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={pctLogo}
            alt="PCB Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <span className="hidden md:block font-oswald font-bold text-xl tracking-tighter text-foreground">
            PCB
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors duration-300 relative group",
                pathname === link.href
                  ? "text-pct-green dark:text-pct-gold"
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-full h-[2px] bg-pct-green dark:bg-pct-gold transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left",
                  pathname === link.href && "scale-x-100"
                )}
              ></span>
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-pct-green dark:hover:text-pct-gold transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 transform translate-x-full border-l border-border flex flex-col justify-center items-center md:hidden"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-foreground hover:text-pct-green dark:hover:text-pct-gold transition-colors"
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
              className={cn(
                "text-5xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground transition-all duration-300 uppercase dark:bg-gradient-to-b dark:from-foreground dark:to-muted-foreground",
                pathname === link.href
                  ? "to-pct-green dark:to-pct-gold"
                  : "hover:to-pct-green dark:hover:to-pct-gold"
              )}
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
