import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the RavingFans.ai team — a seasoned strategist backed by AI agents trained on 27 years of proven frameworks.",
};

const agents = [
  {
    initial: "M",
    name: "Mat",
    role: "Project Lead & Copy Strategist",
    desc: "Mat manages execution timelines, writes conversion copy that sells without feeling salesy, and ensures every deliverable meets Dan's exacting standards. When strategy needs to become words, Mat makes them count.",
  },
  {
    initial: "K",
    name: "Kat",
    role: "Data & Systems Engineer",
    desc: "Kat builds the backend infrastructure, analytics dashboards, and automation systems that power your growth engine. She turns data into decisions and makes sure nothing falls through the cracks.",
  },
  {
    initial: "S",
    name: "Sam",
    role: "Design & Build Specialist",
    desc: "Sam creates the landing pages, funnels, email templates, and visual assets that turn strategy into experience. Every pixel serves a purpose. Every page is built to convert.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Meet the Team
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            A strategist with 27 years of experience, backed by an AI execution team that never sleeps.
          </p>
        </div>
      </section>

      {/* Dan Featured Card */}
      <section className="py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-48 flex-shrink-0">
                  <div className="aspect-square bg-navy rounded-2xl flex items-center justify-center">
                    <span className="text-5xl font-bold text-gold">D</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-1">Dan Majestic</h2>
                  <p className="text-gold font-semibold mb-4">Founder & Chief Strategist</p>
                  <div className="space-y-3 text-sm text-dark leading-relaxed">
                    <p>
                      27 years in direct response marketing. 500+ campaigns launched. $50M+ in attributed revenue. Dan has worked with startups, mid-market brands, and companies doing $50M+ in annual revenue across CPG, health, tech, and e-commerce.
                    </p>
                    <p>
                      He doesn&apos;t just consult — he architects the entire customer acquisition strategy personally. Every framework, every funnel, every touchpoint is designed by Dan and executed by his AI team with perfect fidelity.
                    </p>
                    <p>
                      When you work with RavingFans.ai, Dan is in the room. Not a junior account manager. Not an intern reading from a playbook. The person who sold you is the person who does the work.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4 text-xs text-medium">
                    <span className="bg-warm rounded-full px-3 py-1 border border-gray-200">500+ campaigns</span>
                    <span className="bg-warm rounded-full px-3 py-1 border border-gray-200">$50M+ attributed revenue</span>
                    <span className="bg-warm rounded-full px-3 py-1 border border-gray-200">27 years direct response</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Agent Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-10 text-center">
              The Execution Team
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="grid sm:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">{agent.initial}</span>
                  </div>
                  <h3 className="font-bold text-dark text-center">{agent.name}</h3>
                  <p className="text-xs text-gold font-semibold text-center mb-3">{agent.role}</p>
                  <p className="text-sm text-medium leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-xl font-bold text-dark mb-4 text-center">
              How Our Team Works
            </h2>
            <p className="text-sm text-medium leading-relaxed text-center mb-6">
              Our execution team is powered by AI agents custom-trained on Dan&apos;s 27 years of frameworks and methodology. This isn&apos;t generic AI. These agents have been trained on Dan&apos;s specific approaches to customer acquisition, conversion optimization, and brand building.
            </p>
            <p className="text-sm text-medium leading-relaxed text-center mb-6">
              They work around the clock, never miss a detail, and operate at a pace no traditional team can match. Dan architects the strategy. The team executes it. You get the results.
            </p>
            <p className="text-sm text-medium leading-relaxed text-center">
              We believe transparency builds trust. That&apos;s why we&apos;re upfront about how we work — and why we think it&apos;s a genuine advantage, not something to hide.
            </p>
            <div className="mt-6 text-center">
              <a
                href="https://dashboard.ravingfans.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-dark font-semibold transition-colors text-sm"
              >
                See the team working live &rarr; dashboard.ravingfans.ai
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Ready to Put This Team to Work?
            </h2>
            <Link
              href="/call"
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Book a Strategy Call
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
