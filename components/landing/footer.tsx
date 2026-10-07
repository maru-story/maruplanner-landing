import React from "react";
import { MessageCircle, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16 border-t border-charcoal/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-copper flex items-center justify-center text-white font-heading font-bold text-sm">
                M
              </div>
              <span className="font-heading font-medium text-2xl tracking-tight text-white">
                Maru Planner<span className="text-copper">.</span>
              </span>
            </div>
            <p className="text-sm text-cream/70 max-w-sm leading-relaxed mb-6">
              Platform ekosistem digital pernikahan terpadu: dari studio
              undangan sinematik, pengiriman pesan WhatsApp personal, hingga QR
              Code check-in 20fps offline-first di meja resepsi.
            </p>
            <div className="flex items-center gap-2 text-xs text-cream/50">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              <span>Indonesia • Melayani Acara Pernikahan Seluruh Nusantara</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-heading font-medium text-white text-base mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>
                <a href="#solusi" className="hover:text-copper transition-colors">
                  Keresahan & Solusi
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-copper transition-colors">
                  Fitur Undangan
                </a>
              </li>
              <li>
                <a href="#untuk-wo" className="hover:text-copper transition-colors">
                  Fitur Wedding Organizer
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-copper transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="https://maruplanner.my.id/ama-jidengg?to=tria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper transition-colors"
                >
                  Contoh Live Undangan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div>
            <h4 className="font-heading font-medium text-white text-base mb-4">
              Kontak Resmi
            </h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href="https://wa.me/6287825515689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-copper transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>0878-2551-5689 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:halo@maruplanner.my.id"
                  className="flex items-center gap-2 hover:text-copper transition-colors"
                >
                  <Mail className="w-4 h-4 text-copper" />
                  <span>halo@maruplanner.my.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Maru Planner. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan dedikasi untuk hari bahagia Anda</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
