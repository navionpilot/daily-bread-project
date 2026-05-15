 "use client";

import { useMemo, useState } from "react";
import { CARE_POINT, DONATION_TIERS } from "@/lib/constants";

type ScreenName =
  | "qr"
  | "give"
  | "checkout"
  | "welcome"
  | "dashboard"
  | "hourly"
  | "stories"
  | "prayer"
  | "impact"
  | "settings";

const screenList: { key: ScreenName; label: string }[] = [
  { key: "qr", label: "QR" },
  { key: "give", label: "Give" },
  { key: "checkout", label: "Checkout" },
  { key: "welcome", label: "Welcome" },
  { key: "dashboard", label: "Dashboard" },
  { key: "hourly", label: "Hourly" },
  { key: "stories", label: "Stories" },
  { key: "prayer", label: "Prayer" },
  { key: "impact", label: "Impact" },
  { key: "settings", label: "Settings" },
];

export default function DailyBreadPrototype() {
  const [screen, setScreen] = useState<ScreenName>("qr");
  const [amount, setAmount] = useState(1);

  const mealsRemaining = CARE_POINT.mealsNeededDaily - CARE_POINT.mealsProvidedDemo;

  async function startCheckout() {
    const selectedTier = DONATION_TIERS.find((tier) => tier.dailyAmount === amount);
    const priceId =
      amount === 1
        ? process.env.NEXT_PUBLIC_STRIPE_PRICE_1_DAILY
        : amount === 2
        ? process.env.NEXT_PUBLIC_STRIPE_PRICE_2_DAILY
        : process.env.NEXT_PUBLIC_STRIPE_PRICE_3_DAILY;

    if (!priceId || priceId.includes("replace")) {
      setScreen("checkout");
      return;
    }

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, dailyAmount: selectedTier?.dailyAmount }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setScreen("checkout");
      }
    } catch {
      setScreen("checkout");
    }
  }

  const phoneClass = useMemo(
    () =>
      ["welcome", "dashboard", "hourly", "stories", "prayer", "impact"].includes(screen)
        ? "phoneScreen dark"
        : "phoneScreen",
    [screen]
  );

  function StatusBar() {
    return (
      <div className="statusBar">
        <span>9:41</span>
        <span>●●●</span>
      </div>
    );
  }

  function Tabbar({ active }: { active: ScreenName }) {
    const tabs: { key: ScreenName; icon: string; label: string }[] = [
      { key: "dashboard", icon: "⌂", label: "Home" },
      { key: "hourly", icon: "♡", label: "Impact" },
      { key: "stories", icon: "▧", label: "Stories" },
      { key: "prayer", icon: "♢", label: "Pray" },
      { key: "settings", icon: "…", label: "More" },
    ];

    return (
      <div className="tabbar">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab ${active === tab.key ? "active" : ""}`}
            onClick={() => setScreen(tab.key)}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  function QrScreen() {
    return (
      <>
        <StatusBar />
        <div className="screenContent center">
          <div className="appLogo" />
          <div className="appTitle">
            Daily Bread
            <br />
            Project
          </div>
          <div className="subtext">
            Help Feed
            <br />
            Today&apos;s Table
          </div>
          <div className="qrCard">
            <div className="fakeQr" />
          </div>
          <div className="subtext">Scan to join the mission</div>
          <button className="goldBtn" onClick={() => setScreen("give")}>
            Start Giving
          </button>
        </div>
      </>
    );
  }

  function GiveScreen() {
    return (
      <>
        <StatusBar />
        <div className="screenContent">
          <div className="screenHeading">
            Become a
            <br />
            Daily Bread Partner
          </div>
          <div className="screenSubtitle">Choose your daily impact</div>
          <div className="amounts">
            {DONATION_TIERS.map((tier) => (
              <button
                key={tier.id}
                className={`amountBtn ${tier.className} ${
                  amount === tier.dailyAmount ? "active" : ""
                }`}
                onClick={() => setAmount(tier.dailyAmount)}
              >
                <span>
                  <strong>${tier.dailyAmount}</strong>
                  <small>/ day · ${tier.monthlyAmount}/month</small>
                </span>
                <span>›</span>
              </button>
            ))}
          </div>
          <button className="primaryBtn" onClick={startCheckout}>
            Connect Card
          </button>
          <div className="tinyNote">
            Secure · Encrypted · Cancel Anytime
            <br />
            Your support provides daily meals for children.
          </div>
        </div>
      </>
    );
  }

  function CheckoutScreen() {
    return (
      <>
        <StatusBar />
        <div className="screenContent center">
          <div className="checkoutIcon">♢</div>
          <div className="screenHeading">Secure Checkout</div>
          <div className="screenSubtitle">Your support changes lives. Thank you.</div>
          <div className="field">Card Number</div>
          <div className="fieldRow">
            <div className="field">MM/YY</div>
            <div className="field">CVC</div>
            <div className="field">ZIP</div>
          </div>
          <button className="primaryBtn" onClick={() => setScreen("welcome")}>
            Join the Mission
          </button>
          <div className="tinyNote">
            Powered by Stripe
            <br />
            Selected plan: ${amount}/day · ${amount * 30}/month
          </div>
        </div>
      </>
    );
  }

  function WelcomeScreen() {
    return (
      <div className="welcomeWrap">
        <div>
          <div className="checkmark">✓</div>
          <h2>
            Welcome to the
            <br />
            Daily Bread Family!
          </h2>
          <p>
            You are now helping feed children at the Mafutseni Care Point every
            single day.
          </p>
          <button className="goldBtn" onClick={() => setScreen("dashboard")}>
            View Today&apos;s Table
          </button>
        </div>
      </div>
    );
  }

  function DashboardScreen() {
    return (
      <>
        <StatusBar />
        <div className="dashHeader">
          <div>
            <h2>
              Today&apos;s
              <br />
              Table
            </h2>
            <p>{CARE_POINT.name} · Updated every hour</p>
          </div>
          <div>♡</div>
        </div>
        <div className="ring">
          <div className="ringInner">
            <small>Meals Provided</small>
            <strong>
              {CARE_POINT.mealsProvidedDemo} / {CARE_POINT.mealsNeededDaily}
            </strong>
            <small>97% Funded</small>
          </div>
        </div>
        <div className="dashList">
          <div className="dashRow">
            <span>Meals Needed Today</span>
            <strong>{CARE_POINT.mealsNeededDaily}</strong>
          </div>
          <div className="dashRow">
            <span>Meals Provided</span>
            <strong>{CARE_POINT.mealsProvidedDemo}</strong>
          </div>
          <div className="dashRow">
            <span>Meals Remaining</span>
            <strong>{mealsRemaining}</strong>
          </div>
        </div>
        <div className="impactCard">
          <h3>You&apos;re Making An Impact</h3>
          <p>Thank you for helping feed children in Mafutseni.</p>
        </div>
        <Tabbar active="dashboard" />
      </>
    );
  }

  function HourlyScreen() {
    const rows = [
      ["8 AM", 120],
      ["9 AM", 198],
      ["10 AM", 285],
      ["11 AM", 376],
      ["12 PM", 487],
    ];
    return (
      <>
        <StatusBar />
        <div className="dashHeader">
          <div>
            <h2>Hourly Impact</h2>
            <p>Live updates</p>
          </div>
          <div>♡</div>
        </div>
        <div className="screenContent">
          {rows.map(([time, value]) => (
            <div className="dashRow" key={time}>
              <span>{time}</span>
              <strong>{value} / 500</strong>
            </div>
          ))}
          <div className="impactCard">
            <h3>Thank you, partners!</h3>
            <p>You are making an eternal difference.</p>
          </div>
        </div>
        <Tabbar active="hourly" />
      </>
    );
  }

  function StoriesScreen() {
    return (
      <>
        <StatusBar />
        <div className="dashHeader">
          <div>
            <h2>Stories</h2>
            <p>See the impact</p>
          </div>
          <div>♡</div>
        </div>
        <div className="storyCard">
          <div className="storyImage">Mafutseni Story</div>
          <p>
            Because of faithful partners, children at Mafutseni are fed, loved,
            and learning about Jesus every day.
          </p>
          <button className="goldBtn">Read More Stories</button>
        </div>
        <Tabbar active="stories" />
      </>
    );
  }

  function PrayerScreen() {
    const prayers = [
      "Wisdom for caregivers and staff",
      "Protection over the children",
      "Provision for future growth",
      "Health, peace, and education",
    ];
    return (
      <>
        <StatusBar />
        <div className="dashHeader">
          <div>
            <h2>Prayer Requests</h2>
            <p>Lift them up</p>
          </div>
          <div>♡</div>
        </div>
        <div className="prayerCard">
          {prayers.map((prayer) => (
            <div className="prayerItem" key={prayer}>
              <span>{prayer}</span>
              <span>♡</span>
            </div>
          ))}
          <button className="goldBtn">I Prayed Today</button>
        </div>
        <Tabbar active="prayer" />
      </>
    );
  }

  function ImpactScreen() {
    return (
      <>
        <StatusBar />
        <div className="dashHeader">
          <div>
            <h2>Your Impact</h2>
            <p>Because of you</p>
          </div>
          <div>♡</div>
        </div>
        <div className="impactBigCard">
          <div className="impactNumber">
            <span>You&apos;ve provided</span>
            <strong>1,461</strong>
            <span>Meals This Month</span>
          </div>
          <p style={{ marginTop: 18, textAlign: "center", color: "var(--muted-light)" }}>
            You are changing lives every day.
          </p>
          <button className="goldBtn">Share Your Impact</button>
        </div>
        <Tabbar active="impact" />
      </>
    );
  }

  function SettingsScreen() {
    return (
      <>
        <StatusBar />
        <div className="dashHeader">
          <div>
            <h2>Manage Giving</h2>
            <p>Your plan</p>
          </div>
          <div>♡</div>
        </div>
        <div className="settingsCard">
          <div className="settingRow">
            <span>Your Plan</span>
            <strong>${amount}/day</strong>
          </div>
          <div className="settingRow">
            <span>Monthly Amount</span>
            <strong>${amount * 30}/month</strong>
          </div>
          <div className="settingRow">
            <span>Next Payment</span>
            <strong>May 20</strong>
          </div>
          <div className="settingRow">
            <span>Payment Method</span>
            <strong>•••• 4242</strong>
          </div>
          <button className="goldBtn">Update Payment</button>
          <button className="primaryBtn">Pause or Cancel</button>
        </div>
        <Tabbar active="settings" />
      </>
    );
  }

  function CurrentScreen() {
    switch (screen) {
      case "qr":
        return <QrScreen />;
      case "give":
        return <GiveScreen />;
      case "checkout":
        return <CheckoutScreen />;
      case "welcome":
        return <WelcomeScreen />;
      case "dashboard":
        return <DashboardScreen />;
      case "hourly":
        return <HourlyScreen />;
      case "stories":
        return <StoriesScreen />;
      case "prayer":
        return <PrayerScreen />;
      case "impact":
        return <ImpactScreen />;
      case "settings":
        return <SettingsScreen />;
    }
  }

  return (
    <main className="pageShell">
      <header className="heroHeader">
        <div className="brandBlock">
          <div className="roundLogo" />
          <div className="brandTitle">
            <h1>Daily Bread Project</h1>
            <p>Help Feed Today&apos;s Table</p>
          </div>
        </div>
        <div className="provider">
          <strong>{CARE_POINT.name}</strong>
          Sponsored by {CARE_POINT.provider}
          <br />
          {CARE_POINT.city}
        </div>
      </header>

      <section className="prototypeLayout">
        <div className="phoneFrame">
          <div className={phoneClass}>
            <CurrentScreen />
          </div>
        </div>

        <aside className="sidePanel">
          <div className="panelCard">
            <h2>Clickable Prototype</h2>
            <p>
              This is the working front-end prototype. Click through the screens
              below or use the buttons inside the phone mockup.
            </p>
            <div className="screenButtons">
              {screenList.map((item) => (
                <button
                  key={item.key}
                  className={`navBtn ${screen === item.key ? "active" : ""}`}
                  onClick={() => setScreen(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="panelCard">
            <h2>Mission Numbers</h2>
            <p>
              <strong>{CARE_POINT.mealsNeededDaily} meals/day</strong>
              <br />${CARE_POINT.dailyNeed} needed each day
              <br />${CARE_POINT.monthlyNeed.toLocaleString()} monthly goal
              <br />$1/day = $30/month
            </p>
          </div>

          <div className="panelCard">
            <h2>Push Notifications</h2>
            <div className="notificationGrid">
              <div className="notification">
                <small>
                  <span>Daily Bread</span>
                  <span>8:00 AM</span>
                </small>
                <p>We&apos;re 120/500 meals provided today.</p>
              </div>
              <div className="notification">
                <small>
                  <span>Daily Bread</span>
                  <span>12:00 PM</span>
                </small>
                <p>Great news! 285/500 meals provided.</p>
              </div>
              <div className="notification">
                <small>
                  <span>Daily Bread</span>
                  <span>3:00 PM</span>
                </small>
                <p>Only 13 more meals to go!</p>
              </div>
              <div className="notification">
                <small>
                  <span>Monthly Recap</span>
                  <span>Today</span>
                </small>
                <p>You provided 1,461 meals this month.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
