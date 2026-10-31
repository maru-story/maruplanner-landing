"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data/landing";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-cream relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base text-charcoal/80 leading-relaxed max-w-lg mx-auto">
            Semua hal penting yang perlu Anda ketahui sebelum menggunakan Maru
            Planner untuk hari bahagia Anda.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden shadow-xs"
              >
                <button
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 min-h-[44px] flex items-center justify-between gap-4 font-heading font-medium text-base text-charcoal hover:text-copper-dark transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden focus-visible:ring-inset"
                >
                  <span className="leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-copper-dark shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-6 pb-6 pt-2 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/5 max-w-[70ch]"
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
