import Chat from "@/components/chat-page/chat";

type ChatPageProps = {
  params: {
    id: string;
  };
};

export default function ChatPage({ params }: ChatPageProps) {
  return (
    <main className="min-h-screen flex flex-col justify-between items-end md:justify-center md:items-center px-8 md:px-12 w-full">
      <Chat />
    </main>
  );
}
