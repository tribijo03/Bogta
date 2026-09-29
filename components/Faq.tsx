"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Esta página es de un banco real?",
    a: "No. Es una maqueta educativa con marca ficticia 'Banco Demo', sin afiliación con ningún banco real.",
  },
  {
    q: "¿Puedo solicitar una tarjeta real aquí?",
    a: "No. Los botones y formularios son simulados y no procesan datos ni solicitudes reales.",
  },
  {
    q: "¿Funciona en el exterior?",
    a: "En esta demo indicamos que es solo para Colombia como ejemplo de microcopy, no es una restricción real.",
  },
  {
    q: "¿Qué tecnología usa?",
    a: "Next.js 14, TypeScript y Tailwind CSS con componentes en /components.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-14">
      <div className="mx-auto max-w-md px-5 md:max-w-3xl md:px-6">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-slate-900">
          Preguntas frecuentes
        </h2>
        <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-900 hover:bg-slate-50"
                >
                  {f.q}
                  <i
                    className={`bi ${
                      open ? "bi-chevron-up" : "bi-chevron-down"
                    } text-sm`}
                  ></i>
                </button>
                {open && <div className="px-5 pb-5 text-sm text-slate-600">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
