import Image from "next/image";
import { Award, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us — Unique Premium Spa Delhi NCR",
  description: "Learn about Unique Premium Spa's history, hygiene standards, certified therapists, and philosophy.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-3">
            OUR STORY & VALUES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Reinventing Everyday Wellness in Delhi NCR
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            Unique Premium Spa was founded with a single mission: to create a quiet sanctuary of deep relaxation and authentic therapies amidst the bustle of Delhi NCR.
          </p>
        </div>

        {/* Hero Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-pink-100">
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
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              A Culture of Genuine Care, Discretion &amp; Comfort
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-light mb-5">
              From our flagship centres in Aerocity and Connaught Place to our tranquil retreats in Gurgaon and Vasant Kunj, every outlet reflects our uncompromising commitment to cleanliness and therapist professionalism.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-light mb-8">
              We understand that massage therapy is not a luxury, but essential physical maintenance for modern urban stress. Our therapies are individually adapted to your muscle tension, posture needs, and preference.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#fcebf2] rounded-2xl p-4 text-center">
                <span className="font-serif text-3xl font-bold text-[var(--color-primary)] block">7</span>
                <span className="text-xs text-gray-500 font-medium">NCR Outlets</span>
              </div>
              <div className="bg-[#fcebf2] rounded-2xl p-4 text-center">
                <span className="font-serif text-3xl font-bold text-[var(--color-primary)] block">25+</span>
                <span className="text-xs text-gray-500 font-medium">Therapists</span>
              </div>
              <div className="bg-[#fcebf2] rounded-2xl p-4 text-center">
                <span className="font-serif text-3xl font-bold text-[var(--color-primary)] block">10k+</span>
                <span className="text-xs text-gray-500 font-medium">Happy Guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-5">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Hospital-Grade Hygiene</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Single-use disposable bed sheets, sterile robes, sanitized hot compress towels, and thorough air purification in every suite.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-5">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Certified Therapists</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Our therapists undergo rigorous anatomical and pressure-point training, guaranteeing respectful, professional, and rejuvenating sessions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-5">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Pure Aromatherapy</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              We exclusively use 100% natural, skin-nourishing essential oils including lavender, eucalyptus, lemongrass, and warm sweet almond oil.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
