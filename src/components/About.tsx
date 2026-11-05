import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { about, site, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-32} y={0} className="relative mx-auto w-full max-w-[460px]">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-gold/30"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-gold/30"
            />

            <div className="relative aspect-4/5 w-full overflow-hidden bg-ink-soft">
              <Image
                src="/images/eduardo-santos-atendimento.jpg"
                alt="Eduardo Santos, advogado, segurando sua carteira da OAB"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 90vw, 460px"
                quality={90}
                className="object-cover object-[50%_16%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/80 to-transparent"
              />
            </div>

            <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between gap-4 border border-gold/25 bg-ink px-4 py-3">
              <span className="font-clash text-[0.58rem] uppercase tracking-[0.18em] text-cream-text">
                {site.name}
              </span>
              <span className="font-clash text-[0.58rem] uppercase tracking-[0.18em] text-gold">
                {site.oab}
              </span>
            </div>
          </Reveal>

          <Reveal x={32} y={0} className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="hairline-gold block h-px w-14 shrink-0"
              />
              <span className="font-clash text-[0.7rem] uppercase tracking-[0.25em] text-gold">
                {about.eyebrow}
              </span>
            </div>

            <h2
              id="about-title"
              className="font-display text-3xl leading-tight text-cream-text md:text-4xl lg:text-[2.85rem]"
            >
              {about.titleLead}{" "}
              <em className="text-gold">{about.titleAccent}</em>{" "}
              {about.titleTail}
            </h2>

            <p className="max-w-xl text-[1.02rem] font-medium leading-relaxed text-warm-body">
              {about.paragraphs[0]}
            </p>

            <blockquote className="border-l-2 border-gold/50 pl-5">
              <p className="font-quote text-[1.35rem] italic leading-snug text-cream-text md:text-[1.55rem]">
                “{about.quote}”
              </p>
              <cite className="mt-2 block font-clash text-[0.58rem] uppercase not-italic tracking-[0.2em] text-gold">
                {about.quoteAuthor} · {site.oab}
              </cite>
            </blockquote>

            <p className="max-w-xl text-[1.02rem] font-medium leading-relaxed text-warm-body">
              {about.paragraphs[1]}
            </p>

            <ul className="mt-2 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-[0.92rem] font-medium leading-snug text-warm-text"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-4 shrink-0 bg-gold"
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(
                "Olá, encontrei seu site e gostaria de conversar sobre o meu caso.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-3 self-start font-clash text-xs uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:text-gold-light"
            >
              {about.cta}
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
