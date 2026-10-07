"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-charcoal/10 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-copper flex items-center justify-center text-white font-heading font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            M
          </div>
          <span className="font-heading font-medium text-xl tracking-tight text-charcoal">
            Maru Planner<span className="text-copper">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal/80">
          <a
            href="#solusi"
            className="hover:text-copper transition-colors"
          >
            Keresahan & Solusi
          </a>
          <a
            href="#fitur"
            className="hover:text-copper transition-colors"
          >
            Fitur Unggulan
          </a>
          <a
            href="#untuk-wo"
            className="hover:text-copper transition-colors"
          >
            Untuk Wedding Organizer
          </a>
          <a
            href="#faq"
            className="hover:text-copper transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://maruplanner.my.id/ama-jidengg?to=tria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-charcoal/80 hover:text-copper px-3 py-2 flex items-center gap-1 transition-colors"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://wa.me/6287825515689?text=Halo%20Maru%20Planner,%20saya%20tertarik%20konsultasi%20layanan%20undangan%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper hover:bg-copper-dark text-white text-xs font-medium transition-all shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>0878-2551-5689</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal hover:text-copper transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-b border-charcoal/10 px-6 py-6 flex flex-col gap-4 text-sm font-medium animate-in fade-in slide-in-from-top-2">
          <a
            href="#solusi"
            onClick={() => setMobileMenuOpen(false)}
            className="text-charcoal hover:text-copper py-2"
          >
            Keresahan & Solusi
          </a>
          <a
            href="#fitur"
            onClick={() => setMobileMenuOpen(false)}
            className="text-charcoal hover:text-copper py-2"
          >
            Fitur Unggulan
          </a>
          <a
            href="#untuk-wo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-charcoal hover:text-copper py-2"
          >
            Untuk Wedding Organizer
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-charcoal hover:text-copper py-2"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-charcoal/10 flex flex-col gap-3">
            <a
              href="https://maruplanner.my.id/ama-jidengg?to=tria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-full border border-charcoal/20 text-charcoal text-xs font-medium"
            >
              Lihat Contoh Undangan
            </a>
            <a
              href="https://wa.me/6287825515689?text=Halo%20Maru%20Planner,%20saya%20tertarik%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-full bg-copper text-white text-xs font-medium flex items-center justify-center gap-2"
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
