// export type SidebarMetaData = {
//   id: string;
//   title: string;
//   error?: string | null;
// };

import { getChatById, getChatMetaData } from "@/actions/chat-actions";
import { Prisma } from "@prisma/client";

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
