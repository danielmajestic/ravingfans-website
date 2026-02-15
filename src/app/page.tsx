import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import FAQ from "@/components/FAQ";

const stages = [
  { label: "Suspect", desc: "They don't know you exist yet." },
  { label: "Prospect", desc: "Something you said caught their attention." },
  { label: "Customer", desc: "They bought once. The relationship begins." },
  { label: "Fan", desc: "They're coming back because they trust you." },
  { label: "Evangelist", desc: "They're telling everyone they know." },
  { label: "Raving Fan", desc: "They've adopted your mission as their own." },
];

const processSteps = [
  {
    step: "1",
    name: "Research",
    what: "Deep dive into your market, competitors, customers, and current positioning.",
    you: "A clear picture of where you stand and where the opportunities are.",
  },
  {
    step: "2",
    name: "Foundation",
    what: "Define your ideal customer profile, messaging framework, and competitive advantages.",
    you: "Messaging that resonates with the right people and repels the wrong ones.",
  },
  {
    step: "3",
    name: "Structure",
    what: "Design the customer journey, touchpoints, and conversion architecture.",
    you: "A blueprint for turning strangers into raving fans, stage by stage.",
  },
  {
    step: "4",
    name: "Build",
    what: "Create campaigns, content, funnels, and automation sequences.",
    you: "A living, breathing customer acquisition engine that works while you sleep.",
  },
  {
    step: "5",
    name: "Optimize",
    what: "Measure, test, refine. Every week. Every metric. Every touchpoint.",
    you: "Compounding growth. Month over month. Quarter over quarter.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-16">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            We Turn Your Customers<br />
            Into Raving Fans.
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-gold mb-6">
            You Just Watch Your Revenue Compound.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-powered customer acquisition engines for CPG brands that want exponential growth — not incremental.
          </p>
          <Link
            href="/call"
            className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
          >
            Book a Strategy Call
          </Link>
          <p className="mt-8 text-sm text-gray-400">
            Trusted by brands generating $10M+ in annual revenue
          </p>
        </div>
      </section>

      {/* ===== SECTION 2: PROBLEM ===== */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-12 text-center">
              Sound Familiar?
            </h2>
          </ScrollFadeIn>

          <div className="space-y-8">
            <ScrollFadeIn>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-dark leading-relaxed">
                  You&apos;re spending money on ads, <em className="font-semibold not-italic text-navy">but you have no idea what&apos;s actually working.</em> You get customers in the front door, but most of them never come back. You know there&apos;s a better way to grow — you just haven&apos;t found it yet.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-dark leading-relaxed">
                  Your team is busy. <em className="font-semibold not-italic text-navy">But busy isn&apos;t the same as growing.</em> You&apos;re managing campaigns, shipping product, handling customer service — and somewhere along the way, actually acquiring new customers fell to the bottom of the list.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-dark leading-relaxed">
                  Maybe you&apos;ve hired agencies before. <em className="font-semibold not-italic text-navy">Maybe they delivered reports instead of results.</em> Dashboards full of impressions and clicks, but when you look at the bank account, not much changed. You&apos;re done paying for activity. You want outcomes.
                </p>
              </div>
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn className="mt-10">
            <p className="text-center text-medium text-lg">
              If any of that hits close to home, keep reading.<br />
              <span className="font-semibold text-navy">We built something specifically for this moment.</span>
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 3: RAVING FAN PROGRESSION ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                From Strangers to Evangelists
              </h2>
              <p className="text-lg text-medium max-w-2xl mx-auto">
                Most businesses focus on getting customers in the door. We focus on what happens after.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            {/* Desktop: horizontal */}
            <div className="hidden md:flex items-start justify-between gap-2">
              {stages.map((stage, i) => (
                <div key={stage.label} className="flex-1 text-center relative">
                  <div
                    className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-bold text-sm mb-3"
                    style={{
                      background: `linear-gradient(135deg, #1B2A4A ${100 - i * 20}%, #C8962E ${i * 20}%)`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-dark text-sm mb-1">{stage.label}</h3>
                  <p className="text-xs text-medium leading-snug">{stage.desc}</p>
                  {i < stages.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-gradient-to-r from-navy to-gold opacity-30" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="md:hidden space-y-4">
              {stages.map((stage, i) => (
                <div key={stage.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, #1B2A4A ${100 - i * 20}%, #C8962E ${i * 20}%)`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-sm">{stage.label}</h3>
                    <p className="text-xs text-medium">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="mt-12">
            <div className="text-center">
              <p className="text-medium mb-4">
                Every stage has a strategy. Every transition is engineered. We don&apos;t leave loyalty to chance.
              </p>
              <Link
                href="/process"
                className="text-gold hover:text-gold-dark font-semibold transition-colors"
              >
                See how this works in practice &rarr;
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 4: RESULTS / CASE STUDY ===== */}
      <section className="py-20 sm:py-28 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 text-center">
              What This Looks Like in Practice
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur">
              <p className="text-xs font-bold tracking-widest text-gold uppercase mb-4">
                Case Study: TrueHope Nutritional Support
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-2">The Situation</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    TrueHope had a product that changed lives, but their customer acquisition was stuck in first gear. Ad spend was up, but new customer growth had plateaued. Their team was stretched thin managing day-to-day operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">What We Built</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A complete customer acquisition engine — from targeted content strategy to automated nurture sequences to referral programs that turned their happiest customers into their best salespeople.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">What Changed</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {[
                      { metric: "New Customer Acquisition", before: "Plateaued", after: "Consistent monthly growth" },
                      { metric: "Team Mindset", before: "\"We're too busy\"", after: "\"Growth is on autopilot\"" },
                      { metric: "Conversion Approach", before: "Spray and pray", after: "Engineered funnel" },
                      { metric: "Engagement Duration", before: "One-time buyers", after: "Long-term advocates" },
                    ].map((row) => (
                      <div key={row.metric} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-xs font-bold text-gold uppercase mb-2">{row.metric}</p>
                        <p className="text-xs text-gray-500 line-through mb-1">{row.before}</p>
                        <p className="text-sm text-white font-semibold">{row.after}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/call"
                  className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-white font-semibold rounded-lg transition-colors"
                >
                  Get results like these &rarr; Book a Strategy Call
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 5: MEET THE TEAM ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                The People Behind Your Growth
              </h2>
              <p className="text-lg text-medium max-w-2xl mx-auto">
                You&apos;re not hiring a freelancer. You&apos;re not hiring an agency with a team of juniors. You&apos;re getting a seasoned strategist backed by an execution team that never sleeps.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Dan - Featured */}
          <ScrollFadeIn>
            <div className="bg-warm rounded-2xl p-6 sm:p-8 mb-8 border border-gray-200">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl sm:text-4xl font-bold text-gold">D</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark">Dan Majestic</h3>
                  <p className="text-gold font-semibold text-sm mb-3">Founder & Chief Strategist</p>
                  <p className="text-medium text-sm leading-relaxed mb-4">
                    27 years of direct marketing experience across CPG, health, tech, and e-commerce. Former agency owner turned AI-augmented growth architect. Dan designs every strategy personally — no handoffs, no junior account managers, no telephone games.
                  </p>
                  <p className="text-xs text-medium">
                    500+ campaigns launched &bull; $50M+ in attributed revenue &bull; 27 years in direct response
                  </p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Agent cards */}
          <ScrollFadeIn>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  initial: "M",
                  name: "Mat",
                  role: "Project Lead & Copy Strategist",
                  desc: "Manages execution timelines, writes conversion copy, and ensures every deliverable meets Dan's standards.",
                },
                {
                  initial: "K",
                  name: "Kat",
                  role: "Data & Systems Engineer",
                  desc: "Builds the backend infrastructure, analytics dashboards, and automation systems that power your growth engine.",
                },
                {
                  initial: "S",
                  name: "Sam",
                  role: "Design & Build Specialist",
                  desc: "Creates the landing pages, funnels, and visual assets that turn your strategy into a living, breathing experience.",
                },
              ].map((agent) => (
                <div
                  key={agent.name}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-lg font-bold text-gold">{agent.initial}</span>
                  </div>
                  <h3 className="font-bold text-dark">{agent.name}</h3>
                  <p className="text-xs text-gold font-semibold mb-2">{agent.role}</p>
                  <p className="text-xs text-medium leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

          {/* Transparency footnote */}
          <ScrollFadeIn className="mt-8">
            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs text-medium leading-relaxed text-center max-w-3xl mx-auto">
                Our execution team is powered by AI agents custom-trained on Dan&apos;s 27 years of frameworks and methodology. They work around the clock, never miss a detail, and operate at a pace no traditional team can match. Dan architects the strategy. The team executes it. You get the results.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 6: HOW WE WORK ===== */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                Five Stages. Zero Guesswork.
              </h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="space-y-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row gap-4 sm:gap-8"
                >
                  <div className="flex items-center gap-4 sm:w-48 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                      <span className="text-gold font-bold text-sm">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-dark text-lg">{step.name}</h3>
                  </div>
                  <div className="flex-1 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-medium uppercase tracking-wide mb-1">What Happens</p>
                      <p className="text-sm text-dark leading-relaxed">{step.what}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gold uppercase tracking-wide mb-1">You See</p>
                      <p className="text-sm text-dark leading-relaxed">{step.you}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="mt-10">
            <div className="text-center">
              <p className="text-medium mb-4">
                Most agencies skip straight to step 4 and wonder why things don&apos;t work. We don&apos;t.
              </p>
              <Link
                href="/process"
                className="text-gold hover:text-gold-dark font-semibold transition-colors"
              >
                See the full process in detail &rarr;
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 7: WHY ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-10 text-center">
              Why We Do This
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="space-y-6 text-base text-dark leading-relaxed">
              <p>
                I&apos;ve spent 27 years in the trenches of direct marketing. I&apos;ve built campaigns that generated millions. I&apos;ve also watched businesses fail — not because their product wasn&apos;t good enough, but because nobody ever showed them how to connect with the people who needed it most.
              </p>
              <p>
                That&apos;s what drives me. Not the clever ad copy or the fancy funnels. The moment when a business owner sees their revenue chart start to curve upward and realizes — for the first time — that growth doesn&apos;t have to be a grind. It can be a system.
              </p>
              <p>
                I believe in something I call <span className="font-semibold text-navy">Business Karma</span>. When you genuinely help people — when your product makes their life better and your marketing makes them feel understood — everything else follows. The referrals. The repeat purchases. The five-star reviews that write themselves.
              </p>
              <p>
                That&apos;s what we build. Not just marketing. Not just funnels. <span className="font-semibold text-navy">We build the engine that turns your best customers into your best salespeople.</span> And we do it with the kind of care and precision that most agencies forgot how to deliver a long time ago.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="mt-10">
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl sm:text-2xl font-bold text-navy italic">
                &ldquo;The only regret you&apos;ll have is that you didn&apos;t start sooner.&rdquo;
              </p>
            </blockquote>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 8: FAQ ===== */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-12 text-center">
              Questions You Might Be Asking
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <FAQ />
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 9: FINAL CTA ===== */}
      <section className="py-20 sm:py-28 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <p className="text-2xl sm:text-3xl font-extrabold text-white mb-4 italic">
              &ldquo;The only regret you&apos;ll have is that you didn&apos;t start sooner.&rdquo;
            </p>
            <p className="text-lg text-gray-300 mb-10">
              Let&apos;s find out what exponential growth looks like for your business.
            </p>
            <Link
              href="/call"
              className="inline-flex items-center px-10 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Book Your Free Strategy Call
            </Link>
            <p className="mt-6 text-sm text-gray-400">
              30 minutes. No pitch deck. Just a real conversation about your business.
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
