import React from "react";
import { TECHNICAL_METRICS } from "@/lib/data/landing";

export default function TechnicalMetrics() {
  return (
    <section
      aria-label="Spesifikasi & Keandalan Sistem"
      className="bg-cream py-16 border-b border-charcoal/10 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-charcoal/10 shadow-xs hover:border-copper/40 transition-[border-color,box-shadow,transform] duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-copper-dark border border-charcoal/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-charcoal/50">
                    Spesifikasi
                  </span>
                </div>

                <div>
                  <div className="font-heading font-bold text-3xl md:text-4xl text-charcoal tracking-tight tabular-nums mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-copper-dark mb-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-charcoal/70 leading-relaxed text-pretty">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
