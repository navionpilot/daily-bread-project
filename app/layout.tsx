import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Bread Project",
  description: "Help Feed Today's Table at the Mafutseni Care Point.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
