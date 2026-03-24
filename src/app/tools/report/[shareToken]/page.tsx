"use client";

import { useState, useEffect, FormEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const API_BASE =
  process.env.NEXT_PUBLIC_PERFECTASIN_API_URL ||
  "https://titleperfect-api-119656431080.us-central1.run.app";

interface ReportData {
  htmlContent: string;
  overallGrade: string;
  overallScore: number;
  asin: string;
  generatedAt: string;
  requiresPassword?: boolean;
}

export default function SharedReportPage() {
  const params = useParams();
  const shareToken = params.shareToken as string;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<ReportData | null>(null);
  const [needsPassword, setNeedsPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // Fetch report on mount
  useEffect(() => {
    async function fetchReport() {
      try {
        const res = await fetch(
          `${API_BASE}/api/v1/report/view/${shareToken}`
        );

        if (res.status === 404) {
          setError("Report not found. It may have been removed or the link is invalid.");
          setLoading(false);
          return;
        }

        if (res.status === 410) {
          setError("This report has been deleted.");
          setLoading(false);
          return;
        }

        if (!res.ok) {
          setError("Failed to load report. Please try again later.");
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (data.requiresPassword) {
          setNeedsPassword(true);
        } else {
          setReport(data);
        }
      } catch {
        setError("Unable to connect. Please check your connection and try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchReport();
  }, [shareToken]);

  async function handlePasswordSubmit(e: FormEvent) {
    e.preventDefault();
    setAuthError("");

    try {
      const res = await fetch(
        `${API_BASE}/api/v1/report/view/${shareToken}?password=${encodeURIComponent(password)}`
      );

      if (res.status === 403) {
        setAuthError("Incorrect password. Please try again.");
        return;
      }

      if (!res.ok) {
        setAuthError("Something went wrong. Please try again.");
        return;
      }

      const data = await res.json();
      setReport(data);
      setNeedsPassword(false);
    } catch {
      setAuthError("Unable to connect. Please try again.");
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#1B2A4A" }}>
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-3 border-white/30 border-t-white rounded-full mx-auto mb-4" />
          <p className="text-white/70 text-sm">Loading report...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#1B2A4A" }}>
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Report Not Available</h2>
          <p className="text-white/60 text-sm mb-6">{error}</p>
          <Link
            href="/tools/perfectasin"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{ background: "#D4A843", color: "#1B2A4A" }}
          >
            Get Your Own $5k Audit™
          </Link>
        </div>
      </div>
    );
  }

  // Password gate
  if (needsPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#1B2A4A" }}>
        <div className="max-w-sm w-full">
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(212, 168, 67, 0.15)" }}
            >
              <svg className="w-8 h-8" style={{ color: "#D4A843" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">
              $5,000 Full ASIN Audit™
            </h2>
            <p className="text-white/60 text-sm">
              This report is password protected.
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent"
              />
              {authError && (
                <p className="text-red-400 text-xs mt-2">{authError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
              style={{ background: "#D4A843", color: "#1B2A4A" }}
            >
              View Report
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-white/40 text-xs">
              Powered by{" "}
              <a
                href="https://www.ravingfans.ai/tools"
                className="text-white/50 hover:text-white/70 underline underline-offset-2 transition-colors"
              >
                RavingFans.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Report view
  if (!report) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Report HTML content */}
      <div
        className="report-content"
        dangerouslySetInnerHTML={{ __html: report.htmlContent }}
      />

      {/* CTA section */}
      <div
        className="py-12 px-4"
        style={{ background: "#1B2A4A" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Want your own $5k Audit™?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Get a comprehensive 5-module analysis of your Amazon listing — title, bullets,
            description, hero image, and pricing — with actionable recommendations.
          </p>
          <Link
            href="/tools/perfectasin"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-sm transition-all duration-200 hover:scale-105 shadow-lg"
            style={{ background: "#D4A843", color: "#1B2A4A" }}
          >
            Get Your Free Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 px-4 bg-gray-50 text-center">
        <p className="text-xs text-gray-400">
          Powered by{" "}
          <a
            href="https://www.ravingfans.ai/tools"
            className="text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors"
          >
            RavingFans.ai
          </a>
        </p>
      </div>
    </div>
  );
}
