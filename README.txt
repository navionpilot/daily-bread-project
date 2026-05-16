DAILY BREAD PROJECT - Desktop View Scaling Fix

What changed:
The site renders as a phone-shaped window in the middle of a dark background.
On phones, this fills the whole screen (perfect). On desktop, it was stuck
at only 300px wide — looking tiny on a big monitor.

This update makes the phone view scale up based on screen size:

- Phone (< 520px wide):    Fills entire screen (no change - was already correct)
- Default desktop (small): 360px wide (up from 300)
- Tablet/medium desktop:   420px wide
- Large desktop (1200px+): 460px wide

The aspect ratio stays the same (phone-shape) but the phone is much more
prominent and easy to read on a computer screen.

FILES IN THIS ZIP (1 file):
  app/globals.css       - just CSS

Instructions in chat with Claude.
