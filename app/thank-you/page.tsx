import Link from "next/link";

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { amount?: string };
}) {
  const amount = searchParams.amount || "1";

  return (
    <main className="pageShell">
      <header className="heroHeader">
        <div className="brandBlock">
          <div className="roundLogo" />
          <div className="brandTitle">
            <h1>Thank You</h1>
            <p>Welcome to the Daily Bread Family</p>
          </div>
        </div>
      </header>

      <section className="panelCard" style={{ maxWidth: 760, margin: "0 auto" }}>
        <h2>You are now helping feed children every day.</h2>
        <p>
          Your ${amount}/day Daily Bread Partner plan is active. You are helping
          provide daily meals at the Mafutseni Care Point sponsored by Fellowship
          Baptist Church — Meridian, MS.
        </p>
        <Link href="/" className="goldBtn" style={{ display: "block", textAlign: "center" }}>
          View Today&apos;s Table
        </Link>
      </section>
    </main>
  );
}
