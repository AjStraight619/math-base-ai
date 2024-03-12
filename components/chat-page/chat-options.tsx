import { deleteChat } from "@/actions/chat-actions";
import { OptimisticChatAction } from "@/lib/types";
import { MoreHorizontal, Notebook, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import SubmitButton from "../ui/submit-button";

type ChatOptionsProps = {
  dispatch: React.Dispatch<OptimisticChatAction>;
  chatId: string;
};

const ChatOptions = ({ dispatch, chatId }: ChatOptionsProps) => {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [isAddToNoteDialogOpen, setIsAddToNoteDialogOpen] = useState(false);
  const chatOptions = [
    {
      name: "Delete Chat",
      icon: React.createElement(Trash2),
      action: () => {
        setIsAlertDialogOpen(true);
      },
    },
    {
      name: "Add to Note",
      icon: React.createElement(Notebook),
      action: () => {
        setIsAddToNoteDialogOpen(true);
      },
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <MoreHorizontal size={20} />
      </PopoverTrigger>
      <PopoverContent>
        <ul className="flex flex-col space-y-2">
          <li></li>
          <li>
            <DeleteChat dispatch={dispatch} chatId={chatId} />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ChatOptions;

type DeleteChatProps = ChatOptionsProps;

const DeleteChat = ({ dispatch, chatId }: DeleteChatProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex flex-row items-center justify-start gap-1">
          <span>
            <Trash2 />
          </span>
          <span>Delete Chat</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this chat
            and remove it from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form
            action={async (formData) => {
              dispatch({ type: "REMOVE", payload: chatId });
              formData.append("chatId", chatId);
              const response = await deleteChat(formData);
              if (response) {
                const { success, error } = response;
                if (success) {
                  toast.success("Chat deleted");
                } else {
                  toast.error(error);
                }
              } else {
                toast.error("Something went wrong");
              }
            }}
          >
            <SubmitButton variant="destructive">Delete</SubmitButton>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

type EditChatProps = {
  chatId: string;
};

const EditChat = ({ chatId }: EditChatProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogChange = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  useEffect(() => {
    if (!isDialogOpen || !chatId) return;
    const handleGetChatInfo = async () => {
      const response = await fetch(`/api/user/chat?chatId=${chatId}`);
      const data = await response.json();
      console.log(data);
    };

    handleGetChatInfo();
  }, [isDialogOpen, chatId]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <button className="flex flex-row items-center justify-start gap-1">
          <span>
            <Pencil />
          </span>
          <span>Edit Chat</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader></DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
