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
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-2">
            CONVENIENT NCR LOCATIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-primary)] mb-3">
            Our Spa Outlets in Delhi NCR
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Centrally situated across prime commercial and luxury hotel districts. Easy parking, discreet private access, and luxury suites.
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {outlets.map((outlet, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-7 border border-pink-100 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5 stroke-[2.2]" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">
                  {outlet.city}
                </h3>
                <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                  {outlet.landmark}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed font-light mb-4">
                  {outlet.address}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-5 bg-pink-50/50 p-2.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>{outlet.timing}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                <a
                  href={`tel:${outlet.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline"
                >
                  <Phone className="w-3 h-3" /> Call Outlet
                </a>
                <a
                  href="tel:+919718892869"
                  className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all shadow-sm"
                >
                  Book Here
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
