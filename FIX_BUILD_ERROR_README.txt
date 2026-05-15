FIX FOR VERCEL ERROR:
Module not found: Can't resolve 'stripe'

This fixed package includes the Stripe dependency and a temporary checkout API route.

IMPORTANT:
Your GitHub upload did not delete the old app/api/create-checkout-session/route.ts file.
That is why Vercel is still trying to build it.

Easiest fix:
1. Upload this fixed ZIP over your current repo files.
2. Commit changes.
3. Vercel will redeploy.

Alternative:
Delete the app/api/create-checkout-session folder from GitHub, then redeploy.
