# Homologação de eventos — O Sinal

> **Estado atual:** o site público não possui analytics instalado. Os eventos abaixo formam o contrato de implementação e devem ser validados em homologação antes de qualquer ativação em produção.

## Limite de medição

O player usa o embed oficial do Spotify. Por isso, o site pode medir apenas ações realizadas na interface própria da Aurantis — seleção de faixa, abertura de letras, saída para o Spotify, avanço para a cartografia e exposição da seção. **Não** deve registrar play, pause, seek, stream ou tempo de audição: esses comportamentos acontecem dentro do iframe do Spotify e não são evidências fornecidas pela página.

| Evento canônico | Gatilho na interface | Propriedades permitidas | Não representa |
|---|---|---|---|
| `signal_track_select` | Clique em uma faixa de “Selecionar transmissão” | `track_id`, `track_title`, `album_title`, `duration`, `track_position` e `previous_track_id` opcional | Reprodução confirmada |
| `signal_lyrics_open` | Clique em “Ver letras” | `track_id`, `track_title`, `destination: "lyrics"` | Leitura de letra ou sincronização |
| `signal_spotify_open` | Clique em “Abrir no Spotify” | `track_id`, `track_title`, `destination: "spotify"` | Play, stream ou follow |
| `signal_cartography_open` | Clique em “Explorar toda a discografia” | `track_id`, `track_title`, `destination: "discography"` | Escuta de álbum |
| `signal_section_view` | A seção O Sinal cruza o limiar definido uma vez por sessão | `section: "o_sinal"`, `threshold: "50"` | Interesse qualificado ou audição |

Todos os eventos devem excluir dados pessoais, endereços de e-mail, nomes, IP, IDs de conta, parâmetros de URL pessoais e conteúdo lírico não aprovado.

## Pré-requisitos de homologação

Crie uma implantação de pré-produção separada da página pública. Nela, a ferramenta escolhida deve apontar para a propriedade de homologação ou registrar eventos com uma marca inequívoca de ambiente, por exemplo `environment: "staging"`. O aviso e a preferência de privacidade devem espelhar a experiência planejada para produção; se a coleta depender de consentimento, não teste eventos analíticos antes da aceitação correspondente.

Antes do roteiro, abra DevTools com a aba **Network** ativa, marque **Preserve log** e filtre pelo domínio ou endpoint do fornecedor. Use uma janela anônima para cada execução, evitando eventos duplicados por estado anterior.

## Roteiro de teste

| Cenário | Ação | Resultado esperado |
|---|---|---|
| Entrada na seção | Navegar até O Sinal até o limiar definido | Um único `signal_section_view` sem dados pessoais |
| Troca de transmissão | Selecionar uma faixa diferente | Um `signal_track_select` com a faixa correta; o iframe troca de fonte |
| Acesso às letras | Clicar em “Ver letras” | Um `signal_lyrics_open`; a rota abre com o mesmo parâmetro `faixa` |
| Saída para Spotify | Clicar em “Abrir no Spotify” | Um `signal_spotify_open`; o link abre a faixa correta em nova aba |
| Cartografia | Clicar em “Explorar toda a discografia” | Um `signal_cartography_open`; a página chega a `#discografia` |
| Falha do fornecedor | Bloquear o endpoint do analytics e repetir a jornada | Todos os links, troca de faixa e navegação continuam funcionando |
| Preferência de privacidade | Recusar e, em sessão nova, aceitar a coleta quando aplicável | O comportamento respeita a preferência definida e não duplica eventos |

## Critérios de aceite

Considere a homologação aprovada quando cada ação gera no máximo uma ocorrência esperada, as propriedades correspondem ao contexto visível na página e nenhuma carga expõe dados pessoais. O site precisa continuar utilizável com o analytics bloqueado, com JavaScript de terceiros indisponível e com a preferência de coleta recusada. Registre data, versão da implantação, navegador, resultado e responsável pelo teste no vault ou documento operacional da banda.

## Referências

1. [Vercel — Custom Events](https://vercel.com/docs/analytics/custom-events)
2. [Plausible — Custom Event Goals](https://plausible.io/docs/custom-event-goals)
3. [Lei nº 13.709/2018 — LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)

