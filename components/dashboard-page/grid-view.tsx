import { FolderWithNotesSnippets, NoteWithSnippets } from "@/lib/types";
import { Folder } from "lucide-react";
import CustomTooltip from "../ui/custom-tooltip";

type GridViewProps = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  title: string;
  notes: NoteWithSnippets[];
  handleSelectedFolder: (folderId: string) => void;
  selectedFolder: FolderWithNotesSnippets | null;
};

const GridView = ({
  id,
  updatedAt,
  title,
  notes,
  handleSelectedFolder,
  selectedFolder,
}: GridViewProps) => {
  return (
    <CustomTooltip tooltipMessage="Open Folder">
      <li className="flex flex-col items-center spacce-y-2 dark:text-gray-100/70 dark:hover:text-gray-100">
        <button onClick={() => handleSelectedFolder(id)}>
          <Folder className="w-24 h-24  cursor-pointer" />
        </button>
        <span>{title}</span>
      </li>
    </CustomTooltip>
  );
};

export default GridView;
