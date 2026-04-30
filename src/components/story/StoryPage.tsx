"use client";

import { ClosingSection } from "./ClosingSection";
import { FloatingDecorations } from "./FloatingDecorations";
import { HeroSection } from "./HeroSection";
import { ProgressBar } from "./ProgressBar";
import { TimelineSection } from "./TimelineSection";

export function StoryPage() {
  return (
    <main className="mobile-shell relative min-h-screen overflow-x-hidden">
      <ProgressBar />
      <FloatingDecorations />

      <div className="mobile-frame relative z-10">
        <HeroSection />
        <TimelineSection />
        <ClosingSection />
      </div>
    </main>
  );
}
