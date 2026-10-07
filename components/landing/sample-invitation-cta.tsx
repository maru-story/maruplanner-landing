import React from "react";
import { ArrowUpRight, Smartphone, Sparkles, Heart } from "lucide-react";

export default function SampleInvitationCta() {
  return (
    <section className="py-24 bg-white border-y border-charcoal/10 relative overflow-hidden">
      {/* Decorative Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blush/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-cream rounded-3xl p-8 md:p-14 border border-charcoal/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-copper/30 text-copper text-xs font-medium mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-copper" />
              <span>Contoh Nyata Undangan Aktif</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
              Rasakan Pengalaman Tamu Saat Membuka Undangan
            </h2>

            <p className="text-sm md:text-base text-charcoal/70 leading-relaxed mb-6">
              Buka langsung contoh undangan pernikahan resmi yang telah aktif di
              platform Maru Planner:
            </p>

            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-charcoal/10 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blush/60 flex items-center justify-center text-copper shrink-0">
                <Heart className="w-5 h-5 fill-copper text-copper" />
              </div>
              <div>
                <p className="font-heading font-semibold text-charcoal text-sm">
                  The Wedding of Rahma Maulani & Zidane Taufan
                </p>
                <p className="text-xs text-charcoal/60">
                  Tautan Tamu: maruplanner.my.id/ama-jidengg?to=tria
                </p>
              </div>
            </div>

            <a
              href="https://maruplanner.my.id/ama-jidengg?to=tria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-copper hover:bg-copper-dark text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Smartphone className="w-4 h-4" />
              <span>Buka Undangan Rahma & Zidane</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Visual Card */}
          <div className="shrink-0 w-full md:w-72 bg-white rounded-3xl p-6 border border-charcoal/10 shadow-md text-center">
            <div className="aspect-9/16 rounded-2xl bg-cream border border-charcoal/10 overflow-hidden relative flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-copper mb-3 shadow-xs">
                <Heart className="w-6 h-6 fill-copper text-copper" />
              </div>
              <span className="text-xs uppercase tracking-widest text-copper font-medium mb-1">
                The Wedding Of
              </span>
              <h3 className="font-heading font-medium text-lg text-charcoal leading-tight mb-3">
                Rahma & Zidane
              </h3>
              <p className="text-[11px] text-charcoal/60 mb-4">
                Kepada Yth. Tamu Undangan: Tria
              </p>
              <a
                href="https://maruplanner.my.id/ama-jidengg?to=tria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium text-white bg-copper px-4 py-2 rounded-full shadow-xs"
              >
                Lihat Undangan Asli
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
