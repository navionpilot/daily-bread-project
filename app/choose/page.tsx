"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Choose Your Daily Impact — the partner picks a tier ($1/$2/$3 per day).
 *
 * Fully coded — sharp at any resolution.
 *
 * Each button currently navigates to /checkout. Later, when Stripe is
 * wired up, we'll pass the chosen tier as a query parameter so the
 * checkout knows which price to charge.
 */

type Tier = {
  daily: number;
  monthly: number;
  colorClass: "green" | "gold" | "red";
};

const TIERS: Tier[] = [
  { daily: 1, monthly: 30, colorClass: "green" },
  { daily: 2, monthly: 60, colorClass: "gold" },
  { daily: 3, monthly: 90, colorClass: "red" },
];

export default function ChoosePage() {
  const router = useRouter();

  const selectTier = (tier: Tier) => {
    // Later wire-up: router.push(`/checkout?amount=${tier.daily}`)
    router.push("/checkout");
  };

  return (
    <main className="codedAppStage">
      <div className="codedPhone">
        <div className="chooseScreen">

          {/* Fake iPhone status bar (hidden on real mobile via CSS) */}
          <div className="chooseStatusBar">
            <span>9:41</span>
            <div className="chooseStatusIcons">
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

          <div className="chooseContent">

            <div className="chooseTitle">
              BECOME A
              <br />
              DAILY BREAD PARTNER
            </div>
            <div className="chooseSubtitle">Choose your daily impact</div>

            <div className="tierList">
              {TIERS.map((tier) => (
                <button
                  key={tier.daily}
                  className={`tierBtn tierBtn--${tier.colorClass}`}
                  onClick={() => selectTier(tier)}
                  aria-label={`Give $${tier.daily} per day — $${tier.monthly} per month`}
                >
                  <div className="tierBtnTextWrap">
                    <span className="tierBtnDaily">
                      ${tier.daily} <span className="perDay">/ day</span>
                    </span>
                    <span className="tierBtnMonthly">${tier.monthly} / month</span>
                  </div>
                  <div className="tierBtnArrow">
                    <svg viewBox="0 0 24 24">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            <div className="chooseLogoWrap">
              <img
                className="chooseLogo"
                src="/assets/mafutseni_logo.png"
                alt="Mafutseni — Faith · Hope · Future"
              />
            </div>

            <div className="chooseFooter">
              <div className="chooseFooterCancel">
                <svg viewBox="0 0 24 24">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <span>Cancel anytime.</span>
              </div>
              <div className="chooseFooterDesc">
                Your gift provides food, shelter,
                <br />
                supplies, and care for the children
                <br />
                of the Mafutseni Care Point.
              </div>
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
