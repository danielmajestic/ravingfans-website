"use client";

import { useState, FormEvent } from "react";

const API_BASE = process.env.NEXT_PUBLIC_PERFECTASIN_API_URL || "";

export default function ConsultantReportPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [asinInput, setAsinInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [reportHtml, setReportHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleAuth(e: FormEvent) {
    e.preventDefault();
    setAuthError("");

    const res = await fetch("/api/auth/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setAuthenticated(true);
    } else {
      setAuthError("Invalid password.");
    }
  }

  function parseAsin(input: string): string {
    const trimmed = input.trim();
    // Match ASIN pattern (10 alphanumeric, starting with B0)
    const asinMatch = trimmed.match(/\b(B0[A-Z0-9]{8})\b/i);
    if (asinMatch) return asinMatch[1].toUpperCase();
    // Try extracting from Amazon URL
    const urlMatch = trimmed.match(/\/dp\/([A-Z0-9]{10})/i);
    if (urlMatch) return urlMatch[1].toUpperCase();
    const asinUrlMatch = trimmed.match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
    if (asinUrlMatch) return asinUrlMatch[1].toUpperCase();
    return trimmed.toUpperCase();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setReportHtml(null);

    const asin = parseAsin(asinInput);
    if (!asin || asin.length !== 10) {
      setError("Please enter a valid ASIN (10 characters, e.g. B0XXXXXXXXX) or an Amazon product URL.");
      return;
    }

    setLoading(true);

    try {
      if (!API_BASE) {
        setError("Report generation coming soon. The API endpoint is being configured.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${API_BASE}/api/report/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ asin }),
      });

      if (!res.ok) {
        throw new Error(`API returned ${res.status}`);
      }

      const data = await res.json();
      setReportHtml(data.html || "<p>No report data returned.</p>");
    } catch {
      setError(
        "Report generation coming soon. Kat is building the backend endpoint — check back shortly."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleDownloadPdf() {
    if (!reportHtml) return;
    // Create a printable window for PDF download
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>PerfectASIN Consultant Report</title>
          <style>
            body { font-family: system-ui, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #2D2D2D; }
            h1, h2, h3 { color: #1B2A4A; }
          </style>
        </head>
        <body>${reportHtml}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }

  // Password gate
  if (!authenticated) {
    return (
      <>
        <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-20 min-h-screen">
          <div className="max-w-md mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto">
                This tool generates a full consultant-grade ASIN audit report.
                Currently available to RavingFans.ai team members only.
                Want a free report? Drop your ASIN in the comments on our{" "}
                <a
                  href="https://www.linkedin.com/in/dan-matejsek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
                >
                  latest LinkedIn post
                </a>.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h1 className="text-2xl font-extrabold text-dark mb-2 text-center">
                Consultant Report
              </h1>
              <p className="text-sm text-medium text-center mb-6">
                Team access only. Enter the password to continue.
              </p>
              <form onSubmit={handleAuth}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold mb-4"
                  autoFocus
                />
                {authError && (
                  <p className="text-sm text-red-600 mb-4">{authError}</p>
                )}
                <button
                  type="submit"
                  className="w-full px-5 py-3 bg-gold hover:bg-gold-light text-white font-semibold rounded-lg transition-colors"
                >
                  Access Tool
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Authenticated view
  return (
    <>
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Consultant Report Generator
          </h1>
          <p className="text-gray-300">
            Paste an ASIN or Amazon product URL to generate a full audit report.
          </p>
        </div>
      </section>

      <section className="py-12 bg-warm min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* ASIN Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-8"
          >
            <label
              htmlFor="asin-input"
              className="block text-sm font-semibold text-dark mb-2"
            >
              Amazon ASIN or Product URL
            </label>
            <div className="flex gap-3">
              <input
                id="asin-input"
                type="text"
                value={asinInput}
                onChange={(e) => setAsinInput(e.target.value)}
                placeholder="B0XXXXXXXXX or https://amazon.com/dp/B0XXXXXXXXX"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              />
              <button
                type="submit"
                disabled={loading || !asinInput.trim()}
                className="px-6 py-3 bg-gold hover:bg-gold-light disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                {loading ? "Generating..." : "Generate Report"}
              </button>
            </div>
            {error && (
              <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                {error}
              </p>
            )}
          </form>

          {/* Report Output */}
          {reportHtml && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h2 className="font-bold text-dark">Audit Report</h2>
                <button
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-navy hover:bg-navy-light text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download PDF
                </button>
              </div>
              <div
                className="p-6 sm:p-8 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: reportHtml }}
              />
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm text-center">
              <div className="inline-block w-8 h-8 border-3 border-gold border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-medium">
                Generating your report... This may take 30-60 seconds.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
