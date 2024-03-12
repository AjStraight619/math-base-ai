import { getUserId } from "@/actions/user-actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userId = await getUserId();
  if (!userId) {
    return NextResponse.json({ error: "Invalid User" });
  }
  const chatId = req.nextUrl.searchParams.get("chatId");

  console.log("ChatId from user/chat api route", chatId);

  return NextResponse.json({ success: true });
}
