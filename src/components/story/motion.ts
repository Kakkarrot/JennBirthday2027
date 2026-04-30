"use client";

import { useTransform, type MotionValue } from "motion/react";
import type { TimelineSide } from "./types";

export const heroReveal = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export function getTimelineSide(index: number): TimelineSide {
  return index % 2 === 0 ? "start" : "end";
}

export function useTimelineCardMotion(
  progress: MotionValue<number>,
  side: TimelineSide,
) {
  const direction = side === "start" ? -1 : 1;

  return {
    opacity: useTransform(progress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]),
    scale: useTransform(progress, [0, 0.4, 0.6, 1], [0.72, 1, 1, 0.72]),
    rotate: useTransform(
      progress,
      [0, 0.4, 0.6, 1],
      [direction * 10, direction * 5, direction * 5, direction * 10],
    ),
    x: useTransform(
      progress,
      [0, 0.4, 0.6, 1],
      [direction * 72, 0, 0, direction * 72],
    ),
    yearOffset: useTransform(progress, [0, 1], [-20, 20]),
  };
}
