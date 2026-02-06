import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Why Swiggy", href: "/#why-swiggy" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Get in touch", href: "/#contact" },
];

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\\/+|\\/+$/g, "")}`
  : "";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg text-ink">
          <Image
            src={`${assetBase}/swiggy-logo.png`}
            alt="Swiggy"
            width={36}
            height={36}
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-tight">
            Swiggy for Work
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-1 flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-700"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-[var(--brand)] hover:text-white"
          >
            Get in Touch
          </Link>
          <Link
            href="/#solutions"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-black md:inline-flex"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </header>
  );
}
