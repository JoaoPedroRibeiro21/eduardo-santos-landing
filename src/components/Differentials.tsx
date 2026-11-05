import { differentials, site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Differentials() {
  return (
    <section
      aria-labelledby="differentials-title"
      className="bg-cream py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal y={16} className="lg:col-span-5">
            <span className="mb-4 flex items-center gap-4 font-clash text-[0.68rem] uppercase tracking-[0.24em] text-gold-deep">
              <span
                aria-hidden="true"
                className="block h-px w-10 bg-gold/70"
              />
              {differentials.eyebrow}
            </span>
            <h2
              id="differentials-title"
              className="max-w-md font-display text-3xl leading-tight text-ink-title md:text-5xl"
            >
              {differentials.titleLead}{" "}
              <em className="text-gold-deep">{differentials.titleAccent}</em>{" "}
              {differentials.titleTail}
            </h2>
            <p className="mt-6 max-w-xs font-clash text-[0.6rem] uppercase leading-relaxed tracking-[0.18em] text-clay">
              {site.oab}
              <br />
              {site.location}
            </p>
          </Reveal>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {differentials.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} y={20}>
                <div className="border-t border-gold-deep/25 pt-5">
                  <h3 className="font-display text-xl font-semibold text-ink-title">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-[0.92rem] font-medium leading-relaxed text-ink-body">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
