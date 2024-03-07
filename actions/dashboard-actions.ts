"use server";

import { createSnippet } from "@/lib/utils";
import { prisma } from "@/prisma/prisma";
import { getUserId } from "./user-actions";

export const getAllChatsByUserId = async () => {
  const userId = await getUserId();

  const chats = await prisma.chat.findMany({
    where: {
      userId,
    },
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      updatedAt: true,
      messages: {
        take: 1,
        orderBy: {
          updatedAt: "desc",
        },
        select: {
          content: true,
        },
      },
    },
  });

  const chatsWithSnippets = chats.map((chat) => ({
    ...chat,
    messages: chat.messages.map((msg) => ({
      ...msg,
      content: createSnippet(msg.content || ""),
    })),
  }));

  return chatsWithSnippets;
};
