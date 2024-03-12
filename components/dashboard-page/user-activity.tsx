// "use client";
// import { useSidebarContext } from "@/context/sidebar-presence-context";
// import { FolderWithNotesSnippets, FoldersWithNotes } from "@/lib/types";
// import { createSnippet } from "@/lib/utils";
// import { useEffect, useState } from "react";
// // import FolderDisplay from "./folder-display";

// type UserActivityProps = {
//   folderData: FoldersWithNotes;
// };

// const UserActivity = ({ folderData }: UserActivityProps) => {
//   const { foldersWithNotes, error: folderDataError } = folderData;
//   const [dataView, setDataView] = useState<"list" | "grid">("grid");
//   const [error, setError] = useState<string | null>(folderDataError);

//   const [selectedFolder, setSelectedFolder] =
//     useState<FolderWithNotesSnippets | null>(null);

//   const foldersWithNotesSnippets: FolderWithNotesSnippets[] =
//     foldersWithNotes?.map((folder) => ({
//       ...folder,
//       notes: folder.notes.map((note) => ({
//         ...note,
//         noteContents: note.noteContents.map((noteContent) => ({
//           ...noteContent,
//           content: createSnippet(noteContent.content),
//         })),
//       })),
//     })) ?? [];

//   const { isSidebarOpen } = useSidebarContext();

//   const containerStyle = isSidebarOpen ? "ml-48" : "ml-0";

//   useEffect(() => {
//     console.log("Is sidebar open? ", isSidebarOpen);
//   }, [isSidebarOpen]);

//   return (
//     <div className={`${containerStyle} w-3/4`}>
//       <div className="col-span-1 sm:col-span-2 md:col-span-3 text-3xl font-semibold text-primary-foreground text-center">
//         <span>User Activity</span>
//         <span>
//           {error && (
//             <span className="text-red-500 font-semibold text-center">
//               {error}
//             </span>
//           )}
//         </span>
//       </div>

//       <FolderDisplay
//         dataView={dataView}
//         folderWithNotesSnippets={foldersWithNotesSnippets}
//         selectedFolder={selectedFolder}
//         setSelectedFolder={setSelectedFolder}
//       />
//     </div>
//   );
// };
// export default UserActivity;
