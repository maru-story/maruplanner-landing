import React from "react";
import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { SITE_LINKS } from "@/lib/data/landing";

export default function SampleInvitationCta() {
  return (
    <section className="py-24 bg-ivory-light border-y border-deep-green/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-gold/30 text-xs font-medium text-deep-green mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              <span>Eksplorasi Langsung</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-deep-green leading-tight mb-4">
              Rasakan Pengalaman Tamu Saat Membuka Undangan
            </h2>

            <p className="text-base text-deep-green/80 leading-relaxed mb-8 max-w-[65ch]">
              Buka langsung contoh undangan pernikahan resmi yang telah aktif di
              platform Maru untuk melihat transisi animasi, pemutar
              musik, dan formulir RSVP secara langsung.
            </p>

            <a
              href={SITE_LINKS.sampleInvitation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 px-6 py-3.5 rounded-full bg-deep-green hover:bg-deep-green-dark text-white font-medium text-sm transition-[transform,background-color,box-shadow] duration-150 shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-offset-2"
            >
              <Smartphone className="w-4 h-4 text-gold" />
              <span>Buka Undangan {SITE_LINKS.sampleCoupleNames}</span>
              <ArrowUpRight className="w-4 h-4 text-gold" />
            </a>
          </div>

          {/* Clean Showcase Preview Card with Mascot Warmth */}
          <div className="md:col-span-5 bg-ivory rounded-3xl p-8 border border-deep-green/15 shadow-sm text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-ivory-light flex items-center justify-center mx-auto mb-4 border border-gold/30 p-1 shadow-xs">
              <Image
                src="/brand/mascot/calm/maru-mascot-couple-calm.png"
                alt="Maru & Mari Couple"
                width={76}
                height={76}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="font-heading font-semibold text-2xl text-deep-green leading-tight mb-2">
              The Wedding of {SITE_LINKS.sampleCoupleNames}
            </h3>

            <p className="text-sm text-deep-green/80 mb-6">
              Kepada Yth. Tamu Undangan:{" "}
              <span className="font-semibold text-deep-green">
                {SITE_LINKS.sampleGuestName}
              </span>
            </p>

            <div className="w-full p-3 bg-ivory-light rounded-xl border border-deep-green/10 text-xs text-deep-green/80 mb-6 font-mono tabular-nums break-all">
              maruplanner.my.id/ama-jidengg?to=tria
            </div>

            <a
              href={SITE_LINKS.sampleInvitation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center w-full text-xs font-semibold text-white bg-deep-green hover:bg-deep-green-dark py-3.5 rounded-full transition-[transform,background-color,box-shadow] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-offset-2 shadow-xs hover:shadow-sm"
            >
              Lihat Undangan Asli
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
