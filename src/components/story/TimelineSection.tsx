"use client";

import { STORY_EVENTS } from "./content";
import { TimelineEvent } from "./TimelineEvent";

export function TimelineSection() {
  return (
    <section className="relative px-1 pb-10 pt-20">
      <div className="timeline-line absolute bottom-0 top-0 left-1/2 w-px -translate-x-1/2 opacity-35" />

      {STORY_EVENTS.map((event, index) => (
        <TimelineEvent
          key={`${event.year}-${event.title}`}
          event={event}
          index={index}
        />
      ))}
    </section>
  );
}
