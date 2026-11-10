import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
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
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} — Unique Premium Spa`,
      description: post.excerpt,
      url: `/blog/${slug}`,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
            <span className="px-3 py-1 rounded-full bg-pink-100 text-[var(--color-primary)] font-semibold uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" /> {post.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            {post.title}
          </h1>

          {/* Featured Image */}
          {post.image && (
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 border border-pink-100 shadow-sm">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          )}

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light border-l-4 border-[var(--color-primary)] pl-4 italic">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body — Clean editorial layout without card box/background */}
        <div className="space-y-8 mb-12">
          {post.content.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
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
          <div className="mb-8">
            <FAQAccordion
              items={post.faqs}
              title="Article FAQs"
              subtitle="RELATED QUESTIONS & ADVICE"
            />
          </div>
        )}

      </div>
    </article>
  );
}
