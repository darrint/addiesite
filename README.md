# Addie's Art Show

Personal art portfolio and commission site for Addie, showcasing original cartoon and illustration artwork.

**Live site:** https://addie-art.com

---

## Tech stack

| Layer | Tool |
|---|---|
| Static site generator | [Astro](https://astro.build) v4 |
| CSS framework | [Tailwind CSS](https://tailwindcss.com) v3 via `@astrojs/tailwind` |
| CMS | [Pages CMS](https://pagescms.org) — edits files in this repo via GitHub |
| Hosting | Cloudflare Pages with custom domain |

---

## Project structure

```
.
├── public/
│   └── pics/                 # Artwork image files (managed via Pages CMS)
├── src/
│   ├── content/
│   │   ├── artwork/          # One JSON file per artwork (managed via Pages CMS)
│   │   ├── pages/
│   │   │   ├── about.json    # About page text
│   │   │   └── contact.json  # Contact page text + Facebook URL
│   │   └── config.ts         # Astro content collection schema
│   ├── data/
│   │   └── settings.json     # Site-wide settings (title, tagline, commissions)
│   ├── layouts/
│   │   └── Default.astro     # Shared HTML shell, nav, fonts
│   └── pages/
│       ├── index.astro       # Gallery home page
│       ├── about.astro       # About page
│       └── contact.astro     # Contact / commission page
├── .pages.yml                # Pages CMS configuration
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Development

```bash
npm install
npm run dev       # start dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

---

## Deployment

Cloudflare Pages deploys automatically on every push to `main`.

**Cloudflare Pages build settings:**

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version (env var) | `NODE_VERSION=22` |

Custom domain is managed in the Cloudflare Pages dashboard.

---

## Content editing (Pages CMS)

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open this repository.
3. Use the **Artwork** collection to add, edit, or reorder pieces.
4. Use **Pages → About** and **Pages → Contact** to update page text.
5. Use **Site settings** to change the tagline or toggle commissions on/off.
6. All saves commit directly to the `main` branch and trigger a redeploy.

To upload new artwork images, use the **Media** section in Pages CMS — files land in `public/pics/`.

---

## Adding artwork manually

1. Copy the image to `public/pics/`.
2. Create a new JSON file in `src/content/artwork/`, e.g. `my-new-piece.json`:
   ```json
   {
     "title": "My New Piece",
     "image": "/pics/my-new-piece.jpg",
     "alt": "Description of the artwork",
     "order": 70
   }
   ```
3. Push to `main`. The site rebuilds automatically.
