import PhoneScreen from "@/components/PhoneScreen";

/**
 * Stories
 */

export default function StoriesPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/08_stories_screen.png"
      imageAlt="Stories from Mafutseni Care Point"
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
