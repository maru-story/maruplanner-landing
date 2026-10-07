"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TOTAL_FRAMES = 120;

// Persistent module-level cache so images remain cached across renders and hot-reloads
const imageCache: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(1);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  /**
   * Safe Frame Retrieval with Nearest-Loaded Fallback
   * Guarantees canvas NEVER receives a null or non-decoded frame, eliminating blank flashes.
   */
  const getLoadedFrame = (targetIndex: number): HTMLImageElement | null => {
    // 1. Direct target match
    const exact = imageCache[targetIndex - 1];
    if (exact && exact.complete && exact.naturalWidth > 0) {
      return exact;
    }

    // 2. Search backwards (most natural for scrub forward)
    for (let i = targetIndex - 1; i >= 1; i--) {
      const candidate = imageCache[i - 1];
      if (candidate && candidate.complete && candidate.naturalWidth > 0) {
        return candidate;
      }
    }

    // 3. Search forwards (if scrolling backwards before earlier frames load)
    for (let i = targetIndex + 1; i <= TOTAL_FRAMES; i++) {
      const candidate = imageCache[i - 1];
      if (candidate && candidate.complete && candidate.naturalWidth > 0) {
        return candidate;
      }
    }

    return null;
  };

  /**
   * Draw specific frame to canvas
   * Draws opaque image directly to overwrite previous buffer without clearRect to prevent flickering.
   */
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = getLoadedFrame(frameIndex);
    if (!img) return;

    const width = canvas.width;
    const height = canvas.height;
    if (width <= 0 || height <= 0) return;

    // Cover scale calculation
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    // Paint image directly over previous pixels (no clearRect flash)
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  /**
   * Keep canvas internal buffer resolution synchronized with container dimensions
   */
  const syncDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const targetWidth = Math.round(rect.width * dpr);
    const targetHeight = Math.round(rect.height * dpr);

    if (targetWidth <= 0 || targetHeight <= 0) return;

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    // Repaint active frame immediately after dimension adjustment
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Synchronize canvas size on mount, resize, and layout changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    syncDimensions();

    const ro = new ResizeObserver(() => {
      syncDimensions();
    });

    ro.observe(container);
    window.addEventListener("resize", syncDimensions);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncDimensions);
    };
  }, [syncDimensions]);

  // Progressive frame loader
  useEffect(() => {
    let isMounted = true;

    const checkCompletion = () => {
      if (!isMounted) return;
      let completed = 0;
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = imageCache[i];
        if (img && img.complete && img.naturalWidth > 0) {
          completed++;
        }
      }
      const percent = Math.round((completed / TOTAL_FRAMES) * 100);
      setLoadProgress(percent);
      if (completed >= TOTAL_FRAMES) {
        setImagesLoaded(true);
      }
    };

    const loadSingleFrame = (frameNum: number) => {
      if (imageCache[frameNum - 1]) {
        const existing = imageCache[frameNum - 1]!;
        if (existing.complete && existing.naturalWidth > 0) {
          if (frameNum === 1 || frameNum === currentFrameRef.current) {
            drawFrame(currentFrameRef.current);
          }
        }
        return;
      }

      const img = new Image();
      const padded = String(frameNum).padStart(3, "0");
      img.src = `/frames/frame_${padded}.webp`;

      img.onload = () => {
        checkCompletion();
        // If this newly loaded frame is currently the active or adjacent frame, render it immediately
        if (
          frameNum === 1 ||
          Math.abs(frameNum - currentFrameRef.current) <= 1
        ) {
          drawFrame(currentFrameRef.current);
        }
      };

      img.onerror = () => {
        checkCompletion();
      };

      imageCache[frameNum - 1] = img;
    };

    // Load Frame 1 with top priority
    loadSingleFrame(1);

    // Preload remaining frames
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      loadSingleFrame(i);
    }

    checkCompletion();

    return () => {
      isMounted = false;
    };
  }, [drawFrame]);

  // Setup GSAP ScrollTrigger timeline (mounted ONCE for absolute scroll stability)
  useGSAP(
    () => {
      if (!containerRef.current || !canvasRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2600",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            const frame = Math.min(
              TOTAL_FRAMES,
              Math.max(1, Math.round(self.progress * (TOTAL_FRAMES - 1) + 1))
            );
            currentFrameRef.current = frame;
            drawFrame(frame);
          },
        },
      });

      // Synchronized text animations across scroll phases
      tl.to(
        "#phase-1",
        { opacity: 0, y: -30, duration: 0.15, ease: "power1.out" },
        0.15
      )
        .fromTo(
          "#phase-2",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" },
          0.25
        )
        .to(
          "#phase-2",
          { opacity: 0, y: -30, duration: 0.15, ease: "power1.in" },
          0.45
        )
        .fromTo(
          "#phase-3",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" },
          0.52
        )
        .to(
          "#phase-3",
          { opacity: 0, y: -30, duration: 0.15, ease: "power1.in" },
          0.72
        )
        .fromTo(
          "#phase-4",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" },
          0.80
        );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-cream">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cream-light via-cream to-[#f1ede0] pointer-events-none" />

      {/* HTML5 2D Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 block"
      />

      {/* Subtle vignettes for readability while preserving video brilliance */}
      <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-cream/40 pointer-events-none z-10" />

      {/* Loading Progress Indicator (Only visible until preloading finishes) */}
      {!imagesLoaded && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 bg-white/85 backdrop-blur-md px-4 py-2 rounded-full border border-copper/20 shadow-xs text-xs text-charcoal flex items-center gap-2 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-copper animate-ping" />
          <span>Memuat visual interaktif ({loadProgress}%)</span>
        </div>
      )}

      {/* Text Overlay Container */}
      <div className="relative z-20 w-full h-full max-w-6xl mx-auto px-6 flex flex-col justify-between py-24 pointer-events-none">
        {/* Phase 1: Hero Welcome (0% - 20%) */}
        <div
          id="phase-1"
          className="my-auto max-w-2xl text-left pointer-events-auto transition-opacity"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-copper/30 text-copper text-xs font-medium mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-copper" />
            <span>Digital Wedding SaaS & Hospitality Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight text-charcoal leading-[1.15] mb-6">
            Elegan di Layar, <br />
            <span className="italic text-copper">Sempurna di Hari-H.</span>
          </h1>

          <p className="text-base md:text-lg text-charcoal font-medium leading-relaxed mb-8 max-w-lg bg-white/85 backdrop-blur-md p-4 rounded-2xl border border-charcoal/10 shadow-xs">
            Satu platform terintegrasi untuk undangan digital eksklusif, sebar
            WhatsApp personal, hingga QR Code check-in 20fps anti-antrean di meja
            resepsi.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://wa.me/6287825515689?text=Halo%20Maru%20Planner,%20saya%20ingin%20konsultasi%20layanan%20undangan%20digital%20dan%20manajemen%20tamu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-copper hover:bg-copper-dark text-white font-medium text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </a>

            <a
              href="https://maruplanner.my.id/ama-jidengg?to=tria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-charcoal border border-charcoal/15 font-medium text-sm transition-all shadow-xs hover:shadow-sm"
            >
              <span>Lihat Contoh Undangan</span>
              <ArrowRight className="w-4 h-4 text-copper" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2 text-xs text-charcoal/60">
            <span className="w-1.5 h-1.5 rounded-full bg-copper inline-block" />
            <span>Gulir perlahan untuk melihat transformasi</span>
          </div>
        </div>

        {/* Phase 2: Unfolding (25% - 45%) */}
        <div
          id="phase-2"
          className="absolute inset-x-6 top-1/2 -translate-y-1/2 max-w-xl mx-auto text-center pointer-events-auto opacity-0"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
            Beralih dari Kerumitan Kertas ke Keindahan Digital
          </h2>
          <p className="text-sm md:text-base text-charcoal/80 leading-relaxed bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-charcoal/10 shadow-xs">
            Tinggalkan proses cetak yang mahal dan rekap tamu manual yang rentan
            hilang. Hadirkan pengalaman yang hangat, mewah, dan praktis bagi
            setiap tamu undangan Anda.
          </p>
        </div>

        {/* Phase 3: The Digital Invitation (52% - 72%) */}
        <div
          id="phase-3"
          className="absolute inset-x-6 top-1/2 -translate-y-1/2 max-w-xl mx-auto text-center pointer-events-auto opacity-0"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
            Undangan Eksklusif Atas Nama Masing-Masing Tamu
          </h2>
          <p className="text-sm md:text-base text-charcoal/80 leading-relaxed bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-charcoal/10 shadow-xs">
            15 section modular: galeri foto, musik latar, hitung mundur, peta
            lokasi interaktif, amplop digital, dan ucapan doa yang terhubung
            langsung dalam genggaman.
          </p>
        </div>

        {/* Phase 4: QR Check-in & CTA (80% - 100%) */}
        <div
          id="phase-4"
          className="absolute inset-x-6 top-1/2 -translate-y-1/2 max-w-xl mx-auto text-center pointer-events-auto opacity-0"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
            QR Check-In 20fps & Kontrol Tamu Real-Time
          </h2>
          <p className="text-sm md:text-base text-charcoal/80 leading-relaxed mb-6 bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-charcoal/10 shadow-xs">
            Tamu cukup menunjukkan QR Code di layar ponsel. Meja penerima tamu
            memindai secepat kilat dengan PWA offline-first tanpa takut sinyal
            hilang di dalam gedung.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6287825515689?text=Halo%20Maru%20Planner,%20saya%20ingin%20jadwalkan%20konsultasi%20untuk%20acara%20pernikahan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-copper hover:bg-copper-dark text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Jadwalkan Konsultasi</span>
            </a>

            <a
              href="https://maruplanner.my.id/ama-jidengg?to=tria"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-cream text-charcoal border border-charcoal/20 font-medium text-sm transition-all shadow-xs"
            >
              <span>Buka Demo Undangan</span>
              <ArrowRight className="w-4 h-4 text-copper" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
