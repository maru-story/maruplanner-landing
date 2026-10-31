"use client";

import React from "react";
import { useCanvasScroller } from "./hooks/useCanvasScroller";
import CanvasProgressBar from "./canvas-progress-bar";
import HeroOverlayPhases from "./hero-overlay-phases";

export default function HeroCanvas() {
  const { containerRef, canvasRef, imagesLoaded, loadProgress } =
    useCanvasScroller({
      totalFrames: 120,
      scrollDistance: 2600,
      priorityFrameBatchSize: 20,
    });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-cream"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cream-light via-cream to-[#f1ede0] pointer-events-none" />

      {/* HTML5 2D Canvas */}
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Animasi interaktif transformasi undangan amplop fisik ke tampilan digital dan QR check-in"
        className="absolute inset-0 w-full h-full object-cover z-0 block"
      />

      {/* Subtle vignettes for readability while preserving visual brilliance */}
      <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-cream/40 pointer-events-none z-10" />

      {/* Loading Progress Indicator */}
      <CanvasProgressBar
        imagesLoaded={imagesLoaded}
        loadProgress={loadProgress}
      />

      {/* Text Overlay Phases */}
      <HeroOverlayPhases />
    </div>
  );
}
