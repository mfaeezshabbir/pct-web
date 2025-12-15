"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef(null);
  const title = useRef(null);
  const subtitle = useRef(null);
  const circle = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(circle.current, {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      })
        .from(
          title.current,
          {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2, // If split text, but here it's one block
            ease: "power4.out",
          },
          "-=1"
        )
        .from(
          subtitle.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // Parallax effect on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(title.current, { x: x, y: y, duration: 1, ease: "power2.out" });
        gsap.to(circle.current, {
          x: -x * 2,
          y: -y * 2,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background Gradient Circle */}
      <div
        ref={circle}
        className="absolute w-[60vw] h-[60vw] bg-pct-green/20 rounded-full blur-[100px] -z-0 pointer-events-none"
      ></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

      {/* Noise Texture via CSS */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></div>

      <h1
        ref={title}
        className="text-[12vw] md:text-[15vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter z-10 text-center select-none drop-shadow-2xl"
      >
        SHAHEENS
      </h1>
      <p
        ref={subtitle}
        className="mt-8 text-lg md:text-2xl text-pct-gold tracking-[0.5em] font-light z-10 uppercase"
      >
        Cornered Tigers • World Champions
      </p>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 z-10 opacity-70">
        <span className="text-xs uppercase tracking-widest text-white/50">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-pct-gold to-transparent"></div>
      </div>
    </section>
  );
}
