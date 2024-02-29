import { ChatRequestOptions } from "ai";
import { SendIcon } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import UploadFile from "../files/upload-file";
import CustomTooltip from "../ui/custom-tooltip";
import SubmitButton from "../ui/submit-button";
import { Textarea } from "../ui/textarea";

type ChatInputProps = {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
};

const ChatInput = ({
  input,
  handleInputChange,
  handleSubmit,
}: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const minHeight = 40;
  const maxHeight = 200;

  // Dynamically adjust the height of the textarea based on the content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      let newHeight = minHeight;

      if (scrollHeight > minHeight) {
        newHeight = Math.min(scrollHeight, maxHeight);
      }
      textarea.style.height = `${newHeight}px`;
    }
  }, [input]);

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 right-0 md:left-48 lg:left-0 mx-auto"
    >
      <div className="shadow-md mx-auto p-2 mb-2  w-full lg:w-[calc(100% - 12rem)] w-full md:max-w-xl relative z-50">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="w-full resize-none rounded-2xl pt-4 pl-9 pr-10 overflow-y-auto z-[999]"
          style={{
            lineHeight: "1",
            minHeight: `${minHeight}px`,
            maxHeight: `${maxHeight}px`,
            height: `${minHeight}px`,
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        />
        <CustomTooltip tooltipMessage="Upload file">
          <div className="absolute bottom-5 left-4">
            <UploadFile />
          </div>
        </CustomTooltip>
        <CustomTooltip tooltipMessage="Send message">
          <div className="absolute bottom-3 right-2">
            <SubmitButton variant={null} size="icon">
              <SendIcon size={20} />
            </SubmitButton>
          </div>
        </CustomTooltip>
      </div>
    </form>
  );
};

export default ChatInput;
