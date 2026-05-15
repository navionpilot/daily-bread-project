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
        { left: "0%", top: "87%", width: "20%", height: "13%", goto: "/dashboard", label: "Home" },
        { left: "20%", top: "87%", width: "20%", height: "13%", goto: "/impact", label: "Your Impact" },
        { left: "40%", top: "87%", width: "20%", height: "13%", goto: "/stories", label: "Stories" },
        { left: "60%", top: "87%", width: "20%", height: "13%", goto: "/pray", label: "Pray" },
        { left: "80%", top: "87%", width: "20%", height: "13%", goto: "/manage", label: "Manage" },
      ]}
    />
  );
}
