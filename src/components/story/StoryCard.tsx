"use client";

import type { StoryEvent, TimelineSide } from "./types";

export function StoryCard({
  event,
  side,
}: {
  event: StoryEvent;
  side: TimelineSide;
}) {
  const accentClass = side === "start" ? "right-0" : "left-0";

  return (
    <div className="glass-card relative w-[85%] overflow-hidden rounded-[2.25rem]">
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rose-strong)] backdrop-blur-sm">
          {event.year}
        </div>
      </div>

      <div className="space-y-3 p-6 pb-8">
        <h2 className="font-display text-2xl leading-tight text-[var(--foreground-strong)] italic">
          {event.title}
        </h2>
        <p className="text-base leading-7 text-[var(--foreground-soft)]">
          &quot;{event.description}&quot;
        </p>
      </div>

      <div
        className={`absolute bottom-0 ${accentClass} h-12 w-12 -m-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.16),transparent_72%)] blur-xl`}
      />
    </div>
  );
}
