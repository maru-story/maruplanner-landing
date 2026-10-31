import {
  QrCode,
  Users,
  Sparkles,
  Layers,
  Heart,
  Share2,
  Music,
  Activity,
  Zap,
  ShieldCheck,
  Cpu,
  WifiOff,
  Lock,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ComparisonItem {
  id?: string;
  problem: string;
  problemDesc: string;
  solution: string;
  solutionDesc: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  badge?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const SITE_LINKS = {
  name: "Maru Planner",
  tagline: "Platform Undangan Digital & Manajemen Tamu Pernikahan",
  domain: "maruplanner.my.id",
  whatsapp:
    "https://wa.me/6287825515689?text=Halo%20Maru%20Planner,%20saya%20tertarik%20konsultasi%20layanan%20undangan%20digital",
  sampleInvitation: "https://maruplanner.my.id/ama-jidengg?to=tria",
  sampleCoupleNames: "Rahma & Zidane",
  sampleGuestName: "Tria",
  email: "halo@maruplanner.my.id",
  phone: "0878-2551-5689",
  location: "Indonesia • Melayani Acara Pernikahan Seluruh Nusantara",
};

// Alias for consistency
export const SITE_CONFIG = {
  ...SITE_LINKS,
  whatsappNumber: SITE_LINKS.phone,
  whatsappUrl: SITE_LINKS.whatsapp,
  sampleInvitationUrl: SITE_LINKS.sampleInvitation,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Keresahan & Solusi", href: "#solusi" },
  { label: "Fitur Unggulan", href: "#fitur" },
  { label: "Untuk Wedding Organizer", href: "#untuk-wo" },
  { label: "FAQ", href: "#faq" },
];

export const PAIN_POINTS: ComparisonItem[] = [
  {
    problem: "Antrean Mengular di Meja Resepsi",
    problemDesc:
      "Tamu menumpuk lama karena pencatatan manual di buku tamu atau scanner online yang gagal memuat akibat sinyal venue yang buruk.",
    solution: "Check-in 20fps Offline-First",
    solutionDesc:
      "Scanner PWA dengan akselerasi hardware. Memindai dalam hitungan milidetik dan tetap bekerja normal tanpa koneksi internet.",
    icon: QrCode,
  },
  {
    problem: "Rekap RSVP Tercecer di Chat WhatsApp",
    problemDesc:
      "Pengantin dan WO kebingungan menghitung porsi katering karena data kehadiran tersebar di spreadsheet manual dan ratusan chat pribadi.",
    solution: "Control Room & RSVP Otomatis",
    solutionDesc:
      "Setiap tamu mengisi konfirmasi langsung di undangan. Dashboard menghitung kuota tamu, persentase hadir, dan walk-in go-show secara real-time.",
    icon: Users,
  },
  {
    problem: "Undangan Digital Kaku & Klise",
    problemDesc:
      "Banyak undangan digital gratisan yang lambat dibuka, penuh iklan mengganggu, atau desainnya tidak mencerminkan keanggunan hari bahagia.",
    solution: "Studio Desain 15 Section Modular",
    solutionDesc:
      "Tampilan editorial berkelas, audio autoplay interaktif, galeri foto sinematik, amplop digital aman, dan link personal atas nama masing-masing tamu.",
    icon: Sparkles,
  },
];

export const TECHNICAL_METRICS: MetricItem[] = [
  {
    value: "20 FPS",
    label: "Hardware Accelerated",
    description: "Scan QR secepat kilat dengan BarcodeDetector bawaan perangkat.",
    icon: Zap,
  },
  {
    value: "100%",
    label: "Offline-First PWA",
    description: "Tetap memindai tanpa hambatan walau sinyal venue gedung padam.",
    icon: WifiOff,
  },
  {
    value: "2.000+",
    label: "Kapasitas Tamu",
    description: "Teruji menangani event skala besar dengan sinkronisasi instan.",
    icon: Users,
  },
  {
    value: "AES-256",
    label: "Enkripsi Database",
    description: "Nomor telepon & privasi tamu terlindungi standar keamanan ketat.",
    icon: Lock,
  },
];

export const TRUST_METRICS = TECHNICAL_METRICS;

export const COUPLE_FEATURES: FeatureItem[] = [
  {
    title: "15 Section Modular Lengkap",
    desc: "Cover sinematik, profil mempelai, kisah cinta, ayat/kutipan, hitung mundur, jadwal akad & resepsi, galeri foto, amplop digital, hingga musik latar.",
    icon: Layers,
    badge: "15 Section",
  },
  {
    title: "Link Khusus Atas Nama Tamu",
    desc: "Setiap tamu merasa dihormati secara khusus dengan tautan personal yang menampilkan nama lengkap mereka di sampul undangan.",
    icon: Heart,
    badge: "Personal",
  },
  {
    title: "Kirim WhatsApp 1-Klik",
    desc: "Kirim pesan undangan personal langsung ke nomor WhatsApp tamu dengan template teks yang sopan tanpa perlu salin-tempel manual.",
    icon: Share2,
    badge: "Instan",
  },
  {
    title: "Amplop Digital & Titip Hadiah Aman",
    desc: "Dukungan nomor rekening bank dan QRIS terverifikasi memudahkan tamu yang berhalangan hadir untuk tetap menyampaikan tanda kasih.",
    icon: Music,
    badge: "Aman",
  },
];

export const ORGANIZER_FEATURES: FeatureItem[] = [
  {
    title: "QR Scanner PWA 20fps Offline-First",
    desc: "Kecepatan pemindaian setara hardware profesional. Menggunakan Apple Neural Engine BarcodeDetector dan tetap berfungsi normal jika sinyal gedung terputus.",
    icon: QrCode,
    badge: "20 FPS",
  },
  {
    title: "Live Attendance Control Room",
    desc: "Pantau arus kedatangan tamu detik demi detik melalui WebSocket real-time. Ketahui sisa porsi katering dan kapasitas kursi secara presisi.",
    icon: Activity,
    badge: "Real-Time",
  },
  {
    title: "Registrasi Tamu Walk-In (Go-Show)",
    desc: "Tamu kehormatan yang hadir mendadak tanpa undangan dapat langsung didaftarkan dan di-check-in di meja resepsi dalam 3 detik.",
    icon: Zap,
    badge: "3 Detik",
  },
  {
    title: "Keamanan Data & Multi-Event Management",
    desc: "Nomor kontak tamu dienkripsi AES-256. Kelola ratusan klien pernikahan dalam satu dashboard terisolasi tanpa risiko data tertukar.",
    icon: ShieldCheck,
    badge: "AES-256",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "Apakah aplikasi QR Scanner tetap bisa bekerja jika sinyal gedung resepsi terputus?",
    a: "Ya, 100%! Aplikasi QR Scanner Maru Planner dirancang dengan arsitektur Progressive Web App (PWA) Offline-First. Seluruh data tamu disimpan di penyimpanan lokal perangkat (IndexedDB) sebelum acara dimulai. Tim meja penerima tamu tetap bisa melakukan scan dan verifikasi tamu dengan lancar tanpa koneksi internet sama sekali. Data akan otomatis disinkronkan ke server begitu perangkat terhubung kembali ke jaringan.",
  },
  {
    q: "Berapa kapasitas tamu undangan yang dapat ditampung dalam satu acara?",
    a: "Sistem Maru Planner dirancang untuk acara berskala besar dan teruji mendukung hingga 2.000 tamu per event pernikahan, dengan pemrosesan ribuan data check-in dalam hitungan detik tanpa gangguan performa.",
  },
  {
    q: "Berapa banyak perangkat scanner yang bisa aktif di meja resepsi secara bersamaan?",
    a: "Setiap acara mendukung hingga 2 perangkat scanner resepsi aktif bersamaan secara resmi. Masing-masing perangkat dapat berbagi beban tamu yang masuk di pintu masuk yang berbeda.",
  },
  {
    q: "Bagaimana jika ada tamu kehormatan atau kerabat yang hadir mendadak tanpa undangan (Go-Show)?",
    a: "Scanner Maru Planner dilengkapi fitur khusus 'Go-Show'. Tim meja penerima tamu cukup mengetikkan nama tamu dan jumlah orang dalam hitungan 3 detik. Tamu tersebut langsung otomatis tercatat ke dalam sistem kehadiran tanpa perlu membuat QR code terlebih dahulu.",
  },
  {
    q: "Apakah data nomor telepon dan privasi tamu kami terjamin aman?",
    a: "Sangat aman. Seluruh data nomor telepon tamu dienkripsi secara ketat di tingkat database menggunakan enkripsi standar militer AES-256-CBC. Kami tidak pernah membagikan atau menjual data tamu kepada pihak ketiga.",
  },
  {
    q: "Bagaimana cara memesan atau bekerja sama sebagai mitra Wedding Organizer?",
    a: "Anda dapat langsung menghubungi tim kami melalui tombol WhatsApp (0878-2551-5689). Kami menyediakan paket khusus untuk calon pengantin per-event maupun kemitraan jangka panjang multi-event untuk agensi Wedding Organizer.",
  },
];
