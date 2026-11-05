"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Aparece depois da primeira dobra para não cobrir os CTAs do hero.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="whatsapp-float"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com o advogado pelo WhatsApp ${site.whatsapp.display}`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="group fixed bottom-4 right-4 z-30 flex items-center gap-3 sm:bottom-6 sm:right-6"
        >
          <span className="pointer-events-none hidden translate-x-2 border border-paper-line bg-paper px-3.5 py-2 font-sans text-[0.72rem] text-ink opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            Falar no WhatsApp
          </span>
          <span className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-forest text-cream shadow-[0_8px_24px_rgba(18,24,18,0.22)] transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
            {!shouldReduceMotion && (
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping rounded-full bg-forest/30 [animation-duration:2.8s]"
              />
            )}
            <WhatsAppIcon className="relative h-7 w-7" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
