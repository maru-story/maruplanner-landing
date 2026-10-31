"use client";

import React, { useState } from "react";
import { Heart, Briefcase, CheckCircle } from "lucide-react";
import {
  COUPLE_FEATURES,
  ORGANIZER_FEATURES,
  SITE_LINKS,
} from "@/lib/data/landing";

export default function FeaturesHybrid() {
  const [activeTab, setActiveTab] = useState<"couple" | "organizer">("couple");

  const currentFeatures =
    activeTab === "couple" ? COUPLE_FEATURES : ORGANIZER_FEATURES;

  return (
    <section id="fitur" className="py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
            Dua Sudut Pandang, Satu Ekosistem Sempurna
          </h2>
          <p className="text-base text-charcoal/80 leading-relaxed max-w-xl mx-auto">
            Didesain khusus untuk memenuhi kebutuhan estetika calon pengantin
            sekaligus tuntutan efisiensi kerja tim Wedding Organizer.
          </p>

          {/* Toggle Switch */}
          <div
            role="tablist"
            aria-label="Pilihan audiens fitur Maru Planner"
            className="mt-8 inline-flex p-1.5 rounded-full bg-white border border-charcoal/15 shadow-xs"
          >
            <button
              id="tab-couple"
              role="tab"
              aria-selected={activeTab === "couple"}
              aria-controls="features-panel"
              onClick={() => setActiveTab("couple")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden ${
                activeTab === "couple"
                  ? "bg-copper-dark text-white shadow-xs"
                  : "text-charcoal/80 hover:text-charcoal"
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Untuk Calon Pengantin</span>
            </button>

            <button
              id="tab-organizer"
              role="tab"
              aria-selected={activeTab === "organizer"}
              aria-controls="features-panel"
              onClick={() => setActiveTab("organizer")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden ${
                activeTab === "organizer"
                  ? "bg-copper-dark text-white shadow-xs"
                  : "text-charcoal/80 hover:text-charcoal"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Untuk Wedding Organizer</span>
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div
          id="features-panel"
          role="tabpanel"
          aria-labelledby={
            activeTab === "couple" ? "tab-couple" : "tab-organizer"
          }
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {currentFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-charcoal/10 shadow-xs hover:border-copper/40 hover:shadow-sm hover:-translate-y-0.5 transition-[transform,border-color,box-shadow] duration-200 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-copper-dark shrink-0 border border-charcoal/10">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-medium text-lg text-charcoal">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-cream text-copper-dark border border-copper/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solid High-Contrast Callout Box */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-charcoal/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-medium text-base text-charcoal">
                Kapasitas Acara Besar Terjamin
              </h3>
              <p className="text-sm text-charcoal/80">
                Sistem teruji mendukung hingga 2.000 tamu per event dan 2
                perangkat scanner resepsi aktif bersamaan.
              </p>
            </div>
          </div>

          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 min-h-[44px] flex items-center justify-center px-6 py-3 rounded-full bg-charcoal text-white hover:bg-black text-xs font-semibold transition-[transform,background-color] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden focus-visible:ring-offset-2"
          >
            Konsultasi Kebutuhan Event
          </a>
        </div>
      </div>
    </section>
  );
}
