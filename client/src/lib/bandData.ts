/**
 * AURANTIS — Dados oficiais da banda (fonte: perfil Spotify oficial)
 * Estilo do site: "Neon sobre Ruínas" — azul-noite + ouro neon.
 * Todos os IDs/URLs reais do Spotify para embeds e links.
 */

export const ARTIST = {
  name: "AURANTIS",
  tagline: "Para quem sente demais.",
  spotifyUrl: "https://open.spotify.com/artist/719ElQJLLJysKblHHEoWSM",
  artistPick: "Para quem sente demais.",
};

export interface Release {
  title: string;
  type: "Album" | "Single";
  year: number;
  albumId: string;
  coverUrl: string;
  description: string;
  featured?: boolean;
}

export interface Track {
  title: string;
  duration: string;
  trackId: string;
  albumTitle: string;
  number?: number;
}

export const RELEASES: Release[] = [
  {
    title: "MESMO SEM SINAL",
    type: "Single",
    year: 2026,
    albumId: "151drFn5YBWuw8sMkgo9nJ",
    coverUrl: "/images/mesmo-sem-sinal.jpeg",
    description:
      "O lançamento que define a era. Como um rádio perdido no escuro, tentando alguém pra escutar — a luz que resiste mesmo quando o mundo apaga as estrelas.",
    featured: true,
  },
  {
    title: "Ecos do Amanhã",
    type: "Album",
    year: 2025,
    albumId: "7aHvd0sMlgLKsoe3W6Bk7Z",
    coverUrl: "/images/ecos-do-amanha.jpeg",
    description:
      "O álbum de estreia — 14 faixas sobre o amanhã incerto, porém necessário. A trilha sonora para encarar as tempestades da vida.",
  },
  {
    title: "A Luz da Cruz",
    type: "Single",
    year: 2026,
    albumId: "3WhKCCvQ9qBGBQNHsL4eqt",
    coverUrl: "/images/a-luz-da-cruz.jpeg",
    description:
      "Fé visceral sobre o peso do símbolo. A força que sustenta quando a dúvida chega.",
  },
  {
    title: "Projetos do Alto",
    type: "Single",
    year: 2026,
    albumId: "4MGEeVjBErh67usOzDbk5h",
    coverUrl: "/images/projetos-do-alto.jpeg",
    description:
      "A ambição vertical — a ponte entre o Céu e o Chão que dá nome à filosofia da banda.",
  },
  {
    title: "O Som da Vida",
    type: "Single",
    year: 2026,
    albumId: "5jLlwTmLkv5Sqqoo0P8UkA",
    coverUrl: "/images/o-som-da-vida.jpeg",
    description:
      "Afirmação de existência. Recomeçar não é esquecer — é construir a partir da ruína.",
  },
];

export const ALBUM_TRACKLIST: Track[] = [
  { title: "Sombras que Ficam", duration: "4:13", trackId: "7h1jUueMta4mjCfTsmQtgf", albumTitle: "Ecos do Amanhã", number: 1 },
  { title: "Correnteza", duration: "4:34", trackId: "03etc1DZf1XPlAvvL6AbP8", albumTitle: "Ecos do Amanhã", number: 2 },
  { title: "Contra o Tempo", duration: "3:39", trackId: "4ubEcbjpFjnOH1loMhkzPo", albumTitle: "Ecos do Amanhã", number: 3 },
  { title: "Último Grito", duration: "4:14", trackId: "2fiDbPbRh3bSCWhQnrmEhe", albumTitle: "Ecos do Amanhã", number: 4 },
  { title: "Viajante", duration: "4:48", trackId: "6jTgwOPn2w2QIwvubFHNak", albumTitle: "Ecos do Amanhã", number: 5 },
  { title: "Entre o Céu e o Chão", duration: "4:05", trackId: "4oNHMgvAGA5zjZl4UFaNFH", albumTitle: "Ecos do Amanhã", number: 6 },
  { title: "Silêncio e Chamas", duration: "4:04", trackId: "6H0OpxhR8u1hoGsm96GlNi", albumTitle: "Ecos do Amanhã", number: 7 },
  { title: "Horizonte em Chamas", duration: "3:52", trackId: "5Pev52gd7GBBDiCAj2yepx", albumTitle: "Ecos do Amanhã", number: 8 },
  { title: "A Luz da Cruz", duration: "3:41", trackId: "262y0Y0tlHzcYaw6UJmAUE", albumTitle: "A Luz da Cruz" },
  { title: "Projetos do Alto", duration: "3:26", trackId: "40vXEHzxyWg4Y9fK4N7dNZ", albumTitle: "Projetos do Alto" },
  { title: "O Som da Vida", duration: "3:19", trackId: "75LUic2q4K5QBeGHAq49mf", albumTitle: "O Som da Vida" },
  { title: "MESMO SEM SINAL", duration: "4:44", trackId: "7CCthOC76Vihl2aRICkFdI", albumTitle: "MESMO SEM SINAL" },
];

export const PLAYLISTS = [
  {
    title: "Aurantis",
    id: "7jcf157UT3SBjstqJ4zji7",
    description: "O som que dita o ritmo das ruas quando o sol se põe.",
  },
  {
    title: "Aurantis — Ecos do Amanhã",
    id: "27TbQxn0Y4Yul2g5WFmFhc",
    description: "Onde o som encontra a imensidão.",
  },
  {
    title: "Aurantis — Participações",
    id: "0VwFN3jsCvETghsfhoPwCM",
    description: "O universo Aurantis expandido.",
  },
];

export const ASSETS = {
  hero: "/images/hero-rooftop.png",
  logo: "/images/logo-mast.png",
  ruinHall: "/images/ruin-hall.png",
  discographyBg: "/images/discography-bg.png",
  setlistStage: "/images/setlist-stage.png",
  coverSantosEstaticos: "/images/santos-estaticos.jpeg",
  ruinSilhouette: "/images/ruin-silhouette.jpeg",
  emptyRoom: "/images/empty-room.jpeg",
  artistPhoto: "/images/artist-photo.jpeg",
};
