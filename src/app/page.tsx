import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CredentialBand } from "@/components/CredentialBand";
import { About } from "@/components/About";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Differentials } from "@/components/Differentials";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <CredentialBand />
        <About />
        <PracticeAreas />
        <Differentials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
