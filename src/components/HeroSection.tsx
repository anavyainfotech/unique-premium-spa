"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[75vh] sm:min-h-[82vh] flex items-center justify-center text-center">
      {/* Background Video with Smooth Parallax Offset */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none overflow-hidden z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${offsetY * 0.35}px, 0)`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="/hero-woman.png"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Soft elegant cinematic dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />
      </div>

      {/* Clean Centered Content: H1, Paragraph, and Buttons Only */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-6 drop-shadow-lg">
          Always Make Room for a <br className="hidden sm:inline" />
          Little Calm in <span className="text-pink-300">Your Life</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow">
          Premium therapeutic massage and holistic spa wellness across Delhi NCR, crafted for deep relaxation and mental rejuvenation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+919718892869"
            className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-2.5 shadow-xl shadow-pink-900/40 hover:scale-105"
          >
            <Phone className="w-4 h-4" /> Book Appointment
          </a>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full border-2 border-white/90 text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all backdrop-blur-xs hover:scale-105 flex items-center gap-2"
          >
            Explore Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
