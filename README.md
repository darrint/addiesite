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
| Hosting | GitHub Pages with custom domain |
| CI/CD | GitHub Actions |

---

## Project structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions: build + deploy to gh-pages
├── public/
│   ├── pics/                 # Artwork image files (managed via Pages CMS)
│   └── CNAME                 # Custom domain: addie-art.com
├── src/
│   ├── content/
│   │   ├── artwork/          # One JSON file per artwork (managed via Pages CMS)
│   │   ├── pages/
│   │   │   ├── about.json    # About page text (managed via Pages CMS)
│   │   │   └── contact.json  # Contact page text + Facebook URL
│   │   ├── config.ts         # Astro content collection schema
│   │   └── settings.json     # Site-wide settings (title, tagline, etc.)
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

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which:

1. Installs dependencies
2. Runs `astro build`
3. Uploads `dist/` to GitHub Pages

### Custom domain setup

`public/CNAME` contains `addie-art.com`. In your domain registrar, point the domain to GitHub Pages using either:

- **Apex domain (`addie-art.com`):** Add `A` records pointing to GitHub's IP addresses:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- **`www` subdomain:** Add a `CNAME` record pointing `www` → `<your-github-username>.github.io`

In the GitHub repository settings → Pages, set the custom domain to `addie-art.com` and enable "Enforce HTTPS".

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
