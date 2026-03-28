# AGENTS

Instructions for AI coding agents working in this repository.

---

## What this repo is

A static art portfolio site built with Astro and Tailwind CSS, deployed to GitHub Pages at `addie-art.com`. Content is managed via Pages CMS (`.pages.yml`).

---

## Key files and their roles

| File / Directory | Purpose |
|---|---|
| `src/content/artwork/*.json` | One file per artwork. Fields: `title`, `image`, `alt`, `order`. |
| `src/content/pages/about.json` | About page bio text. |
| `src/content/pages/contact.json` | Contact page intro text and Facebook URL. |
| `src/content/settings.json` | Site title, tagline, commissions status. |
| `src/content/config.ts` | Astro content collection Zod schemas — update if adding fields. |
| `src/layouts/Default.astro` | Shared page shell: `<head>`, fonts, nav, `<slot />`. |
| `src/pages/index.astro` | Gallery grid — reads all artwork entries sorted by `order`. |
| `src/pages/about.astro` | About page — reads `about.json`. |
| `src/pages/contact.astro` | Contact page — reads `contact.json`. |
| `public/pics/` | Raw image files served at `/pics/<filename>`. |
| `public/CNAME` | Custom domain (`addie-art.com`). Do not edit unless domain changes. |
| `.pages.yml` | Pages CMS config — defines editable collections and media source. |
| `.github/workflows/deploy.yml` | CI: build with Astro + deploy to GitHub Pages on push to `main`. |
| `astro.config.mjs` | Astro config: `site` URL, integrations (Tailwind). |
| `tailwind.config.mjs` | Tailwind content paths, Oswald font override. |

---

## Conventions

- **Artwork order:** Controlled by the `order` field (integer). Lower numbers appear first. Increment by 10 to leave room.
- **Image paths:** Images live in `public/pics/`. The `image` field in JSON uses an absolute path starting with `/pics/`.
- **No base path:** `astro.config.mjs` sets `site` but no `base`. All internal links and image paths start with `/`.
- **Tailwind:** Use Tailwind utility classes directly in `.astro` files. The default sans font is Oswald (set globally in `tailwind.config.mjs`).
- **No TypeScript in pages:** Pages are `.astro` files; only the content collection schema (`config.ts`) uses TypeScript.

---

## Common tasks

### Add a new artwork piece

1. Copy image to `public/pics/`.
2. Create `src/content/artwork/<slug>.json`:
   ```json
   {
     "title": "Piece Title",
     "image": "/pics/filename.jpg",
     "alt": "Accessible description",
     "order": 70
   }
   ```

### Change the bio text

Edit `src/content/pages/about.json`, field `bio`.

### Toggle commissions open/closed

Edit `src/content/settings.json`, field `commissions_open` (`true` / `false`).

### Add a new field to artwork

1. Add the field to `src/content/config.ts` (Zod schema).
2. Add it to the `.pages.yml` artwork collection fields.
3. Use it in `src/pages/index.astro` via `art.data.<fieldname>`.

---

## Build and test

```bash
npm install
npm run dev     # dev server at http://localhost:4321
npm run build   # production build → dist/
```

There is no automated test suite. Verify pages render correctly with `npm run dev`.

---

## Deployment

The site auto-deploys on every push to `main` via GitHub Actions. Do not commit directly to `main` for experimental changes; use a feature branch and open a PR.
