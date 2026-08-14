/**
 * Estilo: "Neon sobre Ruínas" — O Sinal é um console de rádio industrial;
 * fundo azul-noite, ouro gasto e tipografia técnica para manter a escuta como ritual.
 */
import { AudioLines, Captions, ExternalLink, Radio, Sparkles } from "lucide-react";
import { useState } from "react";
import { ALBUM_TRACKLIST, type Track, trackSlug } from "@/lib/bandData";

function TrackSelector({
  track,
  selected,
  onSelect,
}: {
  track: Track;
  selected: boolean;
  onSelect: (track: Track) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(track)}
      aria-current={selected ? "true" : undefined}
      className={`group w-full border-t border-border px-3 py-3 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${
        selected ? "bg-[var(--gold)]/10" : "hover:bg-card/60"
      }`}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="min-w-0">
          <span
            className={`block truncate font-medium ${
              selected ? "text-[var(--gold-soft)]" : "text-foreground"
            }`}
          >
            {track.title}
          </span>
          <span className="tech-meta mt-1 block text-[10px] text-muted-foreground">
            {track.albumTitle}
          </span>
        </span>
        <span className="tech-meta shrink-0 text-[10px] text-muted-foreground">
          {track.duration}
        </span>
      </span>
    </button>
  );
}

export function SignalPlayer() {
  const defaultTrack =
    ALBUM_TRACKLIST.find((track) => track.title === "MESMO SEM SINAL") ??
    ALBUM_TRACKLIST[0];
  const [activeTrack, setActiveTrack] = useState<Track>(defaultTrack);
  const visibleTracks = ALBUM_TRACKLIST.slice(0, 8);

  return (
    <section
      className="reveal border border-[var(--gold)]/55 bg-card/70 p-4 md:p-5"
      aria-label="O Sinal — player personalizado da Aurantis"
    >
      <div className="flex items-start justify-between gap-5 border-b border-[var(--gold)]/25 pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center border border-[var(--gold)]/70 bg-[var(--gold)]/10 text-[var(--gold-soft)]">
            <Radio size={21} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="tech-meta text-[var(--gold)]">O Sinal</p>
            <p className="mt-1 truncate font-medium text-foreground">{activeTrack.title}</p>
          </div>
        </div>
        <span className="tech-meta shrink-0 text-[10px] text-[var(--gold-soft)]">ON AIR</span>
      </div>

      <div className="mt-4 border border-border bg-background/60 p-1">
        <iframe
          key={activeTrack.trackId}
          src={`https://open.spotify.com/embed/track/${activeTrack.trackId}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={`Player: ${activeTrack.title}`}
        />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Selecione uma faixa para trocar a transmissão. A reprodução segue pelo player oficial do Spotify.
        </p>
        <a
          href={`/letras?faixa=${trackSlug(activeTrack)}`}
          className="inline-flex items-center justify-center gap-2 border border-[var(--gold)]/65 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--gold-soft)] transition-colors duration-200 hover:bg-[var(--gold)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
        >
          <Captions size={15} aria-hidden="true" />
          Letras
        </a>
      </div>

      <div className="mt-5">
        <p className="tech-meta mb-2 text-[10px] text-muted-foreground">Selecionar transmissão</p>
        <div className="border-b border-border">
          {visibleTracks.map((track) => (
            <TrackSelector
              key={track.trackId}
              track={track}
              selected={track.trackId === activeTrack.trackId}
              onSelect={setActiveTrack}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <AudioLines size={15} className="text-[var(--gold)]" aria-hidden="true" />
          {activeTrack.duration} · {activeTrack.albumTitle}
        </span>
        <a
          href={`https://open.spotify.com/track/${activeTrack.trackId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--gold-soft)] hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
        >
          Abrir no Spotify <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
      <p className="mt-4 inline-flex items-center gap-2 text-[11px] text-muted-foreground">
        <Sparkles size={13} className="text-[var(--gold)]" aria-hidden="true" />
        Letras oficiais interativas em preparação.
      </p>
    </section>
  );
}
