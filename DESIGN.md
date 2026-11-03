# DESIGN.md — Maru Planner Design System

Official reference aligned with `brand/maru-brand-identity.md`.

## 1. Brand Identity Truth

Maru is a digital wedding planner (wedding website SaaS).
- **Personality:** An honest, trusted third person beside the couple — warm, reassuring, with refined wedding elegance.
- **Logo ("Flow"):** Original hand-drawn artwork featuring twin arches meeting at a gold heart.
- **Lettering:** Original custom artwork, never re-set in any font. Always use official files from `/brand/logo-system/`.

---

## 2. Color Palette

Strict adherence to the four brand colors. Never introduce extraneous brand colors.

| Name | Hex | Usage & Role |
|---|---|---|
| **Deep Green** | `#2F4034` | Primary brand color: headlines, primary buttons, logo arches, mascot linework. |
| **Gold** | `#C9A35C` | Accent only: logo heart, crowns, highlights, badges, celebration moments. |
| **Ivory** | `#F5F0E6` | Home background (`#F5F0E6`); card surfaces may use `#FDFCF8` or `#FFFFFF`. |
| **Soft Sage** | `#A8BBA3` | Supporting tone: quiet surfaces, secondary panels, gentle borders/separators. |

### Color Balance
- Dominant surface: **Ivory**
- Structural strength & text: **Deep Green**
- Supporting quiet panels: **Soft Sage**
- Accents & moments of delight: **Gold** in small, intentional doses.
- On dark green backgrounds or photography, always place the logo inside an ivory card.

---

## 3. Typography

- **Headlines / Display:** `Fraunces` (semi-bold, generous sizes, never all-caps). Used for editorial titles, section heads, celebration moments.
- **UI & Body Text:** `DM Sans` (regular/medium). Clean geometric legibility for descriptions, buttons, forms, and tables.
- **Rule:** Never re-set the "maru" logo lettering in Fraunces or any font; use approved image files as-is.

---

## 4. Mascots (Maru & Mari)

- **Characters:**
  - **Maru:** The groom rabbit (green suit `#2F4034`, white shirt, gold bow tie `#C9A35C`).
  - **Mari:** The bride rabbit (white bridal dress, flower crown, veil, gold bouquet).
- **Registers:**
  - **Calm:** Onboarding, reassurance, planning guidance, shared couple screens.
  - **Lively:** Celebrations, greetings, high-energy milestones, stickers.
- **Usage:** Placed naturally on ivory surfaces; never stretched, rotated, or used in place of the official logo.

---

## 5. UI Craft & Accessibility Standards

- **Touch Targets:** Minimum 44×44px for all mobile interactive controls.
- **Text Wrapping:** `text-wrap: balance` on headlines, `text-wrap: pretty` on body text.
- **Numeric Data:** `tabular-nums` for counters, timers, and quantitative metrics.
- **Transitions:** Explicit CSS properties (`transition-[background-color,transform,box-shadow]`), tactile clicks (`active:scale-[0.98]`), no `transition: all`.
- **Accessibility:** Meets WCAG 2.2 Level AA contrast ratios with Deep Green on Ivory (>7:1 contrast).
