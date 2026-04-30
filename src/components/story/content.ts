import type {
  ClosingCopy,
  FloatingBlossom,
  HeroCopy,
  StoryEvent,
  StoryIconName,
} from "./types";

export const HERO_IMAGE = "https://picsum.photos/seed/romance/1200/1800";

export const HERO_COPY: HeroCopy = {
  eyebrow: "Celebrating 30 Years\nWith Many More Together",
  title: ["Happy", "Birthday", "Jenn"],
  description:
    "Time moved faster than I expected, and memories blur more than they should, so I picked some of our favorite moments to hold onto them forever.",
};

export const CLOSING_COPY: ClosingCopy = {
  quote: "Every day is a gift because you are in it.",
  note: "Thank you for your kindness, your brilliance, and for being the light that guides me home.",
  buttonLabel: "I Love You Forever",
  footer: "Created with love • 2026",
};

export const STORY_EVENTS: StoryEvent[] = [
  {
    year: "2018",
    title: "The First Gaze",
    description:
      "In that cozy little corner, time stood still. I didn't just see you; I felt like I finally found a piece of me I didn't know was missing.",
    image: "https://picsum.photos/seed/first-meet-romantic/800/1200",
    icon: "heart",
  },
  {
    year: "2019",
    title: "Golden Mornings",
    description:
      "That sunrise trek wasn't just about the view from the top. It was about seeing the world anew through your eyes, bright and full of hope.",
    image: "https://picsum.photos/seed/sunrise-romance/800/1200",
    icon: "map-pin",
  },
  {
    year: "2021",
    title: "Our Quiet Magic",
    description:
      "When the question hung in the air, the stars were our only witnesses. Saying 'yes' wasn't just a moment, it was the start of our eternity.",
    image: "https://picsum.photos/seed/proposal-date/800/1200",
    icon: "stars",
  },
  {
    year: "2023",
    title: "The Heart's Anchor",
    description:
      "Every room we've filled with laughter, every meal we've shared, every dream we've whispered, this home is the beautiful map of us.",
    image: "https://picsum.photos/seed/home-life-pink/800/1200",
    icon: "sparkles",
  },
  {
    year: "Today",
    title: "Everglow",
    description:
      "You are the melody that plays through all my days. Happy Birthday to the love of my life. My heart belongs wherever you are.",
    image: "https://picsum.photos/seed/birthday-pink-theme/800/1200",
    icon: "calendar",
  },
];

export const CLOSING_ICONS: StoryIconName[] = ["heart", "sparkles", "stars"];

export const FLOATING_BLOSSOMS: FloatingBlossom[] = [
  {
    top: "18%",
    left: "8%",
    size: 100,
    driftX: 20,
    travelY: -180,
    rotateTo: 90,
    color: "var(--petal-strong)",
  },
  {
    top: "30%",
    left: "58%",
    size: 120,
    driftX: -20,
    travelY: -240,
    rotateTo: 180,
    color: "var(--rose-soft)",
  },
  {
    top: "44%",
    left: "20%",
    size: 140,
    driftX: 20,
    travelY: -300,
    rotateTo: 270,
    color: "var(--petal-strong)",
  },
  {
    top: "56%",
    left: "68%",
    size: 160,
    driftX: -20,
    travelY: -360,
    rotateTo: 360,
    color: "var(--rose-soft)",
  },
  {
    top: "72%",
    left: "10%",
    size: 180,
    driftX: 20,
    travelY: -420,
    rotateTo: 450,
    color: "var(--petal-strong)",
  },
  {
    top: "84%",
    left: "55%",
    size: 200,
    driftX: -20,
    travelY: -480,
    rotateTo: 540,
    color: "var(--rose-soft)",
  },
];
