import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "RavingFans.ai — AI-Powered Customer Acquisition for CPG Brands",
  description:
    "We build AI-powered customer acquisition engines that don't just find your customers — they transform them into Raving Fans. For CPG brands doing $3M+ who are ready for exponential growth.",
  openGraph: {
    title: "RavingFans.ai — We Turn Your Customers Into Raving Fans",
    description:
      "AI-powered customer acquisition engines for CPG brands doing $3M+. Quiz funnels, multi-platform ads, email sequences — built for exponential growth.",
    url: "https://www.ravingfans.ai",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "RavingFans.ai — We Turn Your Customers Into Raving Fans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RavingFans.ai — We Turn Your Customers Into Raving Fans",
    description:
      "AI-powered customer acquisition engines. Turn strangers into Raving Fans.",
    images: ["/opengraph-image"],
  },
};

const stages = [
  {
    label: "Suspect",
    desc: "They don't know you exist yet. They're scrolling, living their life, completely unaware that you have something that could change everything. Our job: interrupt their world with something so relevant they can't look away.",
  },
  {
    label: "Prospect",
    desc: "Something you said caught their attention. They clicked. They're curious. They're evaluating. This is the most fragile moment — and the one most businesses waste with generic landing pages. Not us.",
  },
  {
    label: "Customer",
    desc: "They bought once. The relationship begins. Most companies celebrate here and move on. We celebrate here and get to work — because one purchase is not a customer. It's an audition.",
  },
  {
    label: "Fan",
    desc: "They're coming back — not because of discounts, but because of trust. They buy without comparison shopping. They open your emails. They follow you on social. This is where revenue starts compounding.",
  },
  {
    label: "Evangelist",
    desc: "They're telling everyone they know. Especially the people they love most. Without being asked. Without being incentivized. Because you delivered so much value they feel compelled to share it.",
  },
  {
    label: "Raving Fan",
    desc: "They've adopted your mission as their own. They're not just customers — they're your unpaid marketing department, your most credible salesforce, and the reason your next customer costs less to acquire than your last one.",
  },
];

