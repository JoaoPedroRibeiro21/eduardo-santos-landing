import { contact, site, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Seal } from "@/components/Seal";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="relative scroll-mt-20 overflow-hidden bg-wax py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 hidden lg:block"
      >
        <Seal
          id="contact-seal"
          tone="cream"
          className="h-[340px] w-[340px] opacity-[0.09]"
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal y={18} className="lg:col-span-6">
            <p className="font-sans text-[0.78rem] text-cream/70">
              {contact.label}
            </p>
            <h2
              id="contact-title"
              className="mt-4 max-w-lg font-display text-[2.4rem] leading-[1.02] tracking-[-0.02em] text-cream md:text-[3.6rem]"
            >
              {contact.title}
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-cream/80">
              {contact.description}
            </p>
          </Reveal>

          <Reveal y={18} delay={0.06} className="lg:col-span-5 lg:col-start-8">
            <p className="font-sans text-[0.72rem] text-cream/70">WhatsApp</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-display text-[2rem] leading-tight text-cream md:text-[2.5rem]"
            >
              {site.whatsapp.display}
            </a>

            <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {contact.options.map((option) => (
                <a
                  key={option.label}
                  href={whatsappLink(option.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar no WhatsApp: ${option.label}`}
                  className="border-b border-cream/25 py-3 font-sans text-[0.85rem] leading-snug text-cream/90 transition-colors duration-200 hover:text-cream"
                >
                  {option.label}
                </a>
              ))}
            </div>

            <p className="mt-6 max-w-sm text-[0.76rem] leading-relaxed text-cream/65">
              {contact.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
