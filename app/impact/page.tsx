"use client";

import { useRouter, usePathname } from "next/navigation";

/**
 * Your Impact — personalized stats screen for the logged-in partner.
 *
 * Shows the partner's cumulative contribution: "Because of YOU, X children
 * supported this month." Includes a share button for social sharing.
 *
 * Number is hardcoded for now. When Supabase is wired up, it'll come
 * from the partner's giving history.
 */

const PARTNER_CONTRIBUTION = 1461;

export default function ImpactPage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleShare = () => {
    // Later: real share functionality (Web Share API or copy-link)
    // For now, just no-op
  };

  return (
    <main className="codedAppStage">
      <div className="codedPhone">
        <div className="impactScreen">

          <div className="impactStatusBar">
            <span>9:41</span>
            <div className="impactStatusIcons">
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

          <div className="impactHeader">
            <div className="impactTitle">Your Impact</div>
            <div className="impactSubtitle">Because of you</div>
          </div>

          <div className="impactContent">

            <div className="impactStatCard">
              <span className="impactStatLine1">You&apos;ve provided</span>
              <span className="impactStatNumber">
                {PARTNER_CONTRIBUTION.toLocaleString()}
              </span>
              <span className="impactStatLabel">Children Supported</span>
              <span className="impactStatPeriod">This Month</span>
            </div>

            <p className="impactMessage">
              You are changing
              <br />
              lives every day.
            </p>

            <button className="impactShareBtn" onClick={handleShare}>
              SHARE YOUR IMPACT
            </button>

          </div>

          {/* Bottom nav — 3 tabs */}
          <nav className="impactNav">
            <button
              className={`impactNavBtn${pathname === "/dashboard" ? " impactNavBtn--active" : ""}`}
              onClick={() => router.push("/dashboard")}
              aria-label="Home"
            >
              <svg viewBox="0 0 24 24">
                <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" />
              </svg>
              <span className="impactNavBtnLabel">Home</span>
            </button>
            <button
              className={`impactNavBtn${pathname === "/impact" ? " impactNavBtn--active" : ""}`}
              onClick={() => router.push("/impact")}
              aria-label="Your Impact"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="impactNavBtnLabel">Impact</span>
            </button>
            <button
              className={`impactNavBtn${pathname === "/manage" ? " impactNavBtn--active" : ""}`}
              onClick={() => router.push("/manage")}
              aria-label="Manage Giving"
            >
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="impactNavBtnLabel">Manage</span>
            </button>
          </nav>

        </div>
      </div>
    </main>
  );
}
