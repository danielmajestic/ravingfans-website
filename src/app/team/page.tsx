import type { Metadata } from "next";
import RavingFansTeamGrid from "@/components/RavingFansTeamGrid";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the RavingFans.ai team — 27 years of battle-tested marketing wisdom, amplified by an AI execution team that never sleeps.",
  openGraph: {
    title: "The Team | RavingFans.ai",
    description:
      "A 27-year veteran strategist backed by an AI execution team that works around the clock. Boutique-level strategy. Agency-level execution.",
    url: "https://www.ravingfans.ai/team",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "The RavingFans.ai Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Team | RavingFans.ai",
    description:
      "A 27-year veteran strategist backed by an AI execution team that never sleeps.",
    images: ["/opengraph-image"],
  },
};

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

      {/* Team Grid with headshots */}
      <RavingFansTeamGrid />
    </>
  );
}
