import React from "react";
import Navbar from "@/components/landing/navbar";
import HeroMinimal from "@/components/landing/hero-minimal";
import FeaturesShowcase from "@/components/landing/features-showcase";
import TechnicalMetrics from "@/components/landing/technical-metrics";
import SampleInvitationCta from "@/components/landing/sample-invitation-cta";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-ivory text-deep-green selection:bg-gold selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero: Crisp, Ultra-Minimalist Feature-First Headline */}
      <HeroMinimal />

      {/* Primary Feature Index (Pengantin & Wedding Organizer) */}
      <FeaturesShowcase />

      {/* Technical Specifications (20 FPS, 100% Offline, 2000+ Tamu, AES-256) */}
      <TechnicalMetrics />

      {/* Live Sample Invitation Demo Showcase */}
      <SampleInvitationCta />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
