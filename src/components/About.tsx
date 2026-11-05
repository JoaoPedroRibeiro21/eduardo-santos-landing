import Image from "next/image";
import { about, site, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="scroll-mt-20 bg-paper py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal y={18} className="lg:col-span-5">
            <figure>
              <div className="border border-paper-line bg-paper p-2">
                <div className="relative aspect-4/5 w-full overflow-hidden bg-paper-deep">
                  <Image
                    src="/images/eduardo-santos-atendimento.jpg"
                    alt="Eduardo dos Santos, advogado, segurando sua carteira da OAB"
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 90vw, 500px"
                    quality={90}
                    className="object-cover object-[50%_16%]"
                  />
                </div>
              </div>
              <figcaption className="mt-3 font-sans text-[0.72rem] text-graphite">
                Eduardo dos Santos com a carteira da OAB. Itapoá, Santa Catarina.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal
            y={18}
            delay={0.06}
            className="lg:col-span-6 lg:col-start-7"
          >
            <p className="font-sans text-[0.78rem] text-wax">{about.label}</p>

            <h2
              id="about-title"
              className="mt-4 font-display text-[2.2rem] leading-[1.04] tracking-[-0.02em] text-ink md:text-[3rem]"
            >
              {about.titleLead}{" "}
              <em className="font-light text-wax">{about.titleAccent}</em>
              {about.titleTail}
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 20)}
                  className="text-[1.02rem] leading-[1.7] text-graphite"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-wax pl-5">
              <p className="font-display text-[1.35rem] italic leading-snug text-ink md:text-[1.5rem]">
                “{about.quote}”
              </p>
              <cite className="mt-2 block font-sans text-[0.72rem] not-italic text-graphite">
                {about.quoteAuthor}
              </cite>
            </blockquote>

            <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-paper-line pt-6">
              <div>
                <dt className="font-sans text-[0.7rem] text-graphite">
                  Inscrição
                </dt>
                <dd className="mt-1 font-display text-[1.05rem] text-ink">
                  {site.oab}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[0.7rem] text-graphite">Base</dt>
                <dd className="mt-1 font-display text-[1.05rem] text-ink">
                  Itapoá, Santa Catarina
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[0.7rem] text-graphite">
                  Atendimento
                </dt>
                <dd className="mt-1 font-display text-[1.05rem] text-ink">
                  Presencial e on-line
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[0.7rem] text-graphite">Agenda</dt>
                <dd className="mt-1 font-display text-[1.05rem] text-ink">
                  Com hora marcada
                </dd>
              </div>
            </dl>

            <a
              href={whatsappLink(
                "Olá, encontrei seu site e gostaria de conversar sobre o meu caso.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-8 inline-block font-sans text-[0.85rem] text-wax"
            >
              {about.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
