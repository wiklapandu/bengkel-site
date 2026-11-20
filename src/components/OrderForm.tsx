"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import { ChatIcon } from "./icons";

const QUICK = ["Mogok", "Aki soak", "Ban bocor", "Ganti oli", "Servis rutin", "Rem bermasalah"];

export default function OrderForm() {
  const [vehicle, setVehicle] = useState<"motor" | "mobil">("motor");
  const [keluhan, setKeluhan] = useState("");
  const [lokasi, setLokasi] = useState("");

  const href = waLink(
    `Halo Bengkel Wanso, saya butuh servis ${vehicle}.\nKeluhan: ${keluhan || "-"}\nLokasi: ${lokasi || "-"}`,
  );

  return (
    <form className="order rise d3" aria-label="Pesan mekanik" onSubmit={(e) => e.preventDefault()}>
      <div className="vgroup">
        <span className="lbl" id="kendaraan-lbl">Kendaraan</span>
        <div role="group" aria-labelledby="kendaraan-lbl" className="seg">
          {(["motor", "mobil"] as const).map((v) => (
            <button key={v} type="button" className="pill" aria-pressed={vehicle === v} onClick={() => setVehicle(v)}>
              {v === "motor" ? "Motor" : "Mobil"}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label className="lbl" htmlFor="keluhan">Keluhan</label>
        <input
          id="keluhan"
          name="keluhan"
          type="text"
          placeholder="Contoh: tidak mau starter"
          value={keluhan}
          onChange={(e) => setKeluhan(e.target.value)}
        />
      </div>
      <div className="field">
        <label className="lbl" htmlFor="lokasi">Lokasi</label>
        <input
          id="lokasi"
          name="lokasi"
          type="text"
          autoComplete="street-address"
          placeholder="Desa / patokan di Geyer atau Monggot"
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
        />
      </div>
      <a className="btn-navy" href={href} rel="noopener">
        <ChatIcon />
        Kirim via WhatsApp
      </a>
      <div className="quick">
        <span className="lbl">Keluhan umum:</span>
        {QUICK.map((label) => (
          <button
            key={label}
            type="button"
            className="qk"
            aria-pressed={keluhan === label}
            onClick={() => setKeluhan(keluhan === label ? "" : label)}
          >
            {label}
          </button>
        ))}
      </div>
    </form>
  );
}
