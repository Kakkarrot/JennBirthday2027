"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { CLOSING_COPY, CLOSING_ICONS } from "./content";
import { storyIcons } from "./icons";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function ClosingIcons() {
  return (
    <div className="flex justify-center gap-4 py-6 text-[var(--rose-strong)]">
      {CLOSING_ICONS.map((iconName) => {
        const Icon = storyIcons[iconName];

        return (
          <motion.div key={iconName} whileHover={{ scale: 1.14 }}>
            <Icon className="h-6 w-6 fill-current" />
          </motion.div>
        );
      })}
    </div>
  );
}

export function ClosingSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center space-y-12 px-6 pb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.75 }}
        className="relative"
      >
        <Quote className="absolute -left-6 -top-10 h-12 w-12 text-[var(--rose-strong)]/20" />
        <h3 className="font-display text-4xl leading-tight text-[var(--foreground-strong)] italic">
          &quot;{CLOSING_COPY.quote}&quot;
        </h3>
      </motion.div>

      <div className="space-y-4">
        <p className="px-4 text-lg leading-8 text-[var(--foreground-soft)]">
          {CLOSING_COPY.note}
        </p>
        <ClosingIcons />
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={scrollToTop}
          className="rounded-full bg-[var(--rose-strong)] px-10 py-5 font-display text-xl tracking-wide text-white italic shadow-[0_18px_40px_rgba(236,72,153,0.24)]"
        >
          {CLOSING_COPY.buttonLabel}
        </motion.button>
      </div>

      <p className="pt-20 text-[10px] uppercase tracking-[0.4em] text-[var(--rose-strong)]/40">
        {CLOSING_COPY.footer}
      </p>
    </section>
  );
}
