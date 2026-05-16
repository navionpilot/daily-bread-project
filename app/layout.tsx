import type { Metadata, Viewport } from "next";
import "./globals.css";

/**
 * Root layout — wraps every page.
 *
 * The metadata and viewport exports here set up:
 *   - SEO and social-share preview info
 *   - PWA manifest linking (turns site into installable app)
 *   - iOS-specific home-screen + status bar styling
 *   - Theme color matching the cream brand
 */

export const metadata: Metadata = {
  title: "Daily Bread Project",
  description:
    "Help support the Mafutseni Care Point in Eswatini through daily micro-giving. $1, $2, or $3 a day provides food, shelter, supplies, and care for the local children.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Daily Bread",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/app-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Daily Bread Project",
    description:
      "Help support the Mafutseni Care Point in Eswatini through daily micro-giving.",
    url: "https://dailybreadproject.org",
    siteName: "Daily Bread Project",
    images: [
      {
        url: "/app-icon-512.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4ead8",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
