/**
 * AURANTIS — Site Oficial · Home
 * Estilo: "Neon sobre Ruínas" (Cathedral of Light)
 * Seções em atos: Hero → Manifesto → Elementos → Setlist → Discografia → Novidades → CTA → Footer
 */
import {
  Header,
  Hero,
  Manifesto,
  Philosophy,
  SpotifyCTA,
  Footer,
} from "@/components/Sections";
import { Discografia } from "@/components/Discografia";
import { Setlist } from "@/components/Setlist";
import { Novidades } from "@/components/Novidades";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Philosophy />
        <Setlist />
        <Discografia />
        <Novidades />
        <SpotifyCTA />
      </main>
      <Footer />
    </>
  );
}
