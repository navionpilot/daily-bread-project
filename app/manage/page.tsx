import PhoneScreen from "@/components/PhoneScreen";

/**
 * Manage Giving — update payment, pause, or cancel
 */

export default function ManagePage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/11_manage_giving_screen.png"
      imageAlt="Manage your giving"
      hotspots={[
        { left: "0%", top: "87%", width: "33.33%", height: "13%", goto: "/dashboard", label: "Home" },
        { left: "33.33%", top: "87%", width: "33.33%", height: "13%", goto: "/impact", label: "Your Impact" },
        { left: "66.66%", top: "87%", width: "33.34%", height: "13%", goto: "/manage", label: "Manage" },
      ]}
    />
  );
}