const processSteps = [
  {
    step: "1",
    name: "Research",
    what: "Deep dive into your market, competitors, customers, and current positioning. We learn your business like it's ours.",
    you: "A clear picture of where you stand, where the opportunities are, and what's been holding you back.",
  },
  {
    step: "2",
    name: "Foundation",
    what: "Define your ideal customer profile, messaging framework, brand voice, and competitive advantages.",
    you: "Messaging that resonates with the right people and repels the wrong ones.",
  },
  {
    step: "3",
    name: "Structure",
    what: "Design the complete customer journey — every touchpoint, every conversion point, every piece of the engine documented and approved before we build.",
    you: "The complete architecture of your customer acquisition engine, with nothing left to chance.",
  },
  {
    step: "4",
    name: "Build",
    what: "The team builds everything. Landing pages, quiz funnels, email sequences, ad creative, tracking pixels. All tested before launch.",
    you: "Live assets ready to drive traffic and convert customers.",
  },
  {
    step: "5",
    name: "Optimize",
    what: "Launch is just the beginning. We measure everything, test relentlessly, and compound results month over month.",
    you: "Growth that accelerates over time — not a one-time bump that fades.",
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
            What If Your Next Customer Never Left?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed">
            What if they came back, brought their friends, and never stopped talking about you?
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build AI-powered customer acquisition engines that don&apos;t just find your customers — they transform them into Raving Fans who grow your business for you. For CPG brands doing $3M+ who are ready for exponential growth.
          </p>
          <Link
            href="/call"
            className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
          >
            Start Your Transformation &rarr;
          </Link>
          <p className="mt-8 text-sm text-gray-400">
            Trusted by brands generating $10M+ in annual revenue | 27 years | 4,000+ offers | 1,200+ Amazon launches
          </p>
        </div>
      </section>

      {/* ===== SECTION 2: THE SILENT CRISIS ===== */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-12 text-center">
              Something Is Wrong — And You Can Feel It
            </h2>
          </ScrollFadeIn>

          <div className="space-y-8">
            <ScrollFadeIn>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-dark leading-relaxed">
                  Your revenue looks fine on paper. But underneath the surface, something is eroding. Customers buy once and vanish. Your ad spend keeps climbing but the returns keep shrinking. You&apos;re working harder than ever and somehow growing slower than ever.
                </p>
                <p className="text-base sm:text-lg text-dark leading-relaxed mt-4">
                  This isn&apos;t a marketing problem. It&apos;s a relationship problem at scale.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-dark leading-relaxed">
                  Your team is talented. Your product is good — maybe even great. But the system connecting your product to the people who need it most? It&apos;s held together with duct tape and good intentions. Email blasts nobody opens. Ads that attract clicks but not customers. A website that talks about features when your customers are desperate for transformation.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-dark leading-relaxed">
                  And maybe — just maybe — you&apos;ve hired agencies before. Agencies that delivered reports instead of results. Dashboards full of impressions and engagement metrics, but when you look at the bank account, not much changed. You paid for activity. What you needed was outcomes.
                </p>
              </div>
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn className="mt-10">
            <p className="text-center text-medium text-lg italic">
              If any of that resonates — even a little — keep reading. What we built was designed specifically for this moment in your business.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 3: THE RAVING FAN PROGRESSION ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                From Strangers to Evangelists: The Journey Most Businesses Never Map
              </h2>
              <p className="text-lg text-medium max-w-3xl mx-auto">
                Every business has six types of people in their universe. Most marketing only addresses the first two. We address all six — because the magic happens in the stages nobody else is building for.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            {/* Journey SVG graphic */}
            <div className="mb-10 overflow-x-auto">
              <svg width="100%" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:"680px",margin:"0 auto",display:"block"}}>
                <path d="M56 310 L156 266 L268 222 L380 178 L490 134 L600 82" fill="none" stroke="#D6D4CC" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="56" cy="310" r="18" fill="#E8E6E0" stroke="#B4B2A9" strokeWidth="1"/>
                <text x="56" y="310" textAnchor="middle" fontSize="18" fill="#888780" fontWeight="500" dominantBaseline="central">?</text>
                <text x="56" y="345" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Suspect</text>
                <text x="56" y="359" textAnchor="middle" fontSize="10" fill="#888780">Don&apos;t know you</text>
                <circle cx="156" cy="266" r="20" fill="#F0EBD9" stroke="#A08C4E" strokeWidth="1"/>
                <text x="156" y="266" textAnchor="middle" fontSize="14" fill="#8A7A50" fontWeight="500" dominantBaseline="central">&#x1F441;</text>
                <text x="156" y="302" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Prospect</text>
                <text x="156" y="316" textAnchor="middle" fontSize="10" fill="#888780">Clicked</text>
                <circle cx="268" cy="222" r="22" fill="#EDE5C8" stroke="#B89D48" strokeWidth="1.2"/>
                <text x="268" y="222" textAnchor="middle" fontSize="17" fill="#8A7A50" fontWeight="500" dominantBaseline="central">&#x2713;</text>
                <text x="268" y="260" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Customer</text>
                <text x="268" y="274" textAnchor="middle" fontSize="10" fill="#888780">Bought once</text>
                <circle cx="380" cy="178" r="24" fill="#E8D9A8" stroke="#C9A54E" strokeWidth="1.5"/>
                <text x="380" y="178" textAnchor="middle" fontSize="18" fill="#8A7A50" fontWeight="500" dominantBaseline="central">&#x2665;</text>
                <text x="380" y="218" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Fan</text>
                <text x="380" y="232" textAnchor="middle" fontSize="10" fill="#888780">Keeps coming back</text>
                <circle cx="490" cy="134" r="26" fill="#DCC87E" stroke="#C9A54E" strokeWidth="1.5"/>
                <text x="490" y="134" textAnchor="middle" fontSize="18" fill="#6B5A2E" fontWeight="500" dominantBaseline="central">&#x25C6;</text>
                <text x="490" y="176" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Evangelist</text>
                <text x="490" y="190" textAnchor="middle" fontSize="10" fill="#888780">Tells everyone</text>
                <circle cx="600" cy="82" r="30" fill="#C9A54E" stroke="#A08C4E" strokeWidth="2"/>
                <line x1="600" y1="48" x2="600" y2="36" stroke="#C9A54E" strokeWidth="1.5" opacity="0.5"/>
                <line x1="624" y1="58" x2="632" y2="48" stroke="#C9A54E" strokeWidth="1.5" opacity="0.5"/>
                <line x1="632" y1="82" x2="644" y2="82" stroke="#C9A54E" strokeWidth="1.5" opacity="0.5"/>
                <line x1="576" y1="58" x2="568" y2="48" stroke="#C9A54E" strokeWidth="1.5" opacity="0.5"/>
                <line x1="568" y1="82" x2="556" y2="82" stroke="#C9A54E" strokeWidth="1.5" opacity="0.5"/>
                <text x="600" y="82" textAnchor="middle" fontSize="16" fill="#1B2A3D" fontWeight="700" dominantBaseline="central">&#x2605;</text>
                <text x="600" y="128" textAnchor="middle" fontSize="13" fontWeight="500" fill="#C9A54E">Raving Fan</text>
                <text x="600" y="142" textAnchor="middle" fontSize="10" fill="#888780">Your mission is theirs</text>
              </svg>
            </div>

            {/* Stage descriptions */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stages.map((stage) => (
                <div key={stage.label} className="bg-warm rounded-xl p-4 border border-gray-100">
                  <h3 className="font-bold text-dark text-sm mb-1">{stage.label}</h3>
                  <p className="text-xs text-medium leading-snug">{stage.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="mt-12">
            <div className="text-center">
              <p className="text-medium mb-4">
                Every stage has a strategy. Every transition is engineered. We don&apos;t leave loyalty to chance — and neither should you.
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

      {/* ===== SECTION 4: THE TRANSFORMATION (CASE STUDY) — COMMENTED OUT FOR EDITS =====
      <section className="py-20 sm:py-28 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 text-center">
              This Is What Transformation Actually Looks Like
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
                    TrueHope is a nutritional supplement company with 250,000+ customers and a mission to help people struggling with mental health through nutrition. When they came to us, they had a problem most companies would kill to have — an incredible product with passionate customers — but they couldn&apos;t figure out how to find new ones. Their team was talented but operating without a growth system. They weren&apos;t profit-centric. They didn&apos;t know their own COGS. And they were so afraid of spending money on acquisition that they wouldn&apos;t give a $5 discount on a product with $9 COGS and an $86 price point.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">What We Built</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A complete customer acquisition engine: interactive quiz funnel (MomBrainQuiz.truehope.com) targeting mothers experiencing brain fog, Pinterest and Bing ad campaigns, product matching logic routing users to the right SKU, email nurture sequences, and a tracking infrastructure that made every dollar accountable.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-3">
                    But more importantly, we changed how they think. We taught every person in the company — including 30-year veterans — a principle that became their #1 rule: <em className="text-gold not-italic font-semibold">&ldquo;A confused mind always says no.&rdquo;</em> We reframed customer acquisition from an expense to an investment. We showed them that spending $50 to acquire a customer on an $86 product with $9 COGS isn&apos;t spending — it&apos;s printing money.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2">What Changed</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {[
                      { metric: "Acquisition System", before: "No new customer acquisition system", after: "AI-powered quiz funnel + multi-platform ad campaigns" },
                      { metric: "Financial Approach", before: "Revenue-focused (vanity metrics)", after: "Profit-centric operations (every dollar tracked)" },
                      { metric: "Website", before: "Generic website messaging", after: "Conversion-optimized, persona-targeted journeys" },
                      { metric: "Mindset Shift", before: "\"We can't afford to spend on ads\"", after: "\"How fast can we scale acquisition?\"" },
                      { metric: "Amazon Revenue", before: "~$25K/month new revenue added", after: "+ comparable DTC growth" },
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
      ===== END COMMENTED OUT CASE STUDY ===== */}

      {/* ===== SECTION 5: MEET THE TEAM ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                The &ldquo;People&rdquo; Behind Your Transformation
              </h2>
              <p className="text-lg text-medium max-w-2xl mx-auto">
                You&apos;re not hiring a freelancer. You&apos;re not hiring an agency with a team of juniors learning on your dime. You&apos;re getting a 27-year veteran strategist who takes your P&amp;L personally — backed by an execution team of 9 that works around the clock with precision no human team can match.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Dan - Featured */}
          <ScrollFadeIn>
            <div className="bg-warm rounded-2xl p-6 sm:p-8 mb-8 border border-gray-200">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/images/team/dan_headshot_800x800.png" alt="Dan Majestic — Founder & Chief Strategist" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark">Dan Majestic</h3>
                  <p className="text-gold font-semibold text-sm mb-3">Founder & Chief Strategist</p>
                  <p className="text-medium text-sm leading-relaxed mb-4">
                    Dan is the architect. Every strategy, every framework, every client engagement starts and ends with him. With 27 years spanning performance marketing, Amazon marketplace domination, and DTC customer lifecycle optimization, he brings pattern recognition that can&apos;t be templated or outsourced. He takes a maximum of 3-5 clients at any given time because he believes you can&apos;t truly own someone&apos;s P&amp;L from a distance.
                  </p>
                  <p className="text-xs text-medium">
                    4,000+ offers promoted &bull; 1,200+ Amazon launches &bull; Multiple 8-figure exits &bull; 25+ years in the trenches
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
                  name: "Mat",
                  image: "/images/team/mat_headshot_800x800.png",
                  role: "Project Lead & Strategist",
                  desc: "Mat is the engine room. He translates Dan's strategy into campaign plans, writes direct response copy, synthesizes research, and keeps every project on track and on time. When a brief comes in, Mat is the first one working on it.",
                },
                {
                  name: "Kat",
                  image: "/images/team/kat_headshot_800x800.png",
                  role: "Data & Systems Architect",
                  desc: "Kat makes the invisible visible. Every tracking pixel, every UTM parameter, every conversion event, every integration between platforms — that's Kat. She ensures that when we tell you something is working, we have the data to prove it.",
                },
                {
                  name: "Sam",
                  image: "/images/team/sam_headshot_800x800.png",
                  role: "Design & Development Lead",
                  desc: "Sam builds the things your customers actually touch. Landing pages, quiz funnels, websites, email templates — all designed mobile-first, built for speed, and optimized to convert. If it loads in under 2 seconds and looks clean, Sam built it.",
                },
                {
                  name: "Pixie",
                  image: "/images/team/pixie_headshot_800x800.png",
                  role: "Creative Director & Designer",
                  desc: "Pixie translates brand strategy into visual language that stops thumbs mid-scroll. From trade dress to ad creative to full brand identity systems — bold taste, meticulous execution, every pixel with purpose.",
                },
                {
                  name: "Riley",
                  image: "/images/team/riley_headshot_800x800.png",
                  role: "Content Strategist & Research Lead",
                  desc: "Riley maps the entire competitive landscape before anyone writes a single word. ICP research, content architecture, SEO strategy, market analysis — the kind of sharp that makes everyone better.",
                },
                {
                  name: "Alex",
                  image: "/images/team/alex_headshot_800x800.png",
                  role: "Marketplace & Paid Media Strategist",
                  desc: "Alex knows where every ad dollar goes and makes each one work harder. Amazon, Pinterest, Bing, native ad networks — marketplace optimization and media buying that turns ad spend into compounding revenue.",
                },
                {
                  name: "Sophia",
                  image: "/images/team/sophia-bellissimo.png",
                  role: "Customer Success & Lifecycle Strategist",
                  desc: "Sophia lives on the front lines. As the voice behind our support chat, she talks to your customers every single day — she knows what confuses them, what delights them, and exactly where they get stuck. That 24/7 frontline intelligence feeds directly into lifecycle strategy, nurture flows, and the retention plays that turn first-time buyers into raving fans.",
                },
                {
                  name: "Vega",
                  image: "/images/team/vega-cruz.jpg",
                  role: "Video & Motion Producer",
                  desc: "Vega turns static strategy into content that moves — literally. Product demos, video ads, animated explainers, UGC-style clips — if it plays and converts, Vega made it. In a world where video outperforms every other format on every platform, she\u2019s the reason your brand doesn\u2019t just get seen \u2014 it gets watched.",
                },
                {
                  name: "Ivy",
                  image: "/images/team/ivy-ashford.jpg",
                  role: "SEO & Organic Growth Strategist",
                  desc: "Ivy builds the growth that doesn\u2019t stop when you stop paying for it. Technical audits, keyword architecture, content engines, on-page optimization \u2014 the organic infrastructure that compounds month over month. While Alex drives traffic today, Ivy is planting the seeds that bring it for free tomorrow.",
                },
              ].map((agent) => (
                <div
                  key={agent.name}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden">
                    <img src={agent.image} alt={`${agent.name} — ${agent.role}`} className="w-full h-full object-cover" />
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
              <p className="text-xs font-bold text-dark mb-2 text-center">How Our Team Works</p>
              <p className="text-xs text-medium leading-relaxed text-center max-w-3xl mx-auto mb-3">
                <em>Dan leads a 10-person team: himself plus 9 AI agents custom-trained on his 27 years of frameworks and methodology. They don&apos;t guess. They don&apos;t hallucinate strategies. They execute the proven playbook Dan has refined across 4,000+ offers — faster, more precisely, and around the clock.</em>
              </p>
              <p className="text-xs text-medium leading-relaxed text-center max-w-3xl mx-auto mb-3">
                <em>Dan architects every strategy and makes every strategic decision personally. The 9-agent team executes at a speed and consistency that no human team can match. The result: you get boutique-level strategic depth with agency-level execution capacity.</em>
              </p>
              <p className="text-xs text-center">
                <a
                  href="https://dashboard.ravingfans.ai/public"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-dark font-semibold transition-colors"
                >
                  See the team working live &rarr; dashboard.ravingfans.ai/public
                </a>
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
            {/* Gears process graphic */}
            <div className="mb-10 overflow-x-auto">
              <svg width="100%" viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:"680px",margin:"0 auto",display:"block"}}>
                <circle cx="72" cy="130" r="34" fill="#F0EBD9" stroke="#A08C4E" strokeWidth="1"/>
                <rect x="64" y="92" width="16" height="7" rx="2" fill="#A08C4E" opacity="0.4"/>
                <rect x="64" y="161" width="16" height="7" rx="2" fill="#A08C4E" opacity="0.4"/>
                <rect x="34" y="122" width="7" height="16" rx="2" fill="#A08C4E" opacity="0.4"/>
                <rect x="103" y="122" width="7" height="16" rx="2" fill="#A08C4E" opacity="0.4"/>
                <circle cx="72" cy="130" r="13" fill="#E8E2CE" stroke="#A08C4E" strokeWidth="0.5"/>
                <text x="72" y="130" textAnchor="middle" fontSize="13" fontWeight="500" fill="#6B5A2E" dominantBaseline="central">1</text>
                <text x="72" y="180" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Research</text>
                <line x1="108" y1="128" x2="128" y2="126" stroke="#C9A54E" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3"/>
                <circle cx="196" cy="126" r="38" fill="#EDE5C8" stroke="#B89D48" strokeWidth="1.2"/>
                <rect x="187" y="84" width="18" height="8" rx="2" fill="#B89D48" opacity="0.4"/>
                <rect x="187" y="160" width="18" height="8" rx="2" fill="#B89D48" opacity="0.4"/>
                <rect x="154" y="117" width="8" height="18" rx="2" fill="#B89D48" opacity="0.4"/>
                <rect x="230" y="117" width="8" height="18" rx="2" fill="#B89D48" opacity="0.4"/>
                <circle cx="196" cy="126" r="15" fill="#E2D8B4" stroke="#B89D48" strokeWidth="0.5"/>
                <text x="196" y="126" textAnchor="middle" fontSize="14" fontWeight="500" fill="#6B5A2E" dominantBaseline="central">2</text>
                <text x="196" y="180" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Foundation</text>
                <line x1="236" y1="124" x2="262" y2="122" stroke="#C9A54E" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3"/>
                <circle cx="332" cy="122" r="42" fill="#E8D9A8" stroke="#C9A54E" strokeWidth="1.5"/>
                <rect x="322" y="76" width="20" height="9" rx="2" fill="#C9A54E" opacity="0.4"/>
                <rect x="322" y="160" width="20" height="9" rx="2" fill="#C9A54E" opacity="0.4"/>
                <rect x="286" y="112" width="9" height="20" rx="2" fill="#C9A54E" opacity="0.4"/>
                <rect x="370" y="112" width="9" height="20" rx="2" fill="#C9A54E" opacity="0.4"/>
                <circle cx="332" cy="122" r="17" fill="#DCC87E" stroke="#C9A54E" strokeWidth="0.5"/>
                <text x="332" y="122" textAnchor="middle" fontSize="15" fontWeight="500" fill="#5A4A22" dominantBaseline="central">3</text>
                <text x="332" y="180" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Structure</text>
                <line x1="376" y1="120" x2="404" y2="118" stroke="#C9A54E" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3"/>
                <circle cx="474" cy="118" r="46" fill="#DCC87E" stroke="#C9A54E" strokeWidth="1.5"/>
                <rect x="463" y="68" width="22" height="10" rx="3" fill="#C9A54E" opacity="0.45"/>
                <rect x="463" y="160" width="22" height="10" rx="3" fill="#C9A54E" opacity="0.45"/>
                <rect x="424" y="107" width="10" height="22" rx="3" fill="#C9A54E" opacity="0.45"/>
                <rect x="516" y="107" width="10" height="22" rx="3" fill="#C9A54E" opacity="0.45"/>
                <circle cx="474" cy="118" r="19" fill="#D0B85C" stroke="#B89D48" strokeWidth="0.5"/>
                <text x="474" y="118" textAnchor="middle" fontSize="16" fontWeight="500" fill="#4A3C18" dominantBaseline="central">4</text>
                <text x="474" y="180" textAnchor="middle" fontSize="12" fontWeight="500" fill="#1B2A3D">Build</text>
                <line x1="522" y1="116" x2="546" y2="114" stroke="#C9A54E" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3"/>
                <circle cx="608" cy="114" r="42" fill="#C9A54E" stroke="#A08C4E" strokeWidth="2"/>
                <rect x="598" y="68" width="20" height="9" rx="2" fill="#A08C4E" opacity="0.6"/>
                <rect x="598" y="152" width="20" height="9" rx="2" fill="#A08C4E" opacity="0.6"/>
                <rect x="562" y="104" width="9" height="20" rx="2" fill="#A08C4E" opacity="0.6"/>
                <rect x="646" y="104" width="9" height="20" rx="2" fill="#A08C4E" opacity="0.6"/>
                <circle cx="608" cy="114" r="16" fill="#B89D48" stroke="#8A7A50" strokeWidth="0.5"/>
                <text x="608" y="114" textAnchor="middle" fontSize="15" fontWeight="500" fill="#F0EBD9" dominantBaseline="central">5</text>
                <line x1="608" y1="60" x2="608" y2="52" stroke="#C9A54E" strokeWidth="1.2" opacity="0.4"/>
                <line x1="640" y1="78" x2="646" y2="72" stroke="#C9A54E" strokeWidth="1.2" opacity="0.4"/>
                <line x1="576" y1="78" x2="570" y2="72" stroke="#C9A54E" strokeWidth="1.2" opacity="0.4"/>
                <text x="608" y="174" textAnchor="middle" fontSize="12" fontWeight="500" fill="#C9A54E">Optimize</text>
                <text x="340" y="220" textAnchor="middle" fontSize="12" fill="#888780" fontStyle="italic">Each phase drives the next — nothing runs in isolation</text>
              </svg>
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
                      <p className="text-xs font-bold text-gold uppercase tracking-wide mb-1">You Get</p>
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
                Most agencies skip straight to step 4 and wonder why things don&apos;t work. We don&apos;t. The first three stages are where the real value lives — and where every other agency cuts corners.
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

      {/* ===== SECTION 7: THE WHY ===== */}
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
                I&apos;ve been selling things online since 1999. I&apos;ve promoted over 4,000 different offers for some of the biggest brands in the world — and plenty of brands nobody&apos;s ever heard of. I&apos;ve launched over 1,200 products on Amazon. I&apos;ve personally managed campaigns that generated hundreds of millions in revenue.
              </p>
              <p>
                But the work I&apos;m most proud of isn&apos;t about the numbers. It&apos;s about the people.
              </p>
              <p>
                One of my clients told me straight: if we can&apos;t generate new revenue, people lose their jobs. Real people with families. That&apos;s the kind of work that gets me up at 2:30 in the morning. Not because I have to. Because I want to.
              </p>
              <p>
                I believe in what I call Business Karma. When you&apos;re generous with the value you create — when you genuinely try to make people&apos;s lives better — it compounds and comes back to you. That&apos;s not a strategy. That&apos;s a conviction. One of my favorite proverbs says it plainly: generosity begets generosity, and stinginess impoverishes.
              </p>
              <p>
                Every business I&apos;ve touched, I&apos;ve made better. The people I&apos;ve worked with think differently about their customers, their products, and their potential. That&apos;s what I want for you.
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
              Questions You&apos;re Probably Asking
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <FAQ />
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 9: THE RAVING FAN DECLARATION ===== */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F5F0E8 0%, #f8f3ea 40%, #faf5ec 60%, #f5eedf 100%)" }}>
        {/* Subtle gold accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-10 text-center">
              What We Really Build
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="space-y-6 text-lg text-dark leading-relaxed">
              <p>
                We don&apos;t build funnels. We don&apos;t build campaigns. We don&apos;t even build &ldquo;customer acquisition engines&rdquo; — though that&apos;s what they are mechanically.
              </p>
              <p>
                What we really build is the bridge between where your business is today and the business you saw in your mind when you first started. The one that seemed so clear, so inevitable, before the complexity set in. Before the agencies that didn&apos;t deliver. Before the ad spend that didn&apos;t return. Before the slow erosion of belief that it could really work the way you imagined.
              </p>
              <p>
                It can. And here&apos;s the truth most people never hear: the businesses that break through aren&apos;t the ones with the biggest budgets or the best products. They&apos;re the ones that build genuine relationships with their customers — at scale — and never stop delivering more value than expected.
              </p>
              <p>
                That&apos;s what a Raving Fan engine does. It takes the thing you&apos;re already good at — your product, your mission, your reason for existing — and connects it to the people who need it most, through a system designed to deepen that connection at every stage.
              </p>
              <p>
                When it works — and it does work — something remarkable happens. Your customers stop being transactions and start becoming advocates. Your growth stops being linear and starts compounding. And you stop worrying about where the next customer is coming from, because your best customers are out there finding them for you.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="mt-10">
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-lg sm:text-xl text-navy italic leading-relaxed">
                If you found this page today, maybe it&apos;s not an accident. Maybe the universe conspired to put this in front of you at exactly the right time. I believe that. And I believe the only regret you&apos;ll have is that you didn&apos;t start sooner.
              </p>
            </blockquote>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ===== SECTION 10: FINAL CTA ===== */}
      <section className="py-20 sm:py-28 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <p className="text-2xl sm:text-3xl font-extrabold text-white mb-4 italic">
              &ldquo;The Only Regret You&apos;ll Have Is That You Didn&apos;t Start Sooner.&rdquo;
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
            <p className="mt-6 text-sm text-gray-400 italic">
              30 minutes. No pitch deck. No slides. Just a real conversation about your business and what&apos;s possible.
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
