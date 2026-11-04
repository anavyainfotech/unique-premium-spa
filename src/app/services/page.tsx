import { Waves, Sparkles, Hand, Users, Heart, Flower2, Clock, Phone } from "lucide-react";

export const metadata = {
  title: "Spa Services — Unique Premium Spa Delhi NCR",
  description: "Explore our range of massage & therapies: Swedish, Thai, B2B, Sandwich, Couple massage in Delhi NCR.",
};

export default function ServicesPage() {
  const allServices = [
    {
      title: "Full Body Massage",
      subtitle: "Everyday Full-Body Reset",
      duration: "60 / 90 Mins",
      price: "₹1,500",
      desc: "A soothing head-to-toe therapy using gentle pressure to release muscular tension, improve circulation, and renew your energy levels.",
      icon: Waves,
    },
    {
      title: "Complete Sessions",
      subtitle: "Deep Sensory Relaxation",
      duration: "60 / 90 Mins",
      price: "₹2,499",
      desc: "Our comprehensive multi-technique therapy integrating hot compress, organic aromatic oils, and customized pressure point healing.",
      icon: Sparkles,
    },
    {
      title: "B2B Massage",
      subtitle: "Deep, Immersive Body Work",
      duration: "60 / 90 Mins",
      price: "₹2,999",
      desc: "Intensive body-to-body gliding strokes delivering the highest tier of relaxation and therapeutic stress relief.",
      icon: Hand,
    },
    {
      title: "Sandwich Massage",
      subtitle: "Two Therapists, Four Hands",
      duration: "60 / 90 Mins",
      price: "₹3,999",
      desc: "Synchronised four-hand massage where two certified therapists work simultaneously to create deep restorative harmony.",
      icon: Users,
    },
    {
      title: "Couple Massage",
      subtitle: "Side-by-Side Luxury Retreat",
      duration: "60 / 90 Mins",
      price: "₹6,000",
      desc: "Share serene wellness side-by-side in our private VIP couple suite, accented with floral aromatherapy and warm oil therapy.",
      icon: Heart,
    },
    {
      title: "Authentic Thai Massage",
      subtitle: "Traditional Body Realignment",
      duration: "60 / 90 Mins",
      price: "On Request",
      desc: "Ancient passive stretching and deep acupressure techniques conducted on traditional mats without oil for flexibility and posture.",
      icon: Flower2,
    },
  ];

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
            Every session is carefully tailored to your unique preferences. Delivered with pharmaceutical-grade hygiene and licensed therapists across all Delhi NCR branches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-[var(--color-primary)] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {service.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-pink-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 block uppercase">Price</span>
                    <span className="font-serif text-2xl font-bold text-[var(--color-primary)]">
                      {service.price}
                    </span>
                  </div>
                  <a
                    href="tel:+919718892869"
                    className="px-6 py-2.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3 h-3" /> Book
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#faeef4] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-pink-200">
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
