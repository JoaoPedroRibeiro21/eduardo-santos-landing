import { ArrowUpRight } from "lucide-react";
import { practiceAreas, whatsappLink, type PracticeArea } from "@/content/site";
import { Reveal } from "@/components/Reveal";

function areaLink(area: PracticeArea) {
  return whatsappLink(area.message);
}

export function PracticeAreas() {
  const [feature, ...rest] = practiceAreas;
  const medium = rest.slice(0, 4);
  const wide = rest.slice(4);

  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      className="scroll-mt-20 bg-paper-deep py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal y={16} className="lg:col-span-7">
            <p className="font-sans text-[0.78rem] text-wax">
              Áreas de atuação
            </p>
            <h2
              id="areas-title"
              className="mt-4 max-w-2xl font-display text-[2.25rem] leading-[1.02] tracking-[-0.02em] text-ink md:text-[3.4rem]"
            >
              Assuntos que chegam ao escritório.
            </h2>
          </Reveal>

          <Reveal y={16} delay={0.05} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-[0.98rem] leading-relaxed text-graphite">
              Família, patrimônio e defesa. Escolha o assunto mais próximo da
              sua situação para falar diretamente pelo WhatsApp — sem
              formulário e sem intermediários.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <a
            href={areaLink(feature)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Falar no WhatsApp sobre ${feature.title}`}
            className="group flex min-h-[380px] flex-col justify-between bg-forest p-8 text-cream transition-colors duration-300 hover:bg-forest-deep md:p-10 lg:col-span-6 lg:row-span-2 lg:min-h-[420px]"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="font-sans text-[0.72rem] text-cream-muted">
                {feature.tag}
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-cream-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream"
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 className="font-display text-[2.6rem] leading-none tracking-[-0.02em] text-cream md:text-[3.3rem]">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-sm text-[1rem] leading-relaxed text-cream-muted">
                {feature.description}
              </p>
              <span className="link-underline mt-7 inline-block font-sans text-[0.82rem] text-cream">
                Falar sobre {feature.title.toLowerCase()}
              </span>
            </div>
          </a>

          {medium.map((area) => (
            <a
              key={area.id}
              href={areaLink(area)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Falar no WhatsApp sobre ${area.title}`}
              className="group flex min-h-[200px] flex-col justify-between gap-8 border-t border-ink/20 bg-paper p-6 transition-colors duration-300 hover:bg-cream lg:col-span-3"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-sans text-[0.68rem] text-graphite">
                  {area.tag}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wax"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="font-display text-[1.4rem] leading-tight tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-wax">
                  {area.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-graphite">
                  {area.description}
                </p>
              </div>
            </a>
          ))}

          {wide.map((area) => (
            <a
              key={area.id}
              href={areaLink(area)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Falar no WhatsApp sobre ${area.title}`}
              className="group grid gap-4 border-t border-ink/20 bg-paper p-6 transition-colors duration-300 hover:bg-cream sm:grid-cols-[1fr_1.15fr] sm:gap-8 md:p-8 lg:col-span-6"
            >
              <div>
                <span className="font-sans text-[0.68rem] text-graphite">
                  {area.tag}
                </span>
                <h3 className="mt-3 font-display text-[1.55rem] leading-tight tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-wax">
                  {area.title}
                </h3>
              </div>
              <div>
                <p className="text-[0.92rem] leading-relaxed text-graphite">
                  {area.description}
                </p>
                <span className="link-underline mt-4 inline-block font-sans text-[0.78rem] text-wax">
                  Conversar sobre o assunto
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
