"use client";

import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data/landing";

export default function HeroOverlayPhases() {
  return (
    <div className="relative z-20 w-full h-full max-w-6xl mx-auto px-6 flex flex-col justify-between py-20 md:py-24 pointer-events-none">
      {/* Phase 1: Hero Welcome (0% - 20%) */}
      <div
        id="phase-1"
        className="my-auto max-w-2xl text-left pointer-events-auto transition-opacity"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-light/90 border border-gold/30 text-xs font-medium text-deep-green mb-5 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
          <span>Digital Wedding Planner & Guest Management</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-semibold tracking-tight text-deep-green leading-[1.12] mb-5 md:mb-6">
          Elegan di Layar, <br />
          <span className="italic text-gold">Sempurna di Hari-H.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-deep-green/90 font-medium leading-relaxed mb-6 md:mb-8 max-w-lg bg-ivory-light/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-deep-green/10 shadow-xs">
          Satu platform terintegrasi untuk undangan digital eksklusif, sebar
          WhatsApp personal, hingga QR Code check-in 20fps anti-antrean di meja
          resepsi.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-deep-green hover:bg-deep-green-dark text-white font-medium text-sm transition-[transform,background-color,box-shadow] duration-150 shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            <span>Konsultasi WhatsApp</span>
          </a>

          <a
            href={SITE_CONFIG.sampleInvitationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ivory-light/95 hover:bg-white text-deep-green border border-deep-green/15 font-medium text-sm transition-[transform,background-color,border-color,box-shadow] duration-150 shadow-xs hover:shadow-sm active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-offset-2"
          >
            <span>Lihat Contoh Undangan</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </a>
        </div>

        <div className="mt-8 md:mt-12 flex items-center gap-2 text-xs text-deep-green/70">
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
          <span>Gulir perlahan untuk melihat transformasi</span>
        </div>
      </div>

      {/* Phase 2: Unfolding (25% - 45%) */}
      <div
        id="phase-2"
        className="absolute inset-x-6 top-1/2 -translate-y-1/2 max-w-xl mx-auto text-center pointer-events-auto opacity-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold text-deep-green leading-tight mb-4">
          Beralih dari Kerumitan Kertas ke Keindahan Digital
        </h2>
        <p className="text-sm md:text-base text-deep-green/85 leading-relaxed bg-ivory-light/95 backdrop-blur-md p-5 rounded-2xl border border-deep-green/10 shadow-xs">
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
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold text-deep-green leading-tight mb-4">
          Undangan Eksklusif Atas Nama Masing-Masing Tamu
        </h2>
        <p className="text-sm md:text-base text-deep-green/85 leading-relaxed bg-ivory-light/95 backdrop-blur-md p-5 rounded-2xl border border-deep-green/10 shadow-xs">
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
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-semibold text-deep-green leading-tight mb-4">
          QR Check-In 20fps & Kontrol Tamu Real-Time
        </h2>
        <p className="text-sm md:text-base text-deep-green/85 leading-relaxed mb-6 bg-ivory-light/95 backdrop-blur-md p-5 rounded-2xl border border-deep-green/10 shadow-xs">
          Tamu cukup menunjukkan QR Code di layar ponsel. Meja penerima tamu
          memindai secepat kilat dengan PWA offline-first tanpa takut sinyal
          hilang di dalam gedung.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex min-h-[44px] items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-deep-green hover:bg-deep-green-dark text-white font-medium text-sm transition-[transform,background-color,box-shadow] duration-150 shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            <span>Jadwalkan Konsultasi</span>
          </a>

          <a
            href={SITE_CONFIG.sampleInvitationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex min-h-[44px] items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ivory-light hover:bg-white text-deep-green border border-deep-green/20 font-medium text-sm transition-[transform,background-color,border-color,box-shadow] duration-150 shadow-xs active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-offset-2"
          >
            <span>Buka Demo Undangan</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </a>
        </div>
      </div>
    </div>
  );
}
