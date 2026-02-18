"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CtaTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('a[href="/call"]');
      if (!link) return;

      const label =
        link.textContent?.trim() || "Book a Strategy Call";

      if (window.gtag) {
        window.gtag("event", "cta_click", {
          event_category: "engagement",
          event_label: label,
          link_url: "/call",
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
