import Image from "next/image";
import Link from "next/link";
import { outletsData } from "@/data/outletsData";

export const metadata = {
  title: "Our 7 Luxury Spa Outlets — Unique Premium Spa Delhi NCR",
  description:
    "Explore our 7 premium hotel spa outlets across Delhi NCR: Aerocity, Connaught Place, Gurgaon, Vasant Kunj, and New Friends Colony.",
  alternates: {
    canonical: "/outlets",
  },
};

export default function OutletsPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-2">
            7 CONVENIENT NCR LOCATIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-primary)] mb-3">
            Our Spa Outlets in Delhi NCR
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Centrally situated across prime luxury hotel locations in Aerocity, Connaught Place, South Delhi, and Gurgaon. Click on any outlet to view details.
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {outletsData.map((outlet, index) => (
            <Link
              key={index}
              href={`/outlets/${outlet.slug}`}
              className="relative rounded-2xl overflow-hidden border border-pink-100 shadow-md hover:shadow-2xl hover:border-[var(--color-primary)]/50 transition-all duration-300 group aspect-[4/3] sm:aspect-[3/4] block cursor-pointer"
            >
              {/* Hotel Background Image */}
              <Image
                src={outlet.image}
                alt={outlet.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 transition-colors" />

              {/* Title Placed Directly Over the Image (Left Aligned) */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-left">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-pink-300 block mb-1">
                  {outlet.area}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide drop-shadow-md leading-tight group-hover:text-pink-200 transition-colors">
                  {outlet.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
