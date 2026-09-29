export default function Footer() {
  return (
    <footer className="bg-[#061A52] py-10 text-white">
      <div className="mx-auto max-w-md px-5 text-center md:max-w-7xl">
        <p className="font-bold">Banco Demo — Proyecto educativo</p>
        <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-white/60">
          Esta es una maqueta genérica inspirada en una landing de tarjetas.
          No representa, imita ni está afiliada a Banco de Bogotá ni a ninguna
          entidad financiera. No se procesan solicitudes reales.
        </p>
        <div className="mt-4 space-x-3 text-xs text-white/70">
          <a href="#" className="hover:text-white">
            Privacidad demo
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Términos demo
          </a>
          <span>|</span>
          <a href="#inicio" className="hover:text-white">
            Volver arriba
          </a>
        </div>
        <p className="mt-4 text-xs text-white/50">
          © 2026 Banco Demo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
