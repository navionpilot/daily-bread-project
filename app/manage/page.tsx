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
        { left: "0%", top: "87%", width: "20%", height: "13%", goto: "/dashboard", label: "Home" },
        { left: "20%", top: "87%", width: "20%", height: "13%", goto: "/impact", label: "Your Impact" },
        { left: "40%", top: "87%", width: "20%", height: "13%", goto: "/stories", label: "Stories" },
        { left: "60%", top: "87%", width: "20%", height: "13%", goto: "/pray", label: "Pray" },
        { left: "80%", top: "87%", width: "20%", height: "13%", goto: "/manage", label: "Manage" },
      ]}
    />
  );
}
