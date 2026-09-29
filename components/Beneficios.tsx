const beneficios = [
  { icon: "bi-shield-check", title: "Control total", desc: "Bloquea, configura y monitorea desde la app demo." },
  { icon: "bi-airplane", title: "Viajes", desc: "Ejemplo de millas y salas VIP para maqueta." },
  { icon: "bi-percent", title: "Descuentos", desc: "Aliados ficticios con beneficios de ejemplo." },
  { icon: "bi-phone", title: "100% digital", desc: "Solicitud simulada sin papeleo en esta demo." },
  { icon: "bi-lightning-charge", title: "Avances", desc: "Simula avances y cuotas de forma educativa." },
  { icon: "bi-headset", title: "Soporte", desc: "Centro de ayuda ficticio para la demo." },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-[#F8FAFC] py-14">
      <div className="mx-auto max-w-md px-5 md:max-w-7xl md:px-6">
        <h2 className="text-center text-2xl font-extrabold text-slate-900 md:text-3xl">
          Beneficios de ejemplo
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {beneficios.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0FF] text-xl text-[#0A2A7A]">
                <i className={`bi ${b.icon}`}></i>
              </div>
              <h3 className="font-bold text-slate-900">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
