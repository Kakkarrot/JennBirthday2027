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

### Phase 4: Card Variants and Layout Randomization
- Add a `photo-only` card type for image-led memory moments
- Add a `text-only` card type for short notes without a photo
- Make card alignment dynamic so each page refresh gives every card a 50/50 chance to appear on the left or right
- Keep the random left/right behavior visually balanced for the mobile timeline flow

### Phase 5: Real Content
- Replace placeholder copy with the actual story
- Add curated photos and captions
- Shape the emotional arc from opening message to closing note

### Phase 6: Launch Prep
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
