"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

/**
 * Secure Checkout — donor enters card info and confirms.
 *
 * Fully coded — sharp at any resolution.
 *
 * The form fields are visual placeholders for now. When Stripe is wired
 * in the final phase, they'll be replaced with Stripe Elements (the
 * secure card-entry components that handle real card data safely).
 *
 * Tapping "JOIN THE MISSION" currently navigates to /welcome.
 * Later, it'll submit the Stripe payment first, then navigate on success.
 */

export default function CheckoutPage() {
  const router = useRouter();

  // Local form state — purely for UX feedback; no real data leaves the browser.
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = () => {
    // Later wire-up: submit to Stripe, then on success router.push("/welcome")
    router.push("/welcome");
  };

  return (
    <main className="codedAppStage">
      <div className="codedPhone">
        <div className="checkoutScreen">

          {/* Fake iPhone status bar (hidden on real mobile via CSS) */}
          <div className="checkoutStatusBar">
            <span>9:41</span>
            <div className="checkoutStatusIcons">
              <svg width="13" height="9" viewBox="0 0 13 9" fill="currentColor">
                <rect x="0" y="6" width="2" height="3" rx="0.4" />
                <rect x="3" y="4" width="2" height="5" rx="0.4" />
                <rect x="6" y="2" width="2" height="7" rx="0.4" />
                <rect x="9" y="0" width="2" height="9" rx="0.4" />
              </svg>
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
                <path d="M1.2 3.2c1.5-1.4 3.3-2.1 5.3-2.1s3.8 0.7 5.3 2.1" />
                <path d="M3.4 5c1-0.7 2.1-1.1 3.1-1.1s2.1 0.4 3.1 1.1" />
                <circle cx="6.5" cy="7.4" r="0.6" fill="currentColor" />
              </svg>
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="0.7">
                <rect x="0.5" y="0.5" width="19" height="9" rx="2" />
                <rect x="2" y="2" width="16" height="6" rx="1" fill="currentColor" stroke="none" />
                <rect x="20" y="3" width="1.5" height="4" rx="0.6" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>

          <div className="checkoutContent">

            {/* Shield icon */}
            <div className="checkoutShield">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
                <path d="M12 8v6M9 11h6" />
              </svg>
            </div>

            <div className="checkoutTitle">SECURE CHECKOUT</div>

            <div className="checkoutWelcome">
              Your support
              <br />
              changes lives.
              <br />
              <strong>Thank you!</strong>
            </div>

            <div className="checkoutFormStack">
              <input
                className="checkoutInput"
                type="text"
                inputMode="numeric"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                autoComplete="cc-number"
              />
              <div className="checkoutRow">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM / YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  autoComplete="cc-exp"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  autoComplete="cc-csc"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="ZIP"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  autoComplete="postal-code"
                />
              </div>
              <button
                className="checkoutCtaBtn"
                onClick={handleSubmit}
                aria-label="Join the mission"
              >
                JOIN THE MISSION
              </button>
            </div>

            <div className="checkoutLogoWrap">
              <img
                className="checkoutLogo"
                src="/assets/mafutseni_logo.png"
                alt="Mafutseni — Faith · Hope · Future"
              />
            </div>

            <div className="checkoutSecure">
              <div className="checkoutSecureRow">
                <svg viewBox="0 0 24 24">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <span className="checkoutSecureText">
                  Your donation is secure
                  <br />
                  and encrypted.
                </span>
              </div>
              <div className="checkoutPoweredBy">Powered by Stripe</div>
            </div>

          </div>
        </div>
      </div>

      <Link href="/" className="appBackHome">
        ← Back to overview
      </Link>
    </main>
  );
}
