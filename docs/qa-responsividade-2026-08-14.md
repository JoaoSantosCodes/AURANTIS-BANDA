# Auditoria de links e responsividade — 14 de agosto de 2026

## Escopo

Foram revisadas a página inicial pública em `1280 × 900` e `375 × 812`, além dos destinos internos e externos presentes na navegação principal.

## Achados visuais

| Área | Desktop | Mobile | Ação necessária |
|---|---|---|---|
| Hero — título | A composição se mantém dentro da largura. | A palavra “TEMPESTADE” extrapola a lateral direita e fica cortada. | Ajustar tamanho, quebra e espaçamento em telas estreitas. |
| Hero — texto de apoio e CTAs | Permanecem presentes, mas o contraste sobre o azul-noite precisa de reforço. | O texto de apoio e as CTAs ficam pouco legíveis na captura. | Reforçar contraste do texto e dos controles sem alterar a direção visual. |
| Navegação | Links visíveis e organizados. | A navegação reduz para marca e Spotify, evitando compressão do menu. | Manter o comportamento atual. |

## Links mapeados

As âncoras internas relevantes apontam para `#topo`, `#banda`, `#discografia`, `#setlist` e `#novidades`; a rota `/letras` e os links de artista, álbum e faixas do Spotify também estão presentes. A verificação funcional dos destinos e uma nova captura devem ocorrer após a correção do hero.

## Validação posterior à correção

O hero foi ajustado para reduzir o letreiro em telas estreitas e reforçar a leitura do texto de apoio e da CTA secundária. A nova captura em `375 × 812` confirma que “TEMPESTADE” permanece dentro da largura visível.

| Destino | Resultado |
|---|---|
| `/` | HTTP 200 |
| `/letras` | HTTP 200 |
| `/images/hero-rooftop.png` | HTTP 200 |
| `/images/logo-mast.png` | HTTP 200 |
| Perfil oficial da Aurantis no Spotify | HTTP 200 |
| Faixa `MESMO SEM SINAL` no Spotify | HTTP 200 |

Os links e assets essenciais verificados não apresentam quebra. A publicação da correção no endereço público dependia do envio do commit ao repositório e do redeploy conectado ao Vercel.

As cinco âncoras da navegação principal — `#topo`, `#banda`, `#discografia`, `#setlist` e `#novidades` — também foram confirmadas no DOM da página inicial.

## Confirmação pública

A versão pública em `https://aurantis-banda-coral.vercel.app/` foi aberta após o envio do commit `8d450b7` e já exibe o hero com a nova frase editorial. A inspeção no navegador confirma a presença de navegação, CTAs, setlist, player O Sinal, rota de letras e links oficiais do Spotify. Uma captura headless isolada em largura mobile não carregou o documento e gerou uma imagem vazia; ela não foi tratada como falha visual. A validação mobile de conteúdo foi realizada na prévia local, onde o letreiro corrigido permaneceu dentro de `375 × 812`.
