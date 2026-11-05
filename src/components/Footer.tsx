import { MapPin } from "lucide-react";
import {
  navigation,
  practiceAreas,
  site,
  whatsappLink,
} from "@/content/site";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-16 sm:pb-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <Reveal y={16}>
            <Logo imageClassName="h-8" />
            <p className="mb-4 mt-5 max-w-xs text-sm leading-relaxed text-clay">
              Advocacia em Itapoá/SC, com atendimento presencial e on-line,
              escuta atenta e orientação clara.
            </p>
            <div className="mb-5 flex items-center gap-1.5">
              <span className="font-clash text-[0.65rem] uppercase tracking-widest text-clay">
                {site.oabShort}
              </span>
              <span className="font-clash text-[0.65rem] font-semibold tracking-widest text-gold-deep">
                {site.oabNumber}
              </span>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp com o advogado"
              className="inline-flex h-9 w-9 items-center justify-center border border-line bg-cream-muted text-clay transition-all duration-300 hover:border-gold-deep/50 hover:text-gold-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal y={16} delay={0.05}>
            <h2 className="mb-5 font-clash text-[0.65rem] uppercase tracking-[0.2em] text-gold-deep">
              Navegação
            </h2>
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 font-clash text-sm text-ink-body transition-colors duration-300 hover:text-gold-deep"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-3 bg-gold-deep/40 transition-all duration-300 group-hover:w-5 group-hover:bg-gold-deep"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal y={16} delay={0.1}>
            <h2 className="mb-5 font-clash text-[0.65rem] uppercase tracking-[0.2em] text-gold-deep">
              Áreas de Atuação
            </h2>
            <ul className="flex flex-col gap-3">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href="#areas"
                    className="group flex items-center gap-2 font-clash text-sm text-ink-body transition-colors duration-300 hover:text-gold-deep"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-3 bg-gold-deep/40 transition-all duration-300 group-hover:w-5 group-hover:bg-gold-deep"
                    />
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal y={16} delay={0.15}>
            <h2 className="mb-5 font-clash text-[0.65rem] uppercase tracking-[0.2em] text-gold-deep">
              Contato
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-ink-body">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-gold-deep"
                >
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                {site.location}
              </li>
              <li className="text-clay">Atendimento presencial e on-line</li>
              <li className="text-clay">Mediante agendamento prévio</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-clash text-xs text-clay">
            © {year} {site.brand}. Todos os direitos reservados.
          </p>
          <p className="font-clash text-[0.65rem] uppercase tracking-[0.16em] text-clay">
            {site.oab} | {site.location}
          </p>
        </div>
        <p className="mt-4 text-center font-clash text-[0.6rem] leading-relaxed text-clay md:text-left">
          Este site tem caráter informativo, em conformidade com o Código de
          Ética e Disciplina da OAB.
        </p>
      </div>
    </footer>
  );
}
