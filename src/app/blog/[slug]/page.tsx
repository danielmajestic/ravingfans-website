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

  const siteUrl = "https://www.ravingfans.ai";
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const ogImage = post.coverImage ? `${siteUrl}${post.coverImage}` : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: articleUrl,
      publishedTime: post.date,
      authors: [post.author],
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, type: "image/png" }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: articleUrl,
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
          <div className="bg-navy rounded-xl p-8 sm:p-10">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Find Your Hidden Revenue?
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              <strong className="text-white">Get your complimentary 18-page $5,000 ASIN Audit&#8482;</strong> — the same AI-powered diagnostic that finds thousands in hidden revenue on Amazon listings.
            </p>
            <a
              href="https://perfectasin.com/audit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors mb-6"
            >
              Get Your Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 4l4 4-4 4" />
              </svg>
            </a>

            <p className="text-gray-300 mb-4 leading-relaxed">
              <strong className="text-white">Want expert help?</strong> I work with Amazon brands on listing optimization, advertising strategy, and conversion rate optimization.
            </p>
            <a
              href="https://ravingfans.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors mb-6"
            >
              Book a Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 4l4 4-4 4" />
              </svg>
            </a>

            <p className="text-gray-400 text-sm">
              <strong className="text-gray-300">Stay connected:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/danmatejsek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Find me on LinkedIn
              </a>{" "}
              for weekly insights on Amazon optimization and e-commerce growth.
            </p>
          </div>

          {/* Author bio */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 items-start">
            <img
              src="/blog/images/dan-headshot.png"
              alt="Dan Matejsek"
              className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-gold/30"
            />
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
