import { createNewChat } from "@/actions/chat-actions";
import { OptimisticChatAction } from "@/lib/types";
import { getToastMessage } from "@/lib/utils";
import { MessageCirclePlus } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import CustomTooltip from "../ui/custom-tooltip";
import SubmitButton from "../ui/submit-button";

type NewChatProps = {
  dispatch: React.Dispatch<OptimisticChatAction>;
};

const NewChat = ({ dispatch }: NewChatProps) => {
  const handleCreateChat = useDebouncedCallback(async (formData: FormData) => {
    dispatch({
      type: "ADD",
      payload: { title: "New Chat-optimistic", id: "temp", pending: true },
    });
    const { success, error, chatId } = await createNewChat(formData);
    getToastMessage(error, success, "Chat created successfully");
  }, 0);

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
