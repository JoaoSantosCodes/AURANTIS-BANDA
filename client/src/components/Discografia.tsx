/**
 * Estilo: "Neon sobre Ruínas" — catálogo como cartografia aberta da travessia;
 * capas oficiais, grade assimétrica e navegação direta para o Spotify.
 */
import { ASSETS, RELEASES } from "@/lib/bandData";

export function Discografia() {
  const [featured, ...rest] = RELEASES;

  return (
    <section id="discografia" className="relative py-28 md:py-36 overflow-hidden">
      {/* Textura de fundo */}
      <div className="absolute inset-0 opacity-[0.18]">
        <img
          src={ASSETS.discographyBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container relative z-10">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <p className="tech-meta mb-4 text-[var(--gold)]">Discografia</p>
            <h2 className="neon-title text-4xl md:text-6xl leading-tight">
              Cartografia da
              <br />
              Travessia
            </h2>
          </div>
          <p className="tech-meta hidden md:block text-right max-w-xs text-muted-foreground">
            Cada release registra uma parte da travessia: sombra, tensão,
            permanência e horizonte, sem antecipar os próximos capítulos.
          </p>
        </div>

        {/* Destaque: último lançamento */}
        <div className="reveal grid lg:grid-cols-[1.2fr_1fr] gap-8 mb-6 items-stretch">
          <div className="relative group overflow-hidden border border-[var(--gold)]/40 bg-card">
            <img
              src={featured.coverUrl}
              alt={`Capa de ${featured.title}`}
              className="w-full aspect-square lg:aspect-auto lg:h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="tech-meta text-[var(--gold)] mb-2">
                Lançamento · {featured.type} · {featured.year}
              </p>
              <h3 className="neon-title neon-glow text-3xl md:text-5xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-muted-foreground max-w-md font-light">
                {featured.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-border bg-card/60 backdrop-blur-sm">
            <div className="p-6 md:p-8 flex-1">
              <p className="tech-meta text-muted-foreground mb-4">
                Ouça agora
              </p>
              <iframe
                src="https://open.spotify.com/embed/album/151drFn5YBWuw8sMkgo9nJ?utm_source=generator&theme=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Player: MESMO SEM SINAL — Aurantis"
                className="rounded-none min-h-[300px] lg:min-h-0"
              />
            </div>
          </div>
        </div>

        {/* Grade das demais releases */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {rest.map((r, i) => (
            <a
              key={r.title}
              href={`https://open.spotify.com/album/${r.albumId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative bg-background p-5 flex flex-col gap-4 hover:bg-card transition-colors duration-200"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <img
                src={r.coverUrl}
                alt={`Capa de ${r.title}`}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div>
                <p className="tech-meta text-[var(--gold)]/70 mb-1">
                  {r.type} · {r.year}
                </p>
                <h3 className="neon-title neon-glow text-lg leading-tight">
                  {r.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 font-light leading-relaxed">
                  {r.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
