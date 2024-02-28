import { Textarea } from "../ui/textarea";

const ChatInput = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:left-48 lg:left-0">
      <div className="shadow-md mx-auto p-2 w-full lg:w-[calc(100% - 12rem)] w-full md:max-w-xl">
        <Textarea
          placeholder="Type a message..."
          className="w-full h-12 min-h-[48px] max-h-[200px] resize-none rounded-2xl -translate-y-1/2 top-1/2"
        />
      </div>
    </div>
  );
};

export default ChatInput;
