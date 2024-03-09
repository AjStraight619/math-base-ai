// export type SidebarMetaData = {
//   id: string;
//   title: string;
//   error?: string | null;
// };

import {
  getChatById,
  getChatMetaData,
  getRecentChatsDispay,
} from "@/actions/chat-actions";
import { getFoldersWithNotes } from "@/actions/folder-actions";
import { Folder, Note, NoteContent, Prisma } from "@prisma/client";

export type OptimisticChat = {
  id: string;
  title: string;
  pending?: boolean;
  error?: string | null;
};

export type OptimisticChatAction = {
  type: "ADD" | "REMOVE" | "UPDATE" | "PENDING" | "ERROR";
  payload: OptimisticChat;
};

export type SidebarMetaData = Prisma.PromiseReturnType<typeof getChatMetaData>;

export type Chat = Prisma.PromiseReturnType<typeof getChatById>;

export type ChatWithSnippet = {
  messages: {
    content: string;
  };
  id: string;
  title: string;
  updatedAt: Date;
};

export type FoldersWithNotes = Prisma.PromiseReturnType<
  typeof getFoldersWithNotes
>;

type NoteContentWithSnippet = Omit<NoteContent, "content"> & {
  content: string;
};

export type NoteWithSnippets = Omit<Note, "noteContents"> & {
  noteContents: NoteContentWithSnippet[];
};

export type FolderWithNotesSnippets = Omit<Folder, "notes"> & {
  notes: NoteWithSnippets[];
};

export type RecentChatsDisplayWithChatSnippets = Prisma.PromiseReturnType<
  typeof getRecentChatsDispay
>;
