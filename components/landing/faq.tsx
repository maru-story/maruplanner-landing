"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah aplikasi QR Scanner tetap bisa bekerja jika sinyal gedung resepsi terputus?",
      a: "Ya, 100%! Aplikasi QR Scanner Maru Planner dirancang dengan arsitektur Progressive Web App (PWA) Offline-First. Seluruh data tamu disimpan di penyimpanan lokal perangkat (IndexedDB) sebelum acara dimulai. Tim meja penerima tamu tetap bisa melakukan scan dan verifikasi tamu dengan lancar tanpa koneksi internet sama sekali. Data akan otomatis disinkronkan ke server begitu perangkat terhubung kembali ke jaringan.",
    },
    {
      q: "Berapa kapasitas tamu undangan yang dapat ditampung dalam satu acara?",
      a: "Sistem Maru Planner dirancang untuk acara berskala besar dan teruji mendukung hingga 2.000 tamu per event pernikahan, dengan pemrosesan ribuan data check-in dalam hitungan detik tanpa gangguan performa.",
    },
    {
      q: "Berapa banyak perangkat scanner yang bisa aktif di meja resepsi secara bersamaan?",
      a: "Setiap acara mendukung hingga 2 perangkat scanner resepsi aktif bersamaan secara resmi. Masing-masing perangkat dapat berbagi beban tamu yang masuk di pintu masuk yang berbeda.",
    },
    {
      q: "Bagaimana jika ada tamu kehormatan atau kerabat yang hadir mendadak tanpa undangan (Go-Show)?",
      a: "Scanner Maru Planner dilengkapi fitur khusus 'Go-Show'. Tim meja penerima tamu cukup mengetikkan nama tamu dan jumlah orang dalam hitungan 3 detik. Tamu tersebut langsung otomatis tercatat ke dalam sistem kehadiran tanpa perlu membuat QR code terlebih dahulu.",
    },
    {
      q: "Apakah data nomor telepon dan privasi tamu kami terjamin aman?",
      a: "Sangat aman. Seluruh data nomor telepon tamu dienkripsi secara ketat di tingkat database menggunakan enkripsi standar militer AES-256-CBC. Kami tidak pernah membagikan atau menjual data tamu kepada pihak ketiga.",
    },
    {
      q: "Bagaimana cara memesan atau bekerja sama sebagai mitra Wedding Organizer?",
      a: "Anda dapat langsung menghubungi tim kami melalui tombol WhatsApp (0878-2551-5689). Kami menyediakan paket khusus untuk calon pengantin per-event maupun kemitraan jangka panjang multi-event untuk agensi Wedding Organizer.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-cream relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-copper mb-3 block">
            Tanya Jawab
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
            Semua hal penting yang perlu Anda ketahui sebelum menggunakan Maru
            Planner untuk hari bahagia Anda.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-charcoal/10 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-heading font-medium text-base text-charcoal hover:text-copper transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-copper shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/5">
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
