"use client";

import { useRouter, usePathname } from "next/navigation";

/**
 * Share the Mission — page for partners to spread the word.
 *
 * Shows the Daily Bread Project mission statement, the Mafutseni logo,
 * a QR code linking to dailybreadproject.org, and a "Share Via..." button
 * that opens the device's native share menu.
 */

const HOMEPAGE_URL = "https://dailybreadproject.org";
const SHARE_TITLE = "Daily Bread Project";
const SHARE_TEXT =
  "Help care for the local children of the Mafutseni Care Point. Every gift — $1, $2, or $3 a day — provides food, shelter, supplies, and care.";

export default function SharePage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleShare = async () => {
    // Use the native share menu when available (mobile),
    // fall back to copying the link on desktop.
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      try {
        await (navigator as any).share({
          title: SHARE_TITLE,
          text: SHARE_TEXT,
          url: HOMEPAGE_URL,
        });
      } catch {
        // user cancelled or share failed - silent
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(HOMEPAGE_URL);
        alert("Link copied to clipboard!");
      } catch {
        // clipboard not available
      }
    }
  };

  return (
    <main className="codedAppStage">
      <div className="codedPhone">
        <div className="shareScreen">

          <div className="shareStatusBar">
            <span>9:41</span>
            <div className="shareStatusIcons">
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

          <div className="shareHeader">
            <div className="shareTitle">Share the Mission</div>
            <div className="shareSubtitle">Help us reach more partners</div>
          </div>

          <div className="shareContent">

            <img
              className="shareLogo"
              src="/assets/mafutseni_logo.png"
              alt="Mafutseni — Faith · Hope · Future"
            />

            <p className="shareMission">
              The <strong>Daily Bread Project</strong> is a recurring
              micro-giving initiative supporting the Mafutseni Care Point in
              Eswatini. Every gift &mdash; $1, $2, or $3 a day &mdash; provides
              food, shelter, supplies, and care for the local children.
              Supported by Fellowship Baptist Church of Meridian, MS.
            </p>

            <div className="shareQrWrap">
              <img
                className="shareQr"
                src="/assets/qr_code_dbp.png"
                alt="QR code linking to dailybreadproject.org"
              />
            </div>

            <div className="shareUrl">dailybreadproject.org</div>

            <button className="shareBtn" onClick={handleShare}>
              <svg viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share Via...
            </button>

          </div>

          {/* Bottom nav — 4 tabs now */}
          <nav className="shareNav">
            <button
              className={`shareNavBtn${pathname === "/dashboard" ? " shareNavBtn--active" : ""}`}
              onClick={() => router.push("/dashboard")}
              aria-label="Home"
            >
              <svg viewBox="0 0 24 24">
                <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" />
              </svg>
              <span className="shareNavBtnLabel">Home</span>
            </button>
            <button
              className={`shareNavBtn${pathname === "/impact" ? " shareNavBtn--active" : ""}`}
              onClick={() => router.push("/impact")}
              aria-label="Your Impact"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="shareNavBtnLabel">Impact</span>
            </button>
            <button
              className={`shareNavBtn${pathname === "/share" ? " shareNavBtn--active" : ""}`}
              onClick={() => router.push("/share")}
              aria-label="Share"
            >
              <svg viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span className="shareNavBtnLabel">Share</span>
            </button>
            <button
              className={`shareNavBtn${pathname === "/manage" ? " shareNavBtn--active" : ""}`}
              onClick={() => router.push("/manage")}
              aria-label="Manage Giving"
            >
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="shareNavBtnLabel">Manage</span>
            </button>
          </nav>

        </div>
      </div>
    </main>
  );
}
