import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  return NextResponse.json({ message: "Hello, World!" });
}
