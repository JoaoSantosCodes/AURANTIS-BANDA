# AURANTIS — Site Oficial

Site oficial da banda **Aurantis** — Rock Cinematográfico Alternativo brasileiro.

> "A luz mora dentro da tempestade."

## Visão Geral

Site one-page construído com **React 19 + Vite 7 + Tailwind CSS 4**, na estética **Neon sobre Ruínas**: azul-noite, letreiros em ouro gasto, textura de estática analógica e tipografia de cartaz industrial. A narrativa pública trabalha a **Arquitetura do Renascimento**: construir a partir da ruína, atravessar a tensão e manter o horizonte aberto.

> A luz mora dentro da tempestade — e o sinal continua sem antecipar o que ainda não foi aprovado.

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
    │   ├── Novidades.tsx     # Estado seguro do próximo ato, sem anúncio prematuro
    │   └── SignalPlayer.tsx  # Player “O Sinal” com Spotify iFrame API
    └── lib/bandData.ts # Dados centrais (releases, tracklist, assets)
```

## Conteúdo do site

- **Hero e manifesto** — Arquitetura do Renascimento em três movimentos: O Vazio → A Tempestade → O Farol.
- **Escuta** — setlist, links de faixa e player “O Sinal” baseado no embed oficial do Spotify.
- **Discografia** — catálogo oficial com capas e links diretos para escuta.
- **Letras interativas** — rota `/letras` preparada para versões aprovadas, sem exibir versos não validados.
- **Próximo ato** — estado editorial de construção; títulos, datas, letras e assets não aprovados não são publicados.

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

Os dados de catálogo e os links do Spotify ficam centralizados em `client/src/lib/bandData.ts`. Antes de adicionar qualquer lançamento, valide título, data, capa, link e copy. Letras sincronizadas só podem ser ativadas quando houver letra final aprovada, áudio master autorizado para o site e timecodes revisados.
