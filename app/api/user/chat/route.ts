import { getUserId } from "@/actions/user-actions";
import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userId = await getUserId();
  const chatId = req.nextUrl.searchParams.get("chatId") as unknown as string;
  if (!userId) {
    return NextResponse.json({ error: "Invalid user" });
  }
  if (!chatId) {
    return NextResponse.json({ error: "No chat id provided" });
  }

  try {
    const [chat, notes] = await prisma.$transaction([
      prisma.chat.findUnique({
        where: {
          id: chatId,
        },
      }),
      prisma.note.findMany({
        select: {
          id: true,
          title: true,
        },
      }),
    ]);

    return NextResponse.json({ chat, notes });
  } catch (err) {
    return NextResponse.json({
      error: "Something went wrong when fetching the chat or notes",
    });
  }
}
