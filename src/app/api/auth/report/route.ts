import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const expected = process.env.REPORT_PASSWORD;

  if (!expected) {
    return NextResponse.json(
      { error: "REPORT_PASSWORD not configured" },
      { status: 503 }
    );
  }

  if (password === expected) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
