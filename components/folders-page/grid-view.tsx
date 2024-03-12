import { FolderWithNotesSnippets } from "@/lib/types";

type GridViewProps = {
  handleSelectedFolder: (folderId: string) => void;
  selectedFolder: FolderWithNotesSnippets | null;
};

const GridView = ({ handleSelectedFolder, selectedFolder }: GridViewProps) => {
  return <div>GridView</div>;
};

export default GridView;
