"use server";

import { prisma } from "@/prisma/prisma";
import { getUserId } from "./user-actions";

export const getAllChatsByUserId = async () => {
    const userId = await getUserId();
  
    const chats = await prisma.chat.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "asc",
      },
      select: {
        id: true, // Select the id
        title: true, // Select the title
        messages: {
          take: 1,
          orderBy: {
            updatedAt: "asc",
          },
          select: {
            content: true, 
          },
        },
      },
    });
  
    return chats.map((chat) => ({
        ...chat,
        messages: 
    }))
  };
