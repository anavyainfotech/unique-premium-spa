import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Waves, 
  Hand, 
  Users, 
  Heart, 
  Flower2, 
  ArrowRight
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const homeFaqs = [
  {
    question: "What types of massage services are offered at Unique Premium Spa?",
    answer: "We offer Full Body Massage, Complete Sessions with aromatherapy, specialized B2B Massage, synchronous Four-Hand Sandwich Massage, Luxury Couple Suites, and traditional Authentic Thai Massage across all 7 Delhi NCR locations."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book easily by calling our 24/7 centralized helpline at +91 97188 92869 or messaging us on WhatsApp / Telegram. We allocate your preferred therapist and slot instantly."
  },
  {
    question: "Are private showers and amenities available?",
    answer: "Yes, every VIP treatment suite is sanitized, fully air-conditioned, and equipped with a private ensuite shower, steam amenities, fresh towels, disposable spa attire, and complimentary herbal tea."
  },
  {
    question: "Which locations in Delhi NCR can I visit?",
    answer: "Our branches are located in Aerocity, Connaught Place (CP), New Friends Colony (NFC), Gurgaon (DLF Phase / Golf Course Rd), Vasant Kunj, and nearby premier hubs."
  },
  {
    question: "What are your operating hours?",
    answer: "Our outlets operate 7 days a week from 10:00 AM to 10:30 PM. We recommend calling ahead to reserve peak evening and weekend slots."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Hero Section with Ambient Background Video */}
      <section className="relative overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center justify-center">
        {/* Background Video with Rich Overlay */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="/hero-woman.png"
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Multi-layer Gradient Overlay for High Readability & Luxury Aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40 z-10" />
          <div className="absolute inset-0 bg-[var(--color-primary)]/20 mix-blend-multiply z-10" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-3xl text-left">
            {/* SEO Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-pink-200 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              <span>Luxury Spa &amp; Wellness in Delhi NCR</span>
            </div>
            
            {/* SEO-Optimized H1 Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6 drop-shadow-md">
              Always Make Room <br className="hidden sm:inline" />
              for a Little Calm in <br className="hidden sm:inline" />
              <span className="text-pink-300">Your Life</span>
            </h1>
            
            {/* Descriptive Body for SEO & User Conversion */}
            <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mb-8 leading-relaxed font-light drop-shadow">
              Experience certified therapeutic healing across 7 luxury outlets in Delhi NCR — including Full Body, B2B, Four-Hand Sandwich, Couples, and Traditional Thai massage with pharmaceutical-grade hygiene and private suites.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="tel:+919718892869"
                className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-3 shadow-xl shadow-pink-900/40 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" /> BOOK APPOINTMENT
              </a>
              <Link
                href="/services"
                className="px-8 py-4 rounded-full border-2 border-white/90 text-white font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all backdrop-blur-xs hover:scale-[1.02]"
              >
                EXPLORE SERVICES
              </Link>
            </div>

            {/* Quick Badges / Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15 text-xs text-white/80 font-medium">
              <a
                href="tel:+919718892869"
                className="inline-flex items-center gap-2 hover:text-pink-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-pink-300" />
                <span>Hotline: +91 97188 92869 (Aerocity, CP, NFC, Gurgaon &amp; more)</span>
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <span className="flex items-center gap-1.5 text-white/90">
                <ShieldCheck className="w-4 h-4 text-pink-300" /> 100% Verified Therapists &amp; VIP Suites
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Exact Magenta / Pink Stats Strip from Screenshot */}
      <section className="bg-[var(--color-primary)] text-white py-6 px-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-base tracking-wide">Certified Therapists</h4>
              <p className="text-xs text-white/80 font-light">Trained & experienced hands</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-base tracking-wide">Premium Oils & Products</h4>
              <p className="text-xs text-white/80 font-light">Pure, skin-friendly aromatherapy</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-base tracking-wide">Hygiene & Comfort</h4>
              <p className="text-xs text-white/80 font-light">Sanitised rooms, fresh linen</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer / Signature Services Section */}
      <section id="services" className="py-20 px-4 bg-[#fdf8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-2">
              WHAT WE OFFER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] tracking-tight">
              Our Signature Services
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto mt-3 font-normal leading-relaxed">
              Six carefully curated treatments — from an everyday full-body massage to our signature two-therapist sandwich massage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/full-body-massage" className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-lg hover:border-[var(--color-primary)]/50 transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer block">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                <Waves className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Full Body Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹1,500
              </p>
            </Link>

            <Link href="/services/complete-sessions" className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-lg hover:border-[var(--color-primary)]/50 transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer block">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Sparkles className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Complete Sessions
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹2,499
              </p>
            </Link>

            <Link href="/services/b2b-massage" className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-lg hover:border-[var(--color-primary)]/50 transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer block">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Hand className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                B2B Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹2,999
              </p>
            </Link>

            <Link href="/services/sandwich-massage" className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-lg hover:border-[var(--color-primary)]/50 transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer block">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Users className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Sandwich Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹3,999
              </p>
            </Link>

            <Link href="/services/couple-massage" className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-lg hover:border-[var(--color-primary)]/50 transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer block">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Heart className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Couple Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹6,000
              </p>
            </Link>

            <Link href="/services/thai-massage" className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-lg hover:border-[var(--color-primary)]/50 transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer block">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Flower2 className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Thai Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ON REQUEST
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              View full pricing <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[560px]">
                <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[var(--color-primary)] rounded-tl-3xl pointer-events-none" />
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border border-pink-100 bg-[#faeef4]">
                  <Image
                    src="/spa-oil-generated.png"
                    alt="Spa essential oil treatment"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 text-left">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-3">
                ABOUT US
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[var(--color-primary)] leading-[1.22] mb-4">
                A Little Calm, Wherever You Are in <br className="hidden sm:inline" />
                Delhi NCR
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-7 font-normal max-w-xl">
                Unique Premium Spa brings professional, hygienic and deeply relaxing massage therapy to five convenient locations — from CP to Vasant Kunj to Gurgaon. Every session is delivered by trained therapists with premium oils and fresh linens.
              </p>

              <div className="grid grid-cols-3 gap-3.5 mb-7 max-w-md">
                <div className="bg-[#fcebf2] rounded-2xl py-3.5 px-3 text-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-primary)] block">7</span>
                  <span className="text-[11px] text-gray-500 font-medium tracking-wide">Outlets</span>
                </div>
                <div className="bg-[#fcebf2] rounded-2xl py-3.5 px-3 text-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-primary)] block">6+</span>
                  <span className="text-[11px] text-gray-500 font-medium tracking-wide">Services</span>
                </div>
                <div className="bg-[#fcebf2] rounded-2xl py-3.5 px-3 text-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-primary)] block">1</span>
                  <span className="text-[11px] text-gray-500 font-medium tracking-wide">Helpline</span>
                </div>
              </div>

              <a
                href="/about"
                className="inline-block px-7 py-3 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                KNOW MORE ABOUT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Favourites / Most Booked Sessions */}
      <section id="pricing" className="py-20 px-4 bg-[#fdf2f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-2">
              GUEST FAVOURITES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] tracking-tight">
              Most Booked Sessions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center shadow-lg shadow-pink-200/50 border border-pink-100 flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2">Full Body Massage</h3>
                <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-8">EVERYDAY FULL-BODY RESET</p>
                <div className="mb-8">
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-1">₹1,500</div>
                  <span className="text-xs text-gray-400 font-normal">60 min session</span>
                </div>
              </div>
              <a
                href="tel:+919718892869"
                className="w-full py-3.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all shadow-md shadow-pink-500/25"
              >
                BOOK NOW
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center shadow-lg shadow-pink-200/50 border border-pink-100 flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2">B2B Massage</h3>
                <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-8">DEEP, IMMERSIVE BODY WORK</p>
                <div className="mb-8">
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-1">₹2,999</div>
                  <span className="text-xs text-gray-400 font-normal">60 min session</span>
                </div>
              </div>
              <a
                href="tel:+919718892869"
                className="w-full py-3.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all shadow-md shadow-pink-500/25"
              >
                BOOK NOW
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center shadow-lg shadow-pink-200/50 border border-pink-100 flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2">Sandwich Massage</h3>
                <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-8">TWO THERAPISTS, FOUR HANDS</p>
                <div className="mb-8">
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-1">₹3,999</div>
                  <span className="text-xs text-gray-400 font-normal">60 min session</span>
                </div>
              </div>
              <a
                href="tel:+919718892869"
                className="w-full py-3.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all shadow-md shadow-pink-500/25"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              See all packages <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Find Us Near You / 7 Outlets Section */}
      <section id="outlets" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-2">
            FIND US NEAR YOU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] tracking-tight mb-8">
            7 Outlets Across Delhi NCR
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full mb-6">
            <a
              href="tel:+919718892869"
              className="px-5 py-2.5 rounded-full border border-pink-200 bg-white hover:border-[var(--color-primary)] hover:bg-[#fff0f6] text-gray-800 text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Spa in Aerocity</span>
            </a>

            <a
              href="tel:+919718892869"
              className="px-5 py-2.5 rounded-full border border-pink-200 bg-white hover:border-[var(--color-primary)] hover:bg-[#fff0f6] text-gray-800 text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Spa in NFC (New Friends Colony)</span>
            </a>

            <a
              href="tel:+919718892869"
              className="px-5 py-2.5 rounded-full border border-pink-200 bg-white hover:border-[var(--color-primary)] hover:bg-[#fff0f6] text-gray-800 text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Spa in CP (Connaught Place)</span>
            </a>

            <a
              href="tel:+919718892869"
              className="px-5 py-2.5 rounded-full border border-pink-200 bg-white hover:border-[var(--color-primary)] hover:bg-[#fff0f6] text-gray-800 text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Spa in Gurgaon</span>
            </a>

            <a
              href="tel:+919718892869"
              className="px-5 py-2.5 rounded-full border border-pink-200 bg-white hover:border-[var(--color-primary)] hover:bg-[#fff0f6] text-gray-800 text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Spa in Vasant Kunj</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-gray-500">
            Call <a href="tel:+919718892869" className="text-[var(--color-primary)] font-semibold hover:underline">+91 97188 92869</a> and we will connect you to the nearest centre.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions Section on Homepage */}
      <section className="py-20 px-4 bg-[#fdf8fa] border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            items={homeFaqs}
            title="Frequently Asked Questions"
            subtitle="EVERYTHING YOU NEED TO KNOW"
          />
        </div>
      </section>
    </main>
  );
}
