import { NextRequest, NextResponse } from "next/server";

const API_BASE =
  process.env.NEXT_PUBLIC_PERFECTASIN_API_URL ||
  "https://titleperfect-api-119656431080.us-central1.run.app";

/**
 * Proxy for shared report viewing.
 * Avoids CORS issues by making the Cloud Run request server-side.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ shareToken: string }> }
) {
  const { shareToken } = await params;
  const password = req.nextUrl.searchParams.get("password");

  let url = `${API_BASE}/api/v1/report/view/${encodeURIComponent(shareToken)}`;
  if (password) {
    url += `?password=${encodeURIComponent(password)}`;
  }

  try {
    const upstream = await fetch(url, {
      headers: { Accept: "application/json" },
    });

    const body = await upstream.text();

    return new NextResponse(body, {
      status: upstream.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return NextResponse.json(
      { error: "Backend unavailable" },
      { status: 502 }
    );
  }
}
