"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { RecentChatActivity, RecentNoteActivity } from "@/lib/types";
import { createSnippet } from "@/lib/utils";
import { useMemo } from "react";
import UnifiedListView from "./list-view";
import SectionDivider from "./section-divider";
import UnifiedGridView from "./unified-grid-view";

type ActivityMainProps = {
  recentChatActivity: RecentChatActivity;
  recentNoteActivity: RecentNoteActivity;
};

const ActivityMain = ({
  recentChatActivity,
  recentNoteActivity,
}: ActivityMainProps) => {
  const { mostRecentChats, error: chatsError } = recentChatActivity;

  const [dataView, setDataView] = useLocalStorage<"grid" | "list">(
    "dataView",
    "grid"
  );

  const chatItems = useMemo(() => {
    return mostRecentChats?.map((chat) => ({
      id: chat.id,
      title: chat.title,
      updatedAt: chat.updatedAt,
      firstContent:
        chat.messages.length > 0
          ? createSnippet(chat.messages[0].content || "")
          : "",
    }));
  }, [mostRecentChats]);

  const noteItems = useMemo(() => {
    return recentNoteActivity?.map((note) => ({
      id: note.id,
      title: note.title,
      updatedAt: note.updatedAt,
      firstContent:
        note.noteContents.length > 0
          ? createSnippet(note.noteContents[0].content)
          : "",
    }));
  }, [recentNoteActivity]);

  return (
    <>
      <SectionDivider setDataView={setDataView} dataView={dataView}>
        Activity
      </SectionDivider>
      {dataView === "grid" ? (
        <>
          <UnifiedGridView title="Recent Chats" items={chatItems ?? []} />
          <UnifiedGridView title="Recent Notes" items={noteItems ?? []} />
        </>
      ) : (
        <>
          <UnifiedListView title="Recent Chats" items={chatItems ?? []} />
          <UnifiedListView title="Recent Notes" items={noteItems ?? []} />
        </>
      )}
    </>
  );
};

export default ActivityMain;
