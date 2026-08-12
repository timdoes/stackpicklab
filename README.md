# StackPick Lab

Practical, honest comparisons of AI writing and SEO tools for solopreneurs and small teams. Affiliate-supported; disclosures on every money page.

**Site:** [stackpicklab.com](https://stackpicklab.com) (planned)  
**Stack:** [Astro](https://astro.build) + Tailwind CSS — static export for **Cloudflare Pages**

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # output in dist/
npm run preview  # preview production build
```

## Cloudflare Pages deploy

Connect this GitHub repo in the [Cloudflare Pages](https://developers.cloudflare.com/pages/) dashboard (or use Wrangler).

| Setting | Value |
|--------|--------|
| Framework preset | Astro (or None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `18` or `20` (set `NODE_VERSION=20` in environment variables if needed) |
| Root directory | `/` (repo root) |

After the first deploy, attach the custom domain `stackpicklab.com` in Cloudflare Pages → Custom domains.

### Optional: Wrangler

```bash
npx wrangler pages deploy dist --project-name=stackpicklab
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Hero, email capture placeholder, top comparisons |
| `/tools` | Tools directory stub |
| `/compare/[slug]` | Comparison pages with Best for / Skip if |
| `/guides` | Guides stub |
| `/blog` + articles | Research comparisons |
| `/start-here` | Onboarding path |
| `/newsletter` | Email capture placeholder |
| `/about` | Mission + AI-assisted content note |
| `/disclosure` | FTC affiliate disclosure |
| `/privacy` | Privacy policy |
| `/thanks` | Post-subscribe placeholder |

## Affiliate links

1. Copy `affiliate-links.example.json` → `affiliate-links.json` (gitignored).
2. Replace `EXAMPLE.com` / `YOUR_ID` placeholders with real affiliate URLs.
3. Mirror the same URLs in `src/data/affiliates.ts` (MVP reads from that module).

Placeholder keys: Copy.ai, Surfer SEO, Semrush, Jasper, Frase, Writesonic.

## Editorial notes

- Comparisons are **research-based** (features, pricing positioning, workflows)—not fabricated long personal trials.
- **AffiliateDisclosure** appears near the top of money pages; footer links to `/disclosure`.
- `/about` states that content is **AI-assisted** and editorially reviewed.

## License

Private / all rights reserved unless otherwise noted.
