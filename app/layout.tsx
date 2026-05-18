import type { Metadata, Viewport } from "next";
import "./globals.css";

/**
 * Root layout — wraps every page.
 *
 * Metadata covers:
 *   - SEO (Google, Bing) - title, description, robots, canonical
 *   - PWA manifest (installable app)
 *   - iOS-specific home-screen + status bar
 *   - Open Graph (Facebook, LinkedIn, iMessage share previews)
 *   - Twitter Card (Twitter share previews)
 *   - Theme color matching cream brand
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://dailybreadproject.org"),

  title: {
    default: "Daily Bread Project — Support Mafutseni Care Point",
    template: "%s | Daily Bread Project",
  },

  description:
    "Help support the Mafutseni Care Point in Eswatini through daily micro-giving. $1, $2, or $3 a day provides food, shelter, supplies, and care for the local children. Supported by Fellowship Baptist Church of Meridian, MS.",

  keywords: [
    "Mafutseni Care Point",
    "Eswatini",
    "Swaziland children",
    "daily giving",
    "micro-giving",
    "child sponsorship",
    "Fellowship Baptist Church",
    "Meridian MS",
    "African mission",
    "recurring donation",
  ],

  authors: [{ name: "Fellowship Baptist Church · Meridian, MS" }],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

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
      "Help support the Mafutseni Care Point in Eswatini through daily micro-giving. $1, $2, or $3 a day provides food, shelter, supplies, and care.",
    url: "https://dailybreadproject.org",
    siteName: "Daily Bread Project",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daily Bread Project · Mafutseni Care Point in Eswatini",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Daily Bread Project",
    description:
      "Help support the Mafutseni Care Point in Eswatini through daily micro-giving.",
    images: ["/og-image.png"],
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
