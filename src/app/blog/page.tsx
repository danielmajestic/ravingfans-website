import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Amazon listing teardowns, e-commerce strategy, and AI-powered growth insights from RavingFans.ai.",
  openGraph: {
    title: "Blog | RavingFans.ai",
    description:
      "Amazon listing teardowns, e-commerce strategy, and AI-powered growth insights.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero CTA */}
      <section className="bg-navy pt-28 pb-12 sm:pt-32 sm:pb-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          {/* Blog intro */}
          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Listing Teardowns. Real Data. No Fluff.
          </h1>
          <p className="text-gray-300 leading-relaxed mb-8">
            Every article below is backed by real P&amp;L numbers from real brands. Want the same analysis on yours?
          </p>

          {/* Separator */}
          <div className="border-t border-gray-700 mb-8" />

          {/* Audit CTA */}
          <div className="bg-navy/50 border border-gray-700 rounded-xl p-6 sm:p-8 text-left">
            <p className="text-gray-300 mb-4 leading-relaxed">
              <strong className="text-white">Get your complimentary 18-page $5,000 ASIN Audit&#8482;</strong>{" "}
              — the same AI-powered diagnostic that finds thousands in hidden revenue on Amazon listings.
            </p>
            <a
              href="https://perfectasin.com/audit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors mb-6 w-full sm:w-auto justify-center sm:justify-start"
            >
              Get Your Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 4l4 4-4 4" />
              </svg>
            </a>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              <strong className="text-white">Want expert help?</strong> I work with Amazon brands on listing optimization, advertising strategy, and conversion rate optimization.
            </p>
            <a
              href="https://ravingfans.ai/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors mb-5 text-sm w-full sm:w-auto justify-center sm:justify-start"
            >
              Book a Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 4l4 4-4 4" />
              </svg>
            </a>

            <p className="text-gray-400 text-xs">
              <strong className="text-gray-300">Stay connected:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/dan-matejsek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Find me on LinkedIn
              </a>{" "}
              for weekly insights on Amazon optimization and e-commerce growth.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-warm py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-center text-medium text-lg">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-gold/30 max-w-2xl mx-auto">
                    {/* Thumbnail */}
                    {post.coverImage && (
                      <div className="w-full relative overflow-hidden bg-navy" style={{ aspectRatio: "1.91 / 1" }}>
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 672px) 100vw, 672px"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-1">
                      <div className="flex items-center gap-3 text-xs text-medium mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="text-gray-300">|</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2 group-hover:text-gold-dark transition-colors leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-medium text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2">
                        <img
                          src="/blog/images/dan-headshot.png"
                          alt="Dan Matejsek"
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs text-dark font-medium">
                            {post.author}
                          </span>
                          <span className="text-[11px] text-medium">
                            Founder, RavingFans.ai
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
