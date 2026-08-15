---
tipo: qa-publico
projeto: Aurantis
data: 2026-08-15
escopo: links, âncoras e responsividade
resultado: aprovado
---

# Revalidação pública — links e responsividade

A página inicial pública foi verificada com o título esperado, as âncoras `#banda`, `#discografia`, `#setlist` e `#novidades` presentes, a rota de letras disponível e pelo menos um destino direto de faixa no Spotify identificado na interface.

| Destino | Resultado HTTP |
|---|---:|
| Página inicial | 200 |
| Rota `/letras` | 200 |
| Perfil oficial da Aurantis no Spotify | 200 |
| Faixa focal de O Sinal no Spotify | 200 |

Na moldura testada, `scrollWidth` e `clientWidth` foram iguais, sem sinal de transbordamento horizontal. A verificação móvel anterior permanece como referência visual; a evolução desta rodada deve manter esse critério em 375 px.

## Repetição da verificação — 00:26 UTC

A nova passagem confirmou as cinco âncoras essenciais (`#topo`, `#banda`, `#discografia`, `#setlist` e `#novidades`), as duas entradas da rota de letras (`/letras` e `/letras?faixa=mesmo-sem-sinal`) e 22 links de Spotify presentes na página. No viewport desktop de 1280 px, não houve transbordamento horizontal (`1265 px` de conteúdo para `1280 px` de viewport).

| Destino rechecado | Resultado HTTP |
|---|---:|
| Página inicial | 200 |
| Rota de letras focal | 200 |
| Imagem hero | 200 |
| Perfil oficial no Spotify | 200 |
| Faixa focal de O Sinal no Spotify | 200 |

Uma captura nova em `375 × 812 px` preservou o título do hero em linhas completas, sem corte lateral. A composição inicial continua legível, com marca, ação de Spotify e as duas CTAs visíveis no primeiro quadro. A auditoria não encontrou link essencial quebrado nem problema de responsividade no escopo testado.
