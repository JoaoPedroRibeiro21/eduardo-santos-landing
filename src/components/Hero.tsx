"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { site, whatsappLink } from "@/content/site";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fade = (delay: number, y = 22) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.8,
      delay: shouldReduceMotion ? 0 : delay,
      ease: EASE,
    },
  });

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ink pt-[80px]"
    >
      {/* Faixa fotográfica sangrada, exclusiva do desktop */}
      <div className="absolute bottom-0 right-0 top-[80px] hidden w-[38%] lg:block">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.1,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: EASE,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/eduardo-santos-retrato.jpg"
            alt="Retrato de Eduardo dos Santos, advogado inscrito na OAB/SC"
            fill
            preload
            sizes="38vw"
            quality={90}
            className="object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-ink via-ink/25 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px bg-gold/30"
          />

          <div className="absolute bottom-8 right-8 text-right">
            <p className="font-clash text-[0.6rem] uppercase tracking-[0.2em] text-cream-text/80">
              {site.name}
            </p>
            <p className="mt-1 font-clash text-[0.55rem] uppercase tracking-[0.2em] text-gold/80">
              {site.oab}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Fio vertical com a cidade, à esquerda */}
      <div
        aria-hidden="true"
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="h-10 w-px bg-gold/40" />
        <span className="whitespace-nowrap font-clash text-[0.55rem] uppercase tracking-[0.3em] text-stone [writing-mode:vertical-rl]">
          Itapoá · Santa Catarina
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[520px] w-[520px] rounded-full bg-gold/[0.05] blur-[130px]"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl grid-cols-1 items-center px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="w-full max-w-[680px] lg:col-span-7">
          <motion.div
            {...fade(0.05, 16)}
            className="flex flex-wrap items-center gap-4"
          >
            <span
              aria-hidden="true"
              className="hairline-gold block h-px w-14 shrink-0"
            />
            <span className="font-clash text-[0.62rem] uppercase leading-relaxed tracking-[0.22em] text-gold sm:text-[0.68rem] sm:tracking-[0.24em]">
              <span className="sm:hidden">
                {site.name} | {site.oab}
              </span>
              <span className="hidden sm:inline">
                {site.name} · {site.specialty} | {site.oab}
              </span>
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: EASE,
            }}
            className="mt-7 font-display text-[2.2rem] font-bold leading-[1.06] text-cream-text sm:text-5xl md:text-[3.3rem] lg:text-[3.7rem]"
          >
            Orientação jurídica com{" "}
            <em className="text-gold-gradient italic">clareza</em> para as
            decisões que importam.
          </motion.h1>

          <motion.p
            {...fade(0.45)}
            className="mt-6 max-w-lg text-base leading-relaxed text-warm-body sm:text-[1.05rem]"
          >
            Atuação em família, inventário, imobiliário, consumidor e criminal,
            com atendimento presencial em Itapoá/SC e on-line. Escuta atenta,
            sigilo profissional e informação transparente em cada etapa.
          </motion.p>

          <motion.div
            {...fade(0.55)}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 font-clash text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-dark sm:text-xs"
            >
              Falar com o advogado
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <Link
              href="#areas"
              className="inline-flex items-center justify-center border border-gold/40 px-7 py-4 font-clash text-[0.68rem] uppercase tracking-[0.2em] text-cream-text transition-colors duration-300 hover:border-gold hover:text-gold sm:text-xs"
            >
              Áreas de atuação
            </Link>
          </motion.div>

          <motion.div
            {...fade(0.65, 12)}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gold/15 pt-5 font-clash text-[0.6rem] uppercase tracking-[0.18em] text-stone"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-gold/70" aria-hidden="true" />
              {site.location}
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-gold/25" />
            <span>Presencial e on-line</span>
          </motion.div>

          {/* Fotografia no mobile */}
          <motion.figure
            {...fade(0.55, 20)}
            className="mt-12 md:mx-auto lg:hidden"
          >
            <div className="relative aspect-4/5 w-full max-w-[380px] overflow-hidden border-l border-gold/30 bg-ink-soft md:max-w-[440px]">
              <Image
                src="/images/eduardo-santos-retrato.jpg"
                alt="Retrato de Eduardo dos Santos, advogado inscrito na OAB/SC"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 767px) 380px, 440px"
                quality={90}
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/70 to-transparent"
              />
            </div>
            <figcaption className="mt-3 font-clash text-[0.55rem] uppercase tracking-[0.18em] text-gold">
              {site.oab}
            </figcaption>
          </motion.figure>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
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
