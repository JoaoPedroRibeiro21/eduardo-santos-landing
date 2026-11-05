import {
  navigation,
  practiceAreas,
  site,
  whatsappLink,
} from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-16 sm:pb-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="cream" />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-cream-muted">
              Advocacia em Itapoá, Santa Catarina. Atendimento presencial e
              on-line, com hora marcada.
            </p>
            <p className="mt-5 font-sans text-[0.72rem] text-cream-muted">
              {site.oab}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-[0.74rem] text-cream-muted">
              Navegação
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-sans text-[0.88rem] text-cream/80 transition-colors duration-200 hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.74rem] text-cream-muted">
              Áreas de atuação
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href="#areas"
                    className="font-sans text-[0.88rem] text-cream/80 transition-colors duration-200 hover:text-cream"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.74rem] text-cream-muted">
              Contato
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-[0.88rem] text-cream/80">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-cream"
                >
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li>{site.location}</li>
              <li>Presencial e on-line</li>
              <li>Com hora marcada</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-6 text-[0.72rem] text-cream-muted md:flex-row md:items-center md:justify-between">
          <p className="font-sans">
            © 2026 {site.brand}. Todos os direitos reservados.
          </p>
          <p className="font-sans">
            {site.oab} · {site.location}
          </p>
        </div>
        <p className="mt-3 max-w-2xl font-sans text-[0.7rem] leading-relaxed text-cream-muted/80">
          Este site tem caráter informativo, em conformidade com o Código de
          Ética e Disciplina da OAB.
        </p>
      </div>
    </footer>
  );
}
