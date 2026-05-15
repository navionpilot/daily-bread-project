import PhoneScreen from "@/components/PhoneScreen";

/**
 * Welcome confirmation
 */

export default function WelcomePage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/04_welcome_screen.png"
      imageAlt="Welcome to the Daily Bread Family"
      hotspots={[
        { left: "10%", top: "69%", width: "80%", height: "11%", goto: "/dashboard", label: "View Today's Table" },
      ]}
    />
  );
}
