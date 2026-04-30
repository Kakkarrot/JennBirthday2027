import {
  Calendar,
  Heart,
  MapPin,
  Sparkles,
  Stars,
  type LucideIcon,
} from "lucide-react";
import type { StoryIconName } from "./types";

export const storyIcons: Record<StoryIconName, LucideIcon> = {
  calendar: Calendar,
  heart: Heart,
  "map-pin": MapPin,
  sparkles: Sparkles,
  stars: Stars,
};
