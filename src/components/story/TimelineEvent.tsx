"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { storyIcons } from "./icons";
import { getTimelineSide, useTimelineCardMotion } from "./motion";
import { StoryCard } from "./StoryCard";
import type { StoryEvent } from "./types";

function StoryMarker({ iconName }: { iconName: StoryEvent["icon"] }) {
  const Icon = storyIcons[iconName];

  return (
    <div className="absolute left-4 top-0 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[var(--rose-strong)] text-white shadow-[0_18px_40px_rgba(236,72,153,0.24)]">
      <Icon className="h-5 w-5" />
    </div>
  );
}

export function TimelineEvent({
  event,
  index,
}: {
  event: StoryEvent;
  index: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const side = getTimelineSide(index);
  const alignmentClass = side === "start" ? "items-start pl-8" : "items-end pr-8";
  const yearPositionClass = side === "start" ? "right-4" : "left-4";
  const { opacity, scale, rotate, x, yearOffset } = useTimelineCardMotion(
    scrollYProgress,
    side,
  );

  return (
    <motion.article
      ref={ref}
      style={{ opacity, scale, rotate, x }}
      className={`relative mb-40 flex flex-col items-center px-6 ${alignmentClass}`}
    >
      <StoryMarker iconName={event.icon} />
      <StoryCard event={event} side={side} />

      <motion.div
        style={{ y: yearOffset }}
        className={`absolute -bottom-8 ${yearPositionClass} font-display text-6xl italic text-[var(--rose-strong)]/6 select-none`}
      >
        {event.year}
      </motion.div>
    </motion.article>
  );
}
