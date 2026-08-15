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
