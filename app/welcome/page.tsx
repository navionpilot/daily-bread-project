import PhoneScreen from "@/components/PhoneScreen";

/**
 * Welcome to the Daily Bread Family — confirmation after payment
 */

export default function WelcomePage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/04_welcome_screen.png"
      imageAlt="Welcome to the Daily Bread Family"
      hotspots={[
        { left: "16%", top: "67%", width: "68%", height: "8%", goto: "/dashboard", label: "View Today's Table", pulse: true },
      ]}
    />
  );
}
