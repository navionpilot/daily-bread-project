import PhoneScreen from "@/components/PhoneScreen";

/**
 * Hourly Impact dashboard — meal funding progress through the day
 */

export default function HourlyPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/07_hourly_impact_dashboard.png"
      imageAlt="Hourly impact updates"
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
