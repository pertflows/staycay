# StayCay — Curated Travel Experiences

Custom website for StayCay, built with **Next.js 14** (App Router) + **Tailwind CSS**, deployed on **Vercel**.

## Quick Start

```bash
npm install
git init && git add . && git commit -m "initial build"
gh repo create staycay --public --source=. --push
```

Connect the repo to [Vercel](https://vercel.com/new) — it auto-detects Next.js, zero config.

## Project Structure

```
app/
├── layout.js          # Root layout (nav, footer, fonts)
├── page.js            # Home page
├── globals.css        # Brand tokens, base styles, animations
├── packages/page.js   # Packages & Vendors
├── membership/page.js # Membership tiers + comparison
├── about/page.js      # Founder story + FAQ accordion
└── contact/page.js    # Contact form + intake fields

components/
├── Navbar.js          # Scroll-aware nav with mobile drawer
├── Footer.js          # Footer with links, social, newsletter
└── useReveal.js       # Scroll-triggered animation hook
```

## Brand Tokens (Easy Swap)

All colors and fonts are CSS variables in `app/globals.css`:

```css
:root {
  --color-navy:     #1B2D3D;
  --color-coral:    #C4704B;
  --color-gold:     #D4A853;
  --color-sand:     #E8DDD3;
  --color-cream:    #FAF7F2;
  --color-charcoal: #2D2D2D;
  --color-muted:    #8B8B8B;
  --color-sage:     #7A8E7A;

  --font-display: "Playfair Display", serif;
  --font-body:    "DM Sans", sans-serif;
}
```

When Britney's designer delivers the final palette and fonts, update these variables and the Google Fonts `<link>` in `app/layout.js`. Everything propagates automatically.

## Integrations To Wire Up

| Integration | Status | Notes |
|-------------|--------|-------|
| Stripe (membership billing) | Placeholder buttons | Create Stripe account, add checkout API |
| Instagram feed | Placeholder grid | Need IG API token or embed widget |
| Contact form submission | Frontend only | Wire to email API (Resend, SendGrid, etc.) |
| Booking platform | Research phase | Evaluating HoneyBook, Stripe, Calendly |

## Deploy

Push to GitHub → connect repo in Vercel dashboard. Auto-deploys on every push to `main`.

## Dev Notes

- **Scroll animations** use Intersection Observer via `useReveal.js` — no external animation libraries needed
- **Mobile nav** is a full-screen drawer with staggered entry animations
- **Contact form** conditionally shows intake fields when "Book an Experience" is selected
- **FAQ accordion** on About page uses local state — no external accordion library
- All placeholder images/content are clearly marked for easy replacement
