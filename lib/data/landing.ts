import {
  Layers,
  Heart,
  Share2,
  CreditCard,
  MessageSquareCheck,
  Music,
  QrCode,
  WifiOff,
  Zap,
  Activity,
  Users,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  tag?: string;
  icon: LucideIcon;
}

export interface MetricItem {
  value: string;
  label: string;
  desc: string;
}

export const SITE_LINKS = {
  name: "Maru",
  tagline: "Undangan Digital Modular & Manajemen Tamu Hari-H",
  domain: "maruplanner.my.id",
  whatsapp:
    "https://wa.me/6287825515689?text=Halo%20Maru,%20saya%20tertarik%20dengan%20layanan%20undangan%20digital%20dan%20manajemen%20tamu",
  sampleInvitation: "https://maruplanner.my.id/ama-jidengg?to=tria",
  sampleCoupleNames: "Rahma & Zidane",
  sampleGuestName: "Tria",
  email: "halo@maruplanner.my.id",
  phone: "0878-2551-5689",
  location: "Indonesia",
};

export const SITE_CONFIG = {
  ...SITE_LINKS,
  whatsappNumber: SITE_LINKS.phone,
  whatsappUrl: SITE_LINKS.whatsapp,
  sampleInvitationUrl: SITE_LINKS.sampleInvitation,
};

export const NAV_LINKS = [
  { label: "Fitur Undangan", href: "#fitur-undangan" },
  { label: "Fitur Resepsi", href: "#fitur-resepsi" },
  { label: "Spesifikasi", href: "#spesifikasi" },
  { label: "Live Demo", href: SITE_LINKS.sampleInvitation, external: true },
];

export const COUPLE_FEATURES: FeatureItem[] = [
  {
    id: "modular",
    title: "15 Section Modular",
    desc: "Cover, profil, rundown acara, countdown, navigasi peta, dan galeri foto.",
    tag: "Modular",
    icon: Layers,
  },
  {
    id: "personal-link",
    title: "Tautan Nama Personal",
    desc: "Nama tamu otomatis tercetak di sampul undangan.",
    tag: "Otomatis",
    icon: Heart,
  },
  {
    id: "whatsapp",
    title: "Kirim WhatsApp 1-Klik",
    desc: "Format pesan personal siap kirim langsung ke nomor tamu.",
    tag: "Instan",
    icon: Share2,
  },
  {
    id: "envelope",
    title: "Amplop Digital & QRIS",
    desc: "Nomor rekening bank dan QRIS terverifikasi.",
    tag: "Aman",
    icon: CreditCard,
  },
  {
    id: "rsvp",
    title: "RSVP & Buku Tamu",
    desc: "Konfirmasi kehadiran dan ucapan doa tersimpan otomatis.",
    tag: "Real-time",
    icon: MessageSquareCheck,
  },
  {
    id: "audio",
    title: "Background Music",
    desc: "Pemutar audio otomatis dengan transisi halus.",
    tag: "Audio",
    icon: Music,
  },
];

export const ORGANIZER_FEATURES: FeatureItem[] = [
  {
    id: "scanner",
    title: "Scanner QR 20 FPS",
    desc: "Akselerasi kamera instan untuk meja registrasi.",
    tag: "20 FPS",
    icon: QrCode,
  },
  {
    id: "offline",
    title: "100% Offline-First",
    desc: "Bekerja normal tanpa koneksi internet sama sekali.",
    tag: "Offline",
    icon: WifiOff,
  },
  {
    id: "goshow",
    title: "Registrasi Go-Show (3 Detik)",
    desc: "Input cepat tamu walk-in atau tanpa undangan.",
    tag: "3 Detik",
    icon: Zap,
  },
  {
    id: "control-room",
    title: "Live Attendance Control",
    desc: "Monitor jumlah tamu hadir & kuota kursi secara real-time.",
    tag: "Live",
    icon: Activity,
  },
  {
    id: "multi-device",
    title: "Dukungan 2 Scanner",
    desc: "Bagi antrean masuk dengan 2 perangkat aktif bersamaan.",
    tag: "Multi-device",
    icon: Users,
  },
  {
    id: "security",
    title: "Enkripsi AES-256",
    desc: "Proteksi penuh seluruh data kontak tamu.",
    tag: "AES-256",
    icon: ShieldCheck,
  },
];

export const TECHNICAL_METRICS: MetricItem[] = [
  {
    value: "20 FPS",
    label: "Kecepatan Scanner",
    desc: "Instan tanpa jeda antrean",
  },
  {
    value: "100%",
    label: "Offline-First PWA",
    desc: "Beroperasi tanpa internet",
  },
  {
    value: "2.000+",
    label: "Kapasitas Tamu",
    desc: "Teruji per acara",
  },
  {
    value: "AES-256",
    label: "Enkripsi Database",
    desc: "Keamanan kontak tamu",
  },
];
