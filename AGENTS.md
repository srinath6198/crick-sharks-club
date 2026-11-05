<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


React + TypeScript
Next.js
Tailwind CSS
React/Next Image optimization
Schema.org structured data
Google Search Console
Google Maps


crick-sharks-club/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── academy/
│   │   └── page.tsx
│   ├── programs/
│   │   └── page.tsx
│   ├── coaches/
│   │   └── page.tsx
│   ├── facilities/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── achievements/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Programs.tsx
│   ├── Coaches.tsx
│   ├── Facilities.tsx
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── Location.tsx
│   └── Footer.tsx
│
├── public/
│   ├── images/
│   └── logo.png
│
├── package.json
└── tsconfig.json


--------------------------------------------------

src/
├── app/
│   ├── page.tsx                  ← Home (uses all components)
│   ├── layout.tsx                ← Navbar + Footer on every page
│   ├── sitemap.ts                ← /sitemap.xml (all 15 routes)
│   ├── robots.ts                 ← /robots.txt
│   ├── about/page.tsx
│   ├── academy/page.tsx + sub-routes
│   ├── programs/page.tsx
│   ├── coaches/page.tsx
│   ├── facilities/page.tsx
│   ├── gallery/page.tsx
│   ├── achievements/page.tsx
│   ├── testimonials/page.tsx
│   ├── blog/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Programs.tsx
│   ├── Coaches.tsx
│   ├── Facilities.tsx
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── Location.tsx
│   └── Footer.tsx
│
public/
└── images/                       ← ready for your assets
