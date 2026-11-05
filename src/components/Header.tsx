"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const float = document.getElementById("whatsapp-float");
    let frame = 0;

    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
      float?.setAttribute("inert", "");
      frame = requestAnimationFrame(() => {
        overlayRef.current?.querySelector<HTMLElement>("a")?.focus();
      });
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      float?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  useEffect(() => {
    if (!open) return;
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-ink/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_16px_50px_rgba(0,0,0,0.35)]" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <Logo tone="light" onClick={closeMenu} />

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">
              {navigation.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`group relative inline-flex py-2 font-clash text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                        isActive
                          ? "text-gold"
                          : "text-warm-body/80 hover:text-cream-text"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
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
            <span className="hidden font-clash text-[0.62rem] uppercase tracking-[0.16em] text-stone xl:inline">
              {site.oab}
            </span>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold px-5 py-2.5 font-clash text-[0.65rem] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-dark"
            >
              Fale com o advogado
            </a>
          </div>

          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => (open ? closeMenu() : setOpen(true))}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="relative z-60 -mr-2 inline-flex h-11 w-11 items-center justify-center text-cream-text lg:hidden"
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
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-6 pb-10 pt-24 lg:hidden"
          >
            <nav aria-label="Navegação móvel" className="flex-1">
              <ul className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: shouldReduceMotion ? 0 : 0.05 * index,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="border-b border-gold/15"
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-5 font-display text-2xl text-cream-text transition-colors hover:text-gold"
                    >
                      {item.label}
                      <ArrowUpRight
                        className="h-5 w-5 text-gold/70"
                        aria-hidden="true"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gold px-6 py-4 font-clash text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-dark"
              >
                Falar com o advogado
              </a>
              <div className="flex flex-wrap items-center justify-between gap-2 font-clash text-[0.62rem] uppercase tracking-[0.16em] text-stone">
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
