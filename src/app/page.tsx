import Link from "next/link";
import Script from "next/script";
import {
  ChevronRight,
  ConciergeIcon,
  GiftIcon,
  RewardsIcon,
  WalletIcon,
} from "@/components/icons";

const solutions = [
  {
    title: "Corporate Wallet",
    description: "Digitize meals and travel expenses with policy-led controls.",
    href: "/corporate-wallet",
    icon: WalletIcon,
  },
  {
    title: "Corporate Rewards",
    description: "Reward verified employees with premium Swiggy experiences.",
    href: "/corporate-rewards",
    icon: RewardsIcon,
  },
  {
    title: "Concierge-Led Food & Dining",
    description: "Single-point execution for every team meal and event.",
    href: "/concierge-led-food-dining",
    icon: ConciergeIcon,
  },
  {
    title: "Gift Cards",
    description: "Prepaid solutions for recognition, festivals, and bonuses.",
    href: "/gift-cards",
    icon: GiftIcon,
  },
];

const whySwiggy = [
  {
    title: "Unmatched Expertise",
    description:
      "10+ years of leadership in food delivery and online commerce for enterprise teams.",
  },
  {
    title: "Vast Network",
    description:
      "Thousands of restaurants with zero vendor management and guaranteed coverage.",
  },
  {
    title: "Seamless Process",
    description:
      "Concierge-led execution through one touchpoint, built for HR, Admin, and Finance.",
  },
];

