// Set NEXT_PUBLIC_SITE_URL in Vercel to the real domain; canonical, sitemap and OG URLs use it.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bengkelwanso.com").replace(/\/$/, "");

export const SITE_NAME = "Bengkel Wanso";
export const SITE_TITLE = "Bengkel Wanso — Bengkel Panggilan Motor & Mobil 24 Jam di Geyer & Monggot, Grobogan";
export const SITE_DESCRIPTION =
  "Bengkel panggilan motor dan mobil 24 jam di Geyer & Monggot, Grobogan. Servis rutin, ganti oli, aki soak, ban bocor, mogok darurat — chat WhatsApp, mekanik datang ke lokasi Anda.";

export const WA_NUMBER = "6282313991963";
export const WA_DISPLAY = "+62 823-1399-1963";
export const WA_TEL = `+${WA_NUMBER}`;

export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA = {
  general: waLink("Halo Bengkel Wanso, saya mau tanya soal servis panggilan."),
  motor: waLink("Halo Bengkel Wanso, saya mau pesan servis motor."),
  mobil: waLink("Halo Bengkel Wanso, saya mau pesan servis mobil."),
  review: waLink("Halo Bengkel Wanso, saya mau berbagi pengalaman servis bersama Wanso."),
};

export const FAQS = [
  {
    q: "Apakah ada biaya kunjungan?",
    a: "Tidak ada biaya kunjungan untuk lokasi dalam radius 10 km dari bengkel kami. Di luar radius itu, tanyakan dulu lewat WhatsApp.",
  },
  {
    q: "Bisa servis di parkiran kantor atau kos?",
    a: "Bisa, selama ada ruang yang aman untuk kendaraan dan mekanik bekerja. Kabari kondisi lokasinya saat chat.",
  },
  {
    q: "Bagaimana kalau kerusakan tidak bisa dikerjakan di tempat?",
    a: "Kendaraan akan kami bawa ke bengkel untuk dikerjakan di sana, dan kami beri estimasi berapa lama sampai selesai.",
  },
  { q: "Pembayarannya bagaimana?", a: "Bisa tunai atau transfer ke rekening bank." },
];
