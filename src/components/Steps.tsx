"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { t: "Chat WhatsApp", d: "Kirim jenis kendaraan, keluhan, dan share lokasi." },
  { t: "Terima estimasi", d: "Kami balas dengan perkiraan biaya dan waktu tiba." },
  { t: "Mekanik datang", d: "Dikerjakan di lokasi Anda dengan peralatan lengkap." },
  { t: "Cek & bayar", d: "Coba kendaraannya dulu, lalu bayar tunai atau transfer." },
];

export default function Steps() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <ol className={`steps${paused ? " paused" : ""}`} onMouseLeave={() => setPaused(false)}>
      {STEPS.map((s, i) => (
        <li
          key={s.t}
          className={`step${step === i ? " active" : ""}`}
          onMouseEnter={() => {
            setStep(i);
            setPaused(true);
          }}
        >
          <span className="tick" aria-hidden="true" />
          <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
          <span className="bar" aria-hidden="true">
            <span key={step === i ? `on-${step}` : "off"} />
          </span>
        </li>
      ))}
    </ol>
  );
}
