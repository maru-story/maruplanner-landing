# Maru — Digital Wedding Planner & Guest Management

Official company profile and marketing landing page for **Maru** (`maruplanner.my.id`), a digital wedding planner and guest management platform in Indonesia.

## Brand Identity Highlights
- **Official Brand Design:** Built strictly following the Maru brand identity (`brand/maru-brand-identity.md`):
  - **Colors:** Deep Green (`#2F4034`), Gold (`#C9A35C`), Ivory (`#F5F0E6`), Soft Sage (`#A8BBA3`).
  - **Typography:** Fraunces (Headlines/Display) & DM Sans (UI/Body).
  - **Logo System:** Hand-drawn twin arches meeting at a gold heart ("Flow" artwork).
  - **Mascots:** Maru (the groom rabbit) & Mari (the bride rabbit) in Calm and Lively expressions.
- **Apple-Style Scrollytelling:** Interactive 60fps frame-by-frame canvas animation driven by GSAP ScrollTrigger.
- **Next.js 16 (App Router):** Fast static prerendering with high SEO performance.
- **TailwindCSS 4:** Modern CSS-first tokenized theme.
- **Hybrid Conversion:** Targeted at both Couples (15-section modular digital invitations, 1-click WhatsApp delivery) and Wedding Organizers (20fps offline-first QR check-in, real-time control room).

## Tech Stack
- **Framework:** Next.js 16 (React 19, TypeScript)
- **Animation:** GSAP 3.12, `@gsap/react`, HTML5 Canvas 2D
- **Icons:** `lucide-react`
- **Typography:** `Fraunces` & `DM Sans` (`next/font/google`)

## Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm run start
```
