import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function POST(req: Request) {
  try {
    const { priceId, dailyAmount } = await req.json();

    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY. Add it in Vercel environment variables." },
        { status: 500 }
      );
    }

    if (!priceId) {
      return NextResponse.json({ error: "Missing Stripe priceId." }, { status: 400 });
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${siteUrl}/thank-you?amount=${dailyAmount}`,
      cancel_url: `${siteUrl}/?canceled=true`,
      metadata: {
        project: "Daily Bread Project",
        care_point: "Mafutseni Care Point",
        daily_amount: String(dailyAmount ?? ""),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: error?.message || "Unable to create checkout session." },
      { status: 500 }
    );
  }
}
