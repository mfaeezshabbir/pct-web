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
    low: "bg-white/5 backdrop-blur-sm border-white/5",
    medium: "bg-white/10 backdrop-blur-md border-white/10",
    high: "bg-white/20 backdrop-blur-xl border-white/20",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border shadow-xl transition-all duration-300 hover:bg-white/15",
        intensities[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
