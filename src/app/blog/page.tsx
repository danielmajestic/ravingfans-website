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
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Listing teardowns, growth strategy, and lessons from 27 years in
            e-commerce. No fluff. No generic advice. Real analysis on real
            products.
          </p>
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
                        <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">
                            D
                          </span>
                        </div>
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
