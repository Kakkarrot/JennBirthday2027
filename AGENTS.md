# AGENTS.md

## Project Intent

This repository is for a birthday website for Jenn. The product is a single-page story timeline designed for mobile devices only. Work should prioritize emotional pacing, visual polish, and a simple frontend deployment path.

## Current Technical Choice

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel deployment target
- Frontend only

## Non-Negotiables

- Treat mobile as the only target layout.
- Keep the site as a single-page experience unless explicitly changed.
- Do not introduce a backend, database, auth flow, API layer, or CMS unless explicitly requested.
- Keep deployment compatible with Vercel.

## Product Priorities

- Build a vertical story timeline experience.
- Favor intimate, custom presentation over generic landing page patterns.
- Optimize for photos, captions, short notes, and milestone moments.
- Keep the reading flow simple and continuous.

## Technical Guidelines

- Keep the primary experience in `src/app/page.tsx` unless a stronger split is justified.
- Add reusable components only when a pattern repeats.
- Keep content easy to edit locally.
- Use static assets where possible.
- Be conservative with dependencies.

## Design Guidelines

- Design for narrow viewports first.
- Typography and spacing should feel intentional, not template-like.
- Motion should support the story rather than compete with it.
- Avoid generic SaaS styling and desktop-driven layout decisions.

## Working Rules For Agents

- Before major implementation, confirm the current structure of the repo.
- Preserve user-authored content and copy.
- When making UI changes, explain how they improve the mobile story experience.
- Keep documentation aligned with the actual implementation state.
