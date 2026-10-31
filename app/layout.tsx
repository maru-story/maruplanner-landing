import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maruplanner.my.id"),
  title: "Maru — Digital Wedding Planner & Guest Management",
  description:
    "Solusi menyeluruh pernikahan modern: Undangan digital berkelas, sebar undangan WhatsApp satu klik, RSVP transparan, hingga QR Code check-in 20fps anti-antrean di hari-H.",
  keywords: [
    "wedding invitation",
    "undangan digital",
    "wedding organizer",
    "qr check in pernikahan",
    "maru planner",
    "maru",
    "rsvp digital",
  ],
  authors: [{ name: "Maru" }],
  icons: {
    icon: [
      { url: "/brand/logo-system/maru-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/logo-system/maru-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/logo-system/maru-favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/brand/logo-system/maru-favicon-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Maru — Digital Wedding Planner & Guest Management",
    description:
      "Undangan digital berkelas, pengiriman WhatsApp personal, dan QR check-in 20fps anti-antrean di hari-H.",
    url: "https://maruplanner.my.id",
    siteName: "Maru",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/brand/logo-system/maru-logo-primary.png",
        width: 1024,
        height: 1024,
        alt: "Maru Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-ivory text-deep-green min-h-screen selection:bg-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
