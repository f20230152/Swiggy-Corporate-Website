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
    title: "Swiggy Corporate Payment Solution",
    description:
      "Eliminate reimbursements with a digital-first corporate payment solution.",
    href: "/corporate-wallet",
    icon: WalletIcon,
  },
  {
    title: "Corporate Rewards",
    description:
      "Get access to exclusive corporate rewards on Food, Instamart, Dineout and more.",
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
    description:
      "Hassle-free bulk food delivery and seamless restaurant bookings for team outings.",
    href: "/concierge-led-food-dining",
    icon: ConciergeIcon,
  },
];

const whySwiggy: Array<{
  title: string;
  description: string;
  imageSrc: string;
}> = [
  {
    title: "Long Standing Expertise",
    description:
      "10+ years pioneering food delivery - a trusted, category-defining brand embedded in daily Indian life.",
    imageSrc: "/why-swiggy/1.png",
  },
  {
    title: "Vast Restaurant Network",
    description:
      "A wide choice that delights, without the hassle of coordinating with multiple restaurants or dealing with inconsistent experiences.",
    imageSrc: "/why-swiggy/2.png",
  },
  {
    title: "Effortlessly Simple",
    description:
      "Fast onboarding with seamless ordering, billing, and support - adding meaningful value to your everyday food needs.",
    imageSrc: "/why-swiggy/3.png",
  },
];

const testimonials = [
  {
    offering: "Corporate Wallet",
    quote:
      "The main issue for me was the anxiety around credit card bill dues because of the reimbursement process. That's gone now.",
    name: "Jay",
    designation: "Sr. Business Development Manager",
    company: "MakeMyTrip",
    companyLogo: "/testimonials/4.png",
  },
  {
    offering: "Corporate Rewards",
    quote:
      "Getting a proper GST bill in a small town used to be impossible. Now, it's all handled in the app.",
    name: "Piyush",
    designation: "Business Development Manager",
    company: "MakeMyTrip",
    companyLogo: "/testimonials/4.png",
  },
  {
    offering: "Swiggy Corporate Payment Solution",
    quote:
      "Tracking invoices every month was a mess. Now, it's one single monthly invoice - faster and smoother.",
    name: "Ajay",
    designation: "Admin",
    company: "KFintech",
    companyLogo: "/testimonials/5.png",
  },
  {
    offering: "Gift Cards",
    quote:
      "When we order food for small office events, seeing the monthly limit right at checkout helps a lot.",
    name: "Admin",
    designation: "Workplace Operations",
    company: "WeWork",
    companyLogo: "/testimonials/6.png",
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
      <section className="relative overflow-hidden px-6 pb-14 pt-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5 text-white">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Introducing Swiggy for Work
              </h1>
              <p className="text-2xl font-semibold text-white">
                Unparalleled convenience for workplace meals.
              </p>
              <p className="text-lg text-white/85">
                Simplify food for every workplace moment &mdash; from team dinners at
                restaurants and quick lunches on the go, to in-office
                celebrations.
              </p>
            </div>
            <div className="relative lg:justify-self-end">
              <div className="flex h-[405px] w-full max-w-[38rem] items-center justify-center overflow-hidden rounded-3xl sm:h-[459px]">
                <Image
                  src={`${assetBase}/table-swiggy.png`}
                  alt="Swiggy for Work team meals"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-14">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold text-white">
              Key Service Offerings
            </h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white"
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
                  className="group flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-[rgba(237,82,15,0.6)]"
                >
                  <div className="flex items-start gap-4">
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
                  <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-ink">
                    Explore offering
                    <ChevronRight className="h-4 w-4 text-brand" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why-swiggy" className="px-6 py-14">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold text-white">
              Why choose Swiggy for Work
            </h2>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              Trusted by HR, Admin & Finance teams
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whySwiggy.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-black/10 bg-white p-6 text-center shadow-soft"
                >
                  <div className="mx-auto">
                    <Image
                      src={`${assetBase}${item.imageSrc}`}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="mx-auto h-[150px] w-[150px] object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-brand px-6 py-14">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Customer Cheers</h2>
          </div>
          <div className="grid snap-x snap-mandatory grid-flow-col auto-cols-[85%] gap-6 overflow-x-auto pb-4 pt-2 sm:auto-cols-[65%] md:auto-cols-[50%] lg:auto-cols-[calc((100%-3rem)/3)]">
            {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="snap-start rounded-3xl border border-white/60 bg-white p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand">
                      {testimonial.offering}
                    </span>
                    <div className="flex items-center justify-end">
                      <Image
                        src={`${assetBase}${testimonial.companyLogo}`}
                        alt={`${testimonial.company} logo`}
                        width={77}
                        height={34}
                        className="h-[34px] w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div>
                      <p className="text-sm text-slate-700">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-6 text-sm">
                        <p className="font-semibold text-ink">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-500">
                          {testimonial.designation}
                        </p>
                        <p className="text-slate-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-16 pt-14">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 rounded-3xl border border-white/60 bg-white p-10 text-ink shadow-soft lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Get in touch
              </p>
              <h2 className="text-3xl font-semibold text-ink">Talk to our team</h2>
              <p className="text-slate-700">
                Looking for more info? Share your details and our team will get
                in touch.
              </p>
            </div>
            <form className="grid gap-4 text-sm text-ink">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="designation">
                    Designation
                  </label>
                  <input
                    id="designation"
                    name="designation"
                    placeholder="Your role"
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-ink" htmlFor="phone">
                    Mobile Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-ink placeholder:text-slate-400"
                  />
                </div>
              </div>
              <fieldset className="flex flex-col gap-3">
                <legend className="font-semibold text-ink">
                  Offering that interests you
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Swiggy Corporate Payment Solution",
                    "Corporate Rewards",
                    "Concierge-Led Food & Dining",
                    "Gift Cards",
                  ].map((offering) => (
                    <label
                      key={offering}
                      className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink"
                    >
                      <input
                        type="checkbox"
                        name="offering"
                        value={offering}
                        className="h-4 w-4 accent-brand"
                      />
                      <span>{offering}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
