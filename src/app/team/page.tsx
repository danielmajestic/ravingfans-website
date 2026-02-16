import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the RavingFans.ai team — 27 years of battle-tested marketing wisdom, amplified by an AI execution team that never sleeps.",
};

const agents = [
  {
    initial: "M",
    name: "Mat",
    role: "Project Lead & Strategist",
    desc: "Mat is the engine room. He translates Dan's strategy into campaign plans, writes direct response copy, synthesizes research, and keeps every project on track and on time. When a brief comes in, Mat is the first one working on it.",
  },
  {
    initial: "K",
    name: "Kat",
    role: "Data & Systems Architect",
    desc: "Kat makes the invisible visible. Every tracking pixel, every UTM parameter, every conversion event, every integration between platforms — that's Kat. She ensures that when we tell you something is working, we have the data to prove it.",
  },
  {
    initial: "S",
    name: "Sam",
    role: "Design & Development Lead",
    desc: "Sam builds the things your customers actually touch. Landing pages, quiz funnels, websites, email templates — all designed mobile-first, built for speed, and optimized to convert. If it loads in under 2 seconds and looks clean, Sam built it.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            The People Behind Your Growth
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            You&apos;re not hiring a freelancer. You&apos;re not hiring an agency with a team of juniors. You&apos;re hiring 27 years of battle-tested marketing wisdom, amplified by an AI execution team that never sleeps, never misses a detail, and operates at a pace no traditional agency can match.
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
                      Dan is the architect. Every strategy, every framework, every client engagement starts and ends with him. With 27 years of experience across performance marketing, Amazon marketplace optimization, DTC customer lifecycle engineering, and regulated product compliance, he brings pattern recognition that no algorithm can replicate. He takes a maximum of 3-5 clients at any given time because he believes you can&apos;t truly own someone&apos;s P&amp;L from a distance.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4 text-xs text-medium">
                    <span className="bg-warm rounded-full px-3 py-1 border border-gray-200">4,000+ offers promoted</span>
                    <span className="bg-warm rounded-full px-3 py-1 border border-gray-200">1,200+ Amazon launches</span>
                    <span className="bg-warm rounded-full px-3 py-1 border border-gray-200">Multiple 8-figure exits</span>
                    <span className="bg-warm rounded-full px-3 py-1 border border-gray-200">25+ years in the trenches</span>
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
            <p className="text-sm text-medium leading-relaxed text-center mb-4">
              <em>Our execution team is powered by AI agents custom-trained on Dan&apos;s 27 years of frameworks and methodology. They don&apos;t guess. They don&apos;t hallucinate strategies. They execute the proven playbook Dan has refined across 4,000+ offers — faster, more precisely, and around the clock.</em>
            </p>
            <p className="text-sm text-medium leading-relaxed text-center mb-6">
              <em>Dan architects every strategy and makes every strategic decision personally. The team executes at a speed and consistency that no human team can match. The result: you get boutique-level strategic depth with agency-level execution capacity.</em>
            </p>
            <div className="text-center">
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
