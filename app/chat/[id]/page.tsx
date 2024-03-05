import { createNewChat, getChatById } from "@/actions/chat-actions";
import { getUserId } from "@/actions/user-actions";
import Chat from "@/components/chat-page/chat";
import { redirect } from "next/navigation";

type ChatPageProps = {
  params: {
    id: string;
  };
};

export default async function ChatPage({ params }: ChatPageProps) {
  const { id } = params;
  const userId = await getUserId();
  let currentChat;

  const { chat, error } = await getChatById(id);

  if (error) {
    redirect("/chat/error");
  }
  if (!chat) {
    const chatId = await createNewChat();
    redirect(`/chat/${chatId}`);
  }

  // if (chat) {
  //   currentChat = chat;
  // }

  // if (error) {
  //   redirect("/chat/error");
  // } else if (!chat) {
  //   const chatId = await createNewChat();
  //   redirect(`/chat/${chatId}`);
  // }

  console.log("chat", chat);

  return (
    <main className="min-h-screen flex flex-col justify-between items-end md:justify-center md:items-center px-8 md:px-12 w-full">
      <Chat chat={{ chat, error: null }} />
    </main>
  );
}
