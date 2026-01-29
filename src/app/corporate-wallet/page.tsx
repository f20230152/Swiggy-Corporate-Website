import type { Metadata } from "next";
import CtaBand from "@/components/cta-band";
import { WalletIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Corporate Wallet",
  description:
    "Digitize corporate meal and travel expenses with Swiggy for Work and MakeMyTrip myBiz integration.",
};

const platformBlocks = [
  {
    title: "One Unified Platform",
    bullets: [
      "Flights, hotels, cabs, trains, meals",
      "Corporate fares",
      "Policy controls",
      "100% GST-compliant invoices",
    ],
  },
  {
    title: "Zero Reimbursements",
    bullets: [
      "Orders via official ID",
      "Project / cost-code tagging",
      "Direct ERP posting",
      "No receipts, claims, or approvals",
    ],
  },
  {
    title: "Finance-Ready Reconciliation",
    bullets: [
      "Real-time dashboards",
      "ERP-ready reports",
      "GSTR-2B support",
      "Invoice traceability",
    ],
  },
];

const flow = [
  {
    title: "Policy setup",
    detail:
      "Configure wallet limits, cost centers, and GST rules aligned with your finance team.",
  },
  {
    title: "Employees order",
    detail:
      "Meals and travel dining are booked through official IDs with automated approvals.",
  },
  {
    title: "Concierge monitors",
    detail:
      "Swiggy for Work ensures policy compliance and handles vendor coordination.",
  },
  {
    title: "Finance closes the loop",
    detail:
      "ERP-ready exports with GSTR-2B mapping and auditable invoice trails.",
  },
];

export default function CorporateWalletPage() {
  return (
    <div className="px-6 py-14">
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Corporate Wallet + myBiz integration
            </p>
            <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
              Corporate Wallet
            </h1>
            <p className="text-lg text-slate-700">
              Employees incur out-of-pocket expenses for meals during client
              meetings, team engagements, or business travel, followed by manual
              reimbursements. Swiggy for Work digitizes the entire workflow.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-full border border-black/10 px-4 py-2">
                MakeMyTrip myBiz
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2">
                GST-ready invoicing
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2">
                Zero reimbursements
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <WalletIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Spend visibility in real time
                </p>
                <p className="text-sm text-slate-500">
                  Instant snapshots by team, project, or travel code.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-3 rounded-2xl bg-surface-muted p-4 text-sm text-slate-600">
              <p className="font-semibold text-ink">Policy highlights</p>
              <ul className="space-y-2">
                <li>Daily wallet limits auto-applied</li>
                <li>Multi-level approvals built-in</li>
                <li>Centralized invoice repository</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Problem statement
            </p>
            <p className="mt-4 text-base text-slate-700">
              Employees incur out-of-pocket expenses for meals during client
              meetings, team engagements, or business travel, followed by manual
              reimbursements.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Solution
            </p>
            <p className="mt-4 text-base text-slate-700">
              Swiggy for Work digitizes the entire workflow, connecting meal
              orders with policy controls, approvals, and finance-ready
              reporting.
            </p>
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
                  <li key={bullet}>• {bullet}</li>
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
              Streamlined approval to ERP posting
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              From policy setup to reconciliation, every step is automated so HR
              and Finance stay aligned.
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
