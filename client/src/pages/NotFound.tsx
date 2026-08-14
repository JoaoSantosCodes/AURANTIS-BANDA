import { Button } from "@/components/ui/button";
/** Estilo: Neon sobre Ruínas — erro de rota como sinal perdido, com retorno direto ao site. */
import { Radio, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <main className="grain min-h-screen bg-background px-6 text-foreground">
      <section className="container flex min-h-screen max-w-3xl flex-col justify-center">
        <p className="tech-meta text-[var(--gold)]">Transmissão interrompida · 404</p>
        <div className="iron-beam my-7" />
        <Radio className="mb-7 h-12 w-12 text-[var(--gold-soft)]" aria-hidden="true" />
        <h1 className="neon-title text-5xl leading-[.95] md:text-7xl">
          Este sinal não<br />
          está nesta frequência.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A página pode ter mudado de lugar, mas a travessia continua. Volte ao
          início para ouvir o catálogo e encontrar o caminho de novo.
        </p>
        <button
          type="button"
          onClick={handleGoHome}
          className="mt-10 inline-flex w-fit items-center gap-2 bg-[var(--gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[.12em] text-primary-foreground transition-transform duration-150 hover:bg-[var(--gold-soft)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-soft)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Voltar ao início
        </button>
      </section>
    </main>
  );
}
