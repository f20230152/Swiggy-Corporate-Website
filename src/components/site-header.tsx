import Image from "next/image";
import Link from "next/link";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
  : "";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-4 rounded-3xl border border-white/40 bg-white/70 px-4 py-2 text-lg text-ink shadow-soft"
        >
          <Image
            src={`${assetBase}/swiggy-logo.png`}
            alt="Swiggy"
            width={84}
            height={84}
            priority
          />
          <span className="flex items-center text-[30px] font-bold tracking-tight text-brand">
            Swiggy for Work
          </span>
        </Link>
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
