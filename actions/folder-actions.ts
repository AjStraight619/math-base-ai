"use server";

import { getErrorMessage } from "@/lib/utils";
import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";
import { getUserId } from "./user-actions";

export const getFoldersWithNotes = async () => {
  const userId = await getUserId();

  try {
    const foldersWithNotes = await prisma.folder.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: {
        notes: {
          orderBy: {
            updatedAt: "desc",
          },
          include: {
            noteContents: true,
          },
        },
      },
    });

    return {
      foldersWithNotes,
      error: null,
    };
  } catch (err) {
    const error = getErrorMessage(err);
    return {
      foldersWithNotes: null,
      error,
    };
  } finally {
    revalidatePath("/dashboard");
  }
};
