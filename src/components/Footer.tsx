import Link from "next/link";
import Image from "next/image";
import { Phone, Send } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--color-primary)] text-white pt-10 sm:pt-14 pb-10 relative overflow-hidden">
      {/* Organic Elegant Wave / Zig-Zag Top Divider from user's image */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[1px]">
        <svg
          className="relative block w-full h-8 sm:h-12 md:h-16 text-[#fdf8fa]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Smooth S-curve wave dipping down and sweeping up across the banner */}
          <path d="M0,0 C320,65 520,75 820,35 C1120,-5 1320,40 1440,25 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Ready to Unwind Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 pt-4 sm:pt-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Ready to Unwind?
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            One call is all it takes. Tell us your city and preferred time — we&apos;ll have a therapist ready for you.
          </p>

          {/* 3 Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919718892869"
              className="px-8 py-3.5 rounded-full bg-white text-[var(--color-primary)] font-bold text-xs tracking-wider uppercase hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" /> CALL +91 97188 92869
            </a>

            <a
              href="https://wa.me/919718892869"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full border-2 border-white/80 text-white font-bold text-xs tracking-wider uppercase hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-300" /> WHATSAPP US
            </a>

            <a
              href="https://t.me/+EuZUAx-uEB41YjE1"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full border-2 border-white/80 text-white font-bold text-xs tracking-wider uppercase hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" /> TELEGRAM
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-16" />

        {/* Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center p-1.5">
                <Image
                  src="/logo.png"
                  alt="Unique Premium Spa"
                  width={32}
                  height={32}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="font-serif text-lg font-bold">
                Unique Premium Spa
              </span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed font-light">
              Professional massage &amp; spa services across Delhi NCR — full body, B2B, sandwich, couple and Thai massage, at an outlet near you.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/outlets" className="hover:text-white transition-colors">Outlets</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Col 3: Our Outlets */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">
              OUR OUTLETS
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              <li><Link href="/outlets" className="hover:text-white transition-colors">Spa in Aerocity</Link></li>
              <li><Link href="/outlets" className="hover:text-white transition-colors">Spa in Chanakyapuri</Link></li>
              <li><Link href="/outlets" className="hover:text-white transition-colors">Spa in CP (Connaught Place)</Link></li>
              <li><Link href="/outlets" className="hover:text-white transition-colors">Spa in Gurgaon</Link></li>
              <li><Link href="/outlets" className="hover:text-white transition-colors">Spa in Vasant Kunj / NFC</Link></li>
            </ul>
          </div>

          {/* Col 4: Book A Session */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-2 text-white">
              BOOK A SESSION
            </h4>
            <div className="font-serif text-2xl font-bold mb-1">
              +91 97188 92869
            </div>
            <p className="text-xs text-white/70 mb-5 font-light">
              One number for all outlets
            </p>

            <div className="space-y-2.5">
              <a
                href="tel:+919718892869"
                className="w-full py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5" /> CALL
              </a>
              <a
                href="https://wa.me/919718892869"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-300" /> WHATSAPP
              </a>
              <a
                href="https://t.me/+EuZUAx-uEB41YjE1"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5" /> TELEGRAM
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70 font-light">
          <div>
            © 2026 Unique Premium Spa. All rights reserved. Massage &amp; spa services across Delhi NCR.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
