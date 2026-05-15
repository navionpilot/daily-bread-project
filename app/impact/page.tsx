import PhoneScreen from "@/components/PhoneScreen";

/**
 * Your Impact — meals YOU personally helped provide this month
 */

export default function ImpactPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/10_your_impact_screen.png"
      imageAlt="Your personal impact"
      hotspots={[
        { left: "0%", top: "92%", width: "20%", height: "8%", goto: "/dashboard", label: "Home" },
        { left: "20%", top: "92%", width: "20%", height: "8%", goto: "/impact", label: "Your Impact" },
        { left: "40%", top: "92%", width: "20%", height: "8%", goto: "/stories", label: "Stories" },
        { left: "60%", top: "92%", width: "20%", height: "8%", goto: "/pray", label: "Pray" },
        { left: "80%", top: "92%", width: "20%", height: "8%", goto: "/manage", label: "Manage" },
      ]}
    />
  );
}
