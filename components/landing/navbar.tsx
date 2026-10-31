"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_LINKS } from "@/lib/data/landing";

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
          ? "bg-cream/90 backdrop-blur-md border-b border-charcoal/10 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-md"
        >
          <div className="w-8 h-8 rounded-full bg-copper-dark flex items-center justify-center text-white font-heading font-bold text-sm shadow-xs group-hover:scale-105 transition-[transform] duration-150">
            M
          </div>
          <span className="font-heading font-medium text-xl tracking-tight text-charcoal">
            Maru Planner<span className="text-copper-dark">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal/80">
          <a
            href="#solusi"
            className="hover:text-copper-dark transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-md py-1"
          >
            Keresahan & Solusi
          </a>
          <a
            href="#fitur"
            className="hover:text-copper-dark transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-md py-1"
          >
            Fitur Unggulan
          </a>
          <a
            href="#untuk-wo"
            className="hover:text-copper-dark transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-md py-1"
          >
            Untuk Wedding Organizer
          </a>
          <a
            href="#faq"
            className="hover:text-copper-dark transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-md py-1"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE_LINKS.sampleInvitation}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-charcoal hover:text-copper-dark px-3 py-2 flex items-center gap-1 transition-[color,transform] duration-150 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-full"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={SITE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-dark hover:bg-[#7e4a24] text-white text-xs font-semibold transition-[transform,background-color,box-shadow] duration-150 active:scale-[0.98] shadow-xs hover:shadow-sm focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden focus-visible:ring-offset-2 tabular-nums"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{SITE_LINKS.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger (Min 44x44px accessible hit area) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-charcoal hover:text-copper-dark transition-[color] duration-150 focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-hidden rounded-full"
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
          className="md:hidden bg-cream/98 backdrop-blur-xl border-b border-charcoal/10 px-6 py-6 flex flex-col gap-4 text-sm font-medium animate-in fade-in slide-in-from-top-2"
        >
          <a
            href="#solusi"
            onClick={() => setMobileMenuOpen(false)}
            className="text-charcoal hover:text-copper-dark py-2 transition-[color] duration-150 min-h-[44px] flex items-center"
          >
            Keresahan & Solusi
          </a>
          <a
            href="#fitur"
            onClick={() => setMobileMenuOpen(false)}
            className="text-charcoal hover:text-copper-dark py-2 transition-[color] duration-150 min-h-[44px] flex items-center"
          >
            Fitur Unggulan
          </a>
          <a
            href="#untuk-wo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-charcoal hover:text-copper-dark py-2 transition-[color] duration-150 min-h-[44px] flex items-center"
          >
            Untuk Wedding Organizer
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-charcoal hover:text-copper-dark py-2 transition-[color] duration-150 min-h-[44px] flex items-center"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-charcoal/10 flex flex-col gap-3">
            <a
              href={SITE_LINKS.sampleInvitation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-full border border-charcoal/20 text-charcoal text-xs font-semibold transition-[transform,background-color] duration-150 active:scale-[0.98] min-h-[44px] flex items-center justify-center"
            >
              Lihat Contoh Undangan
            </a>
            <a
              href={SITE_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-full bg-copper-dark hover:bg-[#7e4a24] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-[transform,background-color] duration-150 active:scale-[0.98] min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
