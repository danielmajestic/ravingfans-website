"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// TODO: Replace with real API when Kat deploys GET /api/v1/reports
// For now, mock data inline to avoid cross-project imports

const GRADE_COLORS: Record<string, string> = {
  A: "#22C55E",
  B: "#14B8A6",
  C: "#D4A843",
  D: "#F97316",
  F: "#EF4444",
};

const SOURCE_OPTIONS = [
  "All",
  "LinkedIn Carousel",
  "LinkedIn DM",
  "Direct Outreach",
  "Client Request",
  "Personal Audit",
  "Other",
];

const GRADE_OPTIONS = ["All", "A", "B", "C", "D", "F"];

interface ModuleScore {
  score: number;
  grade: string;
}

interface ReportSummary {
  reportId: string;
  asin: string;
  productTitle: string;
  overallGrade: string;
  overallScore: number;
  generatedAt: string;
  modulesCompleted: number;
  moduleScores: {
    title: ModuleScore | null;
    bullets: ModuleScore | null;
    description: ModuleScore | null;
    heroImage: ModuleScore | null;
    price: ModuleScore | null;
  };
  tags: {
    linkedinName: string;
    company: string;
    source: string;
    notes: string;
  } | null;
  isPublic: boolean;
  hasPassword: boolean;
}

// Mock data
const MOCK_REPORTS: ReportSummary[] = [
  {
    reportId: "rpt_001", asin: "B0B44TJQZX",
    productTitle: "TrueHope EMPowerplus Advanced - Multi-Vitamin & Mineral Supplement",
    overallGrade: "C", overallScore: 72, generatedAt: "2026-03-22T18:30:00Z", modulesCompleted: 5,
    moduleScores: { title: { score: 58, grade: "F" }, bullets: { score: 65, grade: "D" }, description: { score: 70, grade: "C" }, heroImage: { score: 78, grade: "C" }, price: { score: 82, grade: "B" } },
    tags: { linkedinName: "Mike Glick", company: "Goode Health", source: "LinkedIn Carousel", notes: "First audit for Mike" },
    isPublic: true, hasPassword: false,
  },
  {
    reportId: "rpt_002", asin: "B09V3KXJPB",
    productTitle: "Garden of Life Vitamin Code Raw Zinc - 60 Capsules",
    overallGrade: "B", overallScore: 84, generatedAt: "2026-03-21T14:15:00Z", modulesCompleted: 5,
    moduleScores: { title: { score: 88, grade: "B" }, bullets: { score: 82, grade: "B" }, description: { score: 80, grade: "B" }, heroImage: { score: 85, grade: "B" }, price: { score: 79, grade: "C" } },
    tags: { linkedinName: "Sarah Chen", company: "NutraVita", source: "Direct Outreach", notes: "" },
    isPublic: false, hasPassword: true,
  },
  {
    reportId: "rpt_003", asin: "B07N4M94GH",
    productTitle: "Orgain Organic Plant Based Protein Powder - Vanilla Bean",
    overallGrade: "A", overallScore: 91, generatedAt: "2026-03-20T09:45:00Z", modulesCompleted: 5,
    moduleScores: { title: { score: 92, grade: "A" }, bullets: { score: 90, grade: "A" }, description: { score: 88, grade: "B" }, heroImage: { score: 93, grade: "A" }, price: { score: 91, grade: "A" } },
    tags: { linkedinName: "Tom Rodriguez", company: "Orgain", source: "Client Request", notes: "Showcase audit for portfolio" },
    isPublic: true, hasPassword: false,
  },
  {
    reportId: "rpt_004", asin: "B08DFPZG71",
    productTitle: "Ancient Nutrition Multi Collagen Protein Powder",
    overallGrade: "D", overallScore: 63, generatedAt: "2026-03-18T16:00:00Z", modulesCompleted: 5,
    moduleScores: { title: { score: 55, grade: "F" }, bullets: { score: 60, grade: "D" }, description: { score: 68, grade: "D" }, heroImage: { score: 70, grade: "C" }, price: { score: 65, grade: "D" } },
    tags: { linkedinName: "Jessica Park", company: "Ancient Nutrition", source: "LinkedIn DM", notes: "Needs major title overhaul" },
    isPublic: false, hasPassword: false,
  },
  {
    reportId: "rpt_005", asin: "B01LTIYKIO",
    productTitle: "Viva Naturals Organic Extra Virgin Coconut Oil - 16 oz",
    overallGrade: "F", overallScore: 48, generatedAt: "2026-03-15T11:30:00Z", modulesCompleted: 4,
    moduleScores: { title: { score: 42, grade: "F" }, bullets: { score: 50, grade: "F" }, description: { score: 55, grade: "F" }, heroImage: { score: 45, grade: "F" }, price: null },
    tags: null, isPublic: false, hasPassword: false,
  },
  {
    reportId: "rpt_006", asin: "B0C1X3GKQW",
    productTitle: "Sports Research Collagen Peptides - Hydrolyzed Type I & III",
    overallGrade: "B", overallScore: 81, generatedAt: "2026-03-14T08:20:00Z", modulesCompleted: 5,
    moduleScores: { title: { score: 85, grade: "B" }, bullets: { score: 78, grade: "C" }, description: { score: 82, grade: "B" }, heroImage: { score: 80, grade: "B" }, price: { score: 83, grade: "B" } },
    tags: { linkedinName: "", company: "Sports Research", source: "Personal Audit", notes: "" },
    isPublic: true, hasPassword: false,
  },
];

