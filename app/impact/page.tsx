import PhoneScreen from "@/components/PhoneScreen";

/**
 * Your Impact
 */

export default function ImpactPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/10_your_impact_screen.png"
      imageAlt="Your personal impact"
      hotspots={[
        { left: "0%", top: "87%", width: "20%", height: "13%", goto: "/dashboard", label: "Home" },
        { left: "20%", top: "87%", width: "20%", height: "13%", goto: "/impact", label: "Your Impact" },
        { left: "40%", top: "87%", width: "20%", height: "13%", goto: "/stories", label: "Stories" },
        { left: "60%", top: "87%", width: "20%", height: "13%", goto: "/pray", label: "Pray" },
        { left: "80%", top: "87%", width: "20%", height: "13%", goto: "/manage", label: "Manage" },
      ]}
    />
  );
}
