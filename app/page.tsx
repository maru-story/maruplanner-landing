import React from "react";
import Navbar from "@/components/landing/navbar";
import HeroCanvas from "@/components/scrollytelling/hero-canvas";
import PainPoints from "@/components/landing/pain-points";
import FeaturesHybrid from "@/components/landing/features-hybrid";
import SampleInvitationCta from "@/components/landing/sample-invitation-cta";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-cream selection:bg-blush selection:text-charcoal">
      {/* Sticky / Scrolled Navbar */}
      <Navbar />

      {/* Apple-Style Video Scrollytelling Hero (Pinned GSAP Canvas) */}
      <HeroCanvas />

      {/* Pain Points vs Maru Solutions */}
      <PainPoints />

      {/* Dual Pillars: Pasangan Pengantin & Wedding Organizer */}
      <FeaturesHybrid />

      {/* Live Sample Invitation Showcase */}
      <SampleInvitationCta />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Footer & Contacts */}
      <Footer />
    </main>
  );
}
