import { ArrowUpRight, MapPin } from "lucide-react";
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
        className="absolute inset-0 bg-linear-to-r from-ink via-ink-soft to-ink opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-gold/[0.05] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal y={18} className="lg:col-span-6">
            <span className="mb-4 flex items-center gap-4 font-clash text-[0.68rem] uppercase tracking-[0.24em] text-gold">
              <span
                aria-hidden="true"
                className="block h-px w-10 bg-gold/60"
              />
              {contact.eyebrow}
            </span>
            <h2
              id="contact-title"
              className="font-display text-3xl leading-tight text-cream-text md:text-5xl"
            >
              {contact.titleLead}{" "}
              <span className="text-gold-gradient italic">
                {contact.titleAccent}
              </span>
              {contact.titleTail}
            </h2>
            <p className="mt-5 max-w-md text-[0.98rem] font-medium leading-relaxed text-warm-body">
              {contact.description}
            </p>
          </Reveal>

          <Reveal
            y={18}
            delay={0.06}
            className="lg:col-span-5 lg:col-start-8 lg:text-right"
          >
            <p className="flex items-center gap-2 font-clash text-[0.6rem] uppercase tracking-[0.2em] text-stone lg:justify-end">
              <WhatsAppIcon className="h-3.5 w-3.5 text-gold" />
              WhatsApp
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-display text-2xl text-gold transition-colors duration-300 hover:text-gold-light md:text-3xl"
            >
              {site.whatsapp.display}
            </a>
            <p className="mt-3 flex items-start gap-2 text-[0.76rem] leading-relaxed text-stone lg:justify-end">
              <MapPin
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70"
                aria-hidden="true"
              />
              {contact.note}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {contact.options.map((option, index) => (
            <Reveal key={option.label} delay={index * 0.04} y={12}>
              <a
                href={whatsappLink(option.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Falar no WhatsApp: ${option.label}`}
                className="group flex items-center justify-between gap-4 border-t border-gold/20 py-4 font-satoshi text-[0.88rem] font-medium text-cream-text transition-colors duration-300 hover:text-gold"
              >
                {option.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 shrink-0 text-gold/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
