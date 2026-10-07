import React from "react";
import { AlertCircle, CheckCircle2, QrCode, Users, Sparkles } from "lucide-react";

export default function PainPoints() {
  const comparisons = [
    {
      problem: "Antrean Mengular di Meja Resepsi",
      problemDesc:
        "Tamu menumpuk lama karena pencatatan manual di buku tamu atau scanner online yang gagal memuat akibat sinyal venue yang buruk.",
      solution: "Check-in 20fps Offline-First",
      solutionDesc:
        "Scanner PWA dengan akselerasi Apple Neural Engine. Memindai dalam hitungan milidetik dan tetap bekerja normal tanpa koneksi internet.",
      icon: QrCode,
    },
    {
      problem: "Rekap RSVP Tercecer di Chat WhatsApp",
      problemDesc:
        "Pengantin dan WO kebingungan menghitung porsi katering karena data kehadiran tersebar di spreadsheet manual dan ratusan chat pribadi.",
      solution: "Control Room & RSVP Otomatis",
      solutionDesc:
        "Setiap tamu mengisi konfirmasi langsung di undangan. Dashboard menghitung kuota tamu, persentase hadir, dan walk-in go-show secara real-time.",
      icon: Users,
    },
    {
      problem: "Undangan Digital Kaku & Klise",
      problemDesc:
        "Banyak undangan digital gratisan yang lambat dibuka, penuh iklan mengganggu, atau desainnya tidak mencerminkan keanggunan hari bahagia.",
      solution: "Studio Desain 15 Section Modular",
      solutionDesc:
        "Tampilan editorial berkelas, audio autoplay interaktif, galeri foto sinematik, amplop digital aman, dan link personal atas nama masing-masing tamu.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="solusi" className="py-24 bg-white border-y border-charcoal/10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-copper mb-3 block">
            Masalah Nyata di Lapangan
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
            Mengapa Pernikahan Modern Membutuhkan Sistem yang Matang?
          </h2>
          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
            Hari bahagia Anda tidak boleh dirusak oleh antrean tamu yang resah
            atau data katering yang salah hitung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-cream/40 rounded-3xl p-8 border border-charcoal/10 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-copper mb-6 shadow-xs border border-charcoal/5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Problem Callout */}
                  <div className="mb-6 pb-6 border-b border-charcoal/10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-rose-700/80 mb-2">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Masalah Biasa</span>
                    </div>
                    <h3 className="font-heading font-medium text-lg text-charcoal mb-2">
                      {item.problem}
                    </h3>
                    <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>

                  {/* Solution Callout */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Solusi Maru Planner</span>
                    </div>
                    <h4 className="font-heading font-medium text-base text-charcoal mb-2">
                      {item.solution}
                    </h4>
                    <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
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
