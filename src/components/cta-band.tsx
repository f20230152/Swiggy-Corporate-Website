import Link from "next/link";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
};

export default function CtaBand({
  eyebrow = "Ready to get started?",
  title,
  description,
  buttonLabel = "Talk to Swiggy for Work",
  href = "/#contact",
}: CtaBandProps) {
  return (
    <div className="rounded-3xl border border-black/5 bg-ink p-8 text-white shadow-soft md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
        {eyebrow}
      </p>
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 max-w-xl text-sm text-white/70">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
