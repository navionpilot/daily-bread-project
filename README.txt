DAILY BREAD PROJECT - Live Dashboard Update

Wires the dashboard to pull LIVE data from Supabase.

What changes:
- Dashboard reads from the `support_counts` table on every page load
- "487 / 500" is no longer hardcoded - it comes from your database
- Change the number in Supabase, refresh the dashboard, see it update
- Falls back to 487/500 if the database is offline

FILES IN THIS ZIP (1 file):
  app/dashboard/page.tsx    - updated dashboard with Supabase fetch

Instructions in chat with Claude.
