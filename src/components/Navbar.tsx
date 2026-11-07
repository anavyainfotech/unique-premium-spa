"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Send, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Outlets", href: "/outlets" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-pink-100/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group py-1 min-w-0">
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Unique Premium Spa"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-2xl font-bold tracking-tight text-[var(--color-primary)] leading-tight group-hover:text-[var(--color-primary-hover)] transition-colors whitespace-nowrap">
              Unique Premium Spa
            </span>
            <span className="text-[9px] sm:text-[11px] font-medium tracking-[0.12em] sm:tracking-[0.15em] uppercase text-gray-400 whitespace-nowrap">
              Luxury Wellness &amp; Therapy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-[var(--color-primary)] font-bold"
                    : "text-gray-600 hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://t.me/+EuZUAx-uEB41YjE1"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="p-2.5 rounded-full border border-pink-200 text-[var(--color-primary)] hover:bg-[#fff0f6] transition-colors"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href="tel:+919718892869"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold text-xs transition-all"
          >
            <Phone className="w-3.5 h-3.5" /> +91 97188 92869
          </a>
          <a
            href="tel:+919718892869"
            className="px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white font-semibold text-xs hover:bg-[var(--color-primary-hover)] transition-all shadow-md shadow-pink-500/20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Button Only (Phone button removed as requested) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-1 text-gray-700 hover:text-[var(--color-primary)] rounded-lg hover:bg-pink-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[var(--color-primary)]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-100 px-4 py-5 shadow-lg space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                pathname === link.href
                  ? "bg-[#fff0f6] text-[var(--color-primary)] font-bold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+919718892869"
              className="w-full py-2.5 rounded-full bg-[var(--color-primary)] text-white text-center font-bold text-xs"
            >
              Book Now (+91 97188 92869)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
