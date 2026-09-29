"use client";

import { useState } from "react";

const menuLinks = [
  { href: "#inicio", label: "Solicitud digital" },
  { href: "#tarjetas", label: "Tarjetas" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A2A7A] text-white shadow-md">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3 md:max-w-7xl md:px-6 md:py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight md:text-xl">
            Banco Demo
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-red-500 text-sm font-bold">
            D
          </span>
        </a>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="flex items-center gap-2 rounded-full border border-white/80 px-4 py-1.5 text-sm font-medium transition hover:bg-white hover:text-[#0A2A7A]"
              aria-expanded={loginOpen}
            >
              Ingresar
              <i className="bi bi-chevron-down text-xs"></i>
            </button>
            {loginOpen && (
              <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl bg-white text-slate-800 shadow-xl">
                <a
                  href="#contacto"
                  className="block px-4 py-3 text-sm hover:bg-slate-100"
                >
                  Banca personas
                </a>
                <a
                  href="#contacto"
                  className="block px-4 py-3 text-sm hover:bg-slate-100"
                >
                  Banca empresas
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col items-center text-white"
            aria-label="Abrir menú"
          >
            <i className="bi bi-list text-2xl leading-none"></i>
            <span className="text-[11px]">Menú</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/15 bg-[#0A2A7A] px-4 py-4">
          <ul className="mx-auto max-w-md space-y-1 md:max-w-7xl">
            {menuLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
