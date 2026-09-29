import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
  title: "Solicitud Digital - Tarjetas de Crédito | Banco Demo",
  description:
    "Demo genérica de solicitud digital de tarjetas de crédito. Proyecto educativo sin afiliación bancaria.",
  openGraph: {
    title: "Solicitud Digital - Tarjetas de Crédito",
    description:
      "Explora beneficios, elige tu tarjeta y hazla parte de tu día a día. Demo educativa.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
