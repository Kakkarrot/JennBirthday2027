# JennBirthday2027

Mobile-only birthday website for Jenn, built as a single-page Next.js app.

## Current Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- ESLint
- Vercel deployment target

## Product Direction

This project is a frontend-only experience.

Constraints:
- Mobile layout only
- Single page only
- No backend, database, auth, or CMS
- Static-first deployment on Vercel

## App Structure

The site should live primarily in one route:
- `src/app/page.tsx`: the full scrolling story experience
- `src/app/layout.tsx`: metadata and app shell
- `src/app/globals.css`: global theme tokens and baseline styles

As the project grows, reusable UI can be added under `src/components/`.

## Roadmap

### Phase 1: Scaffold and Foundation
- Set up the Next.js app in this repo
- Confirm single-page architecture
- Keep the project Vercel-ready
- Establish baseline mobile-first styling

Status: completed

### Phase 2: Story Timeline Shell
- Build the vertical timeline layout
- Create reusable sections for memories and milestones
- Support dates, short notes, captions, and photos
- Keep the experience optimized for narrow viewports

### Phase 3: Visual Direction
- Define color tokens and typography
- Build a more personal, less template-like visual language
- Add restrained motion for reveals and pacing
- Refine section spacing and reading rhythm

### Phase 4: Real Content
- Replace placeholder copy with the actual story
- Add curated photos and captions
- Shape the emotional arc from opening message to closing note

### Phase 5: Launch Prep
- Test on real mobile viewport sizes
- Optimize images and performance
- Check accessibility basics
- Deploy to Vercel production

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Immediate Next Steps

1. Replace the placeholder homepage with the first real timeline layout
2. Decide the visual direction for typography, color, and motion
3. Define the story sections and content model for memories
4. Start adding real photos and personal copy
