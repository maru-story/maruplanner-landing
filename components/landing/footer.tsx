import React from "react";
import { MessageCircle, Mail, MapPin, Heart } from "lucide-react";
import { SITE_LINKS, NAV_LINKS } from "@/lib/data/landing";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16 border-t border-charcoal/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-copper-dark flex items-center justify-center text-white font-heading font-bold text-sm">
                M
              </div>
              <span className="font-heading font-medium text-2xl tracking-tight text-white">
                Maru Planner<span className="text-copper-light">.</span>
              </span>
            </div>
            <p className="text-sm text-cream/80 max-w-sm leading-relaxed mb-6">
              Platform ekosistem digital pernikahan terpadu: dari studio
              undangan sinematik, pengiriman pesan WhatsApp personal, hingga QR
              Code check-in 20fps offline-first di meja resepsi.
            </p>
            <div className="flex items-center gap-2 text-xs text-cream/75">
              <MapPin className="w-3.5 h-3.5 text-copper-light shrink-0" />
              <span>{SITE_LINKS.location}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="font-heading font-medium text-white text-base mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/80">
              {NAV_LINKS.map((nav, idx) => (
                <li key={idx}>
                  <a
                    href={nav.href}
                    className="hover:text-copper-light transition-[color] duration-150 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-xs"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE_LINKS.sampleInvitation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper-light transition-[color] duration-150 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-xs"
                >
                  Contoh Live Undangan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div>
            <h3 className="font-heading font-medium text-white text-base mb-4">
              Kontak Resmi
            </h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <a
                  href={SITE_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-copper-light transition-[color] duration-150 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-xs tabular-nums"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{SITE_LINKS.phone} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_LINKS.email}`}
                  className="flex items-center gap-2 hover:text-copper-light transition-[color] duration-150 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-xs"
                >
                  <Mail className="w-4 h-4 text-copper-light shrink-0" />
                  <span>{SITE_LINKS.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/75">
          <p>
            © {new Date().getFullYear()} Maru Planner. Hak Cipta Dilindungi
            Undang-Undang.
          </p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan dedikasi untuk hari bahagia Anda</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
