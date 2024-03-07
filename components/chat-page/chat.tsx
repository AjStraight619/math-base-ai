"use client";
import { Chat } from "@/lib/types";
import { Message, UseChatOptions } from "ai";
import { useChat } from "ai/react";
import { useState } from "react";
import ChatInput from "./chat-input";
import ChatMessage from "./chat-messages";

type ChatProps = {
  chatDetails: Chat;
};

type ExtendedMessage = Message &
  {
    isExtractedEquation?: boolean;
    extractedText?: string | null;
    chatId?: string;
    addedToNote?: boolean;
    mathResponse?: string | null;
  }[];

const Chat = ({ chatDetails }: ChatProps) => {
  const { chat, error: chatServerError } = chatDetails;
  const [error, setError] = useState<string | null>(
    chatServerError + "-chat response error"
  );
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onError: (err) => setError(err.message + "-chat api"),
    body: {
      extra: {
        chatId: chat?.id,
      },
    },
  });

  // const extendedMessage = useExtendedMessages(messages, chat?.id);

  return (
    <main className="flex flex-col justify-between h-screen md:pl-48 pl-0 lg:pl-0 w-full">
      <div className="flex-1 px-4 mx-auto sm:max-w-xl w-full">
        <ChatMessage messages={messages} />
      </div>
      <div className="px-4 mx-auto max-w-2xl">
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default Chat;

type UseExtendedMessages = {
  options: UseChatOptions;
  chatDetails: Chat;
};

const useExtendedChat = ({ options, chatDetails }: UseExtendedMessages) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat(options);
};

// const useExtendedMessages = (chatDetails: Chat, messages: Message[]) => {
//   const allMessages = useMemo(() => {
//     if (!chatDetails) return [];
//     const extendedMessages: ExtendedMessage[] = messages.map((message) => {
//       // return {
//       //   ...message,
//       //   isExtractedEquation,
//       //   extractedText,
//       //   chatId,
//       //   addedToNote,
//       //   mathResponse,
//       // };
//     });
//     return extendedMessages;
//   }, [messages]);
// };
