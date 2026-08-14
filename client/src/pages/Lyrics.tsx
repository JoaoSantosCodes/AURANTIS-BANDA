/**
 * Estilo: "Neon sobre Ruínas" — arquivo de letras como sala de escuta;
 * o conteúdo oficial chega em camadas, sem publicar versos não aprovados.
 */
import { Captions, ChevronRight, ExternalLink, Radio, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Footer, Header } from "@/components/Sections";
import {
  ALBUM_TRACKLIST,
  getLyricExperience,
  trackSlug,
  type Track,
} from "@/lib/bandData";

export default function Lyrics() {
  const initialTrack = useMemo(() => {
    const requestedSlug = new URLSearchParams(window.location.search).get("faixa");
    return ALBUM_TRACKLIST.find((track) => trackSlug(track) === requestedSlug) ?? ALBUM_TRACKLIST[0];
  }, []);
  const [activeTrack, setActiveTrack] = useState<Track>(initialTrack);
  const lyricExperience = getLyricExperience(activeTrack);

  const selectTrack = (track: Track) => {
    setActiveTrack(track);
    const params = new URLSearchParams(window.location.search);
    params.set("faixa", trackSlug(track));
    window.history.replaceState({}, "", `/letras?${params.toString()}`);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 md:pt-36">
        <section className="relative overflow-hidden border-y border-border bg-card/35 py-14 md:py-20">
          <div className="container grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="tech-meta text-[var(--gold)]">Arquivo de Letras</p>
              <h1 className="neon-title mt-4 text-5xl leading-[.95] md:text-7xl">
                Escute com<br />
                <span className="text-[var(--gold)]">os olhos abertos.</span>
              </h1>
            </div>
            <div className="border-l-2 border-[var(--gold)] pl-5 text-base leading-relaxed text-muted-foreground">
              A letra é uma camada da travessia. O arquivo será preenchido exclusivamente com versões aprovadas pela banda, preservando cada pausa, corte e cicatriz.
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <p className="tech-meta mb-4 text-[var(--gold)]">Transmissões</p>
              <div className="border-b border-border">
                {ALBUM_TRACKLIST.map((track) => {
                  const active = track.trackId === activeTrack.trackId;
                  return (
                    <button
                      key={track.trackId}
                      type="button"
                      onClick={() => selectTrack(track)}
                      aria-current={active ? "true" : undefined}
                      className={`w-full border-t border-border px-3 py-4 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${
                        active ? "bg-[var(--gold)]/10" : "hover:bg-card/60"
                      }`}
                    >
                      <span className={`block font-medium ${active ? "text-[var(--gold-soft)]" : "text-foreground"}`}>
                        {track.title}
                      </span>
                      <span className="tech-meta mt-1 block text-[10px] text-muted-foreground">
                        {track.albumTitle} · {track.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <article className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                  <p className="tech-meta text-[var(--gold)]">{activeTrack.albumTitle}</p>
                  <h2 className="neon-title mt-2 text-4xl leading-none md:text-6xl">{activeTrack.title}</h2>
                </div>
                <a
                  href={`https://open.spotify.com/track/${activeTrack.trackId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--gold)]/65 px-4 py-2 text-xs font-medium uppercase tracking-[.12em] text-[var(--gold-soft)] transition-colors hover:bg-[var(--gold)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
                >
                  <Radio size={15} aria-hidden="true" /> Ouvir <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>

              <div className="mt-8 border border-[var(--gold)]/45 bg-card/50 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center border border-[var(--gold)]/60 text-[var(--gold-soft)]">
                    <Captions size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="tech-meta text-[var(--gold)]">Letra oficial em preparação</p>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {lyricExperience.publicationNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-9">
                <p className="tech-meta text-[var(--gold)]">Mapa de escuta</p>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-foreground">{lyricExperience.listeningGuide}</p>
                <div className="mt-8 grid gap-0 border-b border-border md:grid-cols-3">
                  {lyricExperience.movements.map((movement, index) => (
                    <section key={movement.title} className="border-t border-border px-0 py-5 md:px-5">
                      <p className="tech-meta text-[var(--gold)]">0{index + 1}</p>
                      <h3 className="neon-title mt-3 text-2xl">{movement.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{movement.description}</p>
                    </section>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <Sparkles size={16} className="text-[var(--gold)]" aria-hidden="true" />
                <span>Quando a letra for aprovada, esta página ativará versos destacados, modo leitura e navegação por trecho.</span>
                <a href="#topo" className="inline-flex items-center gap-1 text-[var(--gold-soft)] hover:text-[var(--gold)]">
                  Voltar ao topo <ChevronRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
