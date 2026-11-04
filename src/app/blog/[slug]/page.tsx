import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import FAQAccordion from "@/components/FAQAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found — Unique Premium Spa",
    };
  }

  return {
    title: `${post.title} — Unique Premium Spa`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[var(--color-background)] min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
            <span className="px-3 py-1 rounded-full bg-pink-100 text-[var(--color-primary)] font-semibold uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light border-l-4 border-[var(--color-primary)] pl-4 italic bg-white/60 p-4 rounded-r-2xl">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-pink-100 shadow-sm space-y-8 mb-12">
          {post.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 text-[var(--color-primary)]">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Blog Article FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mb-12">
            <FAQAccordion
              items={post.faqs}
              title="Article FAQs"
              subtitle="RELATED QUESTIONS & ADVICE"
            />
          </div>
        )}

        {/* Booking CTA Box */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-pink-600 rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Experience Ultimate Relaxation Today
          </h3>
          <p className="text-white/90 text-sm max-w-xl mx-auto mb-6 font-light leading-relaxed">
            Ready to relieve fatigue and treat yourself to a luxury spa session? Our expert therapists are available across Delhi NCR.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919718892869"
              className="px-6 py-3 rounded-full bg-white text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" /> Call Now +91 97188 92869
            </a>
            <a
              href="https://wa.me/919718892869"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border-2 border-white text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
