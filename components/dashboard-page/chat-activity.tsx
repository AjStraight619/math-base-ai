"use client";
import { RecentChatsDisplayWithChatSnippets } from "@/lib/types";
import { createSnippet } from "@/lib/utils";
import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

type ChatActivityProps = {
  recentChatActivity: RecentChatsDisplayWithChatSnippets;
};

const ChatActivity = ({ recentChatActivity }: ChatActivityProps) => {
  const { mostRecentChats, error } = recentChatActivity;

  const recentChatsWithSnippets = useMemo(() => {
    return mostRecentChats?.map((chat) => {
      return {
        ...chat,
        messages: chat.messages.map((msg) => {
          return {
            ...msg,
            content: createSnippet(msg.content),
          };
        }),
      };
    });
  }, [mostRecentChats]);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full items-center">
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-1">
        <div className="text-primary-foreground text-center sm:text-left">
          Recent Chats
        </div>
        <Separator />
      </div>
      {recentChatsWithSnippets?.map((chat) => (
        <li key={chat.id}>
          <Card className="sm:max-w-48 max-h-64 w-full cursor-pointer text-primary/70 hover:text-primary">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xs md:text-sm lg:text-md line-clamp-2">
                {chat?.title}
              </CardTitle>
              <span className="text-xs">{chat?.updatedAt.toDateString()}</span>
            </CardHeader>
            <CardContent>{chat?.messages[0]?.content}</CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default ChatActivity;
