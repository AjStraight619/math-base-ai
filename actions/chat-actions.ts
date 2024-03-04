"use server";

import { getErrorMessage, wait } from "@/lib/utils";
import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUserId } from "./user-actions";

export const createNewChat = async (formData: FormData) => {
  try {
    const userId = (await getUserId()) as unknown as string;
    if (!userId) redirect("/api/auth/login");

    const newChat = await prisma.chat.create({
      data: {
        userId,
        title: "New Chat-server",
      },
    });

    if (newChat) {
      await wait(5000);
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
  } finally {
    revalidatePath("/chat");
  }
};

export const getChatMetaData = async () => {
  try {
    const userId = await getUserId();
    if (!userId) redirect("/api/auth/login");
    const chatMetaData = await prisma.chat.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        id: true,
        title: true,
      },
    });

    return {
      error: null,
      chatMetaData,
    };
  } catch (err) {
    const error = getErrorMessage(err);
    return {
      error,
      chatMetaData: null,
    };
  } finally {
    revalidatePath("/chat");
  }
};

export const getChatById = async (chatId: string) => {
  try {
    const userId = await getUserId();
    if (!userId) redirect("/api/auth/login");
    const chat = await prisma.chat.findFirst({
      where: {
        id: chatId,
        userId,
      },
      include: {
        messages: {
          orderBy: {},
        },
      },
    });
  } catch (err) {
    const error = getErrorMessage(err);
    return {
      error,
      chat: null,
    };
  }
};
