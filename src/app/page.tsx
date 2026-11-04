import Image from "next/image";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#faeef4] pt-8 pb-10 lg:pt-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 z-10 text-left py-4 lg:py-6">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-4">
                WELCOME TO UNIQUE PREMIUM SPA
              </span>
              
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-bold text-[var(--color-primary)] leading-[1.18] tracking-normal mb-5">
                Always Make Room <br className="hidden sm:inline" />
                for a Little Calm in <br className="hidden sm:inline" />
                Your Life
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-lg mb-7 leading-relaxed font-normal">
                Professional massage &amp; spa services across Delhi NCR — full body, B2B, sandwich, couple and Thai massage, delivered by certified therapists at an outlet near you.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-7">
                <a
                  href="tel:+919718892869"
                  className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-3 shadow-lg shadow-pink-500/25 hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4" /> BOOK APPOINTMENT
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-sm tracking-wider uppercase hover:bg-white transition-all bg-transparent hover:scale-[1.02]"
                >
                  EXPLORE SERVICES
                </a>
              </div>

              {/* Call Hotline Subtext */}
              <a
                href="tel:+919718892869"
                className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                <span>Call +91 97188 92869 — one number for all outlets</span>
              </a>
            </div>

            {/* Right Image with Luxury Arch Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-start lg:-ml-4 relative">
              <div className="relative w-[330px] h-[430px] sm:w-[410px] sm:h-[520px] lg:w-[480px] lg:h-[570px] xl:w-[500px] xl:h-[590px]">
                {/* Thin Outline Arch Rings from Screenshot */}
                <div className="absolute inset-0 -top-6 -right-6 rounded-t-full border border-pink-300/70 pointer-events-none" />
                <div className="absolute inset-0 -top-12 -right-12 rounded-t-full border border-pink-200/50 pointer-events-none" />
                
                {/* Clean Arch Container matching screenshot */}
                <div className="w-full h-full rounded-t-full overflow-hidden bg-[#eebecd] relative">
                  <Image
                    src="/hero-woman.png"
                    alt="Unique Premium Spa Relaxation"
                    fill
                    priority
                    className="object-cover object-top scale-105"
                  />
                </div>
              </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                <Waves className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Full Body Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹1,500
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Sparkles className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Complete Sessions
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹2,499
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Hand className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                B2B Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹2,999
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Users className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Sandwich Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹3,999
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Heart className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Couple Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ₹6,000
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-xs border border-pink-100 hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[220px] group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#fdebf3] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Flower2 className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                Thai Massage
              </h3>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-medium">
                60 MIN &nbsp;·&nbsp; ON REQUEST
              </p>
            </div>
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
    </main>
  );
}
