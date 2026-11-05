import { processSection } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section
      id="atendimento"
      aria-labelledby="process-title"
      className="scroll-mt-20 bg-cream py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 max-w-3xl md:mb-16">
          <span className="mb-4 flex items-center gap-4 font-clash text-[0.7rem] uppercase tracking-[0.25em] text-gold-deep">
            <span aria-hidden="true" className="block h-px w-10 bg-gold-deep/60" />
            {processSection.eyebrow}
          </span>
          <h2
            id="process-title"
            className="font-display text-3xl leading-tight text-ink-title md:text-5xl"
          >
            {processSection.titleLead}{" "}
            <em className="text-gold-deep">{processSection.titleAccent}</em>{" "}
            {processSection.titleTail}
          </h2>
        </Reveal>

        <ol className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-5 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-px bg-linear-to-r from-gold-deep/10 via-gold-deep/40 to-gold-deep/10 lg:block"
          />

          {processSection.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[2.75rem_1fr] gap-4 border-b border-line py-6 lg:block lg:border-0 lg:py-0 lg:pt-7"
            >
              <span
                aria-hidden="true"
                className="absolute -top-[3px] left-0 hidden h-1.5 w-1.5 bg-gold-deep lg:block"
              />
              <span className="font-quote text-3xl font-light italic leading-none text-gold-deep md:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-5">
                <h3 className="mb-1.5 font-display text-lg text-ink-title">
                  {step.title}
                </h3>
                <p className="max-w-[15rem] text-[0.9rem] leading-relaxed text-ink-body">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
