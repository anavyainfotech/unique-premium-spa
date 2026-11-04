import Image from "next/image";
import Link from "next/link";
import { Phone, Sparkles, MapPin, Eye } from "lucide-react";

export const metadata = {
  title: "Spa Ambiance & Suite Gallery — Unique Premium Spa Delhi NCR",
  description: "Take a visual tour of our luxury private suites, aromatherapy setups, couples therapy rooms, and tranquil spa ambiance across Delhi NCR.",
};

const galleryImages = [
  {
    title: "Luxury Couple Treatment Suite",
    category: "Suites",
    src: "/hero-woman.png",
    alt: "Luxury Couple Treatment Suite",
    desc: "Private couple room equipped with dual therapy tables, warm ambient lighting, and floral accents.",
  },
  {
    title: "Aromatherapy & Botanical Oils",
    category: "Wellness",
    src: "/spa-oil-generated.png",
    alt: "Organic Aromatherapy Oils",
    desc: "100% natural essential oils formulated for deep stress relief and skin hydration.",
  },
  {
    title: "Serene Private Relaxation Suite",
    category: "Ambiance",
    src: "/hero-woman.png",
    alt: "Private Relaxation Suite",
    desc: "Soundproof VIP treatment suite ensuring total privacy, tranquility, and discreet relaxation.",
  },
  {
    title: "Herbal Compress & Warm Stone Setup",
    category: "Therapies",
    src: "/spa-oil-generated.png",
    alt: "Herbal Compress and Hot Stone Setup",
    desc: "Traditional heated basalt stones and steamed Ayurvedic herbal poultices for chronic muscle relief.",
  },
  {
    title: "Hydrotherapy & Refreshment Lounge",
    category: "Suites",
    src: "/hero-woman.png",
    alt: "Hydrotherapy and Refreshment Lounge",
    desc: "Ensuite shower and hot steam amenities with freshly prepared organic herbal infusions.",
  },
  {
    title: "VIP Executive Bodywork Suite",
    category: "Ambiance",
    src: "/spa-oil-generated.png",
    alt: "VIP Executive Bodywork Suite",
    desc: "Curated plush aesthetic with certified therapists delivering customized wellness care.",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-3">
            VISUAL SANCTUARY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Our Spa &amp; Suite Gallery
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            Take a visual tour of our impeccably designed private therapy suites, soothing mood lighting, and tranquil spaces across all 7 Delhi NCR outlets.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/50 transition-all flex flex-col group"
            >
              <div className="relative w-full h-64 overflow-hidden bg-pink-50">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[var(--color-primary)] font-semibold text-[11px] uppercase tracking-wider shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" /> Delhi NCR
                  </span>
                  <a
                    href="tel:+919718892869"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" /> Book Suite
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outlets CTA Strip */}
        <div className="bg-[#faeef4] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-pink-200">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-3">
            Experience Our Suites in Person
          </h2>
          <p className="text-sm text-gray-700 max-w-xl mx-auto mb-6">
            Visit us in Aerocity, Connaught Place, New Friends Colony, Gurgaon, Vasant Kunj and other prime Delhi NCR locations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/outlets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all"
            >
              <MapPin className="w-4 h-4" /> View All 7 Outlets
            </Link>
            <a
              href="tel:+919718892869"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[var(--color-primary-hover)] transition-all"
            >
              <Phone className="w-4 h-4" /> Call +91 97188 92869
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
