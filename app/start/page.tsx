"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Start screen — first screen a partner sees when entering the app.
 * (Originally the "Scan QR Code" screen, but since donors are already
 * in the web app once they reach this page, the QR has been replaced
 * with a tappable JOIN THE MISSION button.)
 *
 * Fully coded — sharp at any resolution.
 */

export default function StartPage() {
  const router = useRouter();

  return (
    <main className="codedAppStage">
      <div className="codedPhone">
        <div className="startScreen">

          {/* Fake iPhone status bar (hidden on real mobile via CSS) */}
          <div className="startStatusBar">
            <span>9:41</span>
            <div className="startStatusIcons">
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

          <div className="startContent">

            <img
              className="startTopLogo"
              src="/assets/mafutseni_logo.png"
              alt="Mafutseni — Faith · Hope · Future"
            />

            <div className="startTitle">
              <span className="startTitleBig">DAILY BREAD</span>
              <span className="startTitleSub">PROJECT</span>
            </div>

            <div className="startTagline">
              HELP FEED
              <br />
              TODAY&apos;S TABLE
            </div>

            <div className="startCtaWrap">
              <button
                className="startCtaBtn"
                onClick={() => router.push("/choose")}
              >
                <span>JOIN THE MISSION</span>
                <span className="startCtaArrow">→</span>
              </button>
            </div>

            <div className="startSponsor">
              <span className="startSponsorPrimary">
                Mafutseni Care Point · Eswatini
              </span>
              <span className="startSponsorSecondary">
                Sponsored by{" "}
                <span className="startSponsorBrand">
                  Fellowship Baptist Church
                </span>{" "}
                · Meridian, MS
              </span>
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
