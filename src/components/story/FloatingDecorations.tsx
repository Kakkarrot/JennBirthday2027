"use client";

import { Heart, Stars } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { FLOATING_BLOSSOMS } from "./content";
import type { FloatingBlossom } from "./types";

function FloatingBlossomItem({
  blossom,
  scrollYProgress,
}: {
  blossom: FloatingBlossom;
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, blossom.travelY]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, blossom.rotateTo]);

  return (
    <motion.div
      className="floating-blossom absolute opacity-20"
      style={{
        top: blossom.top,
        left: blossom.left,
        width: blossom.size,
        height: blossom.size,
        x: blossom.driftX,
        y,
        rotate,
        backgroundColor: blossom.color,
        borderRadius: "9999px",
      }}
    />
  );
}

export function FloatingDecorations() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {FLOATING_BLOSSOMS.map((blossom) => (
        <FloatingBlossomItem
          key={`${blossom.top}-${blossom.left}`}
          blossom={blossom}
          scrollYProgress={scrollYProgress}
        />
      ))}

      <motion.div
        animate={{ y: [0, -100, 0], x: [0, 50, 0], rotate: [0, 45, 0] }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute left-[-2.5rem] top-1/4 text-[var(--rose-strong)]/10"
      >
        <Heart size={80} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 100, 0], x: [0, -50, 0], rotate: [0, -45, 0] }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-[-2.5rem] text-[var(--rose-strong)]/10"
      >
        <Stars size={100} fill="currentColor" />
      </motion.div>
    </div>
  );
}
