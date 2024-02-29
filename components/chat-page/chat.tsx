"use client";
import { useChat } from "ai/react";
import ChatInput from "./chat-input";
import ChatMessage from "./chat-messages";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col justify-between h-screen md:pl-48 pl-0 lg:pl-0 w-full">
      <div className="flex-1 px-4 mx-auto sm:max-w-xl w-full">
        <ChatMessage />
      </div>
      <div className="px-4 mx-auto max-w-2xl">
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Chat;
