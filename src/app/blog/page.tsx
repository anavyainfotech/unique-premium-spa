import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Spa & Wellness Blog — Unique Premium Spa",
  description: "Read expert guides on massage benefits, choosing the right therapy, stress relief and wellness tips in Delhi NCR.",
};

const generalBlogFaqs = [
  {
    question: "How do I choose the best massage therapy for myself?",
    answer: "If you want light stress relief and emotional calm, choose Swedish Massage. If you have chronic neck or lower back stiffness, Deep Tissue or B2B Massage is recommended. For mental burnout, our 4-hand Sandwich Massage provides optimal sensory decompression."
  },
  {
    question: "Do I need to carry anything with me to the spa?",
    answer: "No, all essential spa amenities—disposable undergarments, fresh plush bathrobes, sanitized towels, premium toiletries, and warm herbal tea—are provided at our suites."
  },
  {
    question: "How can I book a session at Unique Premium Spa?",
    answer: "You can book quickly by calling our 24/7 hotline at +91 97188 92869 or messaging us on WhatsApp. Our concierge will confirm the nearest available outlet."
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-2">
            WELLNESS INSIGHTS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-primary)] mb-3">
            Spa &amp; Relaxation Blog
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Articles, guides and insights from our certified therapists on physical restoration, mental calm, and holistic rejuvenation.
          </p>
        </div>

        {/* Blog Posts Grid — 3 blogs per row on desktop (lg:grid-cols-3), no border on card, full card clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Blog Image */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-5 bg-pink-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-gray-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-[var(--color-primary)] font-semibold uppercase tracking-wider text-[10px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-[11px]">
                    <Calendar className="w-3 h-3 text-[var(--color-primary)]" /> {post.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-medium text-[11px]">
                    <Clock className="w-3 h-3 text-[var(--color-primary)]" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors mb-2.5 leading-snug line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-pink-50 flex items-center justify-between text-xs font-bold text-[var(--color-primary)]">
                <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] font-semibold text-gray-400 group-hover:text-[var(--color-primary)] transition-colors">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Blog Section FAQs */}
        <div className="mt-12">
          <FAQAccordion
            items={generalBlogFaqs}
            title="Blog & Wellness FAQs"
            subtitle="ANSWERS FROM OUR SPA EXPERTS"
          />
        </div>

      </div>
    </div>
  );
}
