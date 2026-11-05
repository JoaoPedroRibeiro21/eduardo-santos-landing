/**
 * Conteúdo central do site.
 * Tudo o que é texto, contato ou dado profissional fica aqui para facilitar a manutenção.
 *
 * PENDÊNCIAS DE PUBLICAÇÃO — procure por "PENDENTE" neste arquivo:
 * 1. Endereço completo e horário de atendimento, se forem divulgados.
 * 2. Confirmar a modalidade de atendimento on-line.
 */

export const site = {
  name: "Eduardo dos Santos",
  brand: "Eduardo dos Santos Advocacia",
  specialty: "Advocacia",
  oab: "OAB/SC 78.883",
  oabShort: "OAB/SC",
  oabNumber: "78.883",
  city: "Itapoá",
  state: "SC",
  location: "Itapoá · SC",
  whatsapp: {
    number: "5547988942904",
    display: "(47) 98894-2904",
    message:
      "Olá, encontrei seu site e gostaria de obter informações sobre atendimento jurídico.",
  },
} as const;

export function whatsappLink(message: string = site.whatsapp.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
] as const;

/**
 * Faixa de credenciais que substitui os contadores da referência.
 * Não há números de experiência, clientes ou fundação — nada foi inventado.
 */
export const credentials = [
  { label: "Inscrição profissional", value: site.oab, emphasis: false },
  { label: "Áreas de atuação", value: "07", emphasis: true },
  { label: "Base de atendimento", value: site.location, emphasis: false },
  { label: "Modalidade", value: "Presencial e on-line", emphasis: false },
] as const;

export const about = {
  eyebrow: "Sobre mim",
  titleLead: "Meu compromisso é",
  titleAccent: "escutar",
  titleTail: "antes de orientar.",
  paragraphs: [
    "Sou Eduardo dos Santos, advogado inscrito na OAB/SC sob o nº 78.883. Atuo em Direito de Família — divórcio, guarda e pensão — e também em inventário, questões imobiliárias, relações de consumo e defesa criminal.",
    "Se você está diante de uma decisão importante — sobre a sua família, o seu patrimônio ou a sua defesa —, meu trabalho é ouvir o seu caso, explicar os caminhos possíveis com clareza e acompanhar você em cada etapa, sem termos complicados e sem prometer o que não depende de mim.",
    "Atendo em Itapoá/SC e também on-line, com hora marcada. A primeira conversa serve para entender o seu momento e você decidir, com informação, como seguir.",
  ],
  highlights: [
    "Atendo presencialmente e on-line",
    "Explico cada etapa com clareza",
    "Trato o seu caso com sigilo",
    "Acompanho o seu caso de perto",
  ],
  cta: "Falar sobre o meu caso",
  quote: "Antes de falar em estratégia, eu prefiro ouvir.",
  quoteAuthor: "Eduardo dos Santos",
};

export type PracticeArea = {
  id: string;
  title: string;
  description: string;
  message: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "divorcio",
    title: "Divórcio",
    description:
      "Dissolução do casamento, partilha de bens e as questões jurídicas que envolvem o encerramento da união.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre divórcio.",
  },
  {
    id: "guarda",
    title: "Guarda",
    description:
      "Definição da guarda e organização da convivência familiar, com atenção ao melhor interesse da criança.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre guarda.",
  },
  {
    id: "pensao",
    title: "Pensão Alimentícia",
    description:
      "Fixação, revisão e cobrança de alimentos, com orientação sobre direitos, deveres e próximos passos.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre pensão alimentícia.",
  },
  {
    id: "inventario",
    title: "Inventário e Sucessões",
    description:
      "Condução do inventário, partilha de bens e organização das questões que envolvem a sucessão.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre inventário e sucessões.",
  },
  {
    id: "imobiliario",
    title: "Direito Imobiliário",
    description:
      "Compra, venda, locação, contratos e regularização de imóveis, com atenção à segurança da negociação.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre direito imobiliário.",
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    description:
      "Orientação em relações de consumo, cobranças indevidas, vícios de produto e revisão de contratos.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre direito do consumidor.",
  },
  {
    id: "criminal",
    title: "Direito Criminal",
    description:
      "Atuação na defesa criminal, acompanhamento de inquéritos e orientação sobre procedimentos.",
    message:
      "Olá, encontrei seu site e gostaria de orientação sobre direito criminal.",
  },
];

export const differentials = {
  eyebrow: "Por que este atendimento",
  titleLead: "Um cuidado jurídico",
  titleAccent: "próximo",
  titleTail: "e reservado",
  items: [
    {
      title: "Escuta e acolhimento",
      description:
        "Cada situação é recebida com atenção e respeito, no tempo necessário para ser compreendida.",
    },
    {
      title: "Sigilo profissional",
      description:
        "As informações compartilhadas são tratadas com confidencialidade em todas as etapas.",
    },
    {
      title: "Comunicação clara",
      description:
        "Explicações objetivas sobre documentos, prazos e os caminhos jurídicos possíveis.",
    },
    {
      title: "Presença em cada etapa",
      description:
        "Você sabe o que acontece no seu caso e quais são os próximos passos a serem dados.",
    },
  ],
};

export const processSection = {
  eyebrow: "Como funciona o atendimento",
  titleLead: "Do primeiro contato ao",
  titleAccent: "acompanhamento",
  titleTail: "do seu caso",
  steps: [
    {
      title: "Primeiro contato",
      description:
        "Você fala pelo WhatsApp e conta o que está acontecendo.",
    },
    {
      title: "Análise do caso",
      description:
        "São avaliados os documentos e o contexto de cada situação.",
    },
    {
      title: "Orientação",
      description:
        "As possibilidades jurídicas são explicadas com clareza.",
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
  eyebrow: "Dê o primeiro passo",
  titleLead: "Como posso",
  titleAccent: "ajudar",
  titleTail: "?",
  description:
    "Conte, em poucas palavras, o que você precisa. Escolha a opção mais próxima da sua situação e fale diretamente pelo WhatsApp.",
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
  note: "Atendimento presencial em Itapoá/SC e on-line, com agendamento prévio.",
};
