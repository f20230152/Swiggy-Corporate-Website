import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import { RewardsIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Corporate Rewards",
  description:
    "Reward verified employees with premium Swiggy experiences and lifestyle partnerships.",
};

const stats = [
  { label: "Verified employees", value: "3.1 lakh" },
  { label: "Corporate partners", value: "10K+" },
  { label: "Repeat rate", value: "1.85×" },
  { label: "Monthly visits", value: "90%+" },
];

const rewardTypes = [
  {
    title: "Swiggy One membership",
    detail:
      "Exclusive benefits across Food, Instamart, and Dineout for top performers.",
  },
  {
    title: "Lifestyle partnerships",
    detail:
      "Curated rewards across Tech, Travel, Fashion, and Entertainment brands.",
  },
  {
    title: "Meal credits",
    detail:
      "Pre-approved meal allowances for everyday recognition and engagement.",
  },
];

const journey = [
  {
    title: "Company onboarding",
    detail:
      "Share headcount, budgets, and reward cadences. We configure an admin dashboard within days.",
  },
  {
    title: "Employee access",
    detail:
      "Verified employees receive a personalized rewards storefront with curated offers.",
  },
  {
    title: "Redemption & analytics",
    detail:
      "Real-time redemption data, preference insights, and spend tracking for HR and Finance.",
  },
];

export default function CorporateRewardsPage() {
  return (
    <div className="px-6 py-14">
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Corporate Rewards
            </p>
            <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
              Enterprise rewards that employees actually want
            </h1>
            <p className="text-lg text-slate-700">
              Engage verified employees with premium Swiggy experiences and
              lifestyle partnerships. Built for Tier-1 corporate audiences who
              value quality, convenience, and choice.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-full border border-black/10 px-4 py-2">
                Tier-1 audience
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2">
                High engagement
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2">
                Verified employees
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <RewardsIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Rewards dashboard
                </p>
                <p className="text-sm text-slate-500">
                  Track engagement, redemptions, and budgets in real time.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/5 bg-surface-muted px-4 py-3 text-sm"
                >
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="text-lg font-semibold text-ink">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {rewardTypes.map((reward) => (
            <div
              key={reward.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
            >
              <h2 className="text-xl font-semibold text-ink">{reward.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{reward.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Employee journey
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">
              From signup to redemption in three steps
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              The experience is designed to feel premium, frictionless, and
              consistently rewarding.
            </p>
          </div>
          <div className="space-y-4">
            {journey.map((item, index) => (
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

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              What employees get
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>• Exclusive Swiggy One pricing and priority access</li>
              <li>• Curated rewards refreshed monthly</li>
              <li>• Seamless redemption in the Swiggy ecosystem</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              How companies onboard
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>• Dedicated enterprise manager for rollout</li>
              <li>• SSO-ready employee verification</li>
              <li>• Budget and reward cadence controls</li>
            </ul>
          </div>
        </div>

        <CtaBand
          title="Launch a rewards experience that keeps top talent engaged."
          description="Reach verified employees at scale with premium Swiggy and lifestyle rewards, backed by transparent reporting."
        />
      </section>
    </div>
  );
}
