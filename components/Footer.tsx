import Image from "next/image";
import Link from "next/link";

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sky-900 text-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-white rounded-xl p-1.5 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Cellable logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <span className="font-bold text-white text-lg">Cellable</span>
            </div>
            <p className="text-sky-300 text-sm leading-relaxed">
              Staying connected has never been easier. Download Cellable today and experience the difference.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sky-300 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Get the App
            </h3>
            <div className="space-y-3">
              {/* Replace href="#" with your actual App Store URL */}
              <a
                href="#"
                aria-label="Download on the App Store"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl px-4 py-3 transition-colors duration-200 cursor-pointer"
              >
                <AppleIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="text-xs text-sky-300 leading-none mb-0.5">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              {/* Replace href="#" with your actual Google Play URL */}
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl px-4 py-3 transition-colors duration-200 cursor-pointer"
              >
                <PlayStoreIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="text-xs text-sky-300 leading-none mb-0.5">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-800 pt-8 text-center">
          <p className="text-sky-400 text-sm">
            © {year} Cellable. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
