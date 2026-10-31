import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { PAIN_POINTS } from "@/lib/data/landing";

export default function PainPoints() {
  return (
    <section id="solusi" className="py-24 bg-ivory-light border-y border-deep-green/10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-deep-green leading-tight mb-4">
            Mengapa Pernikahan Modern Membutuhkan Sistem yang Matang?
          </h2>
          <p className="text-base text-deep-green/80 leading-relaxed max-w-xl mx-auto">
            Hari bahagia Anda tidak boleh dirusak oleh antrean tamu yang resah
            atau data katering yang salah hitung di lapangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id || idx}
                className="bg-ivory rounded-3xl p-8 border border-deep-green/10 flex flex-col justify-between hover:border-gold/50 hover:shadow-xs hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-ivory-light flex items-center justify-center text-gold mb-6 border border-deep-green/10 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Problem Statement */}
                  <div className="mb-6 pb-6 border-b border-deep-green/10">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-800 mb-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Masalah Biasa</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-deep-green mb-2">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-deep-green/75 leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>

                  {/* Solution Statement */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-deep-green mb-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-gold" />
                      <span>Standar Maru</span>
                    </div>
                    <h3 className="font-heading font-semibold text-base text-deep-green mb-2">
                      {item.solution}
                    </h3>
                    <p className="text-sm text-deep-green/75 leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
