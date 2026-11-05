import { processSection, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section
      id="atendimento"
      aria-labelledby="process-title"
      className="scroll-mt-20 bg-ink py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal
            y={16}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <span className="mb-4 flex items-center gap-4 font-clash text-[0.68rem] uppercase tracking-[0.24em] text-gold">
              <span
                aria-hidden="true"
                className="block h-px w-10 bg-gold/60"
              />
              {processSection.eyebrow}
            </span>
            <h2
              id="process-title"
              className="font-display text-3xl leading-tight text-cream-text md:text-[2.7rem]"
            >
              {processSection.titleLead}{" "}
              <em className="text-gold">{processSection.titleAccent}</em>{" "}
              {processSection.titleTail}
            </h2>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center gap-3 font-clash text-[0.66rem] uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:text-gold-light"
            >
              Começar pelo WhatsApp
            </a>
          </Reveal>

          <ol className="border-t border-gold/15 lg:col-span-7 lg:col-start-6">
            {processSection.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-gold/15 py-6 md:grid-cols-[4rem_1fr] md:gap-6 md:py-7"
              >
                <span className="font-quote text-2xl font-light italic leading-none text-gold md:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg text-cream-text md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-lg text-[0.92rem] leading-relaxed text-warm-body">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
