/**
 * Estilo: "Neon sobre Ruínas" — setlist como cartaz de show em estádio:
 * faixas numeradas em tipografia de letreiro, iron-beam separando,
 * player Spotify da faixa-chave "MESMO SEM SINAL".
 */
import { SignalPlayer } from "@/components/SignalPlayer";
import { ALBUM_TRACKLIST } from "@/lib/bandData";

export function Setlist() {
  const top5 = ALBUM_TRACKLIST.slice(0, 5);
  const resto = ALBUM_TRACKLIST.slice(5);

  return (
    <section id="setlist" className="relative py-28 md:py-36">
      <span id="o-sinal" className="absolute -top-20" aria-hidden="true" />
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Coluna do setlist */}
          <div className="order-2 lg:order-1">
            <p className="tech-meta reveal mb-4 text-[var(--gold)]">
              Depois da transmissão
            </p>
            <h2 className="neon-title reveal text-4xl md:text-6xl leading-tight mb-10">
              As 5 que
              <br />
              fazem o
              <br />
              estádio
              <br />
              <span style={{ color: "var(--gold)" }}>tremer</span>
            </h2>

            <div className="reveal mb-8 border-y border-[var(--gold)]/25 py-4">
              <p className="tech-meta text-[var(--gold)]">Ritual de escuta</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Comece em O Sinal. Depois da transmissão, estas faixas abrem
                novos caminhos pela cartografia da Aurantis.
              </p>
            </div>

            <ol className="space-y-0 border-t border-border">
              {top5.map((t) => (
                <li key={t.trackId}>
                  <a
                    href={`https://open.spotify.com/track/${t.trackId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reveal group flex items-baseline gap-5 py-5 border-b border-border hover:bg-card/50 px-2 transition-colors duration-200"
                  >
                    <span className="neon-title text-3xl md:text-4xl text-[var(--steel)] group-hover:text-[var(--gold)] transition-colors duration-200 w-10 shrink-0">
                      {t.number}
                    </span>
                    <div className="flex-1">
                      <p className="neon-title neon-glow text-xl md:text-2xl">
                        {t.title}
                      </p>
                      <p className="tech-meta mt-1 text-xs text-muted-foreground">
                        {t.albumTitle}
                      </p>
                    </div>
                    <span className="tech-meta text-muted-foreground">
                      {t.duration}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Coluna do player personalizado + faixa completa */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-28 space-y-8">
            <SignalPlayer />

            <div className="reveal">
              <p className="tech-meta text-muted-foreground mb-4">
                Discografia Completa
              </p>
              <div className="grid sm:grid-cols-2 border border-border bg-card/40">
                {resto.map((t) => (
                  <a
                    key={t.trackId}
                    href={`https://open.spotify.com/track/${t.trackId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-3 py-4 px-5 border-b border-border hover:bg-card/70 transition-colors duration-200"
                  >
                    <span className="tech-meta text-[var(--gold)]/70 w-7 shrink-0">
                      {String(t.number ?? "").padStart(2, "0")}
                    </span>
                    <span className="font-medium text-foreground group-hover:text-[var(--gold-soft)] transition-colors duration-200">
                      {t.title}
                    </span>
                    <span className="tech-meta text-muted-foreground ml-auto">
                      {t.duration}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
