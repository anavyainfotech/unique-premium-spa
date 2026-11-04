import Link from "next/link";
import { Clock, Phone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-3">
            LUXURY SPA MENUS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Our Signature Treatments & Services
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            Every session is carefully tailored to your personal relaxation preferences. Delivered with pharmaceutical-grade hygiene and certified therapists across our 7 Delhi NCR branches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/50 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {service.badge && (
                <div className="absolute top-5 right-5 px-3 py-1 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                  {service.badge}
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-[var(--color-primary)]">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50">
                    <Clock className="w-3.5 h-3.5" /> {service.duration}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  <Link href={`/services/${service.slug}`} className="hover:underline">
                    {service.title}
                  </Link>
                </h2>
                <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">
                  {service.subtitle}
                </p>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-pink-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-medium">Starting from</span>
                    <span className="font-serif text-2xl font-bold text-[var(--color-primary)]">
                      {service.price}
                    </span>
                  </div>
                  <a
                    href="tel:+919718892869"
                    className="px-5 py-2 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3 h-3" /> Book
                  </a>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="w-full py-2.5 rounded-full border border-pink-200 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-pink-50 transition-colors"
                >
                  View Full Details &amp; FAQs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
            Speak directly with our concierge team. We arrange custom durations, couples specials, and corporate wellness packages.
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
