"use client";

import { useState } from "react";

const tarjetas = [
  {
    id: "clasica",
    nombre: "Clásica Demo",
    cuota: "$0 cuota de manejo*",
    desc: "Para tus compras del día a día con control total desde la app.",
    color: "from-slate-800 to-slate-900",
    beneficios: ["Sin cuota inicial demo", "1.5% cashback ejemplo", "App de control"],
  },
  {
    id: "gold",
    nombre: "Gold Demo",
    cuota: "Cupo ejemplo hasta $8.7M",
    desc: "Más cupo y beneficios en viajes y compras online.",
    color: "from-[#D4AF37] to-[#8A6A00]",
    destacado: true,
    beneficios: ["Sala VIP ejemplo", "Seguro de viaje demo", "Doble punto"],
  },
  {
    id: "viajes",
    nombre: "Viajes Flex Demo",
    cuota: "Acumula millas demo",
    desc: "Ideal si viajas: acumula puntos por cada compra.",
    color: "from-[#0A2A7A] to-[#3B82F6]",
    beneficios: ["Millas x2 ejemplo", "Sin fila demo", "Descuentos aliados"],
  },
];

export default function Servicios() {
  const [seleccionada, setSeleccionada] = useState("gold");

  return (
    <section id="tarjetas" className="border-t border-slate-200 bg-[#F7F9FC] py-10">
      <div className="mx-auto max-w-[600px] px-5 md:max-w-7xl md:px-6">
        <h2 className="mx-auto max-w-[380px] text-center text-[17px] font-extrabold leading-snug text-[#0B1F4B] md:text-2xl">
          Elige una tarjeta y hazla parte de tu día a día
        </h2>
        <p className="mt-3 text-center text-sm text-slate-500">
          Maqueta demostrativa. Ninguna tarjeta es real ni aprobada.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tarjetas.map((t) => {
            const active = seleccionada === t.id;
            return (
              <article
                key={t.id}
                className={`rounded-3xl border p-6 transition ${
                  active
                    ? "border-[#0A2A7A] shadow-[0_15px_40px_rgba(10,42,122,0.15)]"
                    : "border-slate-200 shadow-sm"
                } ${t.destacado ? "relative" : ""}`}
              >
                {t.destacado && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0A2A7A] px-3 py-1 text-[11px] font-bold uppercase text-white">
                    Recomendada
                  </span>
                )}
                <div
                  className={`h-28 rounded-2xl bg-gradient-to-br ${t.color} p-3 text-white`}
                >
                  <p className="text-xs font-bold uppercase">{t.nombre}</p>
                  <p className="mt-6 text-xs tracking-[0.2em] opacity-80">
                    •••• 6789
                  </p>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {t.nombre}
                </h3>
                <p className="text-sm font-semibold text-[#0A2A7A]">
                  {t.cuota}
                </p>
                <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
                <ul className="mt-3 space-y-1.5">
                  {t.beneficios.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-[13px] text-slate-700"
                    >
                      <i className="bi bi-check-circle-fill text-green-600"></i>
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSeleccionada(t.id)}
                  className={`mt-5 w-full rounded-full py-3 text-sm font-bold transition ${
                    active
                      ? "bg-[#0A2A7A] text-white"
                      : "border border-[#0A2A7A] text-[#0A2A7A] hover:bg-[#0A2A7A] hover:text-white"
                  }`}
                >
                  {active ? "Seleccionada" : "Elegir esta tarjeta"}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
