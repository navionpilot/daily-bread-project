import PhoneScreen from "@/components/PhoneScreen";

/**
 * Welcome / Scan QR Code screen — first screen partners see
 */

export default function StartPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/01_scan_qr_screen.png"
      imageAlt="Daily Bread Project welcome screen — tap the center to begin"
      hotspots={[
        { left: "14%", top: "44%", width: "72%", height: "34%", goto: "/choose", label: "Get Started", pulse: true },
      ]}
    />
  );
}
