import { ArrowUpRight } from "lucide-react";
import { practiceAreas, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function PracticeAreas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      className="scroll-mt-20 bg-cream py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal y={18}>
              <span className="mb-4 flex items-center gap-4 font-clash text-[0.7rem] uppercase tracking-[0.25em] text-gold-deep">
                <span
                  aria-hidden="true"
                  className="block h-px w-10 bg-gold-deep/60"
                />
                Áreas de atuação
              </span>
              <h2
                id="areas-title"
                className="font-display text-3xl leading-tight text-ink-title md:text-5xl"
              >
                Onde posso <em className="text-gold-deep">atuar</em> ao seu lado
              </h2>

              <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-ink-body">
                Sete frentes de atuação, com o mesmo cuidado de sempre. Escolha
                o assunto mais próximo da sua situação para falar diretamente
                pelo WhatsApp.
              </p>

              <div className="mt-10 hidden items-end gap-4 lg:flex">
                <span
                  aria-hidden="true"
                  className="font-display text-[5.5rem] font-semibold leading-none tracking-tight text-gold-deep/15 md:text-[6.5rem]"
                >
                  07
                </span>
                <span className="mb-3 font-clash text-[0.6rem] uppercase leading-relaxed tracking-[0.2em] text-clay">
                  áreas
                  <br />
                  de atuação
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal y={24} className="lg:col-span-8">
            <ol className="border-t border-line">
              {practiceAreas.map((area, index) => (
                <li key={area.id} className="border-b border-line">
                  <a
                    href={whatsappLink(area.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Falar no WhatsApp sobre ${area.title}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 py-6 transition-colors duration-300 hover:bg-cream-muted/70 md:grid-cols-[3.5rem_1fr_auto] md:gap-6 md:py-7"
                  >
                    <span className="pt-1 font-quote text-xl italic leading-none text-gold-deep/80 md:text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="block">
                      <span className="block font-display text-xl text-ink-title transition-colors duration-300 group-hover:text-gold-deep md:text-2xl">
                        {area.title}
                      </span>
                      <span className="mt-1.5 block max-w-xl text-[0.92rem] leading-relaxed text-ink-body">
                        {area.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="mt-1.5 h-4 w-4 shrink-0 text-gold-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
