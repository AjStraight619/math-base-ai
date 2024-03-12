"use server";

import { getErrorMessage } from "@/lib/utils";
import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUserId } from "./user-actions";

type DeleteChatResponse = {
  success: boolean;
  error: string | null;
};

export const createNewChat = async () => {
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
      // await wait(5000);
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
      orderBy: {
        updatedAt: "asc",
      },
      include: {
        messages: {
          orderBy: {
            updatedAt: "desc",
          },
        },
      },
    });
    return {
      chat,
      error: null,
    };
  } catch (err) {
    const error = getErrorMessage(err);
    return {
      error,
      chat: null,
    };
  }
};

export const getMostRecentChatId = async (userId: string) => {
  const mostRecentChat = await prisma.chat.findFirst({
    where: {
      userId,
    },
    orderBy: {
      updatedAt: "asc",
    },
    select: {
      id: true,
    },
  });

  return mostRecentChat?.id;
};

export const getRecentChatsDispay = async (userId: string) => {
  try {
    const mostRecentChats = await prisma.chat.findMany({
      where: {
        userId,
      },
      take: 4,
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        messages: {
          orderBy: {
            updatedAt: "desc",
          },
        },
      },
    });

    return {
      mostRecentChats,
      error: null,
    };
  } catch (err) {
    const error = getErrorMessage(err);
    return {
      mostRecentChats: null,
      error,
    };
  }
};

export const deleteChat = async (
  formData: FormData
): Promise<DeleteChatResponse | undefined> => {
  const userId = await getUserId();
  if (!userId) return;

  const chatId = formData.get("chatId") as unknown as string;

  try {
    await prisma.$transaction([
      prisma.chatMessage.deleteMany({
        where: {
          chatId,
        },
      }),

      prisma.chat.delete({
        where: {
          id: chatId,
        },
      }),
    ]);
    return {
      success: true,
      error: null,
    };
  } catch (err) {
    const error = getErrorMessage(err);
    return {
      success: false,
      error: error,
    };
  } finally {
    revalidatePath("/chat");
  }
};
