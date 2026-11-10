import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Spa & Wellness Blog — Unique Premium Spa Delhi NCR",
  description: "Read expert guides on massage benefits, choosing the right therapy, stress relief and wellness tips in Delhi NCR.",
  alternates: {
    canonical: "/blog",
  },
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

        {/* Blog Posts Grid — Full card clickable matching homepage aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-pink-100 hover:border-[var(--color-primary)]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer block"
            >
              <div>
                {/* Blog Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-pink-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2.5">
                    <span className="flex items-center gap-1 font-medium text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors mb-2 leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-gray-600 font-light leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] group-hover:underline">
                  Read Full Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
