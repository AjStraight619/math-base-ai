import {
  OptimisticChat,
  OptimisticChatAction,
  SidebarMetaData,
} from "@/lib/types";
import { usePathname, useRouter } from "next/navigation";
import { useOptimistic } from "react";
import ChatOptions from "../chat-page/chat-options";
import NewChat from "./new-chat";
import SidebarHeader from "./sidebar-header";

type SidebarChatProps = {
  chats: SidebarMetaData;
};

function reducer(state: OptimisticChat[], action: OptimisticChatAction) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "REMOVE":
      return state.filter((chat) => chat?.id !== action.payload);
    default:
      return state;
  }
}

const SidebarChat = ({ chats }: SidebarChatProps) => {
  // * Pop the id off of the end of the url. Keeping state in URL.
  const pathname = usePathname();
  const currentChat = pathname.split("/").pop();
  const { push } = useRouter();

  const initialChats =
    chats.error === null
      ? chats.chatMetaData.map((chat) => ({
          ...chat,
          pending: false,
          error: null,
        }))
      : [];

  const [optimisticChats, dispatch] = useOptimistic(initialChats, reducer);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <SidebarHeader />
        <NewChat dispatch={dispatch} />
      </div>

      <ul className="max-w-[3/4] flex flex-col">
        {optimisticChats.map((chat) => (
          <li
            className={`text-sm hover:bg-primary-foreground/40 rounded-md p-1 cursor-pointer flex flex-row items-center justify-between w-full ${
              chat?.id === currentChat ? "bg-primary-foreground p-1" : ""
            }`}
            style={{ opacity: chat.pending ? 0.5 : 1 }}
            key={chat.id}
            onClick={() => push(`/chat/${chat?.id}`)}
          >
            <span className="line-clamp-1 text-sm">{chat.title}</span>
            {chat?.id === currentChat && (
              <ChatOptions dispatch={dispatch} chatId={currentChat} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarChat;
