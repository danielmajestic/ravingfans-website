import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Marketing insights, growth strategies, and lessons from 27 years in the trenches.",
};

export default function InsightsPage() {
  return (
    <section className="min-h-screen bg-warm flex items-center justify-center pt-16">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">Insights & Blog</h1>
        <p className="text-lg text-medium">Coming soon.</p>
      </div>
    </section>
  );
}
