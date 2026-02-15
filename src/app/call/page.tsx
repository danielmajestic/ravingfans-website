import type { Metadata } from "next";
import Script from "next/script";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "30 minutes. No slides. No pitch. Just a real conversation about your business and what exponential growth could look like.",
};

export default function CallPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Let&apos;s Talk About Your Business.
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            30 minutes. No slides. No pitch. Just a conversation about what growth looks like for you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: What to expect */}
            <ScrollFadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-bold text-dark mb-4">What to Expect</h2>
                  <ul className="space-y-3">
                    {[
                      "A real conversation about your business, not a scripted sales call",
                      "Honest assessment of where you are and what's possible",
                      "Specific ideas you can implement whether or not we work together",
                      "A clear next step if it makes sense for both of us",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-dark">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-dark mb-4">What NOT to Expect</h2>
                  <ul className="space-y-3">
                    {[
                      "No slide deck or prepared pitch",
                      "No pressure to buy anything",
                      "No bait-and-switch with a junior closer",
                      "No follow-up harassment if it's not a fit",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-dark">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-dark mb-4">This Call Is Best For</h2>
                  <ul className="space-y-3">
                    {[
                      "CPG brands doing $1M+ in annual revenue",
                      "Businesses that know they need to grow but feel stuck",
                      "Founders tired of agency runaround",
                      "Teams ready to invest in real growth infrastructure",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-dark">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Right: Calendly embed */}
            <ScrollFadeIn>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px]">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/ravingfans/30min?hide_gdpr_banner=1"
                  style={{ minWidth: "280px", height: "630px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