const SHARE_BASE_URL = "https://www.ravingfans.ai/tools/report";

const MODULE_LABELS: Record<string, string> = {
  title: "Title",
  bullets: "Bullets",
  description: "Description",
  heroImage: "Hero Image",
  price: "Price",
};

export default function MyReportsDashboard() {
  const [reports, setReports] = useState<ReportSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [sort, setSort] = useState<"newest" | "oldest" | "best" | "worst">("newest");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  // Fetch (mock)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setReports(MOCK_REPORTS);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Filter + sort
  const filtered = (() => {
    let result = [...reports];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.asin.toLowerCase().includes(q) ||
          r.productTitle.toLowerCase().includes(q) ||
          (r.tags?.linkedinName || "").toLowerCase().includes(q) ||
          (r.tags?.company || "").toLowerCase().includes(q) ||
          (r.tags?.notes || "").toLowerCase().includes(q)
      );
    }

    if (gradeFilter !== "All") {
      result = result.filter((r) => r.overallGrade === gradeFilter);
    }

    if (sourceFilter !== "All") {
      result = result.filter((r) => r.tags?.source === sourceFilter);
    }

    switch (sort) {
      case "oldest":
        result.sort((a, b) => new Date(a.generatedAt).getTime() - new Date(b.generatedAt).getTime());
        break;
      case "best":
        result.sort((a, b) => b.overallScore - a.overallScore);
        break;
      case "worst":
        result.sort((a, b) => a.overallScore - b.overallScore);
        break;
      default:
        result.sort((a, b) => new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime());
    }

    return result;
  })();

  const totalFiltered = filtered.length;
  const totalPages = Math.ceil(totalFiltered / pageSize);
  const paged = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const showStart = (currentPage - 1) * pageSize + 1;
  const showEnd = Math.min(currentPage * pageSize, totalFiltered);

  // Stats
  const stats = {
    total: reports.length,
    thisMonth: reports.filter((r) => {
      const d = new Date(r.generatedAt);
      const now = new Date();
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length,
    avgGrade: "C+",
    topCategory: "Supplements",
  };

  const handleCopyShareLink = useCallback(async (reportId: string) => {
    await navigator.clipboard.writeText(`${SHARE_BASE_URL}/${reportId}`);
    setCopiedId(reportId);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#FFF9F0" }}>
      {/* Header */}
      <div style={{ background: "#1B2A4A" }} className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">My Reports</h1>
          <p className="text-white/60 text-sm">$5k Audit™ Dashboard</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total Reports", value: stats.total },
            { label: "This Month", value: stats.thisMonth },
            { label: "Avg Grade", value: stats.avgGrade },
            { label: "Top Category", value: stats.topCategory },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <p className="text-xs text-gray-500 mb-1">{label}</p>
              <p className="text-xl font-bold" style={{ color: "#1B2A4A" }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Search + filters */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
          {/* Search bar */}
          <div className="relative mb-3">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by ASIN, product title, LinkedIn name, company, or notes..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
            />
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <label className="text-xs text-gray-500">Grade:</label>
              <select
                value={gradeFilter}
                onChange={(e) => {
                  setGradeFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                {GRADE_OPTIONS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <label className="text-xs text-gray-500">Source:</label>
              <select
                value={sourceFilter}
                onChange={(e) => {
                  setSourceFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                {SOURCE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5 ml-auto">
              <label className="text-xs text-gray-500">Sort:</label>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value as typeof sort);
                  setCurrentPage(1);
                }}
                className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="best">Best Grade</option>
                <option value="worst">Worst Grade</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table / card list */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin w-8 h-8 border-3 border-gray-300 border-t-gray-600 rounded-full" />
          </div>
        ) : paged.length === 0 ? (
          <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "#FFF9F0" }}
            >
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">No reports found</h3>
            <p className="text-sm text-gray-500 mb-6">
              {search || gradeFilter !== "All" || sourceFilter !== "All"
                ? "Try adjusting your filters."
                : "Run your first $5k Audit™ to get started."}
            </p>
            <Link
              href="/tools/perfectasin"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "#D4A843", color: "#1B2A4A" }}
            >
              Run $5k Audit™
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100" style={{ background: "#FAFAF8" }}>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Grade</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">ASIN</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Product Title</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Date</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Contact</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Source</th>
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paged.map((report) => {
                    const isExpanded = expandedId === report.reportId;
                    const gradeColor = GRADE_COLORS[report.overallGrade] || "#6B7280";
                    const date = new Date(report.generatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });

                    return (
                      <TableRow
                        key={report.reportId}
                        report={report}
                        isExpanded={isExpanded}
                        gradeColor={gradeColor}
                        date={date}
                        copiedId={copiedId}
                        onToggle={() => setExpandedId(isExpanded ? null : report.reportId)}
                        onCopyShare={handleCopyShareLink}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile card view */}
            <div className="md:hidden space-y-2">
              {paged.map((report) => {
                const isExpanded = expandedId === report.reportId;
                const gradeColor = GRADE_COLORS[report.overallGrade] || "#6B7280";
                const date = new Date(report.generatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <MobileCard
                    key={report.reportId}
                    report={report}
                    isExpanded={isExpanded}
                    gradeColor={gradeColor}
                    date={date}
                    copiedId={copiedId}
                    onToggle={() => setExpandedId(isExpanded ? null : report.reportId)}
                    onCopyShare={handleCopyShareLink}
                  />
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4 px-1">
                <p className="text-xs text-gray-500">
                  Showing {showStart}-{showEnd} of {totalFiltered} reports
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                        p === currentPage
                          ? "text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      style={p === currentPage ? { background: "#1B2A4A" } : {}}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="py-6 px-4 text-center border-t border-gray-100">
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

// -- Subcomponents --

function TableRow({
  report, isExpanded, gradeColor, date, copiedId, onToggle, onCopyShare,
}: {
  report: ReportSummary; isExpanded: boolean; gradeColor: string; date: string;
  copiedId: string | null; onToggle: () => void; onCopyShare: (id: string) => void;
}) {
  return (
    <>
      <tr
        className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer transition-colors"
        onClick={onToggle}
      >
        <td className="px-4 py-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: gradeColor }}
          >
            {report.overallGrade}
          </div>
        </td>
        <td className="px-4 py-3 font-mono text-sm text-gray-700">{report.asin}</td>
        <td className="px-4 py-3 text-sm text-gray-600 max-w-[250px] truncate">
          {report.productTitle}
        </td>
        <td className="px-4 py-3 text-sm text-gray-500">{date}</td>
        <td className="px-4 py-3 text-sm text-gray-600">
          {report.tags?.linkedinName || <span className="text-gray-400">—</span>}
        </td>
        <td className="px-4 py-3 text-xs text-gray-500">
          {report.tags?.source || "—"}
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center gap-1">
            <Link
              href={`/tools/report/${report.reportId}`}
              target="_blank"
              className="px-2 py-1 rounded text-xs font-medium text-white"
              style={{ background: "#1B2A4A" }}
              onClick={(e) => e.stopPropagation()}
            >
              View
            </Link>
            <button
              onClick={(e) => { e.stopPropagation(); onCopyShare(report.reportId); }}
              className="px-2 py-1 rounded text-xs font-medium border"
              style={{ borderColor: "#2563EB", color: "#2563EB" }}
            >
              {copiedId === report.reportId ? "Copied!" : "Share"}
            </button>
          </div>
        </td>
      </tr>

      {isExpanded && (
        <tr>
          <td colSpan={7} className="px-4 py-4 bg-gray-50/80">
            <ExpandedDetail report={report} copiedId={copiedId} onCopyShare={onCopyShare} />
          </td>
        </tr>
      )}
    </>
  );
}

function MobileCard({
  report, isExpanded, gradeColor, date, copiedId, onToggle, onCopyShare,
}: {
  report: ReportSummary; isExpanded: boolean; gradeColor: string; date: string;
  copiedId: string | null; onToggle: () => void; onCopyShare: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <button className="w-full px-4 py-3 flex items-start gap-3 text-left" onClick={onToggle}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: gradeColor }}
        >
          {report.overallGrade}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-sm font-semibold text-gray-700">{report.asin}</span>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
          <p className="text-sm text-gray-600 truncate">{report.productTitle}</p>
          {report.tags?.linkedinName && (
            <p className="text-xs text-gray-400 italic mt-0.5">
              {report.tags.linkedinName}
              {report.tags.company ? ` — ${report.tags.company}` : ""}
            </p>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3">
          <ExpandedDetail report={report} copiedId={copiedId} onCopyShare={onCopyShare} />
        </div>
      )}
    </div>
  );
}

function ExpandedDetail({
  report, copiedId, onCopyShare,
}: {
  report: ReportSummary; copiedId: string | null; onCopyShare: (id: string) => void;
}) {
  return (
    <div>
      {/* Module scores */}
      <div className="flex flex-wrap gap-2 mb-3">
        {(["title", "bullets", "description", "heroImage", "price"] as const).map((mod) => {
          const s = report.moduleScores[mod];
          const color = s ? GRADE_COLORS[s.grade] || "#6B7280" : "#d1d5db";
          return (
            <div key={mod} className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1 border border-gray-100">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: color }}
              >
                {s?.grade || "—"}
              </div>
              <span className="text-xs text-gray-600">{MODULE_LABELS[mod]}</span>
              {s && <span className="text-xs text-gray-400">{s.score}</span>}
            </div>
          );
        })}
      </div>

      {/* Tags */}
      {report.tags && (report.tags.source || report.tags.notes) && (
        <div className="text-xs text-gray-500 mb-3 space-y-0.5">
          {report.tags.source && (
            <p>Source: <span className="text-gray-700">{report.tags.source}</span></p>
          )}
          {report.tags.notes && (
            <p>Notes: <span className="text-gray-700">{report.tags.notes}</span></p>
          )}
        </div>
      )}

      {/* Visibility badge */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
            report.isPublic ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"
          }`}
        >
          {report.isPublic ? "Public" : "Private"}
        </span>
        {report.hasPassword && (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
            Password
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Link
          href={`/tools/report/${report.reportId}`}
          target="_blank"
          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors"
          style={{ background: "#1B2A4A" }}
        >
          View Report
        </Link>
        <button
          onClick={() => onCopyShare(report.reportId)}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors"
          style={{ borderColor: "#2563EB", color: "#2563EB" }}
        >
          {copiedId === report.reportId ? "Copied!" : "Copy Share Link"}
        </button>
      </div>
    </div>
  );
}
