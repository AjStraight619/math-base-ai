import {
  OptimisticChat,
  OptimisticChatAction,
  SidebarMetaData,
} from "@/lib/types";
import { useOptimistic } from "react";
import NewChat from "./new-chat";
import SidebarHeader from "./sidebar-header";

type SidebarChatProps = {
  chats: SidebarMetaData;
};

function reducer(state: OptimisticChat[], action: OptimisticChatAction) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    default:
      return state;
  }
}

const SidebarChat = ({ chats }: SidebarChatProps) => {
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
      <ul>
        {optimisticChats.map((chat) => (
          <li style={{ opacity: chat.pending ? 0.5 : 1 }} key={chat.id}>
            {chat.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarChat;
