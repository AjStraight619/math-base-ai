import { prisma } from "@/prisma/prisma";
import { Role } from "@prisma/client";
import {
  AIStreamCallbacksAndOptions,
  OpenAIStream,
  StreamingTextResponse,
} from "ai";
import OpenAI from "openai";

export const runtime = "edge";

type MessageToSendToDb = {
  message: string;
  role: Role;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { messages, extra } = await req.json();
  const { chatId } = extra;
  const lastUserMessage = messages.slice(-1)[0].content;

  console.log("last user message: ", lastUserMessage);
  console.log("chatId: ", chatId);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
  });

  const streamCallbacksAndOptions: AIStreamCallbacksAndOptions = {
    onCompletion: async (completion) => {
      console.log("Received completion:", completion);
      const messagesToSendToDb: MessageToSendToDb[] = [
        {
          role: "user",
          message: lastUserMessage,
        },
        {
          role: "assistant",
          message: completion,
        },
      ];
      // await storeMessagesInDb(messagesToSendToDb, chatId);
    },
  };

  const stream = OpenAIStream(response, streamCallbacksAndOptions);

  return new StreamingTextResponse(stream);
}

const storeMessagesInDb = async (
  messages: MessageToSendToDb[],
  chatId: string
) => {
  for (const message of messages) {
    await prisma.chatMessage.create({
      data: {
        content: message.message,
        role: message.role,
        chatId: chatId,
      },
    });
  }
};
