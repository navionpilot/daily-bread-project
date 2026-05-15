"use client";

import { useRouter } from "next/navigation";

/**
 * Welcome to the Daily Bread Family — confirmation screen
 * shown after a partner completes signup.
 *
 * Updated: now cream background (matches other screens) and broader
 * "supporting" wording (was "feeding" — reflects the full mission of
 * food, shelter, supplies, and care).
 */

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="codedAppStage">
      <div className="codedPhone">
        <div className="welcomeScreen">

          <div className="welcomeStatusBar">
            <span>9:41</span>
            <div className="welcomeStatusIcons">
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

          <div className="welcomeContent">

            <div className="welcomeCheckCircle">
              <svg viewBox="0 0 24 24">
                <polyline points="5 13 10 18 19 7" />
              </svg>
            </div>

            <div className="welcomeTitle">
              <span className="welcomePre">WELCOME TO THE</span>
              <span className="welcomeBig">
                DAILY BREAD
                <br />
                FAMILY!
              </span>
            </div>

            <p className="welcomeBody">
              You are now supporting
              <br />
              children at the Mafutseni
              <br />
              Care Point every
              <br />
              single day.
            </p>

            <button
              className="welcomeCtaBtn"
              onClick={() => router.push("/dashboard")}
            >
              VIEW TODAY&apos;S TABLE
            </button>

            <img
              className="welcomeLogo"
              src="/assets/mafutseni_logo.png"
              alt="Mafutseni — Faith · Hope · Future"
            />

          </div>
        </div>
      </div>
    </main>
  );
}
