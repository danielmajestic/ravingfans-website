"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold tracking-tight">
          RavingFans.ai
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/call"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors"
        >
          Book a Call
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4 py-3 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-white text-sm py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/call"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg mt-1"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
