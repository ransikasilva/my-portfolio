
# Techy Kinetic Bento — Redesign

Rebuild the homepage and global chrome around the selected "Techy kinetic bento" direction. Locked tokens: warm off-white `#FAF7F2`, near-black `#0F1020`, coral `#FF5A36`, cyan `#22D3EE`, lilac `#C4B5FD`. Typography: **Syne** (headings), **Plus Jakarta Sans** (body), **Space Mono** (metadata).

## Global

- **Replace `src/styles.css` tokens** with the locked palette (oklch equivalents), swap font imports to Syne + Plus Jakarta Sans + Space Mono, expose `.font-mono` via `--font-mono`.
- **New `<FloatingNav />`** (in `__root.tsx`) — fixed, centered, glassmorphism capsule (`backdrop-blur-xl`, translucent white, soft border). Shrinks on scroll: padding tightens, brand label collapses to a pulsing dot at ≥40px scroll. Links Home / Portfolio / Lab / Contact + small "Menu" CTA. Smooth transition.
- **Footer**: minimalist mono-labeled strip matching the new tone.

## Home (`/`) — Bento layout (12-col grid)

Tiles, top to bottom:
1. **Hero tile** (col-span 8) — dotted grid bg, blurred cyan orb top-right, mono eyebrow "Available for new challenges", giant Syne headline `NEETHILA / BUILDING / INTELLIGENT` with stroked middle word.
2. **Stats tile** (col-span 4) — coral bg, "Active Deployments / 14+", shimmering progress bar.
3. **About profile tile** (col-span 4) — NS gradient avatar + bio + Colombo/Hybrid mono chips.
4. **Toolkit kinetic ticker** (col-span 8) — dark `#0F1020` tile with two opposing marquees of stack names (Python, React, TensorFlow, Next.js, PyTorch, PostgreSQL...) in giant Syne, mono metadata footer.
5. **Featured project tile** (col-span 6) — pulled from `projects[0]` (Emergency Dept AI), numbered `01 / N`, decorative gradient circle, hover state shifts title to coral.
6. **Core stack tile** (col-span 3) — cyan bg, Syne stacked list.
7. **"Start a project" tile** (col-span 3) — dashed border, links to `/contact`.
8. **Experience strip** — two dark/light bento tiles with OCTAVE + WIWIS.AI roles, mono dates.
9. **Education bento** — 5 tiles (mixed sizes) for each entry with mono period labels.
10. **Honors + Workshops bento row** — Coderally & IEEE Xtreme as colored hero tiles, then 5 workshop image tiles in masonry sub-grid.

All content sourced from existing `src/data/portfolio.ts` — no data changes.

## Other routes

- **`/portfolio`, `/certifications`, `/contact`** — restyle to match: warm bg, bento tiles, mono metadata labels, capsule CTAs, glass cards. Same content. Contact form keeps mailto submit.

## Animations

Add to `src/styles.css`:
- `@keyframes marquee` / `marquee2` (opposing) + `shimmer`
- Utility classes for the kinetic tiles

## Files touched

- `src/styles.css` — tokens, fonts, keyframes
- `src/routes/__root.tsx` — FloatingNav (with scroll-shrink) + Footer
- `src/routes/index.tsx` — full bento rebuild
- `src/routes/portfolio.tsx` — restyle to new system
- `src/routes/certifications.tsx` — restyle to new system
- `src/routes/contact.tsx` — restyle to new system

Existing `src/data/portfolio.ts` stays as-is. Placeholder images unchanged until you upload real ones.
