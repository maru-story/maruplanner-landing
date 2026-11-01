import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE_LINKS } from "@/lib/data/landing";

export default function SampleInvitationCta() {
  return (
    <section className="py-20 md:py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Mascot Micro Frame */}
        <div className="w-16 h-16 rounded-2xl bg-ivory-light border border-gold/30 flex items-center justify-center p-1.5 shadow-xs mb-5">
          <Image
            src="/brand/mascot/calm/maru-mascot-couple-calm.png"
            alt="Maru & Mari"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-deep-green tracking-tight mb-3">
          Contoh Live Undangan
        </h2>

        <p className="text-xs sm:text-sm text-deep-green/75 max-w-sm mx-auto mb-6">
          Buka demo undangan interaktif langsung di browser:
        </p>

        {/* Live Card Button */}
        <a
          href={SITE_LINKS.sampleInvitation}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-ivory-light hover:bg-white border border-deep-green/15 text-deep-green font-medium text-xs sm:text-sm transition-[transform,background-color,border-color,box-shadow] duration-150 active:scale-[0.98] shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden"
        >
          <span className="font-mono text-deep-green/80 tabular-nums">
            maruplanner.my.id/ama-jidengg?to=tria
          </span>
          <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
