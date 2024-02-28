"use server";

import { getErrorMessage } from "@/lib/utils";
import { prisma } from "@/prisma/prisma";
import { redirect } from "next/navigation";
import { getUserId } from "./user-actions";

export const createNewChat = async () => {
  try {
    const userId = (await getUserId()) as unknown as string;
    if (!userId) redirect("/api/auth/login");

    const newChat = await prisma.chat.create({
      data: {
        userId,
        title: "New Chat",
      },
      select: {
        id: true,
      },
    });
    if (newChat) {
      return {
        success: true,
        chatId: newChat.id,
        error: null,
      };
    } else {
      return {
        success: false,
        chatId: null,
        error: "Failed to create chat",
      };
    }
  } catch (err) {
    const error = getErrorMessage(err);
    return {
      success: false,
      chatId: null,
      error,
    };
  }
};
