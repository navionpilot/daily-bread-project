import PhoneScreen from "@/components/PhoneScreen";

/**
 * Prayer Requests for the care point
 */

export default function PrayPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/09_prayer_requests_screen.png"
      imageAlt="Prayer requests for the care point"
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
