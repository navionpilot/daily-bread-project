"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

/**
 * Today's Care — main dashboard showing community growth.
 *
 * The count is the number of ACTIVE partners (Care Point Supporters).
 * Pulled live from the `partners` table on every page load.
 *
 * When Stripe is wired up, every new successful signup adds a row to
 * `partners` with status='active' — and this dashboard count goes up
 * automatically. No manual updates needed.
 */

// Hardcoded goal — change here if needed. (Could move to Supabase config later.)
const SUPPORTER_GOAL = 500;
const CIRCUMFERENCE = 2 * Math.PI * 42;

export default function DashboardPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [supporters, setSupporters] = useState<number>(0);

  useEffect(() => {
    async function fetchSupporterCount() {
      try {
        // Count active partners in the database.
        const { count, error } = await supabase
          .from("partners")
          .select("*", { count: "exact", head: true })
          .eq("status", "active");

        if (!error && count !== null) {
          setSupporters(count);
        }
      } catch (err) {
        console.error("Could not fetch supporter count:", err);
        // Fallback: just leave at 0
      }
    }

    fetchSupporterCount();
  }, []);

  const goal = SUPPORTER_GOAL;
  const percent = goal > 0 ? Math.round((supporters / goal) * 100) : 0;
  const remaining = Math.max(0, goal - supporters);
  const dashOffset = goal > 0
    ? CIRCUMFERENCE * (1 - Math.min(supporters / goal, 1))
    : CIRCUMFERENCE;

  return (
    <main className="codedAppStage">
      <div className="codedPhone">
        <div className="dashScreen">

          <div className="dashStatusBar">
            <span>9:41</span>
            <div className="dashStatusIcons">
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

          <div className="dashHeader">
            <div className="dashTitleBlock">
              <span className="dashTitle">TODAY&apos;S CARE</span>
              <span className="dashSubtitle">Today&apos;s progress</span>
            </div>
            <button className="dashBell" aria-label="Notifications">
              <svg viewBox="0 0 24 24">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10 21a2 2 0 0 0 4 0" />
              </svg>
            </button>
          </div>

          <div className="dashContent">

            <div className="dashRingWrap">
              <div className="dashRing">
                <svg className="dashRingSvg" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#b0181d" />
                      <stop offset="50%" stopColor="#d89a22" />
                      <stop offset="100%" stopColor="#2c8a48" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(20, 17, 12, 0.08)"
                    strokeWidth="7"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={dashOffset}
                    style={{ transition: "stroke-dashoffset 0.8s ease-out" }}
                  />
                </svg>
                <div className="dashRingCenter">
                  <span className="dashRingLabel">CARE POINT SUPPORTERS</span>
                  <span className="dashRingNumber">
                    {supporters.toLocaleString()} <span className="total">/ {goal.toLocaleString()}</span>
                  </span>
                  <span className="dashRingFunded">{percent}% FUNDED</span>
                </div>
              </div>
            </div>

            <div className="dashStats">
              <div className="dashStatRow">
                <span className="dashStatLabel">Supporter Goal</span>
                <span className="dashStatValue">{goal.toLocaleString()}</span>
              </div>
              <div className="dashStatRow">
                <span className="dashStatLabel">Current Supporters</span>
                <span className="dashStatValue">{supporters.toLocaleString()}</span>
              </div>
              <div className="dashStatRow">
                <span className="dashStatLabel">Still Needed</span>
                <span className="dashStatValue">{remaining.toLocaleString()}</span>
              </div>
            </div>

          </div>

          <nav className="dashNav">
            <button
              className={`dashNavBtn${pathname === "/dashboard" ? " dashNavBtn--active" : ""}`}
              onClick={() => router.push("/dashboard")}
              aria-label="Home"
            >
              <svg viewBox="0 0 24 24">
                <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z" />
              </svg>
              <span className="dashNavBtnLabel">Home</span>
            </button>
            <button
              className={`dashNavBtn${pathname === "/impact" ? " dashNavBtn--active" : ""}`}
              onClick={() => router.push("/impact")}
              aria-label="Your Impact"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="dashNavBtnLabel">Impact</span>
            </button>
            <button
              className={`dashNavBtn${pathname === "/share" ? " dashNavBtn--active" : ""}`}
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
              <span className="dashNavBtnLabel">Share</span>
            </button>
            <button
              className={`dashNavBtn${pathname === "/manage" ? " dashNavBtn--active" : ""}`}
              onClick={() => router.push("/manage")}
              aria-label="Manage Giving"
            >
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="dashNavBtnLabel">Manage</span>
            </button>
          </nav>

        </div>
      </div>
    </main>
  );
}
