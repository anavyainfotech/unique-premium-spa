import { MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Spa Outlets — Unique Premium Spa Delhi NCR",
  description: "Find our luxury spa locations across Delhi NCR: Aerocity, CP, Gurgaon, Vasant Kunj & NFC.",
};

export default function OutletsPage() {
  const outlets = [
    {
      city: "Aerocity, New Delhi",
      landmark: "Near IGI Airport, Worldmark Hospitality District",
      address: "Asset Area 4, Hospitality District, Aerocity, New Delhi 110037",
      timing: "10:00 AM – 10:30 PM (7 Days)",
      phone: "+91 97188 92869",
    },
    {
      city: "Connaught Place (CP), Central Delhi",
      landmark: "Inner Circle, Near Rajiv Chowk Metro",
      address: "Block B, Inner Circle, Connaught Place, New Delhi 110001",
      timing: "10:00 AM – 10:00 PM (7 Days)",
      phone: "+91 97188 92869",
    },
    {
      city: "Gurgaon (Gurugram)",
      landmark: "Golf Course Road & Cyber City Vicinity",
      address: "Sector 54, Golf Course Road, DLF Phase 5, Gurugram 122002",
      timing: "10:00 AM – 11:00 PM (7 Days)",
      phone: "+91 97188 92869",
    },
    {
      city: "New Friends Colony (NFC), South Delhi",
      landmark: "Community Centre, Near The Suryaa",
      address: "Community Centre, New Friends Colony, New Delhi 110025",
      timing: "10:00 AM – 10:00 PM (7 Days)",
      phone: "+91 97188 92869",
    },
    {
      city: "Vasant Kunj, South Delhi",
      landmark: "Near Ambience Mall & DLF Promenade",
      address: "Nelson Mandela Marg, Pocket 8, Sector C, Vasant Kunj, New Delhi 110070",
      timing: "10:00 AM – 10:00 PM (7 Days)",
      phone: "+91 97188 92869",
    },
  ];

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-3">
            CONVENIENT NCR LOCATIONS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Our Spa Outlets in Delhi NCR
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            Centrally situated across prime commercial and luxury hotel districts. Easy parking, discreet private access, and luxury suites.
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {outlets.map((outlet, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 stroke-[2.2]" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {outlet.city}
                </h3>
                <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">
                  {outlet.landmark}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed font-light mb-5">
                  {outlet.address}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 bg-pink-50/50 p-2.5 rounded-xl">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>{outlet.timing}</span>
                </div>
              </div>

              <div className="pt-5 border-t border-pink-100 flex items-center justify-between">
                <a
                  href={`tel:${outlet.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Outlet
                </a>

                <a
                  href="tel:+919718892869"
                  className="px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all shadow-sm"
                >
                  Book Here
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* One Hotline Banner */}
        <div className="bg-[var(--color-primary)] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            One Single Helpline for All Outlets
          </h3>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto mb-6 font-light">
            Need directions, want to check therapist availability, or book a private suite? Our central concierge is active 7 days a week.
          </p>
          <a
            href="tel:+919718892869"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--color-primary)] font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-white/90 transition-all"
          >
            <Phone className="w-4 h-4" /> Call +91 97188 92869
          </a>
        </div>

      </div>
    </div>
  );
}
