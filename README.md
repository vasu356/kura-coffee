# Kura Coffee

> Single-origin Indian specialty coffee, roasted in Chennai.

A production-ready, multi-page React website for a specialty coffee brand — built to demonstrate professional frontend engineering skills.

## Live Demo

[kuracoffee.vercel.app](https://kuracoffee.vercel.app) *(deploy link — see below)*

---

## What this project demonstrates

- **React 18 + TypeScript** — fully typed components and data layer
- **React Router v7** — multi-page SPA with nested routes, dynamic params, and 404 handling
- **Tailwind CSS v4** — utility-first styling with a custom design token system
- **Component architecture** — reusable, composable UI components with clear separation of concerns
- **Design system** — custom CSS variables for color, typography, and spacing; consistent across all pages
- **Responsive design** — mobile-first layouts that work across all breakpoints
- **Interaction design** — hover states, image swaps, add-to-cart feedback, FAQ accordion, filter system
- **Performance** — lazy image loading with fallbacks, minimal dependencies
- **Production deployment** — Vercel SPA routing config, build optimization

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, product grid, story, process, subscriptions, journal, newsletter |
| `/shop` | Shop — filterable product grid by roast level and process |
| `/shop/:id` | Product Detail — images, specs, add to cart, related products |
| `/about` | About — brand story, farms, team |
| `/journal` | Journal — article listing with featured post |
| `/journal/:id` | Article — full blog post with related articles |
| `/subscriptions` | Subscriptions — plan selection, FAQ accordion |
| `/cafes` | Cafes — wholesale partners map and contact |
| `*` | 404 — custom not found page |

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| TypeScript | 5.6 | Type safety |
| Vite | 6.3 | Build tool |
| React Router | 7.13 | Client-side routing |
| Tailwind CSS | 4.1 | Styling |
| Lucide React | 0.487 | Icons |

---

## Getting Started

```bash
# Clone
git clone https://github.com/yourusername/kura-coffee.git
cd kura-coffee

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deploying to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
# Follow prompts: Framework = Vite, build = dist
```

### Option 2 — Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy**

The `vercel.json` file is already configured for SPA routing — all routes correctly redirect to `index.html`.

---

## Project Structure

```
kura-coffee/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/       # Navigation, Footer, Layout wrapper
│   │   │   ├── ui/           # shadcn/ui primitives
│   │   │   ├── Divider.tsx
│   │   │   ├── ImageWithFallback.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ProductCard.tsx
│   │   ├── data/
│   │   │   └── index.ts      # All content: products, posts, cafes
│   │   └── pages/
│   │       ├── Home.tsx
│   │       ├── Shop.tsx
│   │       ├── ProductDetail.tsx
│   │       ├── About.tsx
│   │       ├── Journal.tsx
│   │       ├── JournalPost.tsx
│   │       ├── Subscriptions.tsx
│   │       ├── Cafes.tsx
│   │       └── NotFound.tsx
│   ├── styles/
│   │   ├── theme.css         # CSS variables: colors, fonts, radius
│   │   ├── tailwind.css      # Tailwind + Google Fonts import
│   │   └── index.css         # Root style imports
│   └── main.tsx              # BrowserRouter + route definitions
├── public/
│   └── favicon.svg
├── vercel.json               # SPA rewrite rules
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

The site uses a custom design token system via CSS variables:

| Token | Value | Usage |
|---|---|---|
| `--background` | `#F5F1EB` | Warm off-white base |
| `--foreground` | `#2B1F18` | Deep espresso text |
| `--accent` | `#C97B5E` | Terracotta — CTAs, highlights |
| `--secondary` | `#EFEAE1` | Section backgrounds |
| `--font-serif` | Instrument Serif | Headlines |
| `--font-sans` | Inter | Body text |

---


