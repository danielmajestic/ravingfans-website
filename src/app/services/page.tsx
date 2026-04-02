import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Services | RavingFans.ai",
  description:
    "We build autonomous AI teams that run your growth operations 24/7. 9 productized services across Build, Grow, and Start tiers — from $2,500 strategy audits to $50K agent team deployments.",
  openGraph: {
    title: "Services | RavingFans.ai",
    description:
      "We Build the AI Teams. You Reap the Revenue. $572M in career revenue. 27 years in the trenches. Productized AI services for companies doing $5M–$50M.",
    url: "https://www.ravingfans.ai/services",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Services — RavingFans.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | RavingFans.ai",
    description:
      "Autonomous AI teams that run your growth operations 24/7. From strategy audits to full agent team deployments.",
    images: ["/opengraph-image"],
  },
};

/* ── Inline SVG icons — gold line-icon style (stroke #C8962E, 2px) ────── */

function IconAgentTeam() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="16" r="8" />
      <circle cx="12" cy="36" r="6" />
      <circle cx="52" cy="36" r="6" />
      <line x1="32" y1="24" x2="32" y2="30" />
      <line x1="32" y1="30" x2="12" y2="36" />
      <line x1="32" y1="30" x2="52" y2="36" />
      <path d="M12 42v6h40v-6" />
    </svg>
  );
}

function IconOnSite() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="28" width="48" height="28" rx="3" />
      <path d="M32 8l20 20H12z" />
      <circle cx="32" cy="44" r="6" />
      <line x1="32" y1="38" x2="32" y2="50" />
      <line x1="26" y1="44" x2="38" y2="44" />
    </svg>
  );
}

function IconInfraSprint() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="48" height="48" rx="4" />
      <path d="M20 32l8 8 16-16" />
      <line x1="8" y1="20" x2="56" y2="20" />
      <circle cx="16" cy="14" r="2" fill="#C8962E" />
      <circle cx="24" cy="14" r="2" fill="#C8962E" />
    </svg>
  );
}

function IconAcquisition() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 8v12" />
      <path d="M24 20h16l-4 16H28z" />
      <path d="M26 36l-6 20h24l-6-20" />
      <circle cx="32" cy="12" r="4" fill="#C8962E" stroke="none" />
    </svg>
  );
}

function IconAmazon() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="12" width="36" height="32" rx="3" />
      <path d="M14 44l18 8 18-8" />
      <path d="M24 24h16" />
      <path d="M24 30h12" />
      <path d="M24 36h8" />
    </svg>
  );
}

function IconContentPipeline() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="24" height="30" rx="2" />
      <rect x="32" y="26" width="24" height="30" rx="2" />
      <path d="M32 23l8-8" />
      <path d="M36 15h4v4" />
      <line x1="14" y1="16" x2="26" y2="16" />
      <line x1="14" y1="22" x2="24" y2="22" />
      <line x1="14" y1="28" x2="20" y2="28" />
      <line x1="38" y1="34" x2="50" y2="34" />
      <line x1="38" y1="40" x2="48" y2="40" />
    </svg>
  );
}

function IconStrategyAudit() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="28" r="18" />
      <line x1="40" y1="40" x2="56" y2="56" />
      <path d="M20 28l6 6 12-12" />
    </svg>
  );
}

function IconSophia() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="8" width="40" height="36" rx="8" />
      <circle cx="26" cy="24" r="3" fill="#C8962E" stroke="none" />
      <circle cx="38" cy="24" r="3" fill="#C8962E" stroke="none" />
      <path d="M24 32c4 4 12 4 16 0" />
      <path d="M20 44l-4 12" />
      <path d="M44 44l4 12" />
    </svg>
  );
}

function IconCRO() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#C8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8,48 20,32 32,40 44,20 56,12" />
      <circle cx="56" cy="12" r="4" fill="#C8962E" stroke="none" />
      <line x1="8" y1="56" x2="56" y2="56" />
      <line x1="8" y1="12" x2="8" y2="56" />
    </svg>
  );
}

