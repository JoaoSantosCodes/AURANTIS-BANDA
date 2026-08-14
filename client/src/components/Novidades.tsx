/**
 * Estilo: "Neon sobre Ruínas" — teaser da próxima composição como um
 * "cartaz de show em construção": neon aceso sobre andaime,
 * estática de rádio, glow dourado, tech-meta.
 */
export function Novidades() {
  return (
    <section id="novidades" className="relative py-28 md:py-36 overflow-hidden border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="tech-meta reveal mb-4 text-[var(--gold)]">
              Próximo Ato · Em Construção
            </p>
            <h2 className="neon-title reveal text-4xl md:text-6xl leading-tight">
              Fogos de
              <br />
              Santelmo
            </h2>
            <div className="iron-beam reveal my-8" />
            <p className="reveal text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
              Fogos de Santelmo é o fenômeno elétrico que incendeia os mastros
              dos navios no auge da tempestade — uma luz que os marinheiros
              antigos tomavam por sinal dos santos. A luz que só aparece quando
              o caos está completo.
            </p>
            <p className="reveal mt-6 text-foreground/90 font-light leading-relaxed max-w-xl">
              É o terceiro movimento da trilogia: da luz apagada de{" "}
              <em>Static Saints</em> e do sinal que resiste no silêncio de{" "}
              <em>Santos Estáticos</em>, para a luz que nasce{" "}
              <strong style={{ color: "var(--gold-soft)" }}>
                dentro da tempestade
              </strong>
              .
            </p>
            <blockquote className="reveal mt-10 border-l-2 border-[var(--gold)] pl-6 py-1">
              <p className="neon-title text-2xl md:text-3xl leading-snug">
                “Eu vi a luz — e ela morava
                <br />
                dentro da tempestade.”
              </p>
            </blockquote>
          </div>

          <div className="reveal relative">
            <div className="border border-[var(--gold)]/40 bg-card p-8 md:p-10 text-center">
              <p className="tech-meta text-[var(--gold)] mb-6">
                Em Breve · Nova Era
              </p>
              {/* Estática de rádio visual */}
              <div className="relative h-40 flex items-center justify-center overflow-hidden bg-background mb-8 border border-border">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, oklch(0.62 0.04 250 / 25%) 3px, transparent 4px)",
                  }}
                />
                <p className="relative tech-meta text-[var(--steel-light)]">
                  ● Captação de sinal...
                </p>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                A produção está em andamento. Wall of Sound, cordas
                orquestrais e o grito catártico que a tempestade pede.
              </p>
              <a
                href="https://open.spotify.com/artist/719ElQJLLJysKblHHEoWSM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block tech-meta px-6 py-3 border border-[var(--gold)]/60 text-[var(--gold-soft)] neon-glow hover:bg-[var(--gold)]/10 transition-colors duration-200"
              >
                Ser Avisado no Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
