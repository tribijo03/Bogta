export default function CreditCardVisual() {
  return (
    <div className="relative mx-auto mt-10 h-64 w-full max-w-[360px] md:h-80 md:max-w-[480px]">
      {/* Tarjeta trasera oscura */}
      <div className="absolute left-0 top-4 h-44 w-64 rotate-[-12deg] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-black p-4 text-white shadow-2xl md:h-56 md:w-80">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest opacity-90">
            VIAJES FLEX
          </span>
          <i className="bi bi-wifi text-lg rotate-90 opacity-80"></i>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-9 w-12 rounded-md bg-gradient-to-br from-slate-200 to-slate-400" />
          <span className="text-sm tracking-[0.2em] opacity-80">4512</span>
        </div>
        <p className="mt-6 text-[11px] uppercase tracking-widest opacity-60">
          Demo educativa
        </p>
      </div>

      {/* Tarjeta frontal dorada genérica */}
      <div className="absolute right-0 top-10 h-48 w-72 rotate-[8deg] rounded-2xl bg-gradient-to-br from-[#E8C96A] via-[#D4AF37] to-[#A67C00] p-4 text-[#3A2E00] shadow-[0_20px_50px_rgba(0,0,0,0.25)] md:h-60 md:w-[22rem]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider md:text-xs">
              Banco Demo
            </p>
            <p className="mt-1 text-3xl font-black leading-none md:text-4xl">
              ON
            </p>
            <p className="text-[10px] font-semibold tracking-[0.3em]">GOLD</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-black italic">VISA</p>
            <p className="text-[10px] font-bold">GOLD</p>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <div className="h-8 w-11 rounded-md border border-yellow-800/40 bg-gradient-to-br from-yellow-100 to-yellow-300" />
          <p className="text-sm font-semibold tracking-[0.15em] md:text-base">
            4567 8901 2345 6789
          </p>
        </div>

        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="text-[8px] uppercase">Titular demo</p>
            <p className="text-[11px] font-bold uppercase">
              Alex Ejemplo Demo
            </p>
          </div>
          <i className="bi bi-wifi text-xl rotate-90"></i>
        </div>
      </div>
    </div>
  );
}
