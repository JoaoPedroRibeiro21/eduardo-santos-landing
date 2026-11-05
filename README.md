# Eduardo Santos — Advocacia

Landing page de página única para o advogado Eduardo Santos (Itapoá/SC), com atuação em
família, inventário, imobiliário, consumidor e criminal.

A direção visual parte do site de referência `heitorleal.adv.br` — paleta escura com
dourado, tipografia editorial e ritmo alternado entre faixas claras e escuras —, mas a
composição foi redesenhada para ter identidade própria: retrato em arco com placa de
inscrição, faixa de credenciais em vez de contadores, áreas de atuação em índice
editorial numerado, diferenciais em grade de linhas e contato em duas colunas.

Nenhum texto, logotipo ou imagem do site de referência foi reutilizado.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (tokens em `src/app/globals.css`)
- Motion (`motion/react`) para animações
- Lucide React para ícones
- `next/image` para otimização das fotografias
- Fontes locais (Clash Display e Satoshi) + Google Fonts via `next/font`
  (Playfair Display e Cormorant Garamond)

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Build de produção:

```bash
npm run build
npm start
```

## Estrutura

```
src/
  app/
    layout.tsx          Metadata, SEO, Open Graph, JSON-LD, fontes
    page.tsx            Composição das seções
    globals.css         Tokens de cor/tipografia e utilitários
  components/
    Header.tsx          Nav fixa + menu mobile + seção ativa
    Hero.tsx            Primeira dobra com retrato em arco
    CredentialBand.tsx  Faixa de credenciais (OAB, áreas, base, modalidade)
    About.tsx           Sobre o advogado com citação e destaques
    PracticeAreas.tsx   Índice editorial das sete áreas
    Differentials.tsx   Diferenciais em grade de linhas
    Process.tsx         Etapas do atendimento
    Contact.tsx         Contato em duas colunas + opções de WhatsApp
    Footer.tsx          Rodapé
    WhatsAppFloat.tsx   Botão flutuante (aparece após a primeira dobra)
  content/site.ts       Todo o conteúdo, contatos e textos editáveis
  fonts/                Clash Display e Satoshi (woff2)
public/
  images/               Fotografias + imagem Open Graph
scripts/
  generate-og.mjs       Gera a imagem de compartilhamento 1200×630
```

## Conteúdo e contato

- WhatsApp: `(47) 98894-2904` → `https://wa.me/5547988942904`
- Mensagem padrão: “Olá, encontrei seu site e gostaria de obter informações sobre
  atendimento jurídico.”
- Inscrição: `OAB/SC 78.883`
- Base: Itapoá/SC
- Áreas: divórcio, guarda, pensão alimentícia, inventário e sucessões, direito
  imobiliário, direito do consumidor e direito criminal.

## Pendências antes de publicar

1. **Endereço completo e horário de atendimento** — não foram informados e por isso não
   aparecem no rodapé.
2. **Atendimento on-line** — a modalidade foi incluída no texto a pedido do cliente;
   confirme se deve permanecer.
3. **Domínio** — defina `NEXT_PUBLIC_SITE_URL` no deploy (veja `.env.example`) para gerar
   canonical, Open Graph e JSON-LD absolutos. Sem essa variável, o site usa o domínio
   reservado `eduardosantos.example` apenas como placeholder.
4. **Redes sociais** — não há perfis informados; nenhum link fictício foi adicionado.
5. **Fotografias** — as imagens em `public/images` vieram do material fornecido. Confirme
   a autorização de uso.

## Conformidade

Os textos evitam promessas de resultado, valores, sensacionalismo e depoimentos, seguindo
as diretrizes de publicidade da advocacia (Provimento 205/2021 da OAB). O rodapé inclui
aviso de caráter informativo.
