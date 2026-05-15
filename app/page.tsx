"use client";

import { useState } from "react";

type ModalContent = {
  title: string;
  body: string;
};

const hotspots = [
  {
    title: "Scan QR Code",
    body: "This opens the Daily Bread Project onboarding screen where a new donor can start in seconds.",
    style: { left: "1.5%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Choose Your Impact",
    body: "The donor chooses $1, $2, or $3 per day. The card is charged monthly, but impact is counted daily.",
    style: { left: "21.2%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Secure Checkout",
    body: "This becomes the Stripe checkout step for credit card, debit card, Apple Pay, or Google Pay.",
    style: { left: "40.8%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Welcome Screen",
    body: "After payment, the donor becomes a Daily Bread Partner and enters the impact dashboard.",
    style: { left: "60.5%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Impact Dashboard",
    body: "This dashboard updates hourly and shows 487 / 500 meals provided, remaining meals, and daily progress.",
    style: { left: "80.2%", top: "13.5%", width: "18%", height: "28%" },
  },
  {
    title: "Today’s Table",
    body: "Shows the real-time daily meal count for the Mafutseni Care Point.",
    style: { left: "1.5%", top: "45%", width: "15.5%", height: "24%" },
  },
  {
    title: "Hourly Impact",
    body: "Shows hourly meal funding progress through the day.",
    style: { left: "18.2%", top: "45%", width: "15.5%", height: "24%" },
  },
  {
    title: "Stories",
    body: "This screen shares photos and updates from the care point.",
    style: { left: "34.8%", top: "45%", width: "15.5%", height: "24%" },
  },
  {
    title: "Prayer Requests",
    body: "Partners can pray for caregivers, children, provision, health, and education.",
    style: { left: "51.5%", top: "45%", width: "15.5%", height: "24%" },
  },
  {
    title: "Your Impact",
    body: "Shows each donor how many meals they helped provide this month.",
    style: { left: "68.2%", top: "45%", width: "15.5%", height: "24%" },
  },
  {
    title: "Manage Giving",
    body: "Lets the donor update payment method, change plan, pause, or cancel.",
    style: { left: "84.8%", top: "45%", width: "13.5%", height: "24%" },
  },
];

export default function HomePage() {
  const [modal, setModal] = useState<ModalContent | null>(null);

  return (
    <main className="stage">
      <img
        className="poster"
        src="/assets/concept10-approved-app.png"
        alt="Daily Bread Project Concept 10 approved app design"
      />

      {hotspots.map((spot) => (
        <button
          key={spot.title}
          className="hotspot"
          style={spot.style}
          onClick={() => setModal({ title: spot.title, body: spot.body })}
          aria-label={spot.title}
        >
          <span>{spot.title}</span>
        </button>
      ))}

      <div className="buildNote">
        Exact Concept 10 visual prototype. Click the phone screens.
      </div>

      {modal && (
        <div className="modalBackdrop" onClick={() => setModal(null)}>
          <div className="modalCard" onClick={(event) => event.stopPropagation()}>
            <h2>{modal.title}</h2>
            <p>{modal.body}</p>
            <button onClick={() => setModal(null)}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
