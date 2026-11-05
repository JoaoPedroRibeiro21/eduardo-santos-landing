import { ArrowUpRight } from "lucide-react";
import { practiceAreas, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function PracticeAreas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      className="scroll-mt-20 border-y border-gold/10 bg-ink-soft py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal y={16} className="lg:col-span-7">
            <span className="mb-4 flex items-center gap-4 font-clash text-[0.68rem] uppercase tracking-[0.24em] text-gold">
              <span aria-hidden="true" className="block h-px w-10 bg-gold/60" />
              Áreas de atuação
            </span>
            <h2
              id="areas-title"
              className="max-w-xl font-display text-3xl leading-tight text-cream-text md:text-5xl"
            >
              Onde posso <em className="text-gold">atuar</em> ao seu lado
            </h2>
          </Reveal>

          <Reveal y={16} delay={0.05} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-[0.95rem] font-medium leading-relaxed text-warm-body">
              Sete frentes de atuação, com o mesmo cuidado de sempre. Escolha o
              assunto mais próximo da sua situação para falar diretamente pelo
              WhatsApp.
            </p>
          </Reveal>
        </div>

        <Reveal y={22} delay={0.06} className="mt-12 lg:mt-14">
          <ul className="grid gap-x-12 border-b border-gold/15 md:grid-cols-2">
            {practiceAreas.map((area, index) => (
              <li
                key={area.id}
                id={area.id}
                className={
                  index === practiceAreas.length - 1 ? "md:col-span-2" : ""
                }
              >
                <a
                  href={whatsappLink(area.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${area.title} — Falar sobre este tema pelo WhatsApp`}
                  className="group block border-t border-gold/15 py-7"
                >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-[1.35rem] text-cream-text transition-colors duration-300 group-hover:text-gold md:text-[1.55rem]">
                    {area.title}
                  </h3>
                  <p
                    className={`mt-2 text-[0.92rem] leading-relaxed text-warm-body ${
                      index === practiceAreas.length - 1
                        ? "max-w-2xl"
                        : "max-w-md"
                    }`}
                  >
                    {area.description}
                  </p>
                  <span className="mt-4 inline-block font-clash text-[0.6rem] uppercase tracking-[0.18em] text-gold/80 transition-colors duration-300 group-hover:text-gold">
                    Falar sobre este tema
                  </span>
                </div>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-gold/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  aria-hidden="true"
                />
                </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
