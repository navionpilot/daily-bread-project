import PhoneScreen from "@/components/PhoneScreen";

/**
 * Welcome / Scan QR Code screen — first screen partners see
 */

export default function StartPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/01_scan_qr_screen.png"
      imageAlt="Daily Bread Project welcome screen"
      hotspots={[
        { left: "16%", top: "48%", width: "68%", height: "30%", goto: "/choose", label: "Get Started", pulse: true },
      ]}
    />
  );
}
