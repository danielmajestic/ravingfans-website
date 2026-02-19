import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Five stages. Zero guesswork. A proven system that works every time. See how RavingFans.ai builds your customer acquisition engine.",
  openGraph: {
    title: "Our Process | RavingFans.ai",
    description:
      "Research → Foundation → Structure → Build → Optimize. Five stages. Zero guesswork. Most agencies skip to step 4 — we don't.",
    url: "https://www.ravingfans.ai/process",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Our Process — RavingFans.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | RavingFans.ai",
    description:
      "Five stages. Zero guesswork. See how we build customer acquisition engines.",
    images: ["/opengraph-image"],
  },
};

const stages = [
  {
    num: "1",
    name: "Research",
    timeline: "Days 1-2",
    description:
      "Deep dive into your market, competitors, customers, and current positioning. We learn your business like it's ours — because for the duration of our engagement, it is. Competitive analysis, customer behavior mapping, and opportunity identification.",
    youGet:
      "A clear picture of where you stand, where the gaps are, and exactly where the biggest opportunities live. No guessing. No assumptions.",
  },
  {
    num: "2",
    name: "Foundation",
    timeline: "Days 2-3",
    description:
      "Define your ideal customer profile, messaging framework, brand voice, and competitive advantages. This is the strategic bedrock everything else is built on. We extract the authentic voice of your brand and create messaging that resonates with the right people.",
    youGet:
      "A brand voice and positioning strategy that's authentically yours and built to convert. Plus a messaging framework your entire team can use.",
  },
  {
    num: "3",
    name: "Structure",
    timeline: "Days 3-4",
    description:
      "This is the blueprint. We map the entire customer journey from first touch to raving fan. Quiz funnel architecture. Email sequence flows. Ad campaign structure. Tracking plan. Every piece of the engine, documented and approved before we build a single thing.",
    youGet:
      "The complete architecture of your customer acquisition engine, with nothing left to chance.",
  },
  {
    num: "4",
    name: "Build",
    timeline: "Days 4-7",
    description:
      "The team builds everything. Landing pages. Quiz funnels. Email sequences. Ad creative. Tracking pixels. All built to the specs from Stage 3, all tested before launch. This is where the AI team's speed becomes your competitive advantage — what takes a traditional agency 4-6 weeks, we deliver in days.",
    youGet: "Live assets ready to drive traffic and convert customers.",
  },
  {
    num: "5",
    name: "Optimize",
    timeline: "Ongoing",
    description:
      "Launch is just the beginning. We measure everything, test relentlessly, and compound your results month over month. 12% growth this month becomes 12% on top of last month's gains. That's how businesses double in under a year.",
    youGet:
      "A growth trajectory that accelerates over time — not a one-time bump that fades.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Five Stages. Zero Guesswork.<br />
            <span className="text-gold">A Proven System That Works Every Time.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            While other agencies jump straight to building, we invest in understanding first. The first three stages are where the real value lives — and where every other agency cuts corners.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Vertical line - desktop only */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy via-navy/50 to-gold" />

            <div className="space-y-12">
              {stages.map((stage, i) => (
                <ScrollFadeIn key={stage.num}>
                  <div className="flex gap-6 sm:gap-10">
                    {/* Stage number circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, #1B2A4A ${100 - i * 25}%, #C8962E ${i * 25}%)`,
                        }}
                      >
                        {stage.num}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-3">
                        <h3 className="text-xl font-bold text-dark">
                          Stage {stage.num}: {stage.name}
                        </h3>
                        <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded-full">
                          {stage.timeline}
                        </span>
                      </div>
                      <p className="text-sm text-dark leading-relaxed mb-4">
                        {stage.description}
                      </p>
                      <div className="bg-warm rounded-xl p-4 border border-gray-100">
                        <p className="text-xs font-bold text-gold uppercase tracking-wide mb-1">
                          You Get
                        </p>
                        <p className="text-sm text-dark leading-relaxed">
                          {stage.youGet}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closer */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-lg sm:text-xl font-bold text-navy italic">
                &ldquo;Most agencies skip to Stage 4 and wonder why nothing works. We don&apos;t. The first three stages are where the real value lives — and they&apos;re the stages you can&apos;t shortcut.&rdquo;
              </p>
            </blockquote>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Start at Stage 1
            </h2>
            <Link
              href="/call"
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Book a Strategy Call
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
