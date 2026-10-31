"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <section id="fitur" className="py-24 bg-ivory relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-light border border-gold/30 text-xs font-medium text-deep-green mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            <span>Ekosistem Terpadu Pengantin & Vendor</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-deep-green leading-tight mb-4">
            Dua Sudut Pandang, Satu Ekosistem Sempurna
          </h2>
          <p className="text-base text-deep-green/80 leading-relaxed max-w-xl mx-auto">
            Didesain khusus untuk memenuhi kebutuhan estetika calon pengantin
            sekaligus tuntutan efisiensi kerja tim Wedding Organizer.
          </p>

          {/* Toggle Switch */}
          <div
            role="tablist"
            aria-label="Pilihan audiens fitur Maru"
            className="mt-8 inline-flex p-1.5 rounded-full bg-ivory-light border border-deep-green/15 shadow-xs"
          >
            <button
              id="tab-couple"
              role="tab"
              aria-selected={activeTab === "couple"}
              aria-controls="features-panel"
              onClick={() => setActiveTab("couple")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden ${
                activeTab === "couple"
                  ? "bg-deep-green text-white shadow-xs"
                  : "text-deep-green/80 hover:text-deep-green"
              }`}
            >
              <Heart className={`w-4 h-4 ${activeTab === "couple" ? "text-gold" : "text-deep-green/60"}`} />
              <span>Untuk Calon Pengantin</span>
            </button>

            <button
              id="tab-organizer"
              role="tab"
              aria-selected={activeTab === "organizer"}
              aria-controls="features-panel"
              onClick={() => setActiveTab("organizer")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden ${
                activeTab === "organizer"
                  ? "bg-deep-green text-white shadow-xs"
                  : "text-deep-green/80 hover:text-deep-green"
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeTab === "organizer" ? "text-gold" : "text-deep-green/60"}`} />
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
                className="bg-ivory-light rounded-3xl p-8 border border-deep-green/10 shadow-xs hover:border-gold/40 hover:shadow-sm hover:-translate-y-0.5 transition-[transform,border-color,box-shadow] duration-200 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-ivory flex items-center justify-center text-gold shrink-0 border border-deep-green/10">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg text-deep-green">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-ivory text-deep-green border border-gold/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-deep-green/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Mascot Highlight Callout Card */}
        <div className="mt-12 bg-ivory-light rounded-3xl p-8 md:p-10 border border-deep-green/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Mari & Maru Calm Mascot */}
            <div className="w-24 h-24 rounded-2xl bg-ivory border border-gold/30 flex items-center justify-center shrink-0 shadow-xs overflow-hidden p-1">
              <Image
                src={
                  activeTab === "couple"
                    ? "/brand/mascot/calm/maru-mascot-couple-calm.png"
                    : "/brand/mascot/calm/maru-mascot-groom-calm.png"
                }
                alt="Maru & Mari Mascot"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <h3 className="font-heading font-semibold text-lg text-deep-green">
                  Kapasitas Acara Besar Terjamin
                </h3>
              </div>
              <p className="text-sm text-deep-green/80 max-w-lg leading-relaxed">
                Sistem teruji mendukung hingga 2.000 tamu per event dan 2
                perangkat scanner resepsi aktif bersamaan dengan sinkronisasi
                real-time tanpa beban server.
              </p>
            </div>
          </div>

          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 min-h-[44px] flex items-center justify-center px-6 py-3.5 rounded-full bg-deep-green hover:bg-deep-green-dark text-white text-xs font-semibold transition-[transform,background-color,box-shadow] duration-150 active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-offset-2"
          >
            Konsultasi Kebutuhan Event
          </a>
        </div>
      </div>
    </section>
  );
}
