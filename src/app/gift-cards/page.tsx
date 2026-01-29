import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import { GiftIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Prepaid corporate gifting for recognition, festivals, and performance rewards.",
};

const useCases = [
  {
    title: "Employee recognition",
    detail:
      "Celebrate milestones, anniversaries, and achievements with instant gifting.",
  },
  {
    title: "Festive gifting",
    detail:
      "Scale Diwali, Eid, and year-end gifting with guaranteed delivery timelines.",
  },
  {
    title: "Performance rewards",
    detail:
      "Drive motivation with tiered gift cards aligned to performance outcomes.",
  },
];

const flow = [
  {
    title: "Choose a budget",
    detail: "Set denominations, volumes, and delivery dates in one dashboard.",
  },
  {
    title: "Upload recipients",
    detail:
      "Securely share employee lists or integrate HRIS for automated distribution.",
  },
  {
    title: "Send instantly",
    detail:
      "Gift cards are delivered via email or SMS with redemption instructions.",
  },
  {
    title: "Track usage",
    detail:
      "Monitor redemption rates, expiry status, and engagement outcomes.",
  },
];

export default function GiftCardsPage() {
  return (
    <div className="px-6 py-14">
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Gift Cards
            </p>
            <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
              Prepaid gifting that feels premium and effortless
            </h1>
            <p className="text-lg text-slate-700">
              Swiggy for Work gift cards help teams celebrate wins, reward
              performance, and keep festive gifting on schedule—all with
              enterprise-grade controls.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-full border border-black/10 px-4 py-2">
                Prepaid solutions
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2">
                Instant distribution
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2">
                Centralized reporting
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <GiftIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Gift card command center
                </p>
                <p className="text-sm text-slate-500">
                  Schedule, distribute, and track redemptions in one portal.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {["Multiple denominations", "Bulk distribution", "Usage analytics"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/5 bg-surface-muted px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
            >
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              How it works
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">
              A simple, scalable gifting workflow
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Designed for enterprise HR and Admin teams with automation and
              reporting built in.
            </p>
          </div>
          <div className="space-y-4">
            {flow.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-base font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CtaBand
          title="Launch gifting campaigns without operational load."
          description="Recognize teams, celebrate festivals, and reward performance with enterprise-grade prepaid cards."
        />
      </section>
    </div>
  );
}
