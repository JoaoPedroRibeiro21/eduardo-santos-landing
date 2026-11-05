"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Aparece após a primeira dobra para não cobrir os CTAs do hero.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="whatsapp-float"
          id="whatsapp-float"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com o advogado pelo WhatsApp ${site.whatsapp.display}`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="group fixed bottom-4 right-4 z-30 flex items-center gap-3 sm:bottom-6 sm:right-6"
        >
          <span className="pointer-events-none hidden translate-x-2 border border-line bg-cream px-3.5 py-2 font-clash text-[0.65rem] uppercase tracking-[0.14em] text-ink-body opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            Fale com o advogado
          </span>
          <span className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-linen/40 bg-jade text-white shadow-[0_10px_30px_rgba(35,67,69,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
            {!shouldReduceMotion && (
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping rounded-full bg-jade/35 [animation-duration:2.5s]"
              />
            )}
            <WhatsAppIcon className="relative h-7 w-7" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
