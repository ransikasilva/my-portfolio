
# Portfolio Rebuild — Neethila Ransika Silva

Replace the current generic single-page portfolio with a real 4-page site using your actual content (bio, experience, education, 13 projects, 23 certifications, contact).

## Pages & routes

- `/` — Home: Hero, About (Who I Am / What I Do), Work Experience, Education, Technical Skills, Honors & Awards, Workshops & Events
- `/portfolio` — All 13 projects (2 featured highlighted), masonry layout, tags, demo links
- `/certifications` — 23 certs grouped into 4 categories (ML/AI, Cybersecurity, Frameworks & Languages, Other)
- `/contact` — Contact form + email/LinkedIn/GitHub links

Each route gets its own `head()` with unique title + description + og tags for SEO.

## Design

Keep the vibrant light theme, Urbanist/Epilogue typography, and masonry style already established. Reuse existing tokens in `src/styles.css`. Add a shared `Header` (nav with Home / Portfolio / Certifications / Contact) and `Footer` component in `__root.tsx` so it appears across all pages.

## Content source

Store all the structured data (bio, experience, education, skills, projects, workshops, awards, certifications) in a single typed file `src/data/portfolio.ts`, imported by each route. Easy to edit later.

## Images — needs your input

The 18 images referenced (profile `pp.png`, 13 project images, 5 workshop images) are not in this project. Two options:

1. **You upload them** — drop them into chat and I'll wire them up at `src/assets/images/...` with the exact filenames.
2. **I generate placeholders** — AI-generated images matching each project's theme until you upload the real ones.

## Contact form

Two options:
1. **Formspree** (matches your old setup) — you give me your Formspree endpoint URL and I wire it up.
2. **Lovable Cloud** — store submissions in a database + optional email; no third-party account needed.

## Technical notes

- File-based routing under `src/routes/` (`index.tsx`, `portfolio.tsx`, `certifications.tsx`, `contact.tsx`)
- Shared nav in `__root.tsx` with `<Outlet />`
- All colors via semantic tokens (no hardcoded hex in components)
- External links (LinkedIn, GitHub, demo URLs) open in new tabs with `rel="noopener"`

## Open questions before I build

1. Upload images now, or use generated placeholders?
2. Contact form: Formspree (give URL) or Lovable Cloud?
3. Keep current vibrant orange/teal palette, or adjust?
