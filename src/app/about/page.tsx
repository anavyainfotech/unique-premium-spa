import Image from "next/image";
import { Award, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us — Unique Premium Spa Delhi NCR",
  description: "Learn about Unique Premium Spa's history, hygiene standards, certified therapists, and philosophy.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-2">
            OUR STORY &amp; VALUES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-primary)] mb-3">
            Reinventing Everyday Wellness in Delhi NCR
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Unique Premium Spa was founded with a single mission: to create a quiet sanctuary of deep relaxation and authentic therapies amidst the bustle of Delhi NCR.
          </p>
        </div>

        {/* Hero Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg border border-pink-100">
              <Image
                src="/spa-oil-generated.png"
                alt="About Unique Premium Spa"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              A Culture of Genuine Care, Discretion &amp; Comfort
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-4">
              From our flagship centres in Aerocity and Connaught Place to our tranquil retreats in Gurgaon and Vasant Kunj, every outlet reflects our uncompromising commitment to cleanliness and therapist professionalism.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-6">
              We understand that massage therapy is not a luxury, but essential physical maintenance for modern urban stress. Our therapies are individually adapted to your muscle tension, posture needs, and preference.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#fcebf2] rounded-xl p-3.5 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] block">7</span>
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium">NCR Outlets</span>
              </div>
              <div className="bg-[#fcebf2] rounded-xl p-3.5 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] block">25+</span>
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Therapists</span>
              </div>
              <div className="bg-[#fcebf2] rounded-xl p-3.5 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] block">10k+</span>
                <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Happy Guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-pink-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Hospital-Grade Hygiene</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Single-use disposable bed sheets, sterile robes, sanitized hot compress towels, and thorough air purification in every suite.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-7 border border-pink-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Therapists</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Our therapists undergo rigorous anatomical and pressure-point training, guaranteeing respectful, professional, and rejuvenating sessions.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-7 border border-pink-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pure Aromatherapy</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              We exclusively use 100% natural, skin-nourishing essential oils including lavender, eucalyptus, lemongrass, and warm sweet almond oil.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
