export const CARE_POINT = {
  name: "Mafutseni Care Point",
  provider: "Fellowship Baptist Church",
  city: "Meridian, MS",
  country: "Eswatini",
  mealsNeededDaily: 500,
  mealsProvidedDemo: 487,
  monthlyNeed: 7500,
  dailyNeed: 250,
};

export const DONATION_TIERS = [
  {
    id: "one",
    dailyAmount: 1,
    monthlyAmount: 30,
    label: "$1 / day",
    subLabel: "$30 / month",
    className: "tierGreen",
    envKey: "NEXT_PUBLIC_STRIPE_PRICE_1_DAILY",
  },
  {
    id: "two",
    dailyAmount: 2,
    monthlyAmount: 60,
    label: "$2 / day",
    subLabel: "$60 / month",
    className: "tierGold",
    envKey: "NEXT_PUBLIC_STRIPE_PRICE_2_DAILY",
  },
  {
    id: "three",
    dailyAmount: 3,
    monthlyAmount: 90,
    label: "$3 / day",
    subLabel: "$90 / month",
    className: "tierRed",
    envKey: "NEXT_PUBLIC_STRIPE_PRICE_3_DAILY",
  },
] as const;
