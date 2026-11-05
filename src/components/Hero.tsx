"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { site, whatsappLink } from "@/content/site";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fade = (delay: number, y = 22) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-ink via-ink-soft/70 to-ink"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-5 lg:gap-10">
          <div className="flex flex-col gap-7 lg:col-span-3">
            <motion.div
              {...fade(0.05, 16)}
              className="flex flex-wrap items-center gap-4"
            >
              <span
                aria-hidden="true"
                className="hairline-gold block h-px w-14 shrink-0"
              />
              <span className="font-clash text-[0.62rem] uppercase leading-relaxed tracking-[0.22em] text-gold sm:text-[0.7rem] sm:tracking-[0.25em]">
                <span className="sm:hidden">
                  {site.name} | {site.oab}
                </span>
                <span className="hidden sm:inline">
                  {site.name} · {site.specialty} | {site.oab}
                </span>
              </span>
            </motion.div>

            <motion.h1
              {...fade(0.15, 30)}
              id="hero-title"
              className="font-display text-[2.2rem] font-bold leading-[1.08] text-cream-text sm:text-5xl md:text-[3.35rem] lg:text-[3.7rem]"
            >
              Orientação jurídica com{" "}
              <em className="text-gold-gradient italic">clareza</em> para as
              decisões que importam.
            </motion.h1>

            <motion.p
              {...fade(0.28)}
              className="max-w-xl text-base leading-relaxed text-warm-body sm:text-lg"
            >
              Atuação em família, inventário, imobiliário, consumidor e
              criminal, com atendimento presencial em Itapoá/SC e on-line.
              Escuta atenta, sigilo profissional e informação transparente em
              cada etapa.
            </motion.p>

            <motion.div
              {...fade(0.4)}
              className="mt-2 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gold px-6 py-4 font-clash text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-dark sm:px-8 sm:text-xs"
              >
                Falar com o advogado
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <Link
                href="#areas"
                className="inline-flex items-center justify-center border border-gold/40 px-6 py-4 font-clash text-[0.68rem] uppercase tracking-[0.2em] text-cream-text transition-colors duration-300 hover:border-gold hover:text-gold sm:px-8 sm:text-xs"
              >
                Áreas de atuação
              </Link>
            </motion.div>

            <motion.p
              {...fade(0.5, 12)}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 font-clash text-[0.6rem] uppercase tracking-[0.18em] text-stone"
            >
              <span className="flex items-center gap-2">
                <MapPin className="h-3 w-3 text-gold/70" aria-hidden="true" />
                {site.location}
              </span>
              <span aria-hidden="true" className="h-3 w-px bg-gold/30" />
              <span>Presencial e on-line</span>
            </motion.p>
          </div>

          <motion.div
            {...(shouldReduceMotion
              ? {}
              : {
                  initial: { opacity: 0, x: 36 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.9, delay: 0.2, ease: EASE },
                })}
            className="flex justify-center lg:col-span-2 lg:justify-end"
          >
            <div className="relative mb-6 w-[290px] sm:w-[360px] lg:w-full lg:max-w-[430px]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-t-full border border-gold/25"
              />
              <div className="relative aspect-3/4 overflow-hidden rounded-t-full bg-ink-soft">
                <Image
                  src="/images/eduardo-santos-retrato.jpg"
                  alt="Retrato de Eduardo Santos, advogado inscrito na OAB/SC"
                  fill
                  priority
                  sizes="(max-width: 640px) 290px, (max-width: 1024px) 360px, 430px"
                  quality={90}
                  className="object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/75 to-transparent"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap border border-gold/30 bg-ink px-4 py-2.5">
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <span className="font-clash text-[0.55rem] uppercase tracking-[0.22em] text-gold">
                  {site.oab}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-gold/50" />
        </motion.div>
      </div>
    </section>
  );
}
