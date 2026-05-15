# Daily Bread Project

A modern micro-giving platform to feed children daily at the Mafutseni Care Point in Eswatini.
Sponsored by Fellowship Baptist Church, Meridian, MS.

## What this is

A Next.js web app structured as a phone-style interactive flow:

- **Homepage** (`/`) — the full Concept 10 marketing poster with clickable phone mockups
- **Individual screens** — Welcome, Choose Impact, Checkout, Today's Table, Stories, Prayer, etc.
- Each screen uses the approved Concept 10 mockup imagery with invisible tap zones over the buttons

## Project structure

```
app/
  globals.css            — global styles
  layout.tsx             — root layout
  page.tsx               — homepage with the poster
  start/page.tsx         — welcome / QR landing
  choose/page.tsx        — choose $1 / $2 / $3 per day
  checkout/page.tsx      — placeholder for Stripe checkout
  welcome/page.tsx       — "welcome to the Daily Bread family"
  dashboard/page.tsx     — Today's Table (main dashboard)
  hourly/page.tsx        — Hourly Impact
  stories/page.tsx       — Stories from Mafutseni
  pray/page.tsx          — Prayer Requests
  impact/page.tsx        — Your personal impact
  manage/page.tsx        — Manage Giving

components/
  PhoneScreen.tsx        — shared component used by all screens

public/assets/
  concept10-approved-app.png       — the full poster (used by homepage)
  daily_bread_concept10_logo_*.png — brand logo (for future use)
  fellowship_provider_header.png   — Fellowship Baptist header (for future use)
  eswatini_flag_footer_strip.png   — Eswatini flag strip (for future use)
  screens/                          — 11 individual phone-screen mockups
```

## Tech stack

- Next.js 14 (React)
- TypeScript
- Plain CSS (no Tailwind, no UI framework)

## Roadmap

This is the visual prototype phase. Coming next:
1. Connect Stripe for real recurring payments
2. Connect Supabase for live meal counts and user accounts
3. Rebuild each phone screen in code (instead of mockup images) for crisp rendering
4. Add push notifications
5. Connect custom domain (`dailybreadproject.org`)
