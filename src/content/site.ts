/**
 * Conteúdo central do site.
 * Tudo o que é texto, contato ou dado profissional fica aqui para facilitar a manutenção.
 *
 * PENDÊNCIAS DE PUBLICAÇÃO — procure por "PENDENTE" neste arquivo:
 * 1. Endereço completo e horário de atendimento, se forem divulgados.
 * 2. Confirmar a modalidade de atendimento on-line.
 */

export const site = {
  name: "Eduardo Santos",
  firstName: "Eduardo",
  brand: "Eduardo Santos Advocacia",
  role: "Advogado",
  specialty: "Advocacia",
  oab: "OAB/SC 78.883",
  oabShort: "OAB/SC",
  oabNumber: "78.883",
  city: "Itapoá",
  state: "SC",
  location: "Itapoá, SC",
  whatsapp: {
    number: "5547988942904",
    display: "(47) 98894-2904",
    message:
      "Olá, encontrei seu site e gostaria de obter informações sobre atendimento jurídico.",
  },
} as const;

export function whatsappLink(message_: string = site.whatsapp.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message_)}`;
}

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas", href: "#areas" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
] as const;

export const hero = {
  kicker: "Advocacia de família e cível em Itapoá, Santa Catarina.",
  titleLead: "Direito de família,",
  titleItalic: "com tempo e clareza.",
  description:
    "Divórcio, guarda e pensão conduzidos com escuta e transparência. O escritório também atua em inventário, questões imobiliárias, relações de consumo e defesa criminal.",
  attendance: "Atendimento presencial em Itapoá/SC e on-line, com hora marcada.",
  areasLine:
    "Divórcio, guarda, pensão alimentícia, inventário, imóveis, consumo e defesa criminal.",
};

export const about = {
  label: "Sobre",
  titleLead: "Antes de qualquer estratégia,",
  titleAccent: "escutar",
  titleTail: ".",
  paragraphs: [
    "Eduardo Santos é advogado inscrito na OAB/SC sob o nº 78.883. O trabalho começa pela escuta: entender o que está acontecendo, o que já foi tentado e o que precisa ser resolvido primeiro.",
    "Com atendimento em Itapoá/SC e também on-line, o escritório acompanha cada caso de perto — explicando documentos, prazos e alternativas em linguagem direta, sem prometer o que não depende de nós.",
  ],
  quote:
    "Ouvir com atenção é o primeiro passo de qualquer orientação jurídica.",
  quoteAuthor: "Eduardo Santos",
  cta: "Conversar sobre o meu caso",
};

export type PracticeArea = {
  id: string;
  title: string;
  tag: "Família" | "Patrimônio" | "Defesa";
  description: string;
  message: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "divorcio",
    title: "Divórcio",
    tag: "Família",
    description:
      "Dissolução do casamento, partilha de bens e acordos, com atenção ao que vem depois.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre divórcio.",
  },
  {
    id: "guarda",
    title: "Guarda",
    tag: "Família",
    description:
      "Guarda e convivência familiar, com foco no bem-estar da criança e do adolescente.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre guarda.",
  },
  {
    id: "pensao",
    title: "Pensão Alimentícia",
    tag: "Família",
    description:
      "Fixação, revisão e cobrança de alimentos, com clareza sobre direitos e deveres.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre pensão alimentícia.",
  },
  {
    id: "inventario",
    title: "Inventário e Sucessões",
    tag: "Patrimônio",
    description:
      "Inventário, partilha e organização da sucessão, do levantamento dos bens à conclusão.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre inventário e sucessões.",
  },
  {
    id: "imobiliario",
    title: "Direito Imobiliário",
    tag: "Patrimônio",
    description:
      "Compra, venda, locação e regularização de imóveis, com segurança em cada assinatura.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre direito imobiliário.",
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    tag: "Defesa",
    description:
      "Cobranças indevidas, vícios de produto e revisão de contratos nas relações de consumo.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre direito do consumidor.",
  },
  {
    id: "criminal",
    title: "Direito Criminal",
    tag: "Defesa",
    description:
      "Defesa criminal, acompanhamento de inquéritos e orientação em cada etapa do procedimento.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre direito criminal.",
  },
];

export const quoteSection = {
  quote: about.quote,
  author: about.quoteAuthor,
  role: "Advogado — OAB/SC 78.883",
};

export const processSection = {
  label: "Atendimento",
  title: "Como o atendimento acontece.",
  description:
    "Um caminho simples, do primeiro contato ao acompanhamento — com retorno em cada etapa.",
  steps: [
    {
      title: "Primeiro contato",
      description:
        "Você fala pelo WhatsApp e conta o que está acontecendo, no seu tempo.",
    },
    {
      title: "Análise do caso",
      description:
        "São avaliados os documentos e o contexto de cada situação.",
    },
    {
      title: "Orientação",
      description:
        "As possibilidades jurídicas são explicadas com clareza, sem termos desnecessários.",
    },
    {
      title: "Estratégia",
      description:
        "Definimos, em conjunto, o caminho adequado ao seu caso.",
    },
    {
      title: "Acompanhamento",
      description:
        "Você é informado sobre o andamento e os próximos passos.",
    },
  ],
};

export const contact = {
  label: "Contato",
  title: "Me conte o que está acontecendo.",
  description:
    "Escolha o assunto mais próximo da sua situação e fale diretamente pelo WhatsApp. Se preferir, o atendimento presencial acontece em Itapoá/SC, com hora marcada.",
  options: [
    {
      label: "Quero agendar uma conversa",
      message:
        "Olá, encontrei seu site e gostaria de agendar uma conversa.",
    },
    {
      label: "Divórcio, guarda ou pensão",
      message:
        "Olá, encontrei seu site e gostaria de orientação sobre direito de família.",
    },
    {
      label: "Inventário e sucessões",
      message:
        "Olá, encontrei seu site e gostaria de orientação sobre inventário.",
    },
    {
      label: "Questões imobiliárias",
      message:
        "Olá, encontrei seu site e gostaria de orientação sobre direito imobiliário.",
    },
    {
      label: "Direito do consumidor",
      message:
        "Olá, encontrei seu site e gostaria de orientação sobre direito do consumidor.",
    },
    {
      label: "Defesa criminal",
      message:
        "Olá, encontrei seu site e gostaria de orientação sobre direito criminal.",
    },
  ],
  note: "Atendimento presencial em Itapoá/SC e on-line, com hora marcada.",
};
