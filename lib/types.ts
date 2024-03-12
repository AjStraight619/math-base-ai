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
import { getRecentNoteDisplay } from "@/actions/note-actions";
import { Folder, Note, NoteContent, Prisma } from "@prisma/client";

export type OptimisticChat = {
  id: string;
  title: string;
  pending?: boolean;
  error?: string | null;
};

export type AddAction = {
  type: "ADD";
  payload: OptimisticChat;
};

export type RemoveAction = {
  type: "REMOVE";
  payload: string; // Only the chat ID
};

export type UpdateAction = {
  type: "UPDATE";
  payload: OptimisticChat;
};

export type PendingAction = {
  type: "PENDING";
  payload: OptimisticChat;
};

export type ErrorAction = {
  type: "ERROR";
  payload: OptimisticChat;
};

export type OptimisticChatAction =
  | AddAction
  | RemoveAction
  | UpdateAction
  | PendingAction
  | ErrorAction;

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

export type RecentChatActivity = Prisma.PromiseReturnType<
  typeof getRecentChatsDispay
>;

export type RecentNoteActivity = Prisma.PromiseReturnType<
  typeof getRecentNoteDisplay
>;

export type ActivityItem = {
  id: string;
  title: string;
  updatedAt: Date;
  firstContent: string;
};
