"use client";

import { useRouter } from "next/navigation";

/**
 * The Daily Bread Project homepage.
 * Shows the cleaned-up Concept 10 poster (top phones + push
 * notifications + features footer — middle "Your Impact Dashboard"
 * row was removed because those screens aren't part of the public
 * marketing flow).
 *
 * The 5 phones in the top row are clickable; they navigate to
 * the donor sign-up flow.
 */

type Hotspot = {
  title: string;
  goto: string;
  style: { left: string; top: string; width: string; height: string };
};

const hotspots: Hotspot[] = [
  {
    title: "Scan QR Code",
    goto: "/start",
    style: { left: "1.5%", top: "18.4%", width: "18%", height: "38%" },
  },
  {
    title: "Choose Your Impact",
    goto: "/choose",
    style: { left: "21.2%", top: "18.4%", width: "18%", height: "38%" },
  },
  {
    title: "Secure Checkout",
    goto: "/checkout",
    style: { left: "40.8%", top: "18.4%", width: "18%", height: "38%" },
  },
  {
    title: "Welcome Screen",
    goto: "/welcome",
    style: { left: "60.5%", top: "18.4%", width: "18%", height: "38%" },
  },
  {
    title: "Impact Dashboard",
    goto: "/dashboard",
    style: { left: "80.2%", top: "18.4%", width: "18%", height: "38%" },
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="stage">
      <img
        className="poster"
        src="/assets/concept10-approved-app.png"
        alt="Daily Bread Project — Help Feed Today's Table"
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
        Tap any phone screen to step through the donor flow.
      </div>
    </main>
  );
}
