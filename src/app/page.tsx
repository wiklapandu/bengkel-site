import Image from "next/image";
import OrderForm from "@/components/OrderForm";
import PointerFx from "@/components/PointerFx";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import {
  ArrowDown,
  ArrowRight,
  ChatDotsIcon,
  ChatIcon,
  CheckIcon,
  ClockIcon,
  ListIcon,
  PinIcon,
  WrenchIcon,
} from "@/components/icons";
import { FAQS, SITE_DESCRIPTION, SITE_NAME, SITE_URL, WA, WA_DISPLAY, WA_TEL } from "@/lib/site";
import hero from "../../public/images/hero.jpg";
import motor from "../../public/images/servis-motor.jpg";
import mobil from "../../public/images/servis-mobil.jpg";
import berangkat from "../../public/images/mekanik-berangkat.jpg";
import cta from "../../public/images/cta.jpg";
import logo from "../../public/images/logo.png";

const NAV = [
  ["#layanan", "Layanan"],
  ["#cara-kerja", "Cara kerja"],
  ["#area", "Area"],
  ["#faq", "FAQ"],
] as const;

const MOTOR = ["Servis berkala & ganti oli", "Tune up karbu & injeksi", "Ban, kampas rem, rantai", "Aki & kelistrikan", "CVT matic", "Mogok darurat"];
const MOBIL = ["Servis berkala & ganti oli", "Ganti aki & jumper", "Servis rem", "Cek kelistrikan", "Diagnosa mesin", "Mogok darurat"];
const MARQUEE = ["Servis berkala", "Ganti oli", "Aki soak", "Ban bocor", "Mogok darurat", "Tune up", "Siaga 24 jam", "Geyer & Monggot"];

const WHY = [
  { Icon: ClockIcon, t: "Hemat waktu", d: "Tidak perlu menunggu di ruang tunggu bengkel berjam-jam." },
  { Icon: ListIcon, t: "Estimasi di awal", d: "Perkiraan biaya disampaikan lewat chat sebelum dikerjakan." },
  { Icon: WrenchIcon, t: "Alat dibawa lengkap", d: "Mekanik datang membawa peralatan dan suku cadang umum." },
  { Icon: ChatIcon, t: "Semua lewat WhatsApp", d: "Pesan, tanya, dan konfirmasi di satu percakapan." },
];

