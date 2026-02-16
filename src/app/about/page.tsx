import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "27 years in performance marketing. 4,000+ offers promoted. 1,200+ Amazon launches. Meet the strategist behind RavingFans.ai.",
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
                    27 years in performance marketing. Over 4,000 offers promoted. 1,200+ Amazon launches. Multiple 8-figure exits. I&apos;ve sold everything online except the things you shouldn&apos;t sell online. Now I build AI-powered customer acquisition engines for CPG brands that want to grow exponentially, not incrementally.
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
                I started selling online in 1999, back when a banner ad click cost a nickel and nobody knew what an affiliate marketer was. From there I spent 25 years in the trenches: building campaigns for United Airlines, eHarmony, Netflix, DISH Network, and FTD, while simultaneously running my own businesses across Amazon, eBay, Walmart, and direct-to-consumer.
              </p>
              <p>
                I&apos;ve personally managed product launches in some of the most heavily regulated categories on the internet — supplements, alternative medicine, health and wellness. I&apos;ve navigated FDA compliance, Amazon&apos;s ever-shifting rules, and ad platform policies that change overnight. When other marketers say &ldquo;that&apos;s too hard,&rdquo; I say &ldquo;that&apos;s where I live.&rdquo;
              </p>
              <p>
                Along the way, I developed a framework I call the Raving Fan Progression. It&apos;s simple: instead of just chasing new customers, you nurture people at every stage — from the moment they&apos;re a complete stranger to the moment they&apos;re telling everyone they know about your product. Most businesses spend all their energy on acquisition and ignore everything after the first sale. That&apos;s like filling a bucket with holes in it.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why AI. Why Now. */}
      <section className="py-20 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-8">
              Why AI. Why Now.
            </h2>
            <div className="space-y-5 text-base text-dark leading-relaxed">
              <p>
                In 2024, I made a bet. I started building a team of AI agents — not chatbots, not templates, but specialized agents trained on my 27 years of frameworks and methodology. An agent that writes direct response copy the way I would. An agent that builds landing pages and quiz funnels to my specs. An agent that tracks every pixel, every conversion, every dollar.
              </p>
              <p>
                The result is a boutique consultancy that operates at the speed of a large agency but with the depth and care of a one-on-one mentor. I take 3-5 clients at a time. I own each engagement personally. And my team executes 24 hours a day, 7 days a week, at a standard I&apos;ve spent decades perfecting.
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
                I call it Business Karma. When you&apos;re generous with the value you create — when you genuinely try to make people&apos;s lives better through your work — it compounds and comes back to you. One of my favorite proverbs says it plainly: generosity begets generosity, and stinginess impoverishes.
              </p>
              <p>
                That&apos;s not just philosophy. It&apos;s how I operate. I give quick wins on strategy calls before anyone has paid me a dollar. I share frameworks publicly that most consultants charge thousands for. I treat every client&apos;s business like my own — because I genuinely believe that when I make your business better, the universe takes care of the rest.
              </p>
              <p>
                My 8 core values: Exceed expectations. Be a blessing. Do your absolute best. Business Karma. Generosity begets generosity. Always add value. Take care of people. Make every business better than you found it.
              </p>
              <p>
                And underneath all of them, one driving force: a sincere desire to have a significant impact on humanity at scale.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* The Question */}
      <section className="py-16 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-6 text-center">
              The Question I Ask Myself Every Day
            </h2>
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl sm:text-2xl font-bold text-navy italic">
                &ldquo;Did I make your life better today?&rdquo;
              </p>
            </blockquote>
            <p className="text-base text-dark leading-relaxed mt-6">
              If the answer is yes — if every client, every interaction, every piece of work leaves someone better off than before — then everything else takes care of itself.
            </p>
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
