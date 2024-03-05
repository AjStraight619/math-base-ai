import { createNewChat } from "@/actions/chat-actions";
import { OptimisticChatAction } from "@/lib/types";
import { getToastMessage } from "@/lib/utils";
import { MessageCirclePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import CustomTooltip from "../ui/custom-tooltip";
import SubmitButton from "../ui/submit-button";

type NewChatProps = {
  dispatch: React.Dispatch<OptimisticChatAction>;
};

const NewChat = ({ dispatch }: NewChatProps) => {
  // Will handle formdata later when more data is needed

  const { push } = useRouter();
  const handleCreateChat = useDebouncedCallback(async (formData: FormData) => {
    dispatch({
      type: "ADD",
      payload: { title: "New Chat-optimistic", id: "temp", pending: true },
    });
    const { success, error, chatId } = await createNewChat();
    if (chatId) {
      push(`/chat/${chatId}`);
    }
    getToastMessage(error, success, "Chat created successfully");
  }, 300);

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
