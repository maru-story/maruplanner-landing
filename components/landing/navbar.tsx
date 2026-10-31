"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_LINKS, NAV_LINKS } from "@/lib/data/landing";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding,box-shadow] duration-200 ease-out ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-deep-green/10 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo using Official Horizontal Lockup */}
        <a
          href="/"
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden rounded-md transition-opacity hover:opacity-90"
        >
          <Image
            src="/brand/logo-system/maru-logo-horizontal.png"
            alt="Maru"
            width={140}
            height={47}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-deep-green/80">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-deep-green transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden rounded-md py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE_LINKS.sampleInvitation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-deep-green hover:text-gold-dark px-3 py-2 flex items-center gap-1 transition-[color,transform] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden rounded-full"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
          </a>

          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-green hover:bg-deep-green-dark text-white text-xs font-semibold transition-[transform,background-color,box-shadow] duration-150 active:scale-[0.98] shadow-xs hover:shadow-sm focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden focus-visible:ring-offset-2 tabular-nums"
          >
            <MessageCircle className="w-3.5 h-3.5 text-gold" />
            <span>{SITE_LINKS.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger (Min 44x44px accessible hit area) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-deep-green hover:text-gold-dark transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-hidden rounded-full"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-ivory/98 backdrop-blur-xl border-b border-deep-green/10 px-6 py-6 flex flex-col gap-4 text-sm font-medium animate-in fade-in slide-in-from-top-2"
        >
          {NAV_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-deep-green hover:text-gold-dark py-2 transition-[color] duration-150 min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-deep-green/10 flex flex-col gap-3">
            <a
              href={SITE_LINKS.sampleInvitation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-full border border-deep-green/20 text-deep-green text-xs font-semibold transition-[transform,background-color] duration-150 active:scale-[0.98] min-h-[44px] flex items-center justify-center"
            >
              Lihat Contoh Undangan
            </a>
            <a
              href={SITE_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-full bg-deep-green hover:bg-deep-green-dark text-white text-xs font-semibold flex items-center justify-center gap-2 transition-[transform,background-color] duration-150 active:scale-[0.98] min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>Hubungi WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
