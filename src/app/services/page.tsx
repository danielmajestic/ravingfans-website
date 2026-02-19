import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI-powered customer acquisition engines built for you, managed for you, optimized continuously. For CPG brands doing $3M+ in annual revenue.",
  openGraph: {
    title: "Services | RavingFans.ai",
    description:
      "Quiz funnels, multi-platform ad campaigns, email sequences, Amazon growth, and ongoing optimization. Everything you need to turn strangers into Raving Fans.",
    url: "https://www.ravingfans.ai/services",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Services — RavingFans.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | RavingFans.ai",
    description:
      "AI-powered customer acquisition engines built for CPG brands doing $3M+.",
    images: ["/opengraph-image"],
  },
};

const services = [
  {
    title: "Customer Acquisition Funnels",
    desc: "Interactive quiz funnels that convert cold traffic at 2-3x the rate of standard landing pages. Built on your brand voice, targeted to your ideal customer, designed to educate and qualify simultaneously.",
  },
  {
    title: "Multi-Platform Ad Campaigns",
    desc: "Pinterest, Google, Meta, Bing — wherever your customers are. Complete creative packages: hooks, headlines, descriptions, audience targeting, tracking setup. Done-for-you or done-with-you.",
  },
  {
    title: "Email Nurture Sequences",
    desc: "The bridge between first purchase and lifelong customer. Welcome sequences, reactivation flows, VIP segments. Every email engineered to move people through the Raving Fan Progression.",
  },
  {
    title: "Conversion Architecture",
    desc: "Your website, your checkout, your landing pages — audited and optimized with one principle: a confused mind always says no. We eliminate friction, clarify messaging, and make buying feel like the obvious next step.",
  },
  {
    title: "Tracking & Analytics Infrastructure",
    desc: "Every pixel, every UTM, every conversion event. You'll know exactly what's working, what's not, and where every dollar went. No dashboards full of vanity metrics — real P&L impact tracking.",
  },
  {
    title: "Ongoing Optimization",
    desc: "Launch is just the beginning. Monthly creative refreshes, A/B testing, performance analysis, and strategic recommendations. This is how 12% monthly growth compounds into a doubled business in under a year.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Your Customer Acquisition Engine.<br />
            <span className="text-gold">Built For You. Managed For You. Optimized Continuously.</span>
          </h1>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                What We Build
              </h2>
              <p className="text-lg text-medium max-w-2xl mx-auto">
                Every engagement is custom because every business is different. But the engine always includes the same core components:
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ScrollFadeIn key={service.title}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm h-full">
                  <h3 className="text-lg font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-sm text-medium leading-relaxed">{service.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-12 text-center">
              How We Work Together
            </h2>
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 gap-8">
            <ScrollFadeIn>
              <div className="bg-warm rounded-2xl p-6 sm:p-8 border border-gray-200 h-full">
                <h3 className="text-xl font-bold text-dark mb-3">Launch Engagement</h3>
                <p className="text-sm text-medium leading-relaxed">
                  The full 5-stage build: Research &rarr; Foundation &rarr; Structure &rarr; Build &rarr; Optimize. Typically 2-4 weeks to first live assets. You get the complete engine, ready to drive traffic.
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <div className="bg-warm rounded-2xl p-6 sm:p-8 border border-gray-200 h-full">
                <h3 className="text-xl font-bold text-dark mb-3">Ongoing Optimization</h3>
                <p className="text-sm text-medium leading-relaxed">
                  Monthly retainer for continuous improvement. Ad creative refreshes, quiz performance analysis, A/B testing, strategic advisory. This is where compounding growth lives.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Who This Is For / Not For */}
      <section className="py-20 sm:py-28 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <ScrollFadeIn>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 h-full">
                <h3 className="text-xl font-bold text-dark mb-4">Who This Is For</h3>
                <p className="text-sm text-medium leading-relaxed">
                  This is for CPG brands doing $3M+ in annual revenue who know they should be growing faster but can&apos;t figure out why they&apos;re not. Brands with great products and loyal customers who just need a system to find more of them. Founders and marketing leaders who are done paying for activity and ready to invest in outcomes.
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 h-full">
                <h3 className="text-xl font-bold text-dark mb-4">Who This Is NOT For</h3>
                <p className="text-sm text-medium leading-relaxed">
                  This is not for businesses looking for the cheapest option. This is not for companies that want to micromanage every creative decision. And this is not for anyone who thinks marketing is a cost center instead of a growth engine. We take 3-5 clients at a time. If we&apos;re not the right fit, I&apos;ll tell you on the call.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Check Availability
            </h2>
            <Link
              href="/call"
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Book a Strategy Call
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              We take 3-5 clients at a time. Limited availability.
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
