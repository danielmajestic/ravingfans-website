import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results",
  description: "Real results from real clients. See what RavingFans.ai delivers.",
};

export default function ResultsPage() {
  return (
    <section className="min-h-screen bg-warm flex items-center justify-center pt-16">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">Client Results</h1>
        <p className="text-lg text-medium mb-8">Full details coming soon.</p>
        <Link
          href="/call"
          className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold rounded-xl transition-colors"
        >
          Book a Strategy Call &rarr;
        </Link>
      </div>
    </section>
  );
}
