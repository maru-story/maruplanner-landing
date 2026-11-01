import React from "react";
import { TECHNICAL_METRICS } from "@/lib/data/landing";

export default function TechnicalMetrics() {
  return (
    <section
      id="spesifikasi"
      aria-label="Spesifikasi & Keandalan Sistem"
      className="bg-ivory-light py-16 md:py-20 border-y border-deep-green/10 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-gold mb-2 block">
            Spesifikasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-deep-green tracking-tight">
            Performa & Keamanan
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TECHNICAL_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-ivory rounded-2xl p-6 border border-deep-green/10 shadow-xs hover:border-gold/50 transition-[border-color,box-shadow,transform] duration-150 flex flex-col justify-between"
            >
              <div className="font-heading font-bold text-3xl sm:text-4xl text-deep-green tracking-tight tabular-nums mb-2">
                {metric.value}
              </div>
              <div>
                <div className="text-xs font-semibold text-deep-green mb-0.5">
                  {metric.label}
                </div>
                <p className="text-[11px] text-deep-green/70 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
