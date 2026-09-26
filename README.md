# OpenGridLabs website

Marketing site for OpenGridLabs, a startup co-building studio. Built with React 19, TypeScript, Vite, Tailwind CSS v4
and Motion.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run lint
```

Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Where things live

- `src/pages/` — one folder per route (see `src/App.tsx`)
- `src/components/` — shared UI (nav, footer, hero, headings, cards)
- `src/data/journey.ts` — the five journey stages and 90-day plan, shared by the home and "How it works" pages
- `src/index.css` — theme colours (light + dark), fonts and the `.pop` sticker utilities
- `src/utils/calendly.ts` — opens the booking popup
