"use client";

import { useRouter } from "next/navigation";

/**
 * The Daily Bread Project homepage.
 * Shows the full Concept 10 poster. Each phone screen is a clickable
 * hotspot that navigates to that screen of the working app.
 *
 * Note: the Stories, Prayer Requests, and Hourly Impact phones are
 * still visually present in the poster image but are no longer
 * clickable since those screens were removed.
 */

type Hotspot = {
  title: string;
  goto: string;
  style: { left: string; top: string; width: string; height: string };
};

const hotspots: Hotspot[] = [
  // TOP ROW — main donor flow
  {
    title: "Scan QR Code",
    goto: "/start",
    style: { left: "1.5%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Choose Your Impact",
    goto: "/choose",
    style: { left: "21.2%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Secure Checkout",
    goto: "/checkout",
    style: { left: "40.8%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Welcome Screen",
    goto: "/welcome",
    style: { left: "60.5%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Impact Dashboard",
    goto: "/dashboard",
    style: { left: "80.2%", top: "13.5%", width: "18%", height: "28%" },
  },

  // BOTTOM ROW — only the dashboard sub-screens we kept
  {
    title: "Today's Table",
    goto: "/dashboard",
    style: { left: "1.5%", top: "45%", width: "15.5%", height: "24%" },
  },
  {
    title: "Your Impact",
    goto: "/impact",
    style: { left: "68.2%", top: "45%", width: "15.5%", height: "24%" },
  },
  {
    title: "Manage Giving",
    goto: "/manage",
    style: { left: "84.8%", top: "45%", width: "13.5%", height: "24%" },
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="stage">
      <img
        className="poster"
        src="/assets/concept10-approved-app.png"
        alt="Daily Bread Project — Concept 10 approved app design"
      />

      {hotspots.map((spot) => (
        <button
          key={spot.title}
          className="hotspot"
          style={spot.style}
          onClick={() => router.push(spot.goto)}
          aria-label={spot.title}
        >
          <span>{spot.title}</span>
        </button>
      ))}

      <div className="buildNote">
        Tap any phone screen to enter that part of the app.
      </div>
    </main>
  );
}
