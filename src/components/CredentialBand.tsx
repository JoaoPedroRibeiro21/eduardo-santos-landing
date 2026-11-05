import { credentials } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function CredentialBand() {
  return (
    <section
      aria-label="Credenciais e informações do escritório"
      className="border-y border-line-deep bg-cream py-10 md:py-12"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 lg:grid-cols-4 lg:divide-x lg:divide-line-deep lg:px-10">
        {credentials.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 0.07}
            y={14}
            className="px-4 text-center"
          >
            <p className="font-clash text-[0.6rem] uppercase tracking-[0.22em] text-clay">
              {item.label}
            </p>
            <p
              className={`mt-2 font-display leading-tight ${
                item.emphasis
                  ? "text-3xl font-semibold text-gold-deep"
                  : "text-lg font-medium text-ink-title md:text-xl"
              }`}
            >
              {item.value}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
