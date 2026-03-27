import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import ShareButtons from "./ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const publishDate = new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back to blog
          </Link>

          <h1
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            {post.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
            <span className="font-medium text-gray-300">{post.author}</span>
            <span className="text-gray-600">|</span>
            <time dateTime={post.date}>{publishDate}</time>
            <span className="text-gray-600">|</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-8 sm:py-10">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-dark prose-headings:font-bold
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-dark prose-p:leading-relaxed
              prose-a:text-gold-dark prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-dark prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-warm prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-dark
              prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-gray-200 prose-img:my-8
              prose-ul:space-y-1 prose-li:text-dark
              prose-hr:border-gray-200 prose-hr:my-10
              prose-ol:space-y-1"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </section>

      {/* Share + CTA */}
      <section className="bg-warm border-t border-gray-200 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Share */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-dark mb-3">Share this article</p>
            <ShareButtons slug={post.slug} title={post.title} />
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-xl p-8 sm:p-10 text-center">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Want Your Listing Audited?
            </h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Drop your ASIN in the comments on my LinkedIn post. Every Tuesday I
              roast a real listing — free, public, no sugarcoating.
            </p>
            <a
              href="https://www.linkedin.com/in/danmatejsek/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Find Me on LinkedIn
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 4l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* Author bio */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-navy flex-shrink-0 flex items-center justify-center border-2 border-gold/30">
              <span className="text-gold text-lg font-bold">DM</span>
            </div>
            <div>
              <p className="font-semibold text-dark mb-1">{post.author}</p>
              <p className="text-sm text-medium leading-relaxed">
                {post.authorBio}
              </p>
              <div className="flex gap-4 mt-3">
                <a
                  href="https://perfectasin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold-dark font-medium hover:underline"
                >
                  PerfectASIN
                </a>
                <a
                  href="https://ravingfans.ai"
                  className="text-sm text-gold-dark font-medium hover:underline"
                >
                  RavingFans.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
