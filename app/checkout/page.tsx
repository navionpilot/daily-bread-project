import PhoneScreen from "@/components/PhoneScreen";

/**
 * Secure Checkout — Stripe payment step (placeholder for now)
 */

export default function CheckoutPage() {
  return (
    <PhoneScreen
      imageSrc="/assets/screens/03_secure_checkout_screen.png"
      imageAlt="Secure checkout — tap to complete your donation"
      hotspots={[
        { left: "10%", top: "64%", width: "80%", height: "10%", goto: "/welcome", label: "Join the Mission", pulse: true },
      ]}
    />
  );
}
