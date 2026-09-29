"use client";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-[#0A2A7A] py-14 text-white">
      <div className="mx-auto max-w-md px-5 md:max-w-3xl md:px-6">
        <h2 className="text-center text-2xl font-extrabold">
          Simula tu solicitud
        </h2>
        <p className="mt-2 text-center text-sm text-white/70">
          Formulario demostrativo. No envía datos a ningún servidor.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Demo: solicitud simulada, no se envió nada.");
          }}
          className="mt-6 space-y-3 rounded-3xl bg-white p-5 text-slate-900"
        >
          <input
            type="text"
            placeholder="Nombre de ejemplo"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A2A7A]"
          />
          <input
            type="email"
            placeholder="Correo de ejemplo"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0A2A7A]"
          />
          <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none">
            <option>Clásica Demo</option>
            <option>Gold Demo</option>
            <option>Viajes Flex Demo</option>
          </select>
          <button
            type="submit"
            className="w-full rounded-full bg-[#0A2A7A] py-3.5 font-bold text-white transition hover:bg-[#12379e]"
          >
            Solicita aquí tu tarjeta
          </button>
        </form>
      </div>
    </section>
  );
}
