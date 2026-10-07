"use client";

import React, { useState } from "react";
import {
  Heart,
  Briefcase,
  QrCode,
  Share2,
  Music,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  CheckCircle,
} from "lucide-react";

export default function FeaturesHybrid() {
  const [activeTab, setActiveTab] = useState<"couple" | "organizer">("couple");

  const coupleFeatures = [
    {
      title: "15 Section Modular Lengkap",
      desc: "Cover sinematik, profil mempelai, kisah cinta, ayat/kutipan, hitung mundur, jadwal akad & resepsi, galeri foto, amplop digital, hingga musik latar.",
      icon: Layers,
    },
    {
      title: "Link Khusus Atas Nama Tamu",
      desc: "Setiap tamu merasa dihormati secara khusus dengan tautan personal yang menampilkan nama lengkap mereka di sampul undangan.",
      icon: Heart,
    },
    {
      title: "Kirim WhatsApp 1-Klik",
      desc: "Kirim pesan undangan personal langsung ke nomor WhatsApp tamu dengan template teks yang sopan tanpa perlu salin-tempel manual.",
      icon: Share2,
    },
    {
      title: "Amplop Digital & Titip Hadiah Aman",
      desc: "Dukungan nomor rekening bank dan QRIS terverifikasi memudahkan tamu yang berhalangan hadir untuk tetap menyampaikan tanda kasih.",
      icon: Music,
    },
  ];

  const organizerFeatures = [
    {
      title: "QR Scanner PWA 20fps Offline-First",
      desc: "Kecepatan pemindaian setara hardware profesional. Menggunakan Apple Neural Engine BarcodeDetector dan tetap berfungsi normal jika sinyal gedung terputus.",
      icon: QrCode,
    },
    {
      title: "Live Attendance Control Room",
      desc: "Pantau arus kedatangan tamu detik demi detik melalui WebSocket real-time. Ketahui sisa porsi katering dan kapasitas kursi secara presisi.",
      icon: Activity,
    },
    {
      title: "Registrasi Tamu Walk-In (Go-Show)",
      desc: "Tamu kehormatan yang hadir mendadak tanpa undangan dapat langsung didaftarkan dan di-check-in di meja resepsi dalam 3 detik.",
      icon: Zap,
    },
    {
      title: "Keamanan Data & Multi-Event Management",
      desc: "Nomor kontak tamu dienkripsi AES-256. Kelola ratusan klien pernikahan dalam satu dashboard terisolasi tanpa risiko data tertukar.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="fitur" className="py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-charcoal leading-tight mb-4">
            Dua Sudut Pandang, Satu Ekosistem Sempurna
          </h2>
          <p className="text-base text-charcoal/80 leading-relaxed max-w-xl mx-auto">
            Didesain khusus untuk memenuhi kebutuhan estetika calon pengantin
            sekaligus tuntutan efisiensi kerja tim Wedding Organizer.
          </p>

          {/* Toggle Switch */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-white border border-charcoal/15 shadow-xs">
            <button
              onClick={() => setActiveTab("couple")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "couple"
                  ? "bg-[#965b2d] text-white shadow-xs"
                  : "text-charcoal/80 hover:text-charcoal"
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Untuk Calon Pengantin</span>
            </button>

            <button
              id="untuk-wo"
              onClick={() => setActiveTab("organizer")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "organizer"
                  ? "bg-[#965b2d] text-white shadow-xs"
                  : "text-charcoal/80 hover:text-charcoal"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Untuk Wedding Organizer</span>
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(activeTab === "couple" ? coupleFeatures : organizerFeatures).map(
            (item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-charcoal/10 shadow-xs hover:border-copper/40 transition-all flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-[#965b2d] shrink-0 border border-charcoal/10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Solid High-Contrast Callout Box */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-charcoal/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-medium text-base text-charcoal">
                Kapasitas Acara Besar Terjamin
              </h3>
              <p className="text-sm text-charcoal/80">
                Sistem teruji mendukung hingga 2.000 tamu per event dan 2 perangkat scanner resepsi aktif bersamaan.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6287825515689?text=Halo%20Maru%20Planner,%20saya%20ingin%20tanya%20paket%20wedding%20organizer"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-charcoal text-white hover:bg-black text-xs font-semibold transition-colors"
          >
            Konsultasi Kebutuhan Event
          </a>
        </div>
      </div>
    </section>
  );
}
