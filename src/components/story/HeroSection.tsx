"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { HERO_COPY } from "./content";
import { heroReveal } from "./motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(255,248,251,0.78)_0%,rgba(255,245,247,0.96)_100%)] px-6 text-center">
      <div className="relative z-10 space-y-6">
        <motion.p
          {...heroReveal}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="whitespace-pre-line text-xs font-medium uppercase tracking-[0.34em] text-[var(--rose-strong)]"
        >
          {HERO_COPY.eyebrow}
        </motion.p>

        <motion.h1
          {...heroReveal}
          transition={{ delay: 0.5, duration: 0.95 }}
          className="font-display text-5xl leading-[0.9] text-[var(--foreground-strong)] italic"
        >
          {HERO_COPY.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...heroReveal}
          transition={{ delay: 0.7, duration: 0.95 }}
          className="mx-auto max-w-[18rem] text-base leading-7 text-[var(--foreground-soft)]"
        >
          {HERO_COPY.description}
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--rose-strong)]/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll Down
        </span>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
