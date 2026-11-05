# Eduardo dos Santos — Advocacia

Landing page de página única para o advogado Eduardo dos Santos (Itapoá/SC), com atuação em
família, inventário, imobiliário, consumidor e criminal.

A paleta escura com dourado e a tipografia editorial vieram do site de referência
`heitorleal.adv.br`, mas a composição é própria: cabeçalho escuro, retrato em faixa
sangrada, credenciais em linha, sobre em duas colunas com citação de página inteira,
áreas em índice de duas colunas (sem cartões), faixa creme para os diferenciais,
atendimento em linha do tempo vertical, contato em grade ampla e rodapé escuro.

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
    Hero.tsx            Primeira dobra com retrato em faixa sangrada
    CredentialBand.tsx  Faixa de credenciais (OAB, áreas, base, modalidade)
    About.tsx           Sobre em duas colunas + citação de largura total
    PracticeAreas.tsx   Índice de duas colunas das sete áreas
    Differentials.tsx   Faixa creme com os compromissos do atendimento
    Process.tsx         Etapas em linha do tempo vertical
    Contact.tsx         Contato em grade ampla + número em destaque
    Footer.tsx          Rodapé escuro
    Logo.tsx            Assinatura tipográfica
    Reveal.tsx          Revelação por scroll (respeita reduced motion)
    WhatsAppIcon.tsx    Ícone da marca WhatsApp
    WhatsAppFloat.tsx   Botão flutuante (aparece após a primeira dobra)
  content/site.ts       Todo o conteúdo, contatos e textos editáveis
  fonts/                Clash Display e Satoshi (woff2)
public/
  images/               Fotografias + imagem Open Graph
scripts/
  generate-og.mjs       Gera a imagem de compartilhamento 1200×630
```

A imagem de compartilhamento é regenerada com `npm run og` (requer `sharp`, já usado
pelo Next no ambiente local).

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
