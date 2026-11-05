import { quoteSection } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Seal } from "@/components/Seal";

export function QuoteBand() {
  return (
    <section
      aria-label="Compromisso do escritório"
      className="border-y border-paper-line bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal y={14} className="lg:col-span-2">
            <p className="font-sans text-[0.76rem] text-wax">Compromisso</p>
          </Reveal>

          <Reveal y={18} delay={0.04} className="lg:col-span-8">
            <blockquote>
              <p className="font-display text-[1.9rem] leading-[1.16] tracking-[-0.02em] text-ink md:text-[3.1rem]">
                “{quoteSection.quote}”
              </p>
              <footer className="mt-7 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-px w-10 shrink-0 bg-wax"
                />
                <span className="font-sans text-[0.78rem] text-graphite">
                  {quoteSection.author}, advogado. OAB/SC 78.883.
                </span>
              </footer>
            </blockquote>
          </Reveal>

          <Reveal
            y={14}
            delay={0.08}
            className="hidden lg:col-span-2 lg:flex lg:justify-end"
          >
            <Seal id="quote-seal" className="h-24 w-24" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
