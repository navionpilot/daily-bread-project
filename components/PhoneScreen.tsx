"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Shared component that displays a single phone-app screen
 * with invisible clickable areas ("hotspots") layered over the buttons.
 * Each hotspot navigates to another route when tapped.
 */

export type Hotspot = {
  left: string;
  top: string;
  width: string;
  height: string;
  goto: string;
  label?: string;
  pulse?: boolean;
};

type Props = {
  imageSrc: string;
  imageAlt: string;
  hotspots: Hotspot[];
};

export default function PhoneScreen({ imageSrc, imageAlt, hotspots }: Props) {
  const router = useRouter();

  return (
    <main className="appStage">
      <div className="appPhone">
        <img src={imageSrc} alt={imageAlt} className="appPhoneImage" />

        {hotspots.map((spot, i) => (
          <button
            key={i}
            className={`appHotspot ${spot.pulse ? "appHotspotPulse" : ""}`}
            style={{
              left: spot.left,
              top: spot.top,
              width: spot.width,
              height: spot.height,
            }}
            onClick={() => router.push(spot.goto)}
            aria-label={spot.label || "Continue"}
          />
        ))}
      </div>

      <Link href="/" className="appBackHome">
        ← Back to overview
      </Link>
    </main>
  );
}
