"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation, site, whatsappLink } from "@/content/site";
import { Logo } from "@/components/Logo";

function useActiveSection() {
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-t-2 border-paper-line border-t-ink bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-[1400px] items-center justify-between gap-6 px-6 lg:px-10">
          <Logo onClick={() => setOpen(false)} />

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`group relative inline-flex py-2 font-sans text-[0.84rem] transition-colors duration-200 ${
                        isActive
                          ? "text-wax"
                          : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-px bg-wax transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <span className="hidden font-sans text-[0.7rem] tracking-[0.04em] text-graphite xl:inline">
              {site.oab}
            </span>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-wax px-5 py-2.5 font-sans text-[0.82rem] text-cream transition-colors duration-200 hover:bg-wax-dark"
            >
              Conversar
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="relative z-60 -mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            key="menu-mobile"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-6 pb-10 pt-24 lg:hidden"
          >
            <nav aria-label="Navegação móvel" className="flex-1">
              <ul className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: shouldReduceMotion ? 0 : 0.04 * index,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                    className="border-b border-paper-line"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 font-display text-3xl text-ink transition-colors hover:text-wax"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-wax px-6 py-4 font-sans text-sm text-cream transition-colors hover:bg-wax-dark"
              >
                Conversar pelo WhatsApp
              </a>
              <div className="flex flex-wrap items-center justify-between gap-2 font-sans text-[0.72rem] text-graphite">
                <span>{site.whatsapp.display}</span>
                <span>{site.oab}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
