import PhoneScreen from "@/components/PhoneScreen";

/**
 * Stories — photos and updates from the Mafutseni Care Point
 */

export default function StoriesPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/08_stories_screen.png"
      imageAlt="Stories from the Mafutseni Care Point"
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
