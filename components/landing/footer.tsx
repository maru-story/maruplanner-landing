import React from "react";
import Image from "next/image";
import { MessageCircle, Mail, Heart } from "lucide-react";
import { SITE_LINKS, NAV_LINKS } from "@/lib/data/landing";

export default function Footer() {
  return (
    <footer className="bg-deep-green text-ivory py-14 border-t border-deep-green-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-ivory/10">
          {/* Logo on Ivory Card */}
          <div className="flex flex-col gap-2">
            <div className="inline-block bg-ivory px-3.5 py-2 rounded-2xl border border-gold/30 shadow-xs self-start">
              <Image
                src="/brand/logo-system/maru-logo-horizontal.png"
                alt="Maru"
                width={120}
                height={40}
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-ivory/70 max-w-xs mt-1">
              Undangan Digital Modular & Manajemen Tamu Meja Resepsi.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs text-ivory/80 font-medium">
            {NAV_LINKS.map((nav, idx) => (
              <a
                key={idx}
                href={nav.href}
                target={nav.external ? "_blank" : undefined}
                rel={nav.external ? "noopener noreferrer" : undefined}
                className="hover:text-gold transition-[color] duration-150"
              >
                {nav.label}
              </a>
            ))}
          </nav>

          {/* Quick Contacts */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={SITE_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ivory hover:text-gold transition-[color] duration-150 tabular-nums"
            >
              <MessageCircle className="w-3.5 h-3.5 text-gold" />
              <span>{SITE_LINKS.phone}</span>
            </a>
            <span className="text-ivory/20">•</span>
            <a
              href={`mailto:${SITE_LINKS.email}`}
              className="inline-flex items-center gap-1.5 text-ivory hover:text-gold transition-[color] duration-150"
            >
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>{SITE_LINKS.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory/60">
          <p>© {new Date().getFullYear()} Maru. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Didedikasikan untuk kelancaran hari bahagia</span>
            <Heart className="w-3 h-3 text-gold fill-gold inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
