import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "27 years of direct marketing experience, distilled into AI-powered customer acquisition engines. Meet the strategist behind RavingFans.ai.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            I&apos;ve Made Every Business I&apos;ve Touched Better.<br />
            <span className="text-gold">Yours Could Be Next.</span>
          </h1>
        </div>
      </section>

      {/* Photo placeholder + Short Version */}
      <section className="py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="aspect-[3/4] bg-navy rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl font-bold text-gold">D</span>
                    <p className="text-xs text-gray-400 mt-2">Photo placeholder</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-6">
                  The Short Version
                </h2>
                <div className="space-y-4 text-base text-dark leading-relaxed">
                  <p>
                    I&apos;m Dan Majestic. I&apos;ve spent 27 years helping businesses grow — not with theory, but with systems that actually work. Direct response marketing. Customer acquisition engines. Strategies that turn first-time buyers into lifelong advocates.
                  </p>
                  <p>
                    I&apos;ve run agencies, built brands, launched hundreds of campaigns across CPG, health, tech, and e-commerce. Along the way, I discovered something most businesses miss: <span className="font-semibold text-navy">the biggest growth lever isn&apos;t getting more customers. It&apos;s turning the ones you have into raving fans.</span>
                  </p>
                  <p>
                    Now I combine those 27 years of frameworks with AI execution to deliver results at a speed and precision that no traditional team can match.
                  </p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* The Longer Version */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-8">
              The Longer Version
            </h2>
            <div className="space-y-5 text-base text-dark leading-relaxed">
              <p>
                I started in direct response marketing when the internet was still a novelty. Back then, the feedback loop was brutal — if your ad didn&apos;t pull, you lost real money, real fast. That taught me to obsess over what works, not what looks pretty.
              </p>
              <p>
                Over the years, I&apos;ve worked with startups, mid-market brands, and companies doing $50M+ in revenue. The pattern is always the same: the businesses that win aren&apos;t the ones with the biggest budgets. They&apos;re the ones that understand their customers deeply enough to earn their loyalty.
              </p>
              <p>
                I built RavingFans.ai because I got tired of watching good businesses fail at growth — not because they lacked talent or products, but because they were stuck in the agency-industrial complex. Paying $15K/month for a team of juniors running playbooks they found in a blog post.
              </p>
              <p>
                There&apos;s a better way. My frameworks, proven over 500+ campaigns, executed by AI agents I&apos;ve trained on my own methodology. The strategist is still human. The execution is just faster, more consistent, and never takes a sick day.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why AI, Why Now */}
      <section className="py-20 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-8">
              Why AI, Why Now
            </h2>
            <div className="space-y-5 text-base text-dark leading-relaxed">
              <p>
                AI didn&apos;t replace marketing expertise. It amplified it. The problem with traditional agencies was never the strategy — it was the execution gap. Great ideas diluted through layers of handoffs, miscommunications, and human inconsistency.
              </p>
              <p>
                What I&apos;ve built with RavingFans.ai closes that gap entirely. I architect the strategy. My AI team executes it with perfect fidelity. Every campaign. Every piece of content. Every customer touchpoint — exactly the way it was designed.
              </p>
              <p>
                The result? You get the strategic depth of a 27-year veteran with the execution speed of a team that works 24/7. At a fraction of the cost of a traditional agency.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* What I Actually Believe */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-8">
              What I Actually Believe
            </h2>
            <div className="space-y-5 text-base text-dark leading-relaxed">
              <p>
                That the best marketing doesn&apos;t feel like marketing. It feels like someone finally <em>gets</em> you.
              </p>
              <p>
                That a confused mind always says no — and most businesses confuse their customers with vague, committee-approved messaging that says everything and nothing at the same time.
              </p>
              <p>
                That the businesses that win long-term are the ones that earn loyalty, not just attention. Clicks are cheap. Customers who come back month after month because they believe in what you&apos;re doing — that&apos;s the real asset.
              </p>
              <p>
                And that Business Karma is real. When you genuinely help people, the money follows.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="mt-10">
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl sm:text-2xl font-bold text-navy italic">
                &ldquo;A confused mind always says no.&rdquo;
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
              Work With Me
            </h2>
            <Link
              href="/call"
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Book a Strategy Call
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              30 minutes. Real conversation. No sales pitch.
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
