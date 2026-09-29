import CreditCardVisual from "./CreditCardVisual";

export default function Hero() {
  return (
    <section id="inicio" className="bg-white pb-16">
      <div className="mx-auto max-w-[600px] px-5 pt-8 md:pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A2A7A] md:text-[12px]">
          Solicitud digital
        </p>
        <h1 className="mt-2 text-[32px] font-extrabold leading-[1.1] text-[#0B1F4B] md:text-[36px]">
          Tarjetas de crédito
        </h1>

        <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#BDE5C8] bg-[#EAF7EF] px-4 py-3 text-left">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600/10 text-green-700">
            <i className="bi bi-check-circle text-xl"></i>
          </span>
          <p className="text-[15px] font-semibold leading-snug text-[#14532D]">
            Tarjeta Clásica o Viajes Flex preaprobada por $8.700.000{" "}
            <span className="font-normal">(ejemplo demostrativo)</span>
          </p>
        </div>

        <p className="mt-5 text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
          Disfruta beneficios exclusivos con tu tarjeta Banco Demo, financia
          tus compras y vive experiencias únicas. Maqueta educativa sin
          afiliación bancaria real.
        </p>

        <div className="mt-6">
          <a
            href="#tarjetas"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0A2A7A] px-6 py-[14px] text-[15px] font-bold text-white shadow-[0_10px_25px_rgba(10,42,122,0.35)] transition hover:bg-[#12379e] active:scale-[0.99]"
          >
            Solicita aquí tu tarjeta
            <i className="bi bi-arrow-right text-lg"></i>
          </a>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-500">
            Abre este producto únicamente desde Colombia. No podrás en el
            exterior.
          </p>
        </div>

        <CreditCardVisual />
      </div>
    </section>
  );
}
