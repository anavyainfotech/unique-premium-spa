import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Phone, MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import FAQAccordion from "@/components/FAQAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found — Unique Premium Spa",
    };
  }

  return {
    title: `${service.title} in Delhi NCR — Unique Premium Spa`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-sm mb-12">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-pink-50">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 text-white">
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                {service.subtitle}
              </span>
              <div className="flex items-center gap-2 text-xs font-medium bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-pink-300" />
                <span>{service.duration}</span>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed mb-8 max-w-3xl">
              {service.desc}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-pink-100">
              <div>
                <span className="text-xs text-gray-400 block uppercase font-medium">Session Price</span>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
                  {service.price}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919718892869"
                  className="px-8 py-3.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-2 shadow-md shadow-pink-500/20"
                >
                  <Phone className="w-4 h-4" /> Call to Book
                </a>
                <a
                  href="https://wa.me/919718892869"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3.5 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider hover:bg-pink-50 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Detailed Description */}
          <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm space-y-4">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 text-[var(--color-primary)]">
              <Sparkles className="w-5 h-5" /> About This Treatment
            </h2>
            {service.longDesc.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {p}
              </p>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 text-[var(--color-primary)]">
              <ShieldCheck className="w-5 h-5" /> Proven Health Benefits
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 font-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-[#faeef4] rounded-3xl p-8 sm:p-10 border border-pink-200 mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-6 text-center">
            What to Expect During Your Session
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whatToExpect.map((step, idx) => (
              <div key={idx} className="bg-white/80 rounded-2xl p-5 border border-pink-100 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed font-light pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Specific FAQs */}
        <div className="mb-12">
          <FAQAccordion
            items={service.faqs}
            title={`${service.title} FAQs`}
            subtitle="EVERYTHING YOU NEED TO KNOW"
          />
        </div>

        {/* Available Outlets Callout */}
        <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm text-center">
          <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold block mb-2">
            AVAILABLE AT ALL 7 DELHI NCR LOCATIONS
          </span>
          <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
            Enjoy this treatment at Aerocity, Connaught Place, New Friends Colony, Gurgaon, Vasant Kunj, and more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/outlets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider hover:bg-pink-50 transition-all"
            >
              <MapPin className="w-4 h-4" /> View Outlet Locations
            </Link>
            <a
              href="tel:+919718892869"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all shadow-md shadow-pink-500/20"
            >
              <Phone className="w-4 h-4" /> Book at Nearest Outlet
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
