"use client";

import { useState } from "react";

// Demo educativa: no recolecta datos reales, no usa marcas reales,
// no envía nada a ningún servidor. Solo para aprender layout en Next.js.
export default function DemoLogin() {
  const [tab, setTab] = useState<"clave" | "tarjeta">("clave");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Aviso demo muy visible */}
      <div className="mb-6 rounded-xl border-2 border-dashed border-amber-500 bg-amber-50 p-4 text-center">
        <p className="text-sm font-bold uppercase text-amber-800">
          Demo para aprendizaje — No ingrese datos reales
        </p>
        <p className="mt-1 text-xs text-amber-700">
          Marca ficticia “Banco Demo”. Este formulario no guarda ni envía
          información. Todo queda en tu navegador.
        </p>
      </div>

      <h1 className="text-2xl font-extrabold text-slate-900">
        Bienvenido a tu Banca Demo
      </h1>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Columna izquierda: login genérico */}
        <div>
          <div className="rounded-xl bg-[#0A2A7A] p-4 text-white">
            <p className="text-sm font-bold">
              ¿Primera vez en esta demo?
            </p>
            <p className="text-xs text-white/80">
              Aquí aprenderás cómo se estructura un login en Next.js →
            </p>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="flex border-b">
              <button
                onClick={() => setTab("clave")}
                className={`flex-1 py-3 text-sm font-bold ${
                  tab === "clave"
                    ? "border-b-2 border-[#0A2A7A] text-[#0A2A7A]"
                    : "text-slate-500"
                }`}
              >
                Clave demo
              </button>
              <button
                onClick={() => setTab("tarjeta")}
                className={`flex-1 py-3 text-sm font-bold ${
                  tab === "tarjeta"
                    ? "border-b-2 border-[#0A2A7A] text-[#0A2A7A]"
                    : "text-slate-500"
                }`}
              >
                Tarjeta demo
              </button>
            </div>

            <form
              className="space-y-4 p-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Demo educativa: no se envió nada. No uses datos reales."
                );
              }}
            >
              <div className="rounded-lg bg-slate-100 p-3 text-xs text-slate-600">
                Estás en modo aprendizaje con pestaña:{" "}
                {tab === "clave" ? "Clave demo" : "Tarjeta demo"}. Cambia de
                pestaña para ver el otro estado.
              </div>

              <div>
                <label className="mb-1 block text-sm font-bold">
                  Identificación de prueba
                </label>
                <div className="flex gap-2">
                  <select
                    className="w-28 rounded-lg border border-slate-300 px-2 py-2.5 text-sm"
                    aria-label="Tipo documento demo"
                  >
                    <option>C.C.</option>
                    <option>C.E.</option>
                    <option>Pasaporte</option>
                  </select>
                  <input
                    placeholder="Ej: 123456"
                    autoComplete="off"
                    className="flex-1 rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-[#0A2A7A]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-bold">
                  {tab === "clave" ? "Contraseña demo" : "Número tarjeta demo"}
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••"
                    autoComplete="off"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 pr-10 text-sm outline-none focus:border-[#0A2A7A]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0A2A7A]"
                    aria-label="Mostrar u ocultar"
                  >
                    <i
                      className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"}`}
                    ></i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-slate-200 py-3 text-sm font-bold text-slate-500"
              >
                Ingresar (deshabilitado en demo)
              </button>
            </form>
          </div>

          <div className="mt-4 flex justify-between text-sm font-bold text-[#0A2A7A]">
            <a href="#">Registrarme demo ›</a>
            <a href="#">Olvidé mi clave demo ›</a>
          </div>
        </div>

        {/* Columna derecha: promo genérica + accesos */}
        <div>
          <div className="rounded-xl bg-[#FFB700] p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-24 w-36 items-center justify-center rounded-xl bg-[#0A2A7A] font-black text-white">
                DEMO
              </div>
              <div>
                <p className="text-3xl font-black text-[#0A2A7A]">
                  Cuenta Fácil Demo
                </p>
                <p className="mt-1 text-sm">
                  Sin cuota de manejo de ejemplo y transferencias simuladas.
                </p>
                <span className="mt-3 inline-block rounded-lg bg-[#0A2A7A] px-4 py-2 text-sm font-bold text-white">
                  Descúbrela ahora
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { icon: "bi-shield-check", label: "Configuración de seguridad" },
              { icon: "bi-piggy-bank", label: "Solicitar un producto" },
              { icon: "bi-headset", label: "Atención al cliente" },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center"
              >
                <i className={`bi ${c.icon} text-2xl text-[#0A2A7A]`}></i>
                <p className="mt-2 text-xs font-bold text-[#0A2A7A]">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
