import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Corporate Wallet", href: "/corporate-wallet" },
  { label: "Corporate Rewards", href: "/corporate-rewards" },
  { label: "Concierge Dining", href: "/concierge-led-food-dining" },
  { label: "Gift Cards", href: "/gift-cards" },
];

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\\/+|\\/+$/g, "")}`
  : "";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-ink">
              <Image
                src={`${assetBase}/swiggy-logo.png`}
                alt="Swiggy"
                width={36}
                height={36}
              />
              <span className="font-heading tracking-tight">
                Swiggy for Work
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Enterprise-grade meal programs, rewards, and corporate dining
              built on Swiggy&apos;s unmatched delivery network.
            </p>
            <div className="text-sm text-slate-500">
              <p>Corporate HQ: Bengaluru, India</p>
              <p>Email: swiggyforwork@swiggy.in</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-ink">Solutions</p>
            <ul className="space-y-2 text-slate-500">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-ink">Get Started</p>
            <p className="text-slate-500">
              Tell us about your team size and requirements. We&apos;ll craft a
              bespoke program within 24 hours.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-[var(--brand-strong)]"
            >
              Talk to Swiggy for Work
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-6 text-xs text-slate-500">
          <p>© 2026 Swiggy for Work. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
