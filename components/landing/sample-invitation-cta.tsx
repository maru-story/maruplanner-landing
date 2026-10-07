import React from "react";
import { ArrowUpRight, Smartphone, Sparkles, Heart } from "lucide-react";

export default function SampleInvitationCta() {
  return (
    <section className="py-24 bg-[#faf8f2] border-y border-charcoal/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-charcoal/15 text-[#965b2d] text-xs font-semibold mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#965b2d]" />
              <span>Contoh Nyata Undangan Aktif</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
              Rasakan Pengalaman Tamu Saat Membuka Undangan
            </h2>

            <p className="text-base text-charcoal/80 leading-relaxed mb-8 max-w-[65ch]">
              Buka langsung contoh undangan pernikahan resmi yang telah aktif di
              platform Maru Planner untuk melihat transisi animasi, pemutar
              musik, dan formulir RSVP secara langsung.
            </p>

            <a
              href="https://maruplanner.my.id/ama-jidengg?to=tria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#965b2d] hover:bg-[#7e4a24] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Smartphone className="w-4 h-4" />
              <span>Buka Undangan Rahma & Zidane</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Clean Flat Showcase Preview Card */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 border border-charcoal/15 shadow-md text-center">
            <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-[#965b2d] mx-auto mb-4 border border-charcoal/10">
              <Heart className="w-6 h-6 fill-[#965b2d] text-[#965b2d]" />
            </div>
            
            <h3 className="font-heading font-medium text-2xl text-charcoal leading-tight mb-2">
              The Wedding of Rahma & Zidane
            </h3>

            <p className="text-sm text-charcoal/80 mb-6">
              Kepada Yth. Tamu Undangan: <span className="font-semibold text-charcoal">Tria</span>
            </p>

            <div className="p-3 bg-cream/60 rounded-xl border border-charcoal/10 text-xs text-charcoal/70 mb-6 font-mono">
              maruplanner.my.id/ama-jidengg?to=tria
            </div>

            <a
              href="https://maruplanner.my.id/ama-jidengg?to=tria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-xs font-semibold text-white bg-[#965b2d] hover:bg-[#7e4a24] py-3 rounded-full transition-colors shadow-xs"
            >
              Lihat Undangan Asli
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
