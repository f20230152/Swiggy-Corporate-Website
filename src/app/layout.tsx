import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Swiggy for Work | Corporate Food, Rewards & Concierge Solutions",
    template: "%s | Swiggy for Work",
  },
  description:
    "Enterprise-grade food delivery, rewards, and corporate meal solutions powered by Swiggy for Work.",
  metadataBase: new URL("https://www.swiggyforwork.com"),
  openGraph: {
    title: "Swiggy for Work",
    description:
      "Simplify employee meals, team events, and celebrations with concierge-led execution and finance-ready reporting.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiggy for Work",
    description:
      "Corporate meals, rewards, and gifting designed for HR, Admin, and Finance teams.",
  },
  alternates: {
    canonical: "https://www.swiggyforwork.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sora.variable} antialiased text-ink`}
      >
        <div className="min-h-screen bg-surface">
          <SiteHeader />
          <main className="relative">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
