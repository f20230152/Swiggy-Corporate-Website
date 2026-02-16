import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import {
  CelebrationIcon,
  DiningIcon,
  LateNightIcon,
  MeetingsIcon,
  OfficeMealIcon,
  TeamDinnerIcon,
  TrainingIcon,
  TravelMealIcon,
  WalletIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Swiggy Corporate",
  description:
    "Digitize corporate meal and travel expenses with Swiggy for Work and MakeMyTrip myBiz integration.",
};

const platformBlocks = [
  {
    title: "No out-of-pocket spends",
    bullets: [
      "Reimbursements eliminated",
      "No bills, submissions, or follow-ups",
      "Corporate payment at checkout",
    ],
  },
  {
    title: "Single monthly invoice",
    bullets: [
      "Simpler invoicing and audit trail",
      "Budget control with real-time visibility",
      "Lower admin ops for finance teams",
    ],
  },
  {
    title: "Simplified compliance",
    bullets: [
      "GST billing issues resolved",
      "Centralized reporting and invoices",
      "Policy-led spend limits by employee group",
    ],
  },
];

const useCaseColumns = [
  {
    title: "Dining & travel",
    icon: DiningIcon,
    items: [
      { label: "Dining out at restaurants", icon: DiningIcon },
      { label: "Meals at hotels while travelling", icon: TravelMealIcon },
      { label: "Team dinners at restaurants", icon: TeamDinnerIcon },
      { label: "Hiring drives and trainings", icon: TrainingIcon },
    ],
  },
  {
    title: "Office & team events",
    icon: OfficeMealIcon,
    items: [
      { label: "Food ordering in office", icon: OfficeMealIcon },
      { label: "Late night meals at office", icon: LateNightIcon },
      { label: "Client and team meetings", icon: MeetingsIcon },
      { label: "Celebrations and town halls", icon: CelebrationIcon },
    ],
  },
];

const audienceBenefits = [
  {
    title: "Employees",
    bullets: [
      "No reimbursement friction",
      "Stress-free experience while travelling",
      "Corporate limits visible at checkout",
    ],
  },
  {
    title: "HR / Admin",
    bullets: [
      "Single monthly invoice",
      "Centralized spend visibility",
      "Reduced credit card administration",
    ],
  },
];

const flow = [
  {
    title: "Employees log in via corporate email",
    detail: "Swiggy for Work access is enabled with verified official IDs.",
  },
  {
    title: "Choose Corporate Payment",
    detail: "Employees add items to cart and select Corporate Payment at checkout.",
  },
  {
    title: "Dineout: Bill to company",
    detail: "For dining out, employees select Bill to Company and attach the bill.",
  },
  {
    title: "Admin visibility & reports",
    detail:
      "Policy setup, wallet usage reports, and invoices are centralized for finance.",
  },
];

export default function CorporateWalletPage() {
  return (
    <div className="px-6 py-14">
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Corporate Wallet + myBiz integration
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Swiggy Corporate
            </h1>
            <p className="text-lg text-white/85">
              Eliminating reimbursements, enhancing efficiency. Transform how
              your organization manages employee meal benefits with a
              streamlined, digital-first solution that saves time and reduces
              administrative effort.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white">
              <span className="rounded-full border border-white/40 px-4 py-2">
                MakeMyTrip myBiz
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2">
                GST-ready invoicing
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2">
                Zero reimbursements
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 text-white shadow-soft">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <WalletIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Spend visibility in real time
                </p>
                <p className="text-sm text-white/75">
                  Instant snapshots by team, project, or travel code.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/85">
              <p className="font-semibold text-white">Policy highlights</p>
              <ul className="space-y-2">
                <li>Daily wallet limits auto-applied</li>
                <li>Multi-level approvals built-in</li>
                <li>Centralized invoice repository</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Use cases
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {useCaseColumns.map((column) => {
              const ColumnIcon = column.icon;
              return (
                <div
                  key={column.title}
                  className="rounded-2xl border border-black/5 bg-surface-muted/70 p-3"
                >
                  <div className="mb-3 flex items-center gap-2 px-1">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <ColumnIcon className="h-4 w-4" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                      {column.title}
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-slate-600">
                    {column.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-3 py-2.5"
                        >
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                            <ItemIcon className="h-4 w-4" />
                          </span>
                          <span>{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {platformBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
            >
              <h2 className="text-xl font-semibold text-ink">{block.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {block.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="grid gap-6 lg:grid-cols-2">
          {audienceBenefits.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {group.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              How it works
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">
              Corporate payments in four steps
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              From employee login to finance reporting, everything stays within
              policy.
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
          title="Replace manual reimbursements with a digital corporate wallet."
          description="Launch policy-driven meal allowances, monitor spend in real time, and close books faster with myBiz integration."
        />
      </section>
    </div>
  );
}
