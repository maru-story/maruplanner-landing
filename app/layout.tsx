import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maru Planner — Platform Undangan Digital & Manajemen Tamu Pernikahan",
  description:
    "Solusi menyeluruh pernikahan modern: Undangan digital estetik, sebar undangan WhatsApp satu klik, RSVP transparan, hingga QR Code check-in 20fps anti-antrean di hari-H.",
  keywords: [
    "wedding invitation",
    "undangan digital",
    "wedding organizer",
    "qr check in pernikahan",
    "maru planner",
    "rsvp digital",
  ],
  authors: [{ name: "Maru Planner" }],
  openGraph: {
    title: "Maru Planner — Platform Undangan Digital & Manajemen Tamu Pernikahan",
    description:
      "Undangan digital estetik, pengiriman WhatsApp personal, dan QR check-in 20fps anti-antrean di hari-H.",
    url: "https://maruplanner.my.id",
    siteName: "Maru Planner",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased bg-cream text-charcoal min-h-screen selection:bg-blush selection:text-charcoal">
        {children}
      </body>
    </html>
  );
}
