"use server";

import { getErrorMessage } from "@/lib/utils";
import { prisma } from "@/prisma/prisma";

export const getRecentNoteDisplay = async (userId: string) => {
  try {
    const recentNotes = await prisma.note.findMany({
      where: {
        Folder: {
          userId: userId,
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
      take: 4,
      include: {
        noteContents: true,
      },
    });

    return recentNotes;
  } catch (err) {
    const error = getErrorMessage(err);

    console.error(error);
  }
};
