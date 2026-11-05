import { credentials } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function CredentialBand() {
  return (
    <section
      aria-label="Credenciais do escritório"
      className="border-y border-gold/15 bg-ink-soft"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 px-6 py-6 sm:grid-cols-4 lg:px-10">
        {credentials.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 0.05}
            y={10}
            className="flex flex-col gap-1 sm:border-l sm:border-gold/20 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"
          >
            <span className="font-clash text-[0.64rem] uppercase tracking-[0.16em] text-stone">
              {item.label}
            </span>
            <span
              className={`font-clash text-[0.78rem] tracking-[0.04em] ${
                item.emphasis ? "text-gold" : "text-cream-text/90"
              }`}
            >
              {item.value}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
