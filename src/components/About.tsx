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
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal x={-28} y={0} className="lg:col-span-5">
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 -left-4 w-px bg-gold/30"
              />
              <div className="relative aspect-4/5 w-full overflow-hidden bg-ink-soft">
                <Image
                  src="/images/eduardo-santos-atendimento.jpg"
                  alt="Eduardo Santos, advogado, segurando sua carteira da OAB"
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 90vw, (max-width: 1023px) 92vw, 480px"
                  quality={90}
                  className="object-cover object-[50%_16%]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/80 to-transparent"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-3 font-clash text-[0.58rem] uppercase tracking-[0.18em] text-stone">
                <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
                {site.name} · {site.oab}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal
            x={28}
            y={0}
            className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7"
          >
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="hairline-gold block h-px w-14 shrink-0"
              />
              <span className="font-clash text-[0.68rem] uppercase tracking-[0.24em] text-gold">
                {about.eyebrow}
              </span>
            </div>

            <h2
              id="about-title"
              className="font-display text-3xl leading-tight text-cream-text md:text-4xl lg:text-[2.7rem]"
            >
              {about.titleLead}{" "}
              <em className="text-gold">{about.titleAccent}</em>{" "}
              {about.titleTail}
            </h2>

            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-xl text-[1rem] font-medium leading-relaxed text-warm-body"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mt-1 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-[0.9rem] font-medium leading-snug text-warm-text"
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
              className="group mt-2 inline-flex min-h-11 items-center gap-3 self-start font-clash text-[0.68rem] uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:text-gold-light"
            >
              {about.cta}
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <Reveal y={18} className="mt-16 border-t border-gold/20 pt-8 md:mt-20">
          <blockquote className="grid gap-6 md:grid-cols-12 md:items-end">
            <p className="font-quote text-[1.55rem] italic leading-snug text-cream-text md:col-span-9 md:text-[2.1rem]">
              “{about.quote}”
            </p>
            <cite className="font-clash text-[0.56rem] uppercase not-italic leading-relaxed tracking-[0.2em] text-gold md:col-span-3 md:text-right">
              {about.quoteAuthor}
              <br />
              {site.oab}
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
