# Kura Coffee

> Single-origin Indian specialty coffee brand website — roasted to taste like where it came from.

A production-ready, multi-page React SPA for a specialty coffee brand. Built with modern frontend tooling and a custom design system.

## Live Demo

[View Live](https://kura-coffee.vercel.app/)

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, product grid, brand story, process, subscriptions, journal, newsletter |
| `/shop` | Shop — filterable product grid by roast level and processing method |
| `/shop/:id` | Product Detail — image gallery, specs, add to cart, related products |
| `/about` | About — brand story, farm profiles, team |
| `/journal` | Journal — featured article + post grid |
| `/journal/:id` | Article — full blog post with related articles |
| `/subscriptions` | Subscriptions — plan selection with FAQ accordion |
| `/cafes` | Cafes — wholesale partner profiles |
| `*` | 404 — custom not found page |

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.3 | UI framework |
| TypeScript | 5.6 | Type safety |
| Vite | 6.3 | Build tool & dev server |
| React Router | 7.13 | Client-side routing |
| Tailwind CSS | 4.1 | Utility-first CSS framework |
| Lucide React | 0.487 | Icon library |

---

## Features

- **Design System** — custom CSS variables for colors, typography, and spacing, consistent across all pages
- **Component Architecture** — reusable, composable UI components with clear separation of concerns
- **Responsive Design** — mobile-first layouts with a responsive grid system
- **Interaction Design** — hover states, image swaps, add-to-cart feedback, FAQ accordion, filter chips, scroll-aware navigation
- **Performance** — lazy image loading with fallback component, minimal dependencies
- **Type Safety** — fully typed components and data layer with TypeScript
- **SPA Routing** — 9 client-side routes with dynamic params, catch-all 404 handling, scroll restoration

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck
```

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/       # Navigation, Footer, Layout wrapper
│   │   ├── ImageWithFallback.tsx
│   │   ├── Navigation.tsx
│   │   └── ProductCard.tsx
│   ├── data/
│   │   └── index.ts      # All content: products, journal posts, cafes, plans
│   └── pages/
│       ├── Home.tsx
│       ├── Shop.tsx
│       ├── ProductDetail.tsx
│       ├── About.tsx
│       ├── Journal.tsx
│       ├── JournalPost.tsx
│       ├── Subscriptions.tsx
│       ├── Cafes.tsx
│       └── NotFound.tsx
├── styles/
│   ├── tailwind.css      # Tailwind + Google Fonts import
│   ├── theme.css         # CSS design tokens: colors, fonts, utilities
│   └── index.css         # Root style imports
├── main.tsx              # App entry point with route definitions
└── ...
```

---

## Design System

The site uses a custom coffee-inspired design system defined via CSS custom properties:

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#FAF8F5` | Warm off-white base |
| `--foreground` | `#1C1410` | Deep espresso text |
| `--accent` | `#B5623E` | Terracotta — CTAs, highlights |
| `--section-a` | `#FAF8F5` | Warm white section |
| `--section-b` | `#F0EBE3` | Warm beige section |
| `--section-c` | `#E8DDD3` | Deeper warm tan |
| `--font-serif` | Playfair Display | Headlines |
| `--font-sans` | DM Sans | Body text |

---

## Deployment

Deploy to Vercel with zero configuration:

```bash
npm install -g vercel
vercel

# Or connect your GitHub repository via vercel.com
# The included vercel.json handles SPA routing automatically.
```

---

## License

MIT