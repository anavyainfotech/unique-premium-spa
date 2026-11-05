import Link from "next/link";
import Image from "next/image";
import { Clock, Phone, ArrowRight, Sparkles } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Spa Services & Therapies — Unique Premium Spa Delhi NCR",
  description: "Explore our luxury massage therapies: Full Body, B2B, Sandwich four-hand, Couple suite, and Authentic Thai massage.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-3">
            LUXURY SPA MENUS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Our Signature Services
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            Choose your preferred therapy across our 7 Delhi NCR locations with licensed therapists.
          </p>
        </div>

        {/* Clean Services Grid — Entire card clickable, with dedicated call button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-xs hover:shadow-xl hover:border-[var(--color-primary)]/40 transition-all flex flex-col justify-between group relative cursor-pointer"
            >
              {/* Full card clickable link covering the whole card */}
              <Link
                href={`/services/${service.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${service.title}`}
              />

              <div>
                <div className="relative h-52 w-full overflow-hidden bg-pink-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 z-20">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[var(--color-primary)] flex items-center gap-1.5 shadow-sm">
                      <Clock className="w-3.5 h-3.5" /> {service.duration}
                    </span>
                  </div>

                  {service.badge && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2.5 py-1 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <span className="absolute bottom-3 left-3 z-20 text-xs font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {service.subtitle}
                  </span>
                </div>

                <div className="p-6 pb-2">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors mb-2">
                    {service.title}
                  </h2>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-normal mb-2">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-pink-100 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-medium">Session Price</span>
                    <span className="font-serif text-3xl font-bold text-[var(--color-primary)]">
                      {service.price}
                    </span>
                  </div>
                  <a
                    href="tel:+919718892869"
                    className="relative z-20 px-6 py-2.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-2 shadow-sm pointer-events-auto"
                  >
                    <Phone className="w-3.5 h-3.5" /> Book
                  </a>
                </div>

                <div className="w-full py-2.5 rounded-full bg-pink-50/70 group-hover:bg-[var(--color-primary)] group-hover:text-white text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors">
                  View Details &amp; FAQs <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#faeef4] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-pink-200">
          <div className="w-12 h-12 rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-3">
            Looking for a customized session or special package?
          </h3>
          <p className="text-sm text-gray-700 max-w-xl mx-auto mb-6">
            Speak directly with our concierge team for custom durations, couple specials, and corporate bookings.
          </p>
          <a
            href="tel:+919718892869"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[var(--color-primary-hover)] transition-all"
          >
            <Phone className="w-4 h-4" /> Call +91 97188 92869
          </a>
        </div>

      </div>
    </div>
  );
}