const offers = (vehicle: string, items: string[]) =>
  items.map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: `${name} (${vehicle})`, areaServed: ["Geyer", "Monggot"] },
  }));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: [`${SITE_URL}/images/hero.jpg`, `${SITE_URL}/images/servis-motor.jpg`, `${SITE_URL}/images/servis-mobil.jpg`],
      telephone: WA_TEL,
      foundingDate: "2020",
      paymentAccepted: "Cash, Bank Transfer",
      currenciesAccepted: "IDR",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Geyer",
        addressRegion: "Jawa Tengah",
        addressCountry: "ID",
      },
      areaServed: [
        { "@type": "Place", name: "Geyer, Grobogan, Jawa Tengah" },
        { "@type": "Place", name: "Monggot, Geyer, Grobogan, Jawa Tengah" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: WA_TEL,
        contactType: "customer service",
        availableLanguage: ["id"],
        contactOption: "TollFree",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan bengkel panggilan",
        itemListElement: [...offers("motor", MOTOR), ...offers("mobil", MOBIL)],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "id-ID",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a className="skip" href="#main">Langsung ke konten</a>
      <div aria-hidden="true" className="progress" />
      <PointerFx />

      <div id="top" className="page">
        <main id="main">
          {/* HERO */}
          <section className="hero-sec" aria-labelledby="hero-title">
            <div className="hero" data-track>
              <Image
                src={hero}
                alt="Mekanik Bengkel Wanso memperbaiki skuter di carport rumah pelanggan"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="100vw"
                className="hero-img kb par"
              />
              <div aria-hidden="true" className="hero-shade" />

              <header className="wrap topbar">
                <a href="#top" className="brand">
                  <Image src={logo} alt="" width={42} height={42} />
                  <span>Bengkel Wanso</span>
                </a>
                <nav aria-label="Navigasi utama" className="nav">
                  {NAV.map(([href, label]) => (
                    <a key={href} className="navlink" href={href}>{label}</a>
                  ))}
                </nav>
                <a className="btn-amber btn-sm" href={WA.general} rel="noopener">
                  <ChatIcon />
                  Chat WhatsApp
                </a>
              </header>

              <a className="scrolldown rise d4" href="#statistik" aria-label="Scroll ke bawah · Bengkel Wanso · 24 jam">
                <svg className="ring" aria-hidden="true" width="140" height="140" viewBox="0 0 140 140">
                  <defs>
                    <path id="wansoRing" d="M70,70 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0" />
                  </defs>
                  <text fill="#F2F7FD" fontSize="11" fontWeight="600" letterSpacing="3">
                    <textPath href="#wansoRing" textLength="335" lengthAdjust="spacing">
                      SCROLL KE BAWAH · BENGKEL WANSO · 24 JAM ·{" "}
                    </textPath>
                  </text>
                </svg>
                <span className="core">
                  <ArrowDown size={24} stroke="#142B45" strokeWidth={2.4} />
                </span>
              </a>

              <div className="wrap hero-body">
                <p className="badge rise">
                  <i aria-hidden="true" />
                  Bengkel panggilan · Geyer &amp; Monggot, Grobogan
                </p>
                <h1 id="hero-title" className="h1 rise d1">
                  Bengkelnya yang datang, <span className="amber">bukan Anda yang antre.</span>
                </h1>
                <p className="lead rise d2">
                  Mogok di jalan, servis rutin di garasi, atau aki tekor pagi-pagi — chat Bengkel Wanso lewat WhatsApp,
                  mekanik kami datang ke lokasi Anda, 24 jam setiap hari.
                </p>
                <OrderForm />
              </div>
            </div>
          </section>

          {/* STATS */}
          <section id="statistik" className="stats-sec" aria-label="Bengkel Wanso dalam angka">
            <div className="wrap">
              <Stats />
            </div>
          </section>

          {/* INTRO */}
          <section className="sec" style={{ padding: "88px 0 112px" }}>
            <div className="wrap rv intro">
              <h2>
                Kendaraan rewel di parkiran kantor, garasi rumah, atau pinggir jalan?{" "}
                <span className="amber">Cukup kirim chat — alat dan mekaniknya kami bawa.</span>
              </h2>
              <ol>
                {[
                  ["Servis rutin tanpa antre", "Ganti oli dan tune up dikerjakan di tempat Anda, sementara Anda tetap beraktivitas."],
                  ["Darurat mogok", "Aki soak, ban bocor, atau mesin mati mendadak — kirim lokasi, mekanik menuju ke sana."],
                  ["Motor dan mobil, satu nomor", "Tak perlu cari dua bengkel. Semua cukup lewat satu chat WhatsApp."],
                ].map(([t, d], i) => (
                  <li key={t}>
                    <span aria-hidden="true">0{i + 1}</span>
                    <div>
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <div className="marquee" aria-hidden="true">
            {[0, 1].map((k) => (
              <div key={k} className="track">
                {MARQUEE.map((m) => (
                  <span key={m} style={{ display: "contents" }}>
                    <span>{m}</span>
                    <span className="dot" />
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* LAYANAN */}
          <section id="layanan" className="sec light" aria-labelledby="layanan-title">
            <div className="wrap rv">
              <div className="head">
                <div>
                  <p className="eyebrow">Layanan</p>
                  <h2 id="layanan-title" className="h2">
                    Dua keahlian,
                    <br />
                    satu panggilan.
                  </h2>
                </div>
                <p className="svc-intro">
                  Pilih jenis kendaraan, ceritakan keluhannya, dan kami kirim estimasi lewat chat sebelum mekanik
                  berangkat.
                </p>
              </div>
              <div className="svc-grid">
                <article className="svc motor lift tilt" data-track>
                  <div className="zoom">
                    <Image
                      src={motor}
                      alt="Mekanik menyetel rantai motor di halaman rumah"
                      className="svc-img"
                      sizes="(max-width: 760px) 100vw, 600px"
                      placeholder="blur"
                    />
                  </div>
                  <div className="svc-body">
                    <h3>Servis Motor</h3>
                    <ul className="checks">
                      {MOTOR.map((m) => (
                        <li key={m}><CheckIcon stroke="#142B45" />{m}</li>
                      ))}
                    </ul>
                    <a className="btn-navy self-start" href={WA.motor} rel="noopener">
                      Pesan servis motor
                      <ArrowRight />
                    </a>
                  </div>
                </article>

                <article className="svc mobil lift tilt" data-track>
                  <div className="zoom">
                    <Image
                      src={mobil}
                      alt="Mekanik memeriksa mesin mobil dengan alat diagnosa di carport"
                      className="svc-img"
                      sizes="(max-width: 760px) 100vw, 600px"
                      placeholder="blur"
                    />
                  </div>
                  <div className="svc-body">
                    <h3>Servis Mobil</h3>
                    <ul className="checks">
                      {MOBIL.map((m) => (
                        <li key={m}><CheckIcon stroke="#F5B82E" />{m}</li>
                      ))}
                    </ul>
                    <a className="btn-amber self-start" href={WA.mobil} rel="noopener">
                      Pesan servis mobil
                      <ArrowRight />
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* CARA KERJA */}
          <section id="cara-kerja" className="sec" aria-labelledby="cara-title">
            <div className="wrap rv">
              <div className="head">
                <h2 id="cara-title" className="h2">
                  Dari chat sampai
                  <br />
                  mesin menyala.
                </h2>
                <p className="steps-note">Empat langkah, tanpa perlu keluar rumah.</p>
              </div>
              <Steps />
              <div className="zoom wide">
                <Image
                  src={berangkat}
                  alt="Mekanik berangkat naik motor membawa boks peralatan di jalan perumahan"
                  sizes="(max-width: 1280px) 100vw, 1184px"
                  placeholder="blur"
                />
              </div>
            </div>
          </section>

          {/* KENAPA */}
          <section className="sec light" aria-labelledby="why-title">
            <div className="wrap rv why">
              <p className="eyebrow">Kenapa Wanso</p>
              <h2 id="why-title" className="h2">Bengkel yang ramah waktu Anda.</h2>
              <div className="why-grid">
                {WHY.map(({ Icon, t, d }) => (
                  <div key={t} className="card lift spot" data-track>
                    <Icon size={28} strokeWidth={1.8} stroke="#F5B82E" />
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PENGALAMAN */}
          <section className="sec" aria-labelledby="exp-title">
            <div className="wrap rv exp">
              <div className="exp-num">
                <div className="exp-big" aria-hidden="true">100+</div>
                <p style={{ fontSize: 20, fontWeight: 600 }}>
                  <span className="sr-only">Lebih dari 100 </span>kendaraan sudah kami tangani
                </p>
                <p className="muted" style={{ fontSize: 15 }}>di Geyer dan Monggot sejak 2020</p>
              </div>
              <div className="card exp-card lift spot" data-track>
                <ChatDotsIcon size={36} strokeWidth={1.8} stroke="#F5B82E" />
                <h2 id="exp-title">
                  Sudah pernah pakai Wanso? <span className="amber">Ceritakan pengalamanmu.</span>
                </h2>
                <p>
                  Kesan dan masukan Anda membantu kami melayani lebih baik, dan membantu tetangga di Geyer dan Monggot
                  memilih bengkel panggilan yang tepat.
                </p>
                <a className="btn-amber self-start" href={WA.review} rel="noopener">
                  <ChatIcon />
                  Kirim cerita via WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* AREA */}
          <section id="area" className="sec light" aria-labelledby="area-title">
            <div className="wrap rv area">
              <div>
                <p className="eyebrow">Area layanan</p>
                <h2 id="area-title">Kami melayani panggilan di sekitar Geyer dan Monggot.</h2>
                <ul className="chips">
                  {["Geyer", "Monggot"].map((a) => (
                    <li key={a} className="chip"><PinIcon stroke="#2168A8" />{a}</li>
                  ))}
                </ul>
                <p className="area-note">
                  Kabupaten Grobogan, Jawa Tengah. Saat ini kami hanya melayani panggilan di dua area tersebut.
                </p>
              </div>
              <div className="card hours">
                <dl>
                  <div>
                    <dt>Jam operasional</dt>
                    <dd>Setiap hari, 24 jam</dd>
                  </div>
                  <div>
                    <dt>WhatsApp</dt>
                    <dd><a href={WA.general} rel="noopener">{WA_DISPLAY}</a></dd>
                  </div>
                </dl>
                <a className="btn-amber self-start" href={WA.general} rel="noopener">Tanya lokasi via WhatsApp</a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="faq-sec" aria-labelledby="faq-title">
            <div className="wrap rv faq">
              <h2 id="faq-title" className="h2">Pertanyaan yang sering masuk.</h2>
              <div>
                {FAQS.map((f, i) => (
                  <details key={f.q} open={i === 0}>
                    <summary>
                      {f.q}
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-sec" aria-labelledby="cta-title">
            <div className="cta">
              <Image
                src={cta}
                alt="Mekanik memperbaiki mobil malam hari di depan rumah"
                fill
                sizes="100vw"
                placeholder="blur"
                className="cta-img"
              />
              <div aria-hidden="true" className="cta-shade" />
              <div className="wrap cta-body">
                <h2 id="cta-title">
                  Kendaraan bermasalah? <span className="amber">Biar kami yang datang.</span>
                </h2>
                <p>Kirim chat sekarang — sebutkan kendaraan, keluhan, dan lokasi Anda.</p>
                <div className="row">
                  <a className="btn-amber" href={WA.general} rel="noopener">
                    <ChatIcon />
                    Chat WhatsApp sekarang
                  </a>
                  <a className="btn-ghost" href="#layanan">Lihat layanan</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="wrap foot">
          <div className="foot-brand">
            <div className="brand" style={{ fontSize: 17 }}>
              <Image src={logo} alt="" width={38} height={38} />
              <span>Bengkel Wanso</span>
            </div>
            <address>
              <p>Bengkel panggilan motor dan mobil di Geyer dan Monggot, Grobogan, Jawa Tengah.</p>
            </address>
          </div>
          <nav aria-label="Navigasi footer" className="nav" style={{ display: "flex" }}>
            {NAV.map(([href, label]) => (
              <a key={href} className="navlink" href={href}>{label}</a>
            ))}
            <a className="navlink" href={WA.general} rel="noopener">WhatsApp</a>
          </nav>
          <p className="copy">© 2026 Bengkel Wanso</p>
        </footer>

        <a className="fab" href={WA.general} rel="noopener" aria-label="Chat Bengkel Wanso via WhatsApp">
          <span className="tip" aria-hidden="true">Butuh mekanik? Chat sekarang</span>
          <ChatIcon size={26} />
        </a>
      </div>
    </>
  );
}
