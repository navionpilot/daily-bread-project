import PhoneScreen from "@/components/PhoneScreen";

/**
 * Choose Your Impact — partner picks $1, $2, or $3 per day
 */

export default function ChoosePage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/02_choose_daily_impact_screen.png"
      imageAlt="Choose your daily impact — $1, $2, or $3 per day"
      hotspots={[
        { left: "10%", top: "30%", width: "80%", height: "13%", goto: "/checkout", label: "Choose $1 per day" },
        { left: "10%", top: "46%", width: "80%", height: "13%", goto: "/checkout", label: "Choose $2 per day" },
        { left: "10%", top: "62%", width: "80%", height: "13%", goto: "/checkout", label: "Choose $3 per day" },
      ]}
    />
  );
}
