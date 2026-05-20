"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-sky-600 to-sky-700 border-b border-sky-600/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-teal-300 text-xl hover:text-teal-200 transition-colors duration-200 cursor-pointer"
          >
            <div className="bg-white rounded-xl p-1 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Cellable logo"
                width={34}
                height={34}
                className="rounded-lg"
                priority
              />
            </div>
            <span>Cellable</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  pathname === href
                    ? "text-teal-300"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <a
            href="#download"
            className="hidden md:inline-flex bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer shadow-md shadow-teal-900/30"
          >
            Download App
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:bg-sky-600 transition-colors duration-200 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-sky-800 border-t border-sky-700 px-4 pt-3 pb-5 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
                pathname === href
                  ? "bg-sky-700 text-teal-300"
                  : "text-white/80 hover:bg-sky-700 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="#download"
            onClick={() => setIsOpen(false)}
            className="block mt-3 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors duration-200 cursor-pointer"
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
}
