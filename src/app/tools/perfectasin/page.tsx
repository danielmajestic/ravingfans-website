import type { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "PerfectASIN — AI-Powered Amazon Listing Optimization",
  description:
    "Analyze any Amazon listing in seconds. Get actionable scores and recommendations for title, bullets, description, hero image, and pricing.",
  openGraph: {
    title: "PerfectASIN | RavingFans.ai",
    description:
      "AI-powered Amazon listing optimization. Free Chrome extension that scores and improves every element of your listing.",
    url: "https://www.ravingfans.ai/tools/perfectasin",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PerfectASIN — RavingFans.ai" }],
  },
};

const CWS_URL =
  "https://chromewebstore.google.com/detail/perfectasin/gpanmohpifokedkbceifjmikjjchiekc";
const LINKEDIN_URL = "https://www.linkedin.com/in/dan-matejsek";

const modules = [
  {
    name: "Title Analysis",
    description:
      "Are your top keywords buried past the mobile cutoff? PerfectASIN checks character count, keyword placement, compliance, and gives you an optimized title ready to paste.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    name: "Bullet Points",
    description:
      "Features don\u2019t sell \u2014 benefits do. Get each bullet scored for keyword usage, benefit-feature balance, length, and readability. Optimized bullets included.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    name: "Description",
    description:
      "Keyword gaps, readability scores, HTML compliance, and brand voice assessment. Your optimized description is ready for Seller Central.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    name: "Hero Image",
    description:
      "Compliance check, background analysis, text overlay detection, and info density scoring. Know exactly what Amazon\u2019s algorithm sees.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M2.25 4.5h19.5M2.25 4.5v15a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V4.5" />
      </svg>
    ),
  },
  {
    name: "Price Intelligence",
    description:
      "Where do you sit against competitors? See your price percentile, Buy Box status, and the sweet spot where your conversion rate peaks.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function PerfectAsinPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase mb-4">
            Free Chrome Extension
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Your Amazon Listing Is Leaving Money on the Table
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            PerfectASIN analyzes your title, bullets, description, hero image,
            and pricing in seconds — then tells you exactly what to fix and why.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Install Free — Chrome Web Store
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/5 transition-colors"
            >
              Get a Free ASIN Roast on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Feature Modules */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                Five Modules. One Click.
              </h2>
              <p className="text-lg text-medium max-w-2xl mx-auto">
                Every analysis covers the five elements that determine whether
                your listing converts or gets buried.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <ScrollFadeIn key={mod.name}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm h-full">
                  <div className="text-gold mb-4">{mod.icon}</div>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {mod.name}
                  </h3>
                  <p className="text-sm text-medium leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}

            {/* Summary card */}
            <ScrollFadeIn>
              <div className="bg-navy rounded-2xl p-6 sm:p-8 border border-navy-light h-full flex flex-col justify-center text-center">
                <p className="text-3xl font-extrabold text-white mb-2">100</p>
                <p className="text-sm text-gray-300">
                  Perfect score. That&apos;s the target.
                  <br />
                  Most listings start at 40-60.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                Real ASIN Roasts — Coming Weekly
              </h2>
              <p className="text-lg text-medium max-w-2xl mx-auto">
                Every week we audit real Amazon listings publicly.
                Follow the series on LinkedIn to see the reports.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-warm rounded-2xl p-6 sm:p-8 border border-gray-200 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-4" />
                  <p className="text-sm text-medium">
                    Case study coming soon
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn>
            <div className="text-center mt-10">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-navy hover:bg-navy-light text-white font-semibold rounded-xl transition-colors"
              >
                Follow on LinkedIn
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Stop Guessing. Start Optimizing.
            </h2>
            <p className="text-gray-300 mb-8">
              Install PerfectASIN and find out exactly where your listing stands. Takes 30
              seconds. Costs nothing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
              >
                Install PerfectASIN — Free
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
              >
                Get a Free ASIN Roast on LinkedIn
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