/* ── Service data — Riley's v2 approved copy (9 services, 3 tiers) ───── */

const CALENDLY_BASE = "/call";
const UTM_SOURCE = "ravingfans";
const UTM_MEDIUM = "services_page";

function ctaUrl(service: string) {
  return `${CALENDLY_BASE}?utm_source=${UTM_SOURCE}&utm_medium=${UTM_MEDIUM}&utm_campaign=${encodeURIComponent(service)}`;
}

interface Service {
  title: string;
  tagline: string;
  description: string;
  whatYouGet: string[];
  whoItsFor: string;
  pricing: string;
  icon: React.ComponentType;
  slug: string;
}

const buildServices: Service[] = [
  {
    title: "AI Agent Team Build-Out",
    tagline: "A 10-person AI dev team that runs 24/7 — for less than one junior engineer.",
    description:
      "We stand up autonomous Claude Code agent teams on your infrastructure. Slack dispatch, governance frameworks, shared knowledge bases, auto-restart, command center dashboards, QA gates, and versioning — all production-ready.",
    whatYouGet: [
      "Full agent team architecture on your infrastructure",
      "Slack-based dispatch and monitoring system",
      "SharedBrain knowledge base + CLAUDE.md governance",
      "Command Center dashboard with QA gates",
      "30-day post-deployment support",
    ],
    whoItsFor: "Tech-forward companies wanting to 10x output without 10x headcount.",
    pricing: "Starting at $25K",
    icon: IconAgentTeam,
    slug: "ai-agent-team",
  },
  {
    title: "On-Site AI Team Deployment",
    tagline: "We fly in, build it, train your people, and leave you self-sufficient.",
    description:
      "White-glove, in-person implementation. We build an agent team on your infrastructure in 1–2 weeks, train your team hands-on, and provide post-deployment support. You get face-to-face knowledge transfer — not a Zoom call.",
    whatYouGet: [
      "1–2 week on-site implementation",
      "Hands-on team training and knowledge transfer",
      "Custom agent architecture for your workflows",
      "Post-deployment remote support",
      "Documentation and runbooks for your team",
    ],
    whoItsFor: "Companies that want high-touch implementation and face-to-face training.",
    pricing: "Starting at $25K",
    icon: IconOnSite,
    slug: "on-site-deployment",
  },
  {
    title: "AI Infrastructure Sprint",
    tagline: "Your manual workflows, automated. Your bottlenecks, eliminated.",
    description:
      "A 1–3 month engagement to build custom AI workflows, internal tools, or automation pipelines. Our CC Team architecture is the template — applied to your specific needs. We find the friction, build the fix, and hand you the keys.",
    whatYouGet: [
      "AI opportunity audit and workflow mapping",
      "Custom automation pipeline development",
      "Internal tool builds (dashboards, integrations)",
      "Team training on new systems",
      "90-day optimization support",
    ],
    whoItsFor: "Mid-market companies ($5M–$50M) drowning in manual workflows with budget but zero AI expertise.",
    pricing: "Starting at $15K",
    icon: IconInfraSprint,
    slug: "ai-infrastructure-sprint",
  },
];

