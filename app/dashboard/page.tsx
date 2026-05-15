import PhoneScreen from "@/components/PhoneScreen";

/**
 * Today's Table — main live meal-counter dashboard
 */

export default function DashboardPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/05_impact_dashboard_screen.png"
      imageAlt="Today's Table — live meal counter"
      hotspots={[
        { left: "0%", top: "87%", width: "33.33%", height: "13%", goto: "/dashboard", label: "Home" },
        { left: "33.33%", top: "87%", width: "33.33%", height: "13%", goto: "/impact", label: "Your Impact" },
        { left: "66.66%", top: "87%", width: "33.34%", height: "13%", goto: "/manage", label: "Manage" },
      ]}
    />
  );
}
