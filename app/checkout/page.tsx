import PhoneScreen from "@/components/PhoneScreen";

/**
 * Secure Checkout — Stripe payment step (placeholder for now)
 */

export default function CheckoutPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/03_secure_checkout_screen.png"
      imageAlt="Secure checkout"
      hotspots={[
        { left: "12%", top: "62%", width: "76%", height: "10%", goto: "/welcome", label: "Join the Mission", pulse: true },
      ]}
    />
  );
}