const growServices: Service[] = [
  {
    title: "AI-Powered Customer Acquisition Engine",
    tagline: "The complete system: quiz funnel + paid media + analytics + optimization.",
    description:
      "A full customer acquisition machine built on the model we perfected with real brands. Interactive quiz funnels that convert cold traffic at 2–3x standard rates, paired with multi-platform ad campaigns and granular tracking.",
    whatYouGet: [
      "Custom quiz funnel (design, copy, logic)",
      "Multi-platform ad campaigns (Pinterest, Google, Meta)",
      "Full tracking and analytics infrastructure",
      "Monthly optimization and creative refreshes",
      "ROI dashboard with real P&L tracking",
    ],
    whoItsFor: "DTC brands, supplement companies, any brand that needs a customer acquisition machine.",
    pricing: "Starting at $5K",
    icon: IconAcquisition,
    slug: "customer-acquisition",
  },
  {
    title: "Amazon AI Operations Package",
    tagline: "27 years of Amazon experience — now powered by AI.",
    description:
      "PerfectASIN analysis, advertising audit, listing optimization, and weekly performance reports. Backed by 27 years of Amazon experience and an 8-figure exit. We know what moves the needle because we've done it ourselves.",
    whatYouGet: [
      "PerfectASIN listing analysis and optimization",
      "Advertising audit and campaign management",
      "Weekly performance reports with action items",
      "Competitor monitoring and market intelligence",
      "Dedicated account strategist",
    ],
    whoItsFor: "Brands doing $1M–$20M on Amazon without a sophisticated in-house team.",
    pricing: "Starting at $5K",
    icon: IconAmazon,
    slug: "amazon-ai-ops",
  },
  {
    title: "Branded Report & Content Pipeline",
    tagline: "Turn your expertise into automated, branded deliverables.",
    description:
      "Automated branded PDF report generation, LinkedIn carousel system, blog content pipeline — from brief to draft to review to publish. Productize your expertise into repeatable, branded assets that build authority on autopilot.",
    whatYouGet: [
      "Automated branded PDF report system",
      "LinkedIn carousel and social content pipeline",
      "Blog/CMS setup and content workflow",
      "Brand voice training for AI-generated content",
      "Monthly content calendar and publishing",
    ],
    whoItsFor: "Agencies, consultancies, and SaaS companies that need to productize their expertise.",
    pricing: "Starting at $5K",
    icon: IconContentPipeline,
    slug: "content-pipeline",
  },
];

const startServices: Service[] = [
  {
    title: "AI Strategy & Audit",
    tagline: "Find out exactly where AI fits — and where it doesn't.",
    description:
      "A 2-week assessment that maps your AI opportunities, projects ROI for each, and delivers a prioritized roadmap using our Fruit Tree Hierarchy. The foot-in-the-door engagement that shows you what's possible before you commit to building.",
    whatYouGet: [
      "AI opportunity mapping across your operations",
      "ROI projection for each opportunity",
      "Prioritized implementation roadmap",
      "Fruit Tree Hierarchy analysis (quick wins → long-term bets)",
      "Executive summary with clear next steps",
    ],
    whoItsFor: "Any company $5M+ curious about AI but paralyzed by options.",
    pricing: "Starting at $2,500",
    icon: IconStrategyAudit,
    slug: "ai-strategy-audit",
  },
  {
    title: "Sophia — AI Customer Support",
    tagline: "An AI support agent trained on your brand, live in days.",
    description:
      "A RAG-trained AI chatbot deployed on your website. Trained on your product manuals, CSR databases, and FAQs. Custom brand voice, smart escalation rules, and an analytics dashboard so you see exactly what customers are asking.",
    whatYouGet: [
      "Custom RAG-trained chatbot deployment",
      "Brand voice calibration and training",
      "Escalation rules and human handoff",
      "Analytics dashboard (questions, resolution rate)",
      "Monthly tuning and knowledge base updates",
    ],
    whoItsFor: "E-commerce brands and SaaS companies with support ticket volume problems.",
    pricing: "Starting at $5K",
    icon: IconSophia,
    slug: "sophia-ai-support",
  },
  {
    title: "Conversion Rate Optimization",
    tagline: "Turn a 2% conversion rate into 4% — double revenue, zero extra ad spend.",
    description:
      "Landing page optimization, checkout flow engineering, A/B testing, and granular funnel analysis. We find where visitors drop off, fix the friction, and make buying feel like the obvious next step.",
    whatYouGet: [
      "Full-funnel conversion audit",
      "Landing page and checkout optimization",
      "A/B testing framework and execution",
      "Heatmap and session recording analysis",
      "Monthly performance reports with recommendations",
    ],
    whoItsFor: "Any brand with traffic but poor conversion.",
    pricing: "Starting at $2,500",
    icon: IconCRO,
    slug: "conversion-optimization",
  },
];

/* ── Social proof stats ─────────────────────────────────────────────── */

