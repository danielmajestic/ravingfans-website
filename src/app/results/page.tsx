import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results",
  description:
    "We don't talk about what we can do. We show you what we've done. Real results from real clients.",
  openGraph: {
    title: "Client Results | RavingFans.ai",
    description:
      "Real results from real CPG clients. Case studies coming soon.",
    url: "https://www.ravingfans.ai/results",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Client Results — RavingFans.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Results | RavingFans.ai",
    description:
      "Real results from real CPG clients. See what a Raving Fan engine does to revenue.",
    images: ["/opengraph-image"],
  },
};

// Page content intentionally blank pending edits.
// Previous content preserved in git history (see commit prior to this change).
export default function ResultsPage() {
  return null;
}
