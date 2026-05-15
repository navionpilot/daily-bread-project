import PhoneScreen from "@/components/PhoneScreen";

/**
 * Prayer Requests — lift up the children and caregivers
 */

export default function PrayPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/09_prayer_requests_screen.png"
      imageAlt="Prayer requests for the care point"
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
