import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoLogin from "@/components/DemoLogin";

export const metadata: Metadata = {
  title: "Banca Demo — Página educativa (no real)",
  description:
    "Demo educativa de layout de banca virtual. No ingrese datos reales.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BancaDemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFBFE]">
        <DemoLogin />
      </main>
      <Footer />
    </>
  );
}
