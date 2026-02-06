import Image from "next/image";
import Link from "next/link";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, "")}`
  : "";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg text-ink">
          <Image
            src={`${assetBase}/swiggy-logo.png`}
            alt="Swiggy"
            width={112}
            height={112}
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-tight text-brand">
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
