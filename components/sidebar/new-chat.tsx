import { createNewChat } from "@/actions/chat-actions";
import { getToastMessage } from "@/lib/utils";
import { MessageCirclePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import CustomTooltip from "../ui/custom-tooltip";
import SubmitButton from "../ui/submit-button";

const NewChat = () => {
  const { push } = useRouter();

  const handleCreateChat = useDebouncedCallback(async (formData: FormData) => {
    // Going to use formData in the future
    const { success, error, chatId } = await createNewChat();
    getToastMessage(error, success, "Chat created successfully");
    if (success) {
      push(`/chat/${chatId}`);
    }
  }, 1000);

  return (
    <CustomTooltip tooltipMessage="New Chat">
      <form action={handleCreateChat}>
        <SubmitButton variant="ghost" size="icon">
          <MessageCirclePlus />
        </SubmitButton>
      </form>
    </CustomTooltip>
  );
};

export default NewChat;
