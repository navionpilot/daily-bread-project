"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Shared component that displays a phone-app screen mockup with
 * invisible clickable areas ("hotspots") layered over the buttons.
 *
 * If a hotspot has the same `goto` path as the current page, a small
 * gold indicator bar is drawn on top of it so the user always knows
 * which screen they're currently viewing.
 *
 * Hotspots also briefly flash on tap so the user gets feedback that
 * their tap registered before the page transitions.
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
  const currentPath = usePathname();

  return (
    <main className="appStage">
      <div className="appPhone">
        <img src={imageSrc} alt={imageAlt} className="appPhoneImage" />

        {hotspots.map((spot, i) => {
          const isActive = spot.goto === currentPath;
          return (
            <button
              key={i}
              className={`appHotspot${isActive ? " appHotspotActive" : ""}`}
              style={{
                left: spot.left,
                top: spot.top,
                width: spot.width,
                height: spot.height,
              }}
              onClick={() => {
                if (!isActive) router.push(spot.goto);
              }}
              aria-label={spot.label || "Continue"}
              aria-current={isActive ? "page" : undefined}
            />
          );
        })}
      </div>

      <Link href="/" className="appBackHome">
        ← Back to overview
      </Link>
    </main>
  );
}
