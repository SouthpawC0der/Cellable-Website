import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cellable — Match, Secure & Sell Tech Faster",
  description:
    "Buy or sell your pre-owned devices 5× faster. Cellable matches you with hundreds of verified buyers and sellers, anywhere.",
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76c.37.21.8.22 1.19.04l13.32-7.56-2.9-2.9zM.1 1.05C.04 1.27 0 1.51 0 1.77v20.46c0 .26.04.5.1.73l.11.1 11.45-11.45v-.27L.21.95zM22.82 10.7l-2.93-1.66-3.22 3.22 3.22 3.22 2.94-1.67c.84-.48.84-1.64-.01-2.11zM4.37.2L17.69 7.76l-2.9 2.9L1.47.26C1.86.08 2.3.09 4.37.2z" />
    </svg>
  );
}

// ─── Download Buttons ─────────────────────────────────────────────────────────

function DownloadButtons({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const base =
    "flex items-center gap-3 rounded-2xl px-5 py-3 transition-colors duration-200 shadow-lg cursor-pointer border";
  const dark = "bg-sky-900 hover:bg-sky-800 text-white border-sky-800";
  const light = "bg-white hover:bg-sky-50 text-sky-900 border-sky-100";
  const cls = `${base} ${variant === "light" ? light : dark}`;

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Replace href="#" with your actual App Store URL */}
      <a href="#" aria-label="Download on the App Store" className={cls}>
        <AppleIcon className="w-7 h-7 flex-shrink-0" />
        <div>
          <p className="text-xs opacity-60 leading-none mb-0.5">Download on the</p>
          <p className="text-sm font-semibold">App Store</p>
        </div>
      </a>
      {/* Replace href="#" with your actual Google Play URL */}
      <a href="#" aria-label="Get it on Google Play" className={cls}>
        <PlayStoreIcon className="w-7 h-7 flex-shrink-0" />
        <div>
          <p className="text-xs opacity-60 leading-none mb-0.5">Get it on</p>
          <p className="text-sm font-semibold">Google Play</p>
        </div>
      </a>
    </div>
  );
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────

function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 272, height: 544 }}>
      {/* Shell */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-800 to-sky-950 rounded-[44px] shadow-2xl shadow-sky-950/60" />
      {/* Screen */}
      <div
        className="absolute rounded-[36px] overflow-hidden"
        style={{ top: 10, left: 10, width: 252, height: 524 }}
      >
        <Image
          src="/app-screenshot.jpg"
          alt="Cellable app — match, secure, buy and sell tech"
          fill
          className="object-cover object-top"
          sizes="252px"
        />
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full" aria-hidden="true" />
      {/* Glow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-14 bg-sky-400/25 blur-2xl rounded-full pointer-events-none" aria-hidden="true" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Hero — navbar is same gradient so they blend seamlessly */}
      <section className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 text-white overflow-hidden pt-16">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-800/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm text-sky-100 border border-white/10">
                <span className="w-2 h-2 bg-teal-400 rounded-full" aria-hidden="true" />
                Buy &amp; Sell Pre-Owned Tech
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Match, Secure,{" "}
                <span className="text-teal-300">Payments</span>{" "}
                and Commerce
              </h1>

              <p className="text-lg text-sky-100 leading-relaxed max-w-lg">
                Sell or buy tech. Match with hundreds of buyers and sellers to sell your pre-owned device <strong className="text-white">5× faster</strong>, anywhere.
              </p>

              <DownloadButtons variant="light" />

              <p className="text-sky-300 text-sm">Free to download &nbsp;·&nbsp; No listing fees</p>
            </div>

            {/* Right — phone with real app screenshot */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-16 overflow-hidden" aria-hidden="true">
          <svg className="absolute bottom-0 w-full text-sky-50" viewBox="0 0 1440 64" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" />
          </svg>
        </div>
      </section>

    </>
  );
}
