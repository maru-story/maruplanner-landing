"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Briefcase } from "lucide-react";
import {
  COUPLE_FEATURES,
  ORGANIZER_FEATURES,
  SITE_LINKS,
} from "@/lib/data/landing";

export default function FeaturesShowcase() {
  const [activeTab, setActiveTab] = useState<"couple" | "organizer">("couple");

  const currentFeatures =
    activeTab === "couple" ? COUPLE_FEATURES : ORGANIZER_FEATURES;

  return (
    <section id="fitur-undangan" className="py-20 md:py-28 bg-ivory relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header & Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-8 border-b border-deep-green/10">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gold mb-2 block">
              Fitur Utama
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-deep-green tracking-tight">
              {activeTab === "couple"
                ? "Fitur Undangan Digital"
                : "Fitur Meja Resepsi"}
            </h2>
          </div>

          {/* Accessible Pill Toggle */}
          <div
            role="tablist"
            aria-label="Pilihan audiens fitur"
            className="inline-flex p-1.5 rounded-full bg-ivory-light border border-deep-green/15 shadow-xs self-start md:self-auto"
          >
            <button
              id="tab-couple"
              role="tab"
              aria-selected={activeTab === "couple"}
              aria-controls="features-panel"
              onClick={() => setActiveTab("couple")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden ${
                activeTab === "couple"
                  ? "bg-deep-green text-white shadow-xs"
                  : "text-deep-green/80 hover:text-deep-green"
              }`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  activeTab === "couple" ? "text-gold" : "text-deep-green/60"
                }`}
              />
              <span>Pengantin</span>
            </button>

            <button
              id="tab-organizer"
              role="tab"
              aria-selected={activeTab === "organizer"}
              aria-controls="features-panel"
              onClick={() => setActiveTab("organizer")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden ${
                activeTab === "organizer"
                  ? "bg-deep-green text-white shadow-xs"
                  : "text-deep-green/80 hover:text-deep-green"
              }`}
            >
              <Briefcase
                className={`w-3.5 h-3.5 ${
                  activeTab === "organizer" ? "text-gold" : "text-deep-green/60"
                }`}
              />
              <span>Wedding Organizer</span>
            </button>
          </div>
        </div>

        {/* Feature Grid: 6 Clean Cards */}
        <div
          id="features-panel"
          role="tabpanel"
          aria-labelledby={
            activeTab === "couple" ? "tab-couple" : "tab-organizer"
          }
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-ivory-light rounded-2xl p-7 border border-deep-green/10 shadow-xs hover:border-gold/40 hover:shadow-sm hover:-translate-y-0.5 transition-[transform,border-color,box-shadow] duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-ivory flex items-center justify-center text-gold border border-deep-green/10 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.tag && (
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-ivory text-deep-green border border-gold/30">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-deep-green mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-deep-green/75 leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Target anchor for smooth navigation */}
        <div id="fitur-resepsi" />

        {/* Direct Action Bar */}
        <div className="mt-12 bg-ivory-light rounded-2xl p-6 sm:p-7 border border-deep-green/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-ivory border border-gold/30 flex items-center justify-center shrink-0 p-1">
              <Image
                src={
                  activeTab === "couple"
                    ? "/brand/mascot/calm/maru-mascot-couple-calm.png"
                    : "/brand/mascot/calm/maru-mascot-groom-calm.png"
                }
                alt="Maru Mascot"
                width={52}
                height={52}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-base text-deep-green">
                {activeTab === "couple"
                  ? "Undangan Digital Personal"
                  : "Sistem Meja Resepsi & Scanner QR"}
              </h4>
              <p className="text-xs text-deep-green/70">
                Pilih paket dan sesuaikan dengan kebutuhan acara Anda.
              </p>
            </div>
          </div>

          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 min-h-[44px] flex items-center justify-center px-6 py-3 rounded-full bg-deep-green hover:bg-deep-green-dark text-white text-xs font-semibold transition-[transform,background-color] duration-150 active:scale-[0.98] shadow-xs hover:shadow-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
          >
            Tanya Fitur via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
