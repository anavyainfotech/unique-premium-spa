import { Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Spa & Wellness Blog — Unique Premium Spa",
  description: "Read expert guides on massage benefits, choosing the right therapy, stress relief and wellness tips in Delhi NCR.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "How to Choose the Right Massage Therapy for Urban Fatigue",
      date: "Oct 28, 2026",
      readTime: "4 min read",
      category: "Wellness Guide",
      excerpt: "Sitting long hours in office cubicles or commuting across NCR takes a heavy toll on your cervical spine. Learn whether Swedish or Deep Tissue is right for you.",
    },
    {
      title: "The Therapeutic Science Behind Four-Hand Sandwich Massage",
      date: "Oct 15, 2026",
      readTime: "5 min read",
      category: "Therapy Focus",
      excerpt: "When two therapists move in synchronization, your brain cannot easily track both rhythms, entering deep meditative theta brainwave relaxation quicker.",
    },
    {
      title: "Top 5 Benefits of Essential Oils & Hot Stone Therapy in Autumn",
      date: "Sep 30, 2026",
      readTime: "3 min read",
      category: "Aromatherapy",
      excerpt: "As seasonal changes bring cooler winds, lavender and sandalwood essential oils help restore dermal hydration while soothing muscle stiffness.",
    },
    {
      title: "Couples Massage in Delhi NCR: What to Expect During Your Session",
      date: "Sep 12, 2026",
      readTime: "6 min read",
      category: "Couple Spa",
      excerpt: "A step-by-step walkthrough of what our VIP Couple Suites offer — from floral hydrotherapy baths to customized mutual relaxation therapies.",
    },
  ];

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
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/50 transition-all flex flex-col justify-between group"
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
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-pink-100">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] group-hover:translate-x-1 transition-transform">
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
