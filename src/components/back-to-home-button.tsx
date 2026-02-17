import Link from "next/link";
import { ChevronRight } from "@/components/icons";

export default function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20"
    >
      <ChevronRight className="h-3.5 w-3.5 rotate-180" />
      Back to Home
    </Link>
  );
}
