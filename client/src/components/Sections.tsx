/**
 * Estilo: "Neon sobre Ruínas" — letreiros Oswald, vigas de ferro,
 * gold glow em hover, metadados mono uppercase, entradas reveal on scroll.
 */
import { useEffect, useState } from "react";
import { ARTIST, ASSETS } from "@/lib/bandData";
import { toast } from "sonner";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "A Banda", href: "#banda" },
    { label: "Discografia", href: "#discografia" },
    { label: "Setlist", href: "#setlist" },
    { label: "Letras", href: "/letras" },
    { label: "Novidades", href: "#novidades" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#topo" className="flex items-center gap-3">
          <img
            src={ASSETS.logo}
            alt="Aurantis — mastro com fogo de Santelmo"
            className="h-10 w-10 object-contain"
          />
          <span
            className="neon-title text-xl md:text-2xl tracking-[0.08em]"
            style={{ color: "var(--gold-soft)" }}
          >
            Aurantis
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="tech-meta neon-glow hover:text-[var(--gold-soft)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={ARTIST.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-meta px-4 py-2 border border-[var(--gold)]/60 text-[var(--gold-soft)] neon-glow hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]"
          >
            Ouvir no Spotify
          </a>
        </nav>
        <a
          href={ARTIST.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden tech-meta text-[var(--gold-soft)]"
        >
          Spotify
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ASSETS.hero}
          alt="Rooftop noturno com letreiro neon AURANTIS sobre a cidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 pb-24 md:pb-32 pt-32">
        <div className="max-w-2xl">
          <p className="tech-meta reveal mb-6 text-[var(--gold)]">
            Rock Cinematográfico Alternativo · Brasil
          </p>
          <h1 className="neon-title neon-flicker text-6xl sm:text-7xl lg:text-8xl leading-[0.95] reveal">
            A luz mora
            <br />
            dentro da
            <br />
            <span style={{ color: "var(--gold)" }}>tempestade</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg reveal font-light leading-relaxed">
            Construímos esperança a partir das ruínas — entre o Céu e o Chão,
            com guitarras de estádio, cordas orquestrais e a voz rasgada de quem
            atravessou o escuro.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 reveal">
            <a
              href="#setlist"
              className="tech-meta px-6 py-3 bg-[var(--gold)] text-primary-foreground font-semibold hover:bg-[var(--gold-soft)] neon-glow active:scale-[0.97] transition-transform duration-150"
            >
              Ouvir o Setlist
            </a>
            <a
              href="#banda"
              className="tech-meta px-6 py-3 border border-[var(--steel)] text-foreground hover:border-[var(--gold)]/70 hover:text-[var(--gold-soft)] neon-glow active:scale-[0.97] transition-transform duration-150"
            >
              Conheça a Banda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Manifesto() {
  const chapters = [
    {
      numeral: "I",
      title: "O Vazio",
      text: "Os versos nascem sussurrados — guitarras limpas banhadas em shimmer reverb, delay longo e pads que respiram como o ar antes da tempestade. É a confissão, o quarto escuro, o rádio perdido no breu.",
    },
    {
      numeral: "II",
      title: "A Tempestade",
      text: "O pré-refrão aperta o peito: bateria crescente, urgência percussiva, a tensão acumulando como eletricidade estática no mastro de um navio prestes a afundar.",
    },
    {
      numeral: "III",
      title: "O Farol",
      text: "O refrão explode em Wall of Sound — guitarras high-gain massivas, bateria de estádio e cordas orquestrais. É a catarse: a dor vira alicerce, e a ruína vira templo.",
    },
  ];

  return (
    <section id="banda" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="tech-meta reveal mb-4 text-[var(--gold)]">
              A Filosofia
            </p>
            <h2 className="neon-title text-4xl md:text-5xl leading-tight reveal">
              Arquitetura do
              <br />
              Renascimento
            </h2>
            <div className="iron-beam my-8 reveal" />
            <p className="text-muted-foreground text-lg leading-relaxed reveal font-light">
              A nossa música é o ato de construir a partir das ruínas. A dor
              nunca é o fim — é o alicerce. O caos é o palco onde a alma
              aprende a florescer. Navegamos entre o Céu e o Chão, aceitando as
              sombras como parte do ser.
            </p>
            <p className="mt-6 tech-meta reveal text-[var(--gold-soft)]">
              Para quem sente demais.
            </p>
          </div>

          <div className="space-y-14">
            {chapters.map((c) => (
              <div key={c.numeral} className="reveal flex gap-6 md:gap-8">
                <span
                  className="neon-title text-5xl md:text-6xl shrink-0 leading-none"
                  style={{ color: "var(--gold)" }}
                >
                  {c.numeral}
                </span>
                <div>
                  <h3 className="neon-title text-2xl md:text-3xl mb-3">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  const elements = [
    {
      name: "O Fogo",
      desc: "Consuma e guie. O fogo que arde na ruína é o mesmo que ilumina o caminho.",
      img: ASSETS.ruinHall,
    },
    {
      name: "A Água",
      desc: "Limpa e arrasta. A correnteza que leva o que pesava — sem apagar quem você é.",
      img: ASSETS.emptyRoom,
    },
    {
      name: "O Horizonte",
      desc: "O amanhã incerto, porém necessário. A linha onde o céu toca a esperança.",
      img: ASSETS.ruinSilhouette,
    },
  ];

  return (
    <section className="relative py-8 md:py-16">
      <div className="container">
        <div className="iron-beam mb-16 reveal" />
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {elements.map((e, i) => (
            <figure key={e.name} className="reveal group relative bg-background overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={e.img}
                  alt={e.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <span className="tech-meta block mb-1 text-[var(--gold)]">
                  Elemento {["01", "02", "03"][i]}
                </span>
                <h3 className="neon-title text-xl md:text-2xl">{e.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 font-light">
                  {e.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpotifyCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ASSETS.setlistStage}
          alt="Palco de estádio vazio com spot dourado"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div className="container relative z-10 text-center">
        <p className="tech-meta reveal mb-4 text-[var(--gold)]">
          O Sinal Ainda Existe
        </p>
        <h2 className="neon-title text-4xl md:text-6xl reveal">
          Mesmo sem sinal,
          <br />
          ainda há música
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto reveal font-light">
          Siga a Aurantis no Spotify e seja o primeiro a saber dos próximos
          lançamentos. O próximo movimento da trilogia está sendo construído
          agora.
        </p>
        <a
          href={ARTIST.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 tech-meta px-8 py-4 bg-[var(--gold)] text-primary-foreground font-semibold hover:bg-[var(--gold-soft)] neon-glow active:scale-[0.97] transition-transform duration-150"
        >
          Seguir no Spotify
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="" className="h-9 w-9 object-contain" />
            <div>
              <p className="neon-title text-lg" style={{ color: "var(--gold-soft)" }}>
                Aurantis
              </p>
              <p className="tech-meta text-xs mt-1">
                Construindo esperança a partir das ruínas
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={ARTIST.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-meta neon-glow hover:text-[var(--gold-soft)]"
            >
              Spotify Oficial
            </a>
            <button
              onClick={() =>
                toast("Redes sociais da banda em breve.", {
                  description: "O letreiro será aceso em todas as plataformas.",
                })
              }
              className="tech-meta neon-glow hover:text-[var(--gold-soft)] text-left"
            >
              Instagram
            </button>
            <button
              onClick={() =>
                toast("Contato para shows e imprensa em breve.", {
                  description: "Sinais sendo captados. Aguarde.",
                })
              }
              className="tech-meta neon-glow hover:text-[var(--gold-soft)] text-left"
            >
              Contato / Shows
            </button>
          </div>
        </div>
        <div className="iron-beam my-8" />
        <p className="tech-meta text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aurantis · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