const socialProof = [
  { value: "$572M+", label: "Career Revenue" },
  { value: "27", label: "Years in E-Commerce" },
  { value: "3,000+", label: "Product Niches" },
  { value: "8-Figure", label: "NASDAQ Exit" },
];

/* ── Service Card Component ─────────────────────────────────────────── */

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm h-full flex flex-col">
      <div className="mb-4">
        <Icon />
      </div>
      <h3 className="text-lg font-bold text-dark mb-1">{service.title}</h3>
      <p className="text-sm font-medium text-gold mb-3">{service.tagline}</p>
      <p className="text-sm text-medium leading-relaxed mb-4">{service.description}</p>

      <div className="mb-4">
        <p className="text-xs font-bold text-dark uppercase tracking-wide mb-2">What You Get</p>
        <ul className="space-y-1.5">
          {service.whatYouGet.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-medium">
              <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-xs text-medium mb-1">
          <span className="font-semibold text-dark">Who it&apos;s for:</span> {service.whoItsFor}
        </p>
        <p className="text-lg font-bold text-dark mt-3 mb-4">{service.pricing}</p>
        <Link
          href={ctaUrl(service.slug)}
          className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-white text-sm font-semibold rounded-xl transition-colors w-full justify-center"
        >
          Book a Strategy Call &rarr;
        </Link>
      </div>
    </div>
  );
}

/* ── Tier Section Component ─────────────────────────────────────────── */

function TierSection({
  label,
  title,
  subtitle,
  services,
  bgClass,
}: {
  label: string;
  title: string;
  subtitle: string;
  services: Service[];
  bgClass: string;
}) {
  return (
    <section className={`py-20 sm:py-28 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollFadeIn>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-4 py-1.5 rounded-full mb-4">
              {label}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-3">
              {title}
            </h2>
            <p className="text-lg text-medium max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ScrollFadeIn key={service.title}>
              <ServiceCard service={service} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFadeIn>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              We Build the AI Teams.
              <br />
              <span className="text-gold">You Reap the Revenue.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              $572M in career revenue. 27 years in the trenches. Now we build autonomous AI teams
              that run your growth operations 24/7 — so you can scale without scaling headcount.
            </p>
            <Link
              href={ctaUrl("hero")}
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Book a Strategy Call &rarr;
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Who This Is For — qualifier */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-4">
              Who This Is For
            </h2>
            <p className="text-lg text-medium leading-relaxed">
              You&apos;ve got revenue. You&apos;ve got a team. What you don&apos;t have is enough hours in the day.
              These services are built for companies doing{" "}
              <span className="font-bold text-dark">$5M–$50M</span> who are ready to let AI handle
              the work that&apos;s eating their margin.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <p className="text-center text-sm font-bold uppercase tracking-widest text-gold mb-8">
              Built on 27 Years of Doing the Actual Work
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {socialProof.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-extrabold text-navy" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* BUILD Tier */}
      <TierSection
        label="Build"
        title="Enterprise AI Infrastructure"
        subtitle="For companies ready to deploy AI teams at scale. High-touch, high-impact engagements that transform how you operate."
        services={buildServices}
        bgClass="bg-white"
      />

      {/* GROW Tier */}
      <TierSection
        label="Grow"
        title="Growth Operations"
        subtitle="Recurring systems that drive revenue month over month. Launch once, optimize continuously."
        services={growServices}
        bgClass="bg-warm"
      />

      {/* START Tier */}
      <TierSection
        label="Start"
        title="Entry Points"
        subtitle="Not sure where to begin? Start here. Low commitment, high clarity."
        services={startServices}
        bgClass="bg-white"
      />

      {/* Final CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Book an AI Strategy Audit. We&apos;ll map your opportunities, project your ROI, and give you a prioritized roadmap — no commitment required.
            </p>
            <Link
              href={ctaUrl("footer-cta")}
              className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-gold/20"
            >
              Book an AI Strategy Audit &rarr;
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              30 minutes. No slide deck. No pressure. Just a real conversation.
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
