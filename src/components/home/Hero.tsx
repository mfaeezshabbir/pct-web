"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Assets
import heroBanner from "@/assets/hero_banner.webp";
import menTest from "@/assets/team/MTEST.png";
import menT20 from "@/assets/team/MT20.png";

const SLIDES = [
  {
    id: 1,
    type: "full-bg",
    image: heroBanner,
    tag: "CHAMPIONS TROPHY 2025",
    title: "THE SHAHEENS ARE READY",
    description:
      "Experience the thrill as Pakistan hosts the world for the ultimate cricket showdown. The stage is set for glory.",
    cta: "Match Center",
    ctaLink: "/matches",
    color: "from-black to-black",
  },
  {
    id: 2,
    type: "cutout",
    image: menTest,
    tag: "MEN'S TEST SQUAD",
    title: "DOMINANCE IN RED BALL",
    description:
      "Witness the resilience and artistry of our Test team as they climb the World Test Championship rankings.",
    cta: "View Squad",
    ctaLink: "/players",
    color: "from-[#0a1a0f] to-[#043310]", // Deep Green Gradient
  },
  {
    id: 3,
    type: "cutout",
    image: menT20,
    tag: "OFFICIAL MERCHANDISE",
    title: "WEAR YOUR PASSION",
    description:
      "Get the official 2025 kit. Engineered for performance, designed for the fans who bleed green.",
    cta: "Shop Now",
    ctaLink: "/shop",
    color: "from-[#1a1500] to-[#3d3200]", // Deep Gold Gradient
  },
];

const AUTOPLAY_DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const activeSlide = SLIDES[current];

  // Auto-advance logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="h-screen w-full relative overflow-hidden bg-black flex flex-col justify-center group">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              current === index ? "opacity-100 z-10" : "opacity-0 z-0",
              slide.type === "cutout"
                ? `bg-linear-to-br ${slide.color}`
                : "bg-black"
            )}
          >
            {/* Full Width Background Image */}
            {slide.type === "full-bg" && (
              <>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-10000 ease-linear",
                    current === index ? "scale-110" : "scale-100"
                  )}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10"></div>
              </>
            )}

            {/* Cutout Slide Background Effects */}
            {slide.type === "cutout" && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-screen h-screen bg-white/5 rounded-full blur-[150px]"></div>
                <div className="absolute top-0 inset-x-0 h-full bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="container mx-auto px-6 md:px-20 relative z-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
          {/* TEXT CONTENT */}
          <div className="col-span-1 lg:col-span-7 pt-20 lg:pt-0">
            <div className="overflow-hidden">
              <div
                key={`tag-${current}`}
                className="animate-in slide-in-from-bottom-4 fade-in duration-700 ease-out"
              >
                <span className="inline-block py-1.5 px-4 rounded-full bg-pct-green/20 border border-pct-green/30 text-pct-green text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  {activeSlide.tag}
                </span>
              </div>
            </div>

            <div className="overflow-hidden min-h-[160px] md:min-h-[220px]">
              <h1
                key={`title-${current}`}
                className="text-6xl md:text-8xl lg:text-9xl font-oswald font-bold text-white uppercase leading-[0.9] tracking-tighter animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100 ease-out drop-shadow-2xl"
              >
                {activeSlide.title}
              </h1>
            </div>

            <div className="overflow-hidden mb-12">
              <p
                key={`desc-${current}`}
                className="text-lg text-gray-300 max-w-xl font-light leading-relaxed animate-in slide-in-from-bottom-4 fade-in duration-700 delay-200 ease-out border-l-2 border-pct-gold pl-6"
              >
                {activeSlide.description}
              </p>
            </div>

            <div className="overflow-hidden">
              <div
                key={`cta-${current}`}
                className="animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300"
              >
                <Link
                  href={activeSlide.ctaLink}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-pct-green hover:bg-white text-white hover:text-pct-green font-oswald font-bold text-lg uppercase tracking-widest transition-all duration-300 rounded-sm group shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                >
                  {activeSlide.cta}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* FLOATING IMAGE FOR CUTOUT SLIDES */}
          <div className="col-span-1 lg:col-span-5 relative h-[400px] lg:h-[600px] hidden lg:block perspective-[1000px]">
            {SLIDES.map(
              (slide, index) =>
                slide.type === "cutout" && (
                  <div
                    key={`img-${slide.id}`}
                    className={cn(
                      "absolute inset-0 transition-all duration-1000 ease-out flex items-center justify-center",
                      current === index
                        ? "opacity-100 translate-y-0 scale-100 rotate-0"
                        : "opacity-0 translate-y-20 scale-95 rotate-3 pointer-events-none"
                    )}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      priority={index === current}
                    />
                  </div>
                )
            )}

            {/* Decorative Background Elements for Floating Image */}
            <div
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full -z-10 transition-opacity duration-700",
                activeSlide.type === "cutout"
                  ? "opacity-100 animate-[spin_20s_linear_infinite]"
                  : "opacity-0"
              )}
            ></div>
            <div
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 rounded-full -z-10 transition-opacity duration-700 delay-100",
                activeSlide.type === "cutout"
                  ? "opacity-100 animate-[spin_30s_linear_infinite_reverse]"
                  : "opacity-0"
              )}
            ></div>
          </div>
        </div>
      </div>

      {/* CONTROLS & PROGRESS */}
      <div className="absolute bottom-10 left-0 w-full z-30 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={cn(
                  "h-1 transition-all duration-500 rounded-full",
                  current === idx
                    ? "w-12 bg-pct-green"
                    : "w-2 bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-pct-green hover:border-pct-green transition-all rounded-full group focus:outline-none focus:ring-2 focus:ring-pct-green"
              aria-label="Previous slide"
            >
              <ChevronLeft
                size={24}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-pct-green hover:border-pct-green transition-all rounded-full group focus:outline-none focus:ring-2 focus:ring-pct-green"
              aria-label="Next slide"
            >
              <ChevronRight
                size={24}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Smooth Progress Bar with CSS Animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
          <div
            key={current} // Key change triggers generic re-render of animation
            className="h-full bg-pct-gold origin-left animate-progress"
            style={{ animationDuration: `${AUTOPLAY_DURATION}ms` }}
          ></div>
        </div>
      </div>

      {/* Inline styles for the progress animation */}
      <style jsx global>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-progress {
          animation-name: progress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}
