import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for RavingFans.ai consulting engagements by Profit Apps Studio LLC.",
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm">
            Effective Date: March 27, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none prose-headings:text-dark prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3 prose-p:text-dark prose-p:leading-relaxed prose-li:text-dark prose-strong:text-dark prose-a:text-gold-dark prose-a:no-underline hover:prose-a:underline">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern consulting engagements
              provided by RavingFans.ai, a service of Profit Apps Studio LLC
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By engaging our services, you agree to these
              Terms.
            </p>

            <h2>1. Services</h2>
            <p>
              RavingFans.ai provides consulting services in Amazon marketplace
              optimization, customer acquisition strategy, listing optimization,
              advertising management, and related e-commerce services. All
              engagements are scoped and defined in a Statement of Work (SOW)
              agreed upon by both parties before work begins.
            </p>

            <h2>2. Use of AI Tools</h2>
            <p>
              Our team uses artificial intelligence tools in analysis,
              research, content creation, and deliverable production. AI-generated
              outputs are reviewed and refined by our team before delivery, but
              may contain errors or imperfections. All deliverables should be
              reviewed by the client before implementation.
            </p>
            <p>
              AI tools augment our 27 years of experience — they do not replace
              human judgment. Strategic decisions are made by our team, not
              delegated to algorithms.
            </p>

            <h2>3. Client Responsibility</h2>
            <p>
              The client is responsible for:
            </p>
            <ul>
              <li>
                Reviewing all recommendations and deliverables before
                implementation
              </li>
              <li>
                Implementing changes to their own platforms, listings, and
                accounts
              </li>
              <li>
                Ensuring compliance with applicable platform terms of service,
                laws, and regulations
              </li>
              <li>
                Providing timely access to necessary accounts, data, and
                stakeholders as outlined in the SOW
              </li>
            </ul>
            <p>
              We provide strategy and recommendations. Implementation decisions
              and their outcomes are the client&rsquo;s sole responsibility unless
              explicitly included in the SOW scope.
            </p>

            <h2>4. Confidentiality</h2>
            <p>
              We treat all client business information, financial data, and
              strategic discussions as confidential. We will not share client
              information with third parties without written consent. Case
              studies and testimonials are published only with explicit client
              approval.
            </p>

            <h2>5. Billing and Payment</h2>
            <p>
              Engagement fees, payment schedules, and billing terms are defined
              in each SOW. Standard terms are net-15 from invoice date unless
              otherwise agreed. Late payments may incur a 1.5% monthly late fee.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, RavingFans.ai and Profit
              Apps Studio LLC shall not be liable for any indirect, incidental,
              consequential, special, or punitive damages arising from our
              services, including but not limited to: lost revenue, lost
              profits, listing suppression, account penalties, or any other
              negative business outcomes.
            </p>
            <p>
              Our total liability for any claim shall not exceed the fees paid
              by the client for the specific engagement giving rise to the
              claim.
            </p>

            <h2>7. Indemnification</h2>
            <p>
              The client agrees to indemnify and hold harmless RavingFans.ai,
              Profit Apps Studio LLC, and its officers, employees, and agents
              from any claims, damages, or expenses arising from the client&rsquo;s
              implementation of recommendations or use of deliverables.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate an engagement with 30 days&rsquo; written
              notice. The client is responsible for payment of all work
              completed through the termination date. Deliverables produced
              prior to termination remain the client&rsquo;s property as defined in
              the SOW.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Arizona.
              Any disputes shall be resolved in the courts of the State of
              Arizona.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:dan@ravingfans.ai">dan@ravingfans.ai</a>.
            </p>

            <hr />

            <p className="text-sm text-medium">
              Profit Apps Studio LLC &middot; Arizona, USA
              <br />
              Last updated: March 27, 2026
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-sm text-gold-dark font-medium hover:underline"
            >
              &larr; Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
