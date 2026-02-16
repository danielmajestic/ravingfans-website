import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Results",
  description:
    "We don't talk about what we can do. We show you what we've done. Real results from real clients.",
};

const metrics = [
  {
    metric: "New customer acquisition system",
    before: "None",
    after: "AI-powered quiz funnel + multi-platform campaigns",
  },
  {
    metric: "Revenue mindset",
    before: "Top-line focused",
    after: "Profit-centric ($9 COGS on $86 product = invest in growth)",
  },
  {
    metric: "Acquisition philosophy",
    before: '"We can\'t afford ads"',
    after: '"How fast can we scale at $50 CAC?"',
  },
  {
    metric: "Team capability",
    before: "Marketing knowledge gaps",
    after: "Entire team trained on CRO principles",
  },
  {
    metric: "Amazon revenue impact",
    before: "Baseline",
    after: "+~$25K/month new revenue",
  },
  {
    metric: "Website approach",
    before: "Generic messaging",
    after: "Conversion-optimized, persona-targeted",
  },
  {
    metric: "Strategic framework",
    before: "Ad hoc decisions",
    after: "Data-driven, systematized growth engine",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            We Don&apos;t Talk About What We Can Do.<br />
            <span className="text-gold">We Show You What We&apos;ve Done.</span>
          </h1>
        </div>
      </section>

      {/* Case Study Header */}
      <section className="py-20 sm:py-28 bg-navy-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur">
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-6">
                Case Study: TrueHope Nutritional Support
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Industry</p>
                  <p className="text-sm text-white">Nutritional Supplements / Health &amp; Wellness</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Challenge</p>
                  <p className="text-sm text-white">250,000+ existing customers but no system for acquiring new ones. Revenue declining due to SEO losses. Team not profit-centric. Fear of spending on acquisition.</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Engagement</p>
                  <p className="text-sm text-white">Full customer acquisition engine build + strategic advisory</p>
                </div>
              </div>

              {/* What We Built */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">What We Built</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-gold font-bold mt-0.5">&#9656;</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-white font-semibold">MomBrain Quiz Funnel</span> — Interactive 12-step quiz targeting mothers experiencing brain fog. Educates, qualifies, and routes to the right product (EMPowerplus Ultimate or Advanced based on medication status).
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold font-bold mt-0.5">&#9656;</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-white font-semibold">Pinterest Ad Campaign</span> — 17-asset creative brief across 6 concepts. Targeting mothers 25-45. $1,000 CAD initial test budget.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold font-bold mt-0.5">&#9656;</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-white font-semibold">Bing Ads Campaign</span> — Search + Audience network campaigns with UET tracking, conversion optimization, and age-gating compliance.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold font-bold mt-0.5">&#9656;</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-white font-semibold">Product Matching Logic</span> — Automated routing: Medications YES &rarr; Advanced (bottle) | Medications NO &rarr; Ultimate (box). $20 coupon auto-applies via URL parameter.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold font-bold mt-0.5">&#9656;</span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-white font-semibold">Tracking Infrastructure</span> — Full pixel implementation across quiz, Magento checkout, and thank-you pages. PageVisit, Lead, Checkout, and Purchase event tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Changed - Metrics Table */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">What Changed</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-xs text-gray-400 uppercase tracking-wide pb-3 pr-4">Metric</th>
                        <th className="text-left text-xs text-gray-400 uppercase tracking-wide pb-3 pr-4">Before</th>
                        <th className="text-left text-xs text-gold uppercase tracking-wide pb-3">After</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metrics.map((row) => (
                        <tr key={row.metric} className="border-b border-white/5">
                          <td className="py-3 pr-4 text-white font-medium">{row.metric}</td>
                          <td className="py-3 pr-4 text-gray-500 line-through">{row.before}</td>
                          <td className="py-3 text-gold font-semibold">{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Deeper Impact */}
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-xl font-bold text-white mb-4">The Deeper Impact</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The financial results matter. But the real transformation was in how the entire company thinks. We taught 30-year veterans a principle that became their #1 rule: <em className="text-gold not-italic font-semibold">&ldquo;A confused mind always says no.&rdquo;</em> We shifted a CFO from hoarding margin to investing in growth. We turned &ldquo;we can&apos;t afford to spend on ads&rdquo; into &ldquo;how fast can we scale acquisition?&rdquo; That mindset shift is permanent — and it&apos;s worth more than any single campaign.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <Link
                  href="/call"
                  className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-white font-semibold rounded-lg transition-colors"
                >
                  Want results like these? &rarr; Book a Strategy Call
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Additional note */}
      <section className="py-12 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFadeIn>
            <p className="text-sm text-medium italic">
              Additional case studies will be added as engagements complete. Every metric is real. Every claim is verifiable.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Ready For Your Transformation?
            </h2>
            <Link
              href="/call"
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Book Your Free Strategy Call
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              30 minutes. No pitch deck. Just a real conversation about your business.
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
