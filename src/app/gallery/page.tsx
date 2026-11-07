"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/services/full-body-massage.jpg", alt: "Full Body Relaxation Suite" },
  { src: "/spa-oil-generated.png", alt: "Aromatherapy & Botanical Oils" },
  { src: "/services/b2b-massage.jpg", alt: "B2B Therapy Room" },
  { src: "/services/sandwich-massage.jpg", alt: "Sandwich Four-Hand Suite" },
  { src: "/services/couple-massage.jpg", alt: "Luxury Couple Treatment Suite" },
  { src: "/services/thai-massage.jpg", alt: "Traditional Thai Zen Suite" },
  { src: "/hero-woman.png", alt: "Private Relaxation Suite" },
  { src: "/services/complete-sessions.jpg", alt: "Complete Sensory Healing Suite" },
];

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-primary)] block mb-2">
            VISUAL SANCTUARY
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-3">
            Our Spa &amp; Suite Gallery
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Take a visual tour of our luxury private suites, calming mood lighting, and tranquil spa spaces across Delhi NCR. Click any image to expand.
          </p>
        </div>

        {/* Pure Image Grid with Click to Expand (No Text, No Extra CTA) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mb-12">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.src)}
              className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-pink-50 border border-pink-100/80 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/40 transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 text-[var(--color-primary)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 shadow-md">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal on Click */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all z-50"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt="Expanded spa view"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
