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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Unique Premium Spa"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[var(--color-primary)]">
            Unique Premium Spa
          </span>
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

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+919718892869"
            className="p-2 rounded-full bg-[var(--color-primary)] text-white"
            aria-label="Call"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-[var(--color-primary)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
