import PhoneScreen from "@/components/PhoneScreen";

/**
 * Choose Your Impact — $1/$2/$3 per day
 */

export default function ChoosePage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/02_choose_daily_impact_screen.png"
      imageAlt="Choose your daily impact"
      hotspots={[
        { left: "8%", top: "28%", width: "84%", height: "14%", goto: "/checkout", label: "Give $1 per day" },
        { left: "8%", top: "44%", width: "84%", height: "13%", goto: "/checkout", label: "Give $2 per day" },
        { left: "8%", top: "59%", width: "84%", height: "14%", goto: "/checkout", label: "Give $3 per day" },
      ]}
    />
  );
}
