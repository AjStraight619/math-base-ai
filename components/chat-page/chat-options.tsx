import { deleteChat } from "@/actions/chat-actions";
import { OptimisticChatAction } from "@/lib/types";
import { Chat } from "@prisma/client";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
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
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import SubmitButton from "../ui/submit-button";

type ChatOptionsProps = {
  dispatch: React.Dispatch<OptimisticChatAction>;
  chatId: string;
};

const ChatOptions = ({ dispatch, chatId }: ChatOptionsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MoreHorizontal size={20} />
      </PopoverTrigger>
      <PopoverContent className="max-w-[10rem]">
        <ul className="flex flex-col space-y-2">
          <li className="">
            <EditChat chatId={chatId} />
          </li>
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
        <button className="flex flex-row items-center justify-start gap-1 hover:bg-primary-foreground rounded-md p-1 w-full">
          <span>
            <Trash2 size={20} />
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

type ChatData = {
  title: string;
  content?: string;
};

type NoteList = {
  id: string;
  title: string;
};

const EditChat = ({ chatId }: EditChatProps) => {
  const tagInputRef = useRef<HTMLInputElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chatData, setChatData] = useState<Chat | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [noteToLink, setNoteToLink] = useState("");
  const [tagError, setTagError] = useState("");
  const [noteList, setNoteList] = useState<NoteList[] | null>(null);
  const [selectedNote, setSelectedNote] = useState<NoteList | null>(null);

  const handleDialogChange = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleEditChat = async (formData: FormData) => {};

  useEffect(() => {
    if (!isDialogOpen || !chatId) return;
    const handleGetChatInfo = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/user/chat?chatId=${chatId}`);
      const data = await response.json();
      const { chat, notes } = data;
      console.log("This is the current chat being edited: ", chat);
      console.log("This is the list of notes: ", notes);
      setChatData(chat);
      setNoteList(notes);
      setIsLoading(false);
    };

    handleGetChatInfo();
  }, [isDialogOpen, chatId]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (currentTag.length > 0) {
      if (e.key === "Enter") {
        e.preventDefault(); // * Prevent default form submission

        // * split tags by ',', trim whitespace and filter by whitespace to clean up tags.
        const newTags = currentTag
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag);

        // * If there is new tags spread new tags onto prev tags, filter out duplicates
        if (newTags.length > 0) {
          setTags((prevTags) => {
            const combinedTags = [...prevTags, ...newTags];
            return combinedTags.filter(
              (tag, index, array) => array.indexOf(tag) === index
            );
          });
          setCurrentTag("");
        }
      }

      // * Automatically add space for the user after a comma for readability

      if (e.key === ",") {
        if (document.activeElement === tagInputRef.current) {
          if (tagInputRef.current) {
            const position = tagInputRef.current.selectionStart || 0;
            const currentValue = tagInputRef.current.value;
            tagInputRef.current.value =
              currentValue.slice(0, position) +
              ", " +
              currentValue.slice(position);

            tagInputRef.current.setSelectionRange(position + 2, position + 2);

            e.preventDefault();
          }
        }
      }
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <button className="flex flex-row items-center justify-start gap-1 hover:bg-primary-foreground rounded-md p-1">
          <span>
            <Pencil size={20} />
          </span>
          <span>Edit Chat</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Edit Chat</DialogTitle>
          <DialogDescription className="text-center">
            Start Editing This Chat
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-start justify-center space-y-4 w-full">
          <form action={handleEditChat} className="w-full">
            <Label htmlFor="chatTitle">Title</Label>
            <Input
              required
              className="mb-2"
              name="chatTitle"
              defaultValue={chatData?.title}
            />
            <Label htmlFor="chatTags">
              Tags{" "}
              <span className="text-muted-foreground text-xs">
                Separate tags by a ,. i.e: Alebra, Linear Algebra...
              </span>
            </Label>
            <div className="flex flex-col">
              <Input
                ref={tagInputRef}
                name="chatTags"
                className="mb-2"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <ul className="flex flex-row gap-1">
                {tags.map((tag, index) => (
                  <li key={index}></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start justify-start mt-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                Link this chat to a note to quickly add conversation to a
                specific note
              </p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Note" />
                </SelectTrigger>
                <SelectContent className="cursor-pointer overflow-y-auto">
                  {noteList?.map((note) => (
                    <SelectItem
                      onSelect={() => setSelectedNote(note)}
                      key={note.id}
                      value={note.title}
                    >
                      {note.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" type="button">
                  Close
                </Button>
              </DialogClose>
              <SubmitButton>Save</SubmitButton>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
