import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Beneficios from "@/components/Beneficios";
import Faq from "@/components/Faq";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Beneficios />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
