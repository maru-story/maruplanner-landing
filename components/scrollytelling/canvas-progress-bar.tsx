"use client";

import React from "react";

interface CanvasProgressBarProps {
  imagesLoaded: boolean;
  loadProgress: number;
}

export default function CanvasProgressBar({
  imagesLoaded,
  loadProgress,
}: CanvasProgressBarProps) {
  if (imagesLoaded) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="absolute top-24 left-1/2 -translate-x-1/2 z-30 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-copper/25 shadow-xs text-xs text-charcoal flex items-center gap-2.5 transition-opacity"
    >
      <div className="w-2 h-2 rounded-full bg-copper animate-ping shrink-0" />
      <span className="font-medium text-charcoal/90">
        Memuat visual interaktif{" "}
        <span className="tabular-nums font-semibold text-copper-dark">({loadProgress}%)</span>
      </span>
    </div>
  );
}
