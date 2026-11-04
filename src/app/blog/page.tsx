import Link from "next/link";
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
    <div className="bg-[var(--color-background)] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-3">
            WELLNESS INSIGHTS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Spa &amp; Relaxation Blog
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-normal">
            Articles, guides and insights from our certified therapists on physical restoration, mental calm, and holistic rejuvenation.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/50 transition-all flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                  <span className="px-3 py-1 rounded-full bg-pink-50 text-[var(--color-primary)] font-semibold uppercase tracking-wider text-[10px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:underline focus:outline-none">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-pink-100">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] group-hover:translate-x-1 transition-transform"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Section FAQs */}
        <div className="mt-16">
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
