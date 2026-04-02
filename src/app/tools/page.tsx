import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Amazon Seller Tools",
  description:
    "Amazon Seller Tools by RavingFans.ai — 27 years of e-commerce expertise, trained into AI. Listing optimization, title analysis, and full ASIN audit reports.",
  openGraph: {
    title: "Amazon Seller Tools | RavingFans.ai",
    description:
      "27 years of e-commerce expertise, trained into AI. Analyze, optimize, and outperform your competition.",
    url: "https://www.ravingfans.ai/tools",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Amazon Seller Tools — RavingFans.ai" }],
  },
};

const tools = [
  {
    name: "PerfectASIN",
    tagline: "AI-Powered Amazon Listing Optimization",
    description:
      "Analyze any Amazon listing in seconds. Get a detailed audit of your title, bullets, description, hero image, and pricing — with specific fixes you can paste directly into Seller Central. Free to start.",
    cta: "Install Free Extension",
    ctaHref:
      "https://chromewebstore.google.com/detail/perfectasin/gpanmohpifokedkbceifjmikjjchiekc",
    secondaryCta: "See What It Analyzes",
    secondaryHref: "/tools/perfectasin",
    badge: null,
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "TitlePerfect",
    tagline: "Legacy Title Optimizer",
    description:
      "Our original Amazon title analysis tool. TitlePerfect has been superseded by PerfectASIN, which covers titles plus four additional listing modules.",
    cta: "Visit TitlePerfect",
    ctaHref: "https://titleperfect.app",
    secondaryCta: "Try PerfectASIN Instead",
    secondaryHref:
      "https://chromewebstore.google.com/detail/perfectasin/gpanmohpifokedkbceifjmikjjchiekc",
    badge: "Legacy",
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    name: "$5,000 ASIN Audit\u2122",
    tagline: "Full 18-Page Diagnostic Report",
    description:
      "The same analysis that takes a consultant a week and costs $5,000 \u2014 delivered in about 2 minutes. A comprehensive audit across all five listing modules with copy-paste-ready optimizations you can implement directly in Seller Central.",
    cta: "Claim Your Free Audit",
    ctaHref: "https://perfectasin.com/audit",
    secondaryCta: "See a Sample Report",
    secondaryHref: "https://perfectasin.com/audit",
    badge: "Free for First 100",
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-2">
            Amazon Seller Tools
          </h1>
          <p className="text-sm sm:text-base font-medium text-gold mb-4">
            by RavingFans.ai
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            27 years of e-commerce expertise, trained into AI.
            Analyze, optimize, and outperform your competition.
          </p>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <ScrollFadeIn key={tool.name}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm h-full flex flex-col">
                  {/* Badge */}
                  {tool.badge && (
                    <span
                      className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                        tool.badge === "Free for First 100"
                          ? "bg-gold/20 text-gold-dark border border-gold/30"
                          : tool.badge === "Coming Soon"
                          ? "bg-gold/10 text-gold-dark"
                          : "bg-gray-100 text-medium"
                      }`}
                    >
                      {tool.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="mb-4">{tool.icon}</div>

                  {/* Content */}
                  <h2 className="text-xl font-bold text-dark mb-1">
                    {tool.name}
                  </h2>
                  <p className="text-sm font-medium text-gold mb-3">
                    {tool.tagline}
                  </p>
                  <p className="text-sm text-medium leading-relaxed mb-6 flex-1">
                    {tool.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col gap-2 mt-auto">
                    {tool.ctaHref ? (
                      <a
                        href={tool.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-gold hover:bg-gold-light text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        {tool.cta}
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-200 text-medium text-sm font-semibold rounded-lg cursor-default">
                        {tool.cta}
                      </span>
                    )}
                    {tool.secondaryCta && tool.secondaryHref && (
                      tool.secondaryHref.startsWith("http") ? (
                        <a
                          href={tool.secondaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 border border-navy/20 text-navy text-sm font-semibold rounded-lg hover:bg-navy/5 transition-colors"
                        >
                          {tool.secondaryCta}
                        </a>
                      ) : (
                        <Link
                          href={tool.secondaryHref}
                          className="inline-flex items-center justify-center px-5 py-2.5 border border-navy/20 text-navy text-sm font-semibold rounded-lg hover:bg-navy/5 transition-colors"
                        >
                          {tool.secondaryCta}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Ready to Optimize Your Listings?
            </h2>
            <p className="text-gray-300 mb-8">
              Start with a free PerfectASIN analysis. See exactly where your listing stands — and what to fix first.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/perfectasin/gpanmohpifokedkbceifjmikjjchiekc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Get PerfectASIN — Free
            </a>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Anthropic credit */}
      <section className="py-6 bg-warm border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-medium">
            Built on{" "}
            <a
              href="https://www.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-navy-light underline underline-offset-2 transition-colors"
            >
              Claude by Anthropic
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
