"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SITE_LINKS } from "@/lib/data/landing";

export default function HeroMinimal() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ivory">
      {/* Background Soft Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ivory-light via-ivory to-[#ebe4d6] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Brand Symbol Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ivory-light border border-gold/30 shadow-xs mb-8 transition-transform duration-200 hover:scale-105">
          <Image
            src="/brand/logo-system/maru-symbol-transparent.png"
            alt="Maru Symbol"
            width={20}
            height={18}
            className="w-5 h-auto object-contain"
          />
          <span className="text-xs font-medium text-deep-green tracking-wide">
            Katalog Fitur Maru
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-semibold text-deep-green tracking-tight leading-[1.12] mb-4 max-w-3xl">
          Fitur Lengkap <span className="italic text-gold font-normal">Maru</span>
        </h1>

        {/* Direct Subheadline */}
        <p className="text-base sm:text-lg text-deep-green/80 font-normal leading-relaxed max-w-xl mx-auto mb-10 text-pretty">
          Undangan digital modular dan sistem meja resepsi 20 FPS offline-first.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href={SITE_LINKS.sampleInvitation}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-deep-green hover:bg-deep-green-dark text-white font-medium text-sm transition-[transform,background-color,box-shadow] duration-150 active:scale-[0.98] shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
          >
            <span>Buka Live Demo Undangan</span>
            <ArrowUpRight className="w-4 h-4 text-gold" />
          </a>

          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-ivory-light hover:bg-white text-deep-green border border-deep-green/20 font-medium text-sm transition-[transform,background-color,border-color,box-shadow] duration-150 active:scale-[0.98] shadow-xs hover:shadow-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
