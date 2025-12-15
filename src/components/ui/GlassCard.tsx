"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export default function GlassCard({
  children,
  className,
  intensity = "medium",
  ...props
}: GlassCardProps) {
  const intensities = {
    low: "bg-white/40 dark:bg-white/5 backdrop-blur-sm border-black/5 dark:border-white/5 shadow-sm",
    medium:
      "bg-white/60 dark:bg-white/10 backdrop-blur-md border-black/10 dark:border-white/10 shadow-md",
    high: "bg-white/80 dark:bg-white/20 backdrop-blur-xl border-black/10 dark:border-white/20 shadow-lg",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 hover:bg-white/80 dark:hover:bg-white/15",
        intensities[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
