import PhoneScreen from "@/components/PhoneScreen";

/**
 * Your Impact — meals YOU personally helped provide this month
 */

export default function ImpactPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/10_your_impact_screen.png"
      imageAlt="Your personal impact this month"
      hotspots={[
        { left: "0%", top: "87%", width: "33.33%", height: "13%", goto: "/dashboard", label: "Home" },
        { left: "33.33%", top: "87%", width: "33.33%", height: "13%", goto: "/impact", label: "Your Impact" },
        { left: "66.66%", top: "87%", width: "33.34%", height: "13%", goto: "/manage", label: "Manage" },
      ]}
    />
  );
}