const testimonials = [
  {
    quote:
      "Swiggy for Work moved our monthly team lunches to a single workflow. Billing and GST reconciliation now takes minutes.",
    name: "Priya Menon",
    role: "Head of People Operations, FinTech Unicorn",
  },
  {
    quote:
      "Their concierge team handled our 500-person quarterly meet with zero follow-up. One call, everything delivered.",
    name: "Arjun Rao",
    role: "Admin Lead, SaaS Scale-up",
  },
  {
    quote:
      "We moved to corporate rewards for top-performers. Usage is high and the experience is far more premium.",
    name: "Deepa Nair",
    role: "HR Business Partner, Enterprise IT",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swiggy for Work",
    provider: {
      "@type": "Organization",
      name: "Swiggy for Work",
      url: "https://www.swiggyforwork.com",
    },
    serviceType: "Corporate food delivery, rewards, and dining services",
    areaServed: "IN",
    audience: {
      "@type": "BusinessAudience",
      name: "Enterprise HR, Admin, and Finance teams",
    },
  };

  return (
    <div className="bg-hero">
      <Script
        id="schema-b2b"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative overflow-hidden px-6 pb-20 pt-14">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Swiggy for Work
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Simplify employee meals, team events, and celebrations.
              </h1>
              <p className="text-lg text-slate-700">
                Comprehensive food delivery and dining solutions designed to
                simplify team meals, celebrations, and corporate events.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-[var(--brand-strong)]"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/#solutions"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-ink transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  Explore Solutions
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div>
                  <p className="text-2xl font-semibold text-ink">10K+</p>
                  <p>Corporate partners</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-ink">1M+</p>
                  <p>Orders managed annually</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-ink">24/7</p>
                  <p>Concierge support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Operations dashboard</span>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                    Live
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-surface-muted p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Today&apos;s deliveries
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-ink">428</p>
                    <p className="text-xs text-slate-500">
                      96% on-time arrival
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { label: "Scheduled events", value: "12" },
                      { label: "Active wallets", value: "3,920" },
                      { label: "Invoice status", value: "GST-ready" },
                      { label: "Employee satisfaction", value: "4.8/5" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm shadow-card"
                      >
                        <p className="text-xs text-slate-500">{item.label}</p>
                        <p className="text-lg font-semibold text-ink">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-8 -left-10 h-24 w-24 rounded-full bg-[rgba(252,128,25,0.2)] blur-2xl" />
              <div className="pointer-events-none absolute -right-8 top-12 h-24 w-24 rounded-full bg-[rgba(16,24,40,0.12)] blur-2xl" />
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-card backdrop-blur">
            <div className="grid gap-6 text-sm text-slate-600 md:grid-cols-3">
              <div>
                <p className="font-semibold text-ink">One partner, all use cases</p>
                <p>Meals, rewards, celebrations, and travel dining—centrally managed.</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Finance-ready reporting</p>
                <p>GST-compliant invoices with cost code tagging built in.</p>
              </div>
              <div>
                <p className="font-semibold text-ink">White-glove execution</p>
                <p>Concierge handles vendor coordination, bookings, and logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-20">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Key service offerings
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-ink">
                Built for every corporate meal moment
              </h2>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Talk to an expert <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group rounded-3xl border border-black/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-[rgba(252,128,25,0.4)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">
                        {solution.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink">
                    Explore offering
                    <ChevronRight className="h-4 w-4 text-brand transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-6xl space-y-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                How it works
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                One workflow for every team meal, from request to reconciliation
              </h2>
              <p className="text-slate-700">
                Centralize requests, set policies, and let the Swiggy for Work
                concierge team execute at scale. Your teams get food on time, and
                finance gets clean, auditable records.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  title: "Tell us the requirement",
                  detail:
                    "Share headcount, venue, cuisine preferences, and budget in one form.",
                },
                {
                  title: "We design the plan",
                  detail:
                    "Menus, vendor selection, and logistics are confirmed with your policies.",
                },
                {
                  title: "Concierge executes",
                  detail:
                    "Real-time tracking, on-ground coordination, and delivery assurance.",
                },
                {
                  title: "Finance-ready closure",
                  detail:
                    "GST invoices, cost center tagging, and ERP-ready reporting.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-card"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-ink">
                      {step.title}
                    </p>
                    <p className="text-sm text-slate-500">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-swiggy" className="px-6 py-20">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Why choose Swiggy for Work
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-ink">
                Enterprise credibility with consumer-grade delight
              </h2>
            </div>
            <div className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand">
              Trusted by HR, Admin & Finance teams
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whySwiggy.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-card"
              >
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-20">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Testimonials
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-ink">
                Built with enterprise stakeholders in mind
              </h2>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="min-w-[280px] max-w-sm flex-1 rounded-3xl border border-black/5 bg-white p-6 shadow-card"
              >
                <p className="text-sm text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 text-sm">
                  <p className="font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 rounded-3xl border border-black/5 bg-white p-10 shadow-soft lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Get in touch
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Tell us about your requirement
              </h2>
              <p className="text-slate-700">
                Share the offering you need and our enterprise team will build a
                tailored plan with pricing, SLAs, and implementation timelines.
              </p>
              <div className="rounded-2xl bg-brand-soft p-4 text-sm text-slate-700">
                Typical response time: under 24 hours for enterprise enquiries.
              </div>
            </div>
            <form className="grid gap-4 text-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="role">
                    Who are you?
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="rounded-2xl border border-black/10 px-4 py-3"
                  >
                    <option>Employee</option>
                    <option>HR</option>
                    <option>Admin</option>
                    <option>Finance</option>
                    <option>Procurement</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="offering">
                    What offering are you interested in?
                  </label>
                  <select
                    id="offering"
                    name="offering"
                    className="rounded-2xl border border-black/10 px-4 py-3"
                  >
                    <option>Corporate Wallet</option>
                    <option>Corporate Rewards</option>
                    <option>Concierge-Led Food & Dining</option>
                    <option>Gift Cards</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="rounded-2xl border border-black/10 px-4 py-3"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    placeholder="Company name"
                    className="rounded-2xl border border-black/10 px-4 py-3"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="email">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="rounded-2xl border border-black/10 px-4 py-3"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="rounded-2xl border border-black/10 px-4 py-3"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Talk to Swiggy for Work
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
