import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Swiggy Corporate Payment Solution",
  description:
    "Digitize corporate meal and travel expenses with Swiggy for Work and MakeMyTrip myBiz integration.",
};

const heroTiles = [
  "No out-of-pocket spends",
  "Single monthly invoice",
  "Simplified compliance",
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

export default function CorporateWalletPage() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
    : "";

  return (
    <div className="px-6 py-14">
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Corporate Wallet + myBiz integration
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Swiggy Corporate Payment Solution
            </h1>
            <p className="text-lg text-white/85">
              Eliminating reimbursements, enhancing efficiency. Transform how
              your organization manages employee meal benefits with a
              streamlined, digital-first solution that saves time and reduces
              administrative effort.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroTiles.map((tile) => (
                <div
                  key={tile}
                  className="rounded-2xl border border-white/35 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                >
                  {tile}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[48%] min-w-[228px] overflow-hidden rounded-3xl border border-white/25 bg-white/10 shadow-soft">
              <Image
                src={`${assetBase}/corporate-hero-banner.jpeg?v=20260216-2232`}
                alt="Swiggy Corporate Payment Solution hero"
                width={1400}
                height={900}
                priority
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 18vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <section id="testimonials" className="space-y-8">
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
                  <p className="text-sm text-slate-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 text-sm">
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-slate-500">{testimonial.designation}</p>
                    <p className="text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBand
          title="Replace manual reimbursements with a digital corporate wallet."
          description="Launch policy-driven meal allowances, monitor spend in real time, and close books faster with myBiz integration."
        />
      </section>
    </div>
  );
}
