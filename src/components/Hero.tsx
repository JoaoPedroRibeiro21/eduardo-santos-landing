"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hero, site, whatsappLink } from "@/content/site";
import { Seal } from "@/components/Seal";

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fade = (delay: number, y = 16) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-paper pt-[74px]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-2 border-b border-paper-line py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-[0.98rem] italic text-graphite">
            {hero.kicker}
          </p>
          <p className="font-sans text-[0.72rem] tracking-[0.04em] text-graphite">
            {site.oab}
          </p>
        </div>

        <div className="grid gap-12 pb-14 pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-16">
          <div className="flex flex-col lg:col-span-7">
            <motion.h1
              id="hero-title"
              className="font-display text-[clamp(2.8rem,6vw,5rem)] font-normal leading-[0.98] tracking-[-0.025em] text-ink"
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={shouldReduceMotion ? false : { y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, delay: 0.05, ease: EASE }}
                >
                  {hero.titleLead}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block font-light italic text-wax"
                  initial={shouldReduceMotion ? false : { y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, delay: 0.16, ease: EASE }}
                >
                  {hero.titleItalic}
                </motion.span>
              </span>
            </motion.h1>

            <div className="mt-9 max-w-xl">
              <motion.p
                {...fade(0.45, 12)}
                className="text-[1.05rem] leading-[1.65] text-graphite"
              >
                {hero.description}
              </motion.p>

              <motion.div
                {...fade(0.55, 12)}
                className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-wax px-6 py-3.5 font-sans text-[0.85rem] text-cream transition-colors duration-200 hover:bg-wax-dark"
                >
                  Conversar pelo WhatsApp
                </a>
                <a
                  href="#areas"
                  className="link-underline font-sans text-[0.82rem] text-ink"
                >
                  Ver as áreas de atuação
                </a>
              </motion.div>
            </div>

            <motion.p
              {...fade(0.65, 10)}
              className="mt-8 max-w-md border-t border-paper-line pt-4 font-sans text-[0.76rem] leading-relaxed text-graphite"
            >
              {hero.attendance}
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:pt-10">
            <motion.figure
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[430px] lg:ml-auto lg:mr-0"
            >
              <motion.div
                initial={
                  shouldReduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }
                }
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 1.05, delay: 0.2, ease: EASE }}
                className="relative aspect-3/4 overflow-hidden bg-paper-deep"
              >
                <Image
                  src="/images/eduardo-santos-retrato.jpg"
                  alt="Retrato de Eduardo Santos, advogado inscrito na OAB/SC"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 430px, 430px"
                  quality={90}
                  className="object-cover object-top"
                />
              </motion.div>

              <div className="absolute -left-4 bottom-12 rounded-full bg-paper p-1.5 sm:-left-6">
                <Seal id="hero-seal" className="h-[82px] w-[82px] sm:h-24 sm:w-24" />
              </div>

              <figcaption className="mt-4 flex items-center gap-4 font-sans text-[0.72rem] text-graphite">
                <span className="h-px w-8 shrink-0 bg-ink/25" aria-hidden="true" />
                Eduardo Santos, advogado. {site.oab}.
              </figcaption>
            </motion.figure>
          </div>
        </div>

        <div className="border-t border-paper-line py-6">
          <p className="max-w-4xl font-display text-[1rem] italic leading-relaxed text-graphite sm:text-[1.05rem]">
            {hero.areasLine}
          </p>
        </div>
      </div>
    </section>
  );
}
