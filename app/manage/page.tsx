"use client";

import { useRouter, usePathname } from "next/navigation";

/**
 * Manage Giving — partner manages their recurring donation.
 *
 * Shows current plan, next payment date, payment method, with options
 * to update card or pause/cancel.
 *
 * All values are hardcoded for now. When Stripe is wired up, these
 * come from the partner's Stripe subscription:
 *   - amount/interval (Your Plan)
 *   - current_period_end (Next Payment)
 *   - default_payment_method.card.last4/brand (Payment Method)
 *
 * The action buttons currently don't do anything. Later wire-up:
 *   - "Update Payment Method" → Stripe Customer Portal
 *   - "Pause or Cancel" → confirmation modal -> Stripe subscription update
 */

const CURRENT_PLAN = {
  dailyAmount: 1,
  monthlyAmount: 30,
  nextPayment: "June 14, 2026",
  cardLast4: "4242",
  cardBrand: "Visa",
};

export default function ManagePage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleUpdatePayment = () => {
    // Later: open Stripe Customer Portal
  };

  const handlePauseCancel = () => {
    // Later: open confirmation modal
  };

  const handleHelp = () => {
    // Later: open email / chat / contact form
  };

  return (
    <main className="codedAppStage">
      <div className="codedPhone">
        <div className="manageScreen">

          <div className="manageStatusBar">
            <span>9:41</span>
            <div className="manageStatusIcons">
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

          <div className="manageHeader">
            <div className="manageTitle">Manage Giving</div>
          </div>

          <div className="manageContent">

            <div className="managePlanList">
              <div className="managePlanRow">
                <span className="managePlanLabel">Your Plan</span>
                <span className="managePlanValue">
                  ${CURRENT_PLAN.dailyAmount} / day
                  <span className="managePlanValueSub">
                    ${CURRENT_PLAN.monthlyAmount} / month
                  </span>
                </span>
              </div>
              <div className="managePlanRow">
                <span className="managePlanLabel">Next Payment</span>
                <span className="managePlanValue">
                  {CURRENT_PLAN.nextPayment}
                </span>
              </div>
              <div className="managePlanRow">
                <span className="managePlanLabel">Payment Method</span>
                <span className="managePlanValue">
                  •••• {CURRENT_PLAN.cardLast4}
                  <span className="managePlanValueSub">
                    {CURRENT_PLAN.cardBrand}
                  </span>
                </span>
              </div>
            </div>

            <button className="manageActionBtn" onClick={handleUpdatePayment}>
              <svg viewBox="0 0 24 24">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Update Payment Method
            </button>

            <button className="manageActionBtn" onClick={handlePauseCancel}>
              Pause or Cancel
            </button>

            <div className="manageHelp" onClick={handleHelp} role="button" tabIndex={0}>
              <div className="manageHelpIcon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="manageHelpText">
                <strong>Questions?</strong>
                We&apos;re here to help.
              </div>
            </div>

          </div>

          {/* Bottom nav — 3 tabs */}
          <nav className="manageNav">
            <button
              className={`manageNavBtn${pathname === "/dashboard" ? " manageNavBtn--active" : ""}`}
              onClick={() => router.push("/dashboard")}
              aria-label="Home"
            >
              <svg viewBox="0 0 24 24">
                <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" />
              </svg>
              <span className="manageNavBtnLabel">Home</span>
            </button>
            <button
              className={`manageNavBtn${pathname === "/impact" ? " manageNavBtn--active" : ""}`}
              onClick={() => router.push("/impact")}
              aria-label="Your Impact"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="manageNavBtnLabel">Impact</span>
            </button>
            <button
              className={`manageNavBtn${pathname === "/manage" ? " manageNavBtn--active" : ""}`}
              onClick={() => router.push("/manage")}
              aria-label="Manage Giving"
            >
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="manageNavBtnLabel">Manage</span>
            </button>
          </nav>

        </div>
      </div>
    </main>
  );
}
