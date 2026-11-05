import {
  navigation,
  practiceAreas,
  site,
  whatsappLink,
} from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-gold/15 bg-ink">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-16 sm:pb-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-warm-body">
              Advocacia em Itapoá/SC, com atendimento presencial e on-line,
              escuta atenta e orientação clara.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="font-clash text-[0.62rem] uppercase tracking-[0.18em] text-stone">
                {site.oabShort}
              </span>
              <span className="font-clash text-[0.62rem] font-semibold tracking-[0.18em] text-gold">
                {site.oabNumber}
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-clash text-[0.62rem] uppercase tracking-[0.2em] text-gold">
              Navegação
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-clash text-[0.82rem] text-warm-body transition-colors duration-300 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-clash text-[0.62rem] uppercase tracking-[0.2em] text-gold">
              Áreas de Atuação
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href="#areas"
                    className="font-clash text-[0.82rem] text-warm-body transition-colors duration-300 hover:text-gold"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-clash text-[0.62rem] uppercase tracking-[0.2em] text-gold">
              Contato
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-[0.85rem] text-warm-body">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-gold"
                >
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li>{site.location}</li>
              <li>Atendimento presencial e on-line</li>
              <li>Mediante agendamento prévio</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-gold/15 pt-6 text-[0.68rem] text-stone md:flex-row md:items-center md:justify-between">
          <p className="font-clash">
            © {year} {site.brand}. Todos os direitos reservados.
          </p>
          <p className="font-clash uppercase tracking-[0.16em]">
            {site.oab} | {site.location}
          </p>
        </div>
        <p className="mt-3 max-w-2xl font-clash text-[0.62rem] leading-relaxed text-stone">
          Este site tem caráter informativo, em conformidade com o Código de
          Ética e Disciplina da OAB.
        </p>
      </div>
    </footer>
  );
}
