import { processSection, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section
      id="atendimento"
      aria-labelledby="process-title"
      className="scroll-mt-20 bg-paper-deep py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal y={16} className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="font-sans text-[0.78rem] text-wax">
              {processSection.label}
            </p>
            <h2
              id="process-title"
              className="mt-4 font-display text-[2.2rem] leading-[1.03] tracking-[-0.02em] text-ink md:text-[3rem]"
            >
              {processSection.title}
            </h2>
            <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-graphite">
              {processSection.description}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-6 inline-block font-sans text-[0.82rem] text-wax"
            >
              Começar pelo WhatsApp
            </a>
          </Reveal>

          <ol className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
            {processSection.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-ink/15 py-6 md:grid-cols-[4rem_1fr] md:gap-6 md:py-7"
              >
                  <span className="font-display text-[1.6rem] italic leading-none text-wax md:text-[1.8rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.3rem] leading-tight text-ink md:text-[1.45rem]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-[0.94rem] leading-relaxed text-graphite">
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
