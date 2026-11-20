"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { to: 100, from: 0, suffix: "+", label: "Kendaraan sudah ditangani" },
  { to: 20, from: 0, suffix: "+ km", label: "Jangkauan mekanik siap jalan" },
  { to: 2020, from: 1990, suffix: "", label: "Melayani sejak" },
  { to: 15, from: 0, suffix: " mnt", label: "Rata-rata mekanik tiba" },
];

// Server HTML carries the final numbers (crawlers, no-JS); the count-up only runs once the block scrolls into view.
export default function Stats() {
  const ref = useRef<HTMLDListElement>(null);
  const [p, setP] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible: don't flash to 0
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((en) => en.isIntersecting)) return;
        io.disconnect();
        let start: number | null = null;
        const tick = (t: number) => {
          start ??= t;
          const k = Math.min(1, (t - start) / 1600);
          setP(1 - Math.pow(1 - k, 3));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    setP(0);
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <dl ref={ref} className="stats">
      {STATS.map((s) => (
        <div key={s.label} className="stat">
          <dt>{s.label}</dt>
          <dd>
            {Math.round(s.from + (s.to - s.from) * p)}
            {s.suffix}
          </dd>
        </div>
      ))}
    </dl>
  );
}
