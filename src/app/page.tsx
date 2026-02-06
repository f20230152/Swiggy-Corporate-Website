import Image from "next/image";
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
    description:
      "Eliminate reimbursements with a digital-first corporate payment solution.",
    href: "/corporate-wallet",
    icon: WalletIcon,
  },
  {
    title: "Corporate Rewards",
    description:
      "Onboard your company so employees can access exclusive Swiggy offers.",
    href: "/corporate-rewards",
    icon: RewardsIcon,
  },
  {
    title: "Gift Cards",
    description: "Reward great work with Swiggy Gift Cards.",
    href: "/gift-cards",
    icon: GiftIcon,
  },
  {
    title: "Concierge-Led Food & Dining",
    description: "Single point of contact for bulk orders and dining events.",
    href: "/concierge-led-food-dining",
    icon: ConciergeIcon,
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
      "The main issue for me was the anxiety around credit card bill dues because of the reimbursement process. That's gone now.",
    name: "Jay",
    role: "Sr. Business Development Manager, MakeMyTrip",
  },
  {
    quote:
      "Getting a proper GST bill in a small town used to be impossible. Now, it's all handled in the app.",
    name: "Piyush",
    role: "Business Development Manager, MakeMyTrip",
  },
  {
    quote:
      "Tracking invoices every month was a mess. Now, it's one single monthly invoice - faster and smoother.",
    name: "Ajay",
    role: "Admin, KFintech",
  },
  {
    quote:
      "When we order food for small office events, seeing the monthly limit right at checkout helps a lot.",
    name: "Admin",
    role: "WeWork",
  },
];

export default function Home() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
    : "";

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
            <div className="space-y-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Swiggy for Work
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Unparalleled convenience for workplace food.
              </h1>
              <p className="text-lg text-white/85">
                Simplify food for every workplace event, from team lunches to
                celebrations and offsites.
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
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-white"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[420px] overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft sm:h-[480px]">
                <Image
                  src={`${assetBase}/hero-banner.png`}
                  alt="Swiggy for Work team meals"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
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
                  className="group rounded-3xl border border-black/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-[rgba(237,82,15,0.4)]"
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
                Customer cheers
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-ink">
                What our customers say about Swiggy for Work
              </h2>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="min-w-[280px] max-w-sm flex-1 snap-start rounded-3xl border border-black/5 bg-white p-6 shadow-card"
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
                Let's plan your next workplace meal
              </h2>
              <p className="text-slate-700">
                Share a few details and our team will get back with the right
                solution.
              </p>
            </div>
            <form className="grid gap-4 text-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="role">
                    Who are you-
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
                    What offering are you interested in-
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
