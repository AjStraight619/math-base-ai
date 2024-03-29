import { createNewChat, getChatById } from "@/actions/chat-actions";
import Chat from "@/components/chat-page/chat";
import { redirect } from "next/navigation";

type ChatPageProps = {
  params: {
    id: string;
  };
};

export default async function ChatPage({ params }: ChatPageProps) {
  const { id } = params;

  if (id === "first-chat") {
    const chatId = await createNewChat();
    redirect(`/chat/${chatId}`);
  }

  const chatResponse = await getChatById(id);

  return (
    <main className="min-h-screen flex flex-col w-full">
      <Chat chatDetails={chatResponse} />
    </main>
  );
}
