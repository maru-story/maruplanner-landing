"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const TOTAL_FRAMES = 120;

// Persistent cache across re-renders and client transitions
const imageCache: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);

export interface UseCanvasScrollerOptions {
  totalFrames?: number;
  scrollDistance?: number;
  priorityFrameBatchSize?: number;
}

export function useCanvasScroller({
  totalFrames = TOTAL_FRAMES,
  scrollDistance = 2600,
  priorityFrameBatchSize = 20,
}: UseCanvasScrollerOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(1);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /**
   * Safe Frame Retrieval with Nearest-Loaded Fallback
   * Guarantees canvas NEVER receives a null or non-decoded frame, eliminating blank flashes.
   */
  const getLoadedFrame = useCallback(
    (targetIndex: number): HTMLImageElement | null => {
      // 1. Direct target match
      const exact = imageCache[targetIndex - 1];
      if (exact && exact.complete && exact.naturalWidth > 0) {
        return exact;
      }

      // 2. Search backwards (most natural when scrubbing forward)
      for (let i = targetIndex - 1; i >= 1; i--) {
        const candidate = imageCache[i - 1];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          return candidate;
        }
      }

      // 3. Search forwards (if scrubbing backwards)
      for (let i = targetIndex + 1; i <= totalFrames; i++) {
        const candidate = imageCache[i - 1];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          return candidate;
        }
      }

      return null;
    },
    [totalFrames]
  );

  /**
   * Draw specific frame to canvas
   * Draws opaque image directly to overwrite previous buffer without clearRect to prevent flickering.
   */
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = getLoadedFrame(frameIndex);
      if (!img) return;

      const width = canvas.width;
      const height = canvas.height;
      if (width <= 0 || height <= 0) return;

      // Cover-scale calculation
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

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      lastDrawnFrameRef.current = frameIndex;
    },
    [getLoadedFrame]
  );

  /**
   * Synchronize canvas internal pixel buffer with CSS dimensions & device pixel ratio
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

    // Repaint active frame immediately after resize
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Dimension sync on mount and resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    syncDimensions();

    const ro = new ResizeObserver(() => syncDimensions());
    ro.observe(container);
    window.addEventListener("resize", syncDimensions);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncDimensions);
    };
  }, [syncDimensions]);

  // Progressive frame preloading
  useEffect(() => {
    let isMounted = true;

    const checkCompletion = () => {
      if (!isMounted) return;
      let completed = 0;
      for (let i = 0; i < totalFrames; i++) {
        const img = imageCache[i];
        if (img && img.complete && img.naturalWidth > 0) {
          completed++;
        }
      }
      const percent = Math.round((completed / totalFrames) * 100);
      setLoadProgress(percent);
      if (completed >= totalFrames) {
        setImagesLoaded(true);
      }
    };

    const loadSingleFrame = (frameNum: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imageCache[frameNum - 1]) {
          const existing = imageCache[frameNum - 1]!;
          if (existing.complete && existing.naturalWidth > 0) {
            if (frameNum === 1 || frameNum === currentFrameRef.current) {
              drawFrame(currentFrameRef.current);
            }
          }
          resolve();
          return;
        }

        const img = new Image();
        const padded = String(frameNum).padStart(3, "0");
        img.src = `/frames/frame_${padded}.webp`;

        img.onload = () => {
          checkCompletion();
          if (
            frameNum === 1 ||
            Math.abs(frameNum - currentFrameRef.current) <= 1
          ) {
            drawFrame(currentFrameRef.current);
          }
          resolve();
        };

        img.onerror = () => {
          checkCompletion();
          resolve();
        };

        imageCache[frameNum - 1] = img;
      });
    };

    // Priority 1: Load Frame 1 immediately
    loadSingleFrame(1).then(() => {
      if (!isMounted) return;

      // Priority 2: Load next batch of keyframes for immediate smooth scroll
      const batchPromises: Promise<void>[] = [];
      const batchLimit = Math.min(priorityFrameBatchSize, totalFrames);
      for (let i = 2; i <= batchLimit; i++) {
        batchPromises.push(loadSingleFrame(i));
      }

      Promise.all(batchPromises).then(() => {
        if (!isMounted) return;

        // Priority 3: Preload remaining frames in background idle chunks
        let nextFrame = batchLimit + 1;
        const loadRestChunk = () => {
          if (!isMounted || nextFrame > totalFrames) return;
          const end = Math.min(nextFrame + 10, totalFrames);
          for (let i = nextFrame; i <= end; i++) {
            loadSingleFrame(i);
          }
          nextFrame = end + 1;
          if (nextFrame <= totalFrames) {
            if (typeof window.requestIdleCallback === "function") {
              window.requestIdleCallback(loadRestChunk);
            } else {
              setTimeout(loadRestChunk, 60);
            }
          }
        };

        loadRestChunk();
      });
    });

    checkCompletion();

    return () => {
      isMounted = false;
    };
  }, [drawFrame, totalFrames, priorityFrameBatchSize]);

  // GSAP ScrollTrigger timeline setup
  useGSAP(
    () => {
      if (!containerRef.current || !canvasRef.current) return;

      if (isReducedMotion) {
        // If reduced motion is preferred, render frame 1 static and display overlay without pinned scrubbing
        drawFrame(1);
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            const frame = Math.min(
              totalFrames,
              Math.max(1, Math.round(self.progress * (totalFrames - 1) + 1))
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
          0.8
        );
    },
    { scope: containerRef, dependencies: [scrollDistance, totalFrames, drawFrame, isReducedMotion] }
  );

  return {
    containerRef,
    canvasRef,
    imagesLoaded,
    loadProgress,
    isReducedMotion,
  };
}
