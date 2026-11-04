import { Check, Phone, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Pricing & Packages — Unique Premium Spa",
  description: "Transparent pricing for massage sessions in Delhi NCR. Aerocity, CP, Gurgaon, Vasant Kunj, NFC.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Essential Reset",
      category: "Full Body Massage",
      price: "₹1,500",
      duration: "60 mins",
      popular: false,
      features: [
        "Full body Swedish / Deep pressure",
        "Aromatic herbal essential oils",
        "Shower & fresh linen kit included",
        "Available at all 5+ Delhi NCR outlets",
      ],
    },
    {
      name: "Signature Complete",
      category: "Complete Session & B2B",
      price: "₹2,999",
      duration: "60 / 90 mins",
      popular: true,
      features: [
        "Intensive B2B & full-body pressure work",
        "Customized essential organic oils",
        "Private suite with steam & hot shower",
        "Complimentary detox herbal beverage",
        "Certified elite senior therapist",
      ],
    },
    {
      name: "Four-Hand Synchrony",
      category: "Sandwich Two-Therapist",
      price: "₹3,999",
      duration: "60 mins",
      popular: false,
      features: [
        "2 therapists working simultaneously",
        "Four-hand choreographed strokes",
        "VIP private suite with shower",
        "Aroma-infused steam therapy",
        "Ultimate deep mental & muscle reset",
      ],
    },
    {
      name: "VIP Couple Escape",
      category: "Couple Suite Retreat",
      price: "₹6,000",
      duration: "90 mins",
      popular: false,
      features: [
        "Dedicated VIP Couple suite with jacuzzi",
        "Side-by-side aromatherapy massage",
        "Rose petal foot bath & reflexology",
        "Complimentary organic refreshments",
      ],
    },
  ];

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-3">
            TRANSPARENT PRICING
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Massage Sessions & Rates
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            No hidden costs. 100% genuine spa treatments with sterilized suites, licensed therapists and complimentary amenities across all NCR centres.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? "bg-white border-2 border-[var(--color-primary)] shadow-2xl shadow-pink-200/60 scale-[1.02]"
                  : "bg-white border border-pink-100 shadow-sm hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                  {plan.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>

                <div className="mb-6 pb-6 border-b border-pink-50">
                  <span className="font-serif text-4xl font-bold text-[var(--color-primary)]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-gray-400 font-medium block mt-1">
                    per {plan.duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed font-light">
                      <div className="w-4 h-4 rounded-full bg-pink-50 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="tel:+919718892869"
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-md shadow-pink-500/25"
                    : "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" /> Book Session
              </a>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Box */}
        <div className="border border-pink-200 bg-white rounded-3xl p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-gray-900 mb-1">
              Hygiene & Privacy Promise
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Every room undergoes hospital-grade sterilization between bookings. We use single-use disposable sheets, sanitized shower robes, and pure organic therapeutic essential oils.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
