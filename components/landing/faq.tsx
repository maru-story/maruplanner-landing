"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data/landing";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-ivory relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-light border border-gold/30 text-xs font-medium text-deep-green mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            <span>Pusat Informasi</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-deep-green leading-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base text-deep-green/80 leading-relaxed max-w-lg mx-auto">
            Semua hal penting yang perlu Anda ketahui sebelum menggunakan Maru
            untuk hari bahagia Anda.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-ivory-light rounded-2xl border border-deep-green/10 overflow-hidden shadow-xs hover:border-gold/30 transition-[border-color] duration-150"
              >
                <button
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 min-h-[44px] flex items-center justify-between gap-4 font-heading font-semibold text-base text-deep-green hover:text-gold-dark transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-inset"
                >
                  <span className="leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-6 pb-6 pt-2 text-sm text-deep-green/80 leading-relaxed border-t border-deep-green/5 max-w-[70ch]"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
