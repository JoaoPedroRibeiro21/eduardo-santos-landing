import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_SC } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const cormorantSc = Cormorant_SC({
  subsets: ["latin"],
  variable: "--font-cormorant-sc",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["Georgia", "serif"],
});

const description =
  "Advogado em Itapoá/SC: família, inventário, imobiliário, consumidor e criminal. Atendimento presencial e on-line, com orientação clara e sigilo.";

/** Defina NEXT_PUBLIC_SITE_URL no deploy para canonical, Open Graph e JSON-LD absolutos. */
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined;
// Placeholder reservado (.example) — nunca resolve e deixa claro que falta configurar.
const siteUrl = configuredUrl ?? "https://eduardosantos.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eduardo Santos | Advogado em Itapoá SC | OAB/SC 78.883",
    template: "%s | Eduardo Santos Advocacia",
  },
  description,
  keywords: [
    "advogado Itapoá SC",
    "advogado de família Itapoá",
    "divórcio Itapoá SC",
    "guarda compartilhada Itapoá",
    "pensão alimentícia advogado",
    "inventário advogado Itapoá",
    "advogado imobiliário Itapoá",
    "advogado consumidor Itapoá",
    "advogado criminal Itapoá",
    "Eduardo Santos advogado",
    "OAB/SC 78.883",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.brand,
  robots: { index: true, follow: true },
  ...(configuredUrl ? { alternates: { canonical: "/" } } : {}),
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: configuredUrl ?? undefined,
    siteName: site.brand,
    title: "Eduardo Santos | Advogado em Itapoá SC | OAB/SC 78.883",
    description:
      "Atuação em família, inventário, imobiliário, consumidor e criminal. Atendimento presencial em Itapoá/SC e on-line.",
    images: configuredUrl
      ? [
          {
            url: "/images/og-eduardo-santos.jpg",
            width: 1200,
            height: 630,
            alt: "Eduardo Santos — orientação jurídica com clareza para as decisões que importam",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Santos | Advogado em Itapoá SC | OAB/SC 78.883",
    description,
    images: configuredUrl ? ["/images/og-eduardo-santos.jpg"] : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#234345",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Eduardo Santos Advocacia",
  description,
  ...(configuredUrl ? { url: configuredUrl } : {}),
  telephone: "+5547988942904",
  areaServed: [
    { "@type": "City", name: "Itapoá" },
    { "@type": "State", name: "Santa Catarina" },
  ],
  knowsAbout: [
    "Direito de Família",
    "Divórcio",
    "Guarda",
    "Pensão alimentícia",
    "Inventário e sucessões",
    "Direito imobiliário",
    "Direito do consumidor",
    "Direito criminal",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Itapoá",
    addressRegion: "SC",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${cormorantSc.variable}`}
    >
      <body className="bg-ink text-cream-text font-satoshi antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-5 focus:py-3 focus:text-xs focus:font-clash focus:uppercase focus:tracking-[0.2em] focus:text-ink"
        >
          Ir para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
