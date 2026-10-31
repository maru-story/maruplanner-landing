import React from "react";
import { ArrowUpRight, Smartphone, Heart } from "lucide-react";
import { SITE_LINKS } from "@/lib/data/landing";

export default function SampleInvitationCta() {
  return (
    <section className="py-24 bg-cream-light border-y border-charcoal/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 text-left">
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
              Rasakan Pengalaman Tamu Saat Membuka Undangan
            </h2>

            <p className="text-base text-charcoal/80 leading-relaxed mb-8 max-w-[65ch]">
              Buka langsung contoh undangan pernikahan resmi yang telah aktif di
              platform Maru Planner untuk melihat transisi animasi, pemutar
              musik, dan formulir RSVP secara langsung.
            </p>

            <a
              href={SITE_LINKS.sampleInvitation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 px-6 py-3.5 rounded-full bg-copper-dark hover:bg-[#7e4a24] text-white font-medium text-sm transition-[transform,background-color,box-shadow] duration-150 shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden focus-visible:ring-offset-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Buka Undangan {SITE_LINKS.sampleCoupleNames}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Clean Flat Showcase Preview Card */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 border border-charcoal/15 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-copper-dark mx-auto mb-4 border border-charcoal/10">
              <Heart className="w-6 h-6 fill-copper-dark text-copper-dark" />
            </div>

            <h3 className="font-heading font-medium text-2xl text-charcoal leading-tight mb-2">
              The Wedding of {SITE_LINKS.sampleCoupleNames}
            </h3>

            <p className="text-sm text-charcoal/80 mb-6">
              Kepada Yth. Tamu Undangan:{" "}
              <span className="font-semibold text-charcoal">
                {SITE_LINKS.sampleGuestName}
              </span>
            </p>

            <div className="p-3 bg-cream/60 rounded-xl border border-charcoal/10 text-xs text-charcoal/70 mb-6 font-mono tabular-nums break-all">
              maruplanner.my.id/ama-jidengg?to=tria
            </div>

            <a
              href={SITE_LINKS.sampleInvitation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center w-full text-xs font-semibold text-white bg-copper-dark hover:bg-[#7e4a24] py-3 rounded-full transition-[transform,background-color] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden focus-visible:ring-offset-2 shadow-xs"
            >
              Lihat Undangan Asli
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
