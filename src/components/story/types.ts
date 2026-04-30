export type TimelineSide = "start" | "end";

export type StoryIconName =
  | "calendar"
  | "heart"
  | "map-pin"
  | "sparkles"
  | "stars";

export interface StoryEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  icon: StoryIconName;
}

export interface FloatingBlossom {
  top: string;
  left: string;
  size: number;
  driftX: number;
  travelY: number;
  rotateTo: number;
  color: string;
}

export interface HeroCopy {
  eyebrow: string;
  title: string[];
  description: string;
}

export interface ClosingCopy {
  quote: string;
  note: string;
  buttonLabel: string;
  footer: string;
}
