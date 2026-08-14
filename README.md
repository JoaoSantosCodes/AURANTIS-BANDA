# AURANTIS — Site Oficial

Site oficial da banda **Aurantis** — Rock Cinematográfico Alternativo brasileiro.

> "A luz mora dentro da tempestade."

## Visão Geral

Site one-page construído com **React 19 + Vite 7 + Tailwind CSS 4**, na estética "Neon sobre Ruínas": fundo azul-noite, letreiros neon dourados, textura de estática analógica e tipografia de cartaz de show.

## Estrutura

```
client/
├── index.html          # Entry point (fontes, meta tags)
├── public/             # Favicon e robots
└── src/
    ├── App.tsx         # Rotas e tema dark
    ├── index.css       # Design tokens "Neon sobre Ruínas"
    ├── pages/Home.tsx  # Página principal (todas as seções)
    ├── components/
    │   ├── Sections.tsx      # Header, Hero, Manifesto, Philosophy, SpotifyCTA, Footer
    │   ├── Discografia.tsx   # Releases oficiais com capas do Spotify
    │   ├── Setlist.tsx       # Top 5 faixas + players embutidos
    │   └── Novidades.tsx     # Teaser "Fogos de Santelmo"
    └── lib/bandData.ts # Dados centrais (releases, tracklist, assets)
```

## Conteúdo do site

- **Hero** — letreiro neon AURANTIS em rooftop noturno
- **Manifesto em 3 atos** — O Vazio → A Tempestade → O Farol
- **Setlist** — 5 faixas mais ouvidas do Spotify + player de *MESMO SEM SINAL*
- **Discografia** — capas oficiais de todas as releases (embeds do Spotify)
- **Novidades** — teaser do próximo lançamento "Fogos de Santelmo"

## Desenvolvimento local

```bash
pnpm install
pnpm run dev
```

O site fica disponível em `http://localhost:5173`.

## Deploy no Vercel

O projeto já está configurado para o Vercel (`vercel.json` no repositório):

**Opção A — Dashboard (recomendado):**
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório `AURANTIS-BANDA`
3. O Vercel detecta o `vercel.json` e configura automaticamente:
   - **Build Command:** `pnpm vercel-build` (script que roda o Vite com a config limpa `vite.config.vercel.ts`, sem plugins do ambiente Manus)
   - **Output Directory:** `client/dist`
4. Clique em **Deploy**

**Opção B — CLI:**
```bash
pnpm install -g vercel
vercel        # primeira vez: segue o wizard
vercel --prod # deploy de produção
```

> Obs.: o `outputDirectory` aponta para `client/dist` porque o build do Vite é configurado no `vite.config.ts` para emitir em `client/dist`, não na raiz.

## Tecnologias

- React 19 + Vite 7
- Tailwind CSS 4 + shadcn/ui
- Wouter (rotas)
- Framer Motion / animações CSS
- Embeds oficiais do Spotify

## Nota

As imagens do site (hero, logos, capas de álbum) são servidas pelo Manus Storage em produção no preview. Ao fazer deploy no Vercel, baixe as imagens de `client/src/lib/bandData.ts` e sirva-as localmente (ex.: `client/public/images/`) se desejar independência total do armazenamento externo.
