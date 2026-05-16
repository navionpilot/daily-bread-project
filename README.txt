DAILY BREAD PROJECT - Supporters Count + Days Update

What changes:

1. DASHBOARD
   - Now pulls live count of ACTIVE PARTNERS from the database
   - Label: "CARE POINT SUPPORTERS" (was "CHILDREN SUPPORTED")
   - Stats: Supporter Goal / Current Supporters / Still Needed
   - Goal hardcoded to 500 in code (change there if needed)
   - When Stripe creates a partner, count auto-increments

2. IMPACT
   - Shows number of DAYS supporting (was "1,461 children")
   - Placeholder value of "1 Day" until authentication is wired up
   - Then will calculate from each partner's signup date

FILES IN THIS ZIP (2 files):
  app/dashboard/page.tsx
  app/impact/page.tsx

Instructions in chat with Claude.
