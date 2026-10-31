import React from "react";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Heart } from "lucide-react";
import { SITE_LINKS, NAV_LINKS } from "@/lib/data/landing";

export default function Footer() {
  return (
    <footer className="bg-deep-green text-ivory py-16 border-t border-deep-green-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand Info with Official Logo in Ivory Card per Brand Rules */}
          <div className="md:col-span-2">
            <div className="inline-block bg-ivory px-3.5 py-2 rounded-2xl border border-gold/30 mb-5 shadow-xs">
              <Image
                src="/brand/logo-system/maru-logo-horizontal.png"
                alt="Maru"
                width={130}
                height={43}
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-ivory/80 max-w-sm leading-relaxed mb-6 font-normal">
              Platform ekosistem digital pernikahan terpadu: dari studio
              undangan sinematik, pengiriman pesan WhatsApp personal, hingga QR
              Code check-in 20fps offline-first di meja resepsi.
            </p>
            <div className="flex items-center gap-2 text-xs text-ivory/75">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{SITE_LINKS.location}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="font-heading font-semibold text-ivory text-base mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              {NAV_LINKS.map((nav, idx) => (
                <li key={idx}>
                  <a
                    href={nav.href}
                    className="hover:text-gold transition-[color] duration-150 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden rounded-xs"
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
                  className="hover:text-gold transition-[color] duration-150 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden rounded-xs"
                >
                  Contoh Live Undangan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div>
            <h3 className="font-heading font-semibold text-ivory text-base mb-4">
              Kontak Resmi
            </h3>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>
                <a
                  href={SITE_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ivory hover:text-gold transition-[color] duration-150 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden rounded-xs tabular-nums"
                >
                  <MessageCircle className="w-4 h-4 text-gold shrink-0" />
                  <span>{SITE_LINKS.phone} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_LINKS.email}`}
                  className="flex items-center gap-2 hover:text-gold transition-[color] duration-150 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden rounded-xs"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>{SITE_LINKS.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/70">
          <p>
            © {new Date().getFullYear()} Maru. Hak Cipta Dilindungi
            Undang-Undang.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Dibuat dengan dedikasi untuk hari bahagia Anda</span>
            <Heart className="w-3.5 h-3.5 text-gold fill-gold inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
