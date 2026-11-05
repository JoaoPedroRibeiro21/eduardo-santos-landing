import { ArrowRight, MapPin } from "lucide-react";
import { contact, site, whatsappLink } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="relative scroll-mt-20 overflow-hidden border-y border-gold/10 bg-ink-soft py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-ink via-ink-soft to-ink opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-[380px] w-[380px] rounded-full bg-gold/[0.04] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal y={20} className="lg:col-span-5">
            <span className="mb-4 flex items-center gap-4 font-clash text-[0.7rem] uppercase tracking-[0.25em] text-gold">
              <span aria-hidden="true" className="block h-px w-10 bg-gold/60" />
              {contact.eyebrow}
            </span>

            <h2
              id="contact-title"
              className="font-display text-3xl leading-snug text-cream-text md:text-5xl"
            >
              {contact.titleLead}{" "}
              <span className="text-gold-gradient italic">
                {contact.titleAccent}
              </span>
              {contact.titleTail}
            </h2>

            <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-warm-text">
              {contact.description}
            </p>

            <div className="mt-10 border-t border-gold/20 pt-6">
              <p className="font-clash text-[0.6rem] uppercase tracking-[0.22em] text-stone">
                WhatsApp direto
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-display text-2xl text-gold transition-colors duration-300 hover:text-gold-light md:text-3xl"
              >
                {site.whatsapp.display}
              </a>
              <p className="mt-4 flex items-start gap-2 text-[0.78rem] leading-relaxed text-stone">
                <MapPin
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70"
                  aria-hidden="true"
                />
                {contact.note}
              </p>
            </div>
          </Reveal>

          <Reveal y={24} delay={0.08} className="lg:col-span-7">
            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {contact.options.map((option) => (
                <a
                  key={option.label}
                  href={whatsappLink(option.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar no WhatsApp: ${option.label}`}
                  className="group flex items-center gap-3 border-b border-r border-white/10 px-4 py-5 transition-colors duration-300 hover:bg-white/[0.03] md:px-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-linen">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex-1 font-satoshi text-[0.85rem] font-medium leading-snug text-cream-text">
                    {option.label}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
