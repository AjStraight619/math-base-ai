// import { useSidebarContext } from "@/context/sidebar-presence-context";
// import { FolderWithNotesSnippets } from "@/lib/types";
// import React, { SetStateAction, useCallback, useMemo } from "react";
// import { Separator } from "../ui/separator";
// import GridView from "./grid-view";

// type FolderDisplayProps = {
//   folderWithNotesSnippets: FolderWithNotesSnippets[];
//   dataView: "list" | "grid";
//   setSelectedFolder: React.Dispatch<
//     SetStateAction<FolderWithNotesSnippets | null>
//   >;
//   selectedFolder: FolderWithNotesSnippets | null;
// };
// type Category = "today" | "lastSevenDays" | "lastMonth" | "older";

// const categoryTitles: Record<Category, string> = {
//   today: "Today",
//   lastSevenDays: "Last 7 Days",
//   lastMonth: "Last Month",
//   older: "Older",
// };

// const FolderDisplay = ({
//   folderWithNotesSnippets,
//   dataView,
//   selectedFolder,
//   setSelectedFolder,
// }: FolderDisplayProps) => {
//   const { isSidebarOpen } = useSidebarContext();
//   const categorizedFolders = useMemo(() => {
//     const now = new Date().getTime();
//     const oneDay = 24 * 60 * 60 * 1000;
//     const oneWeek = 7 * oneDay;
//     const oneMonth = 30 * oneDay;

//     const categories: Record<Category, FolderWithNotesSnippets[]> = {
//       today: [],
//       lastSevenDays: [],
//       lastMonth: [],
//       older: [],
//     };

//     folderWithNotesSnippets.forEach((folder) => {
//       const updatedAt = new Date(folder.updatedAt).getTime();
//       const diff = now - updatedAt;

//       if (diff <= oneDay) {
//         categories.today.push(folder);
//       } else if (diff <= oneWeek) {
//         categories.lastSevenDays.push(folder);
//       } else if (diff <= oneMonth) {
//         categories.lastMonth.push(folder);
//       } else {
//         categories.older.push(folder);
//       }
//     });

//     return categories;
//   }, [folderWithNotesSnippets]);

//   // const filteredFolders = selectedFolder
//   //   ? folderWithNotesSnippets.filter(
//   //       (folder) => folder.id === selectedFolder.id
//   //     )
//   //   : folderWithNotesSnippets;

//   const handleSelectedFolder = useCallback(
//     (folderId: string) => {
//       setSelectedFolder((currentSelectedFolder) => {
//         if (currentSelectedFolder && currentSelectedFolder.id === folderId) {
//           return null;
//         } else {
//           return (
//             folderWithNotesSnippets.find((folder) => folder.id === folderId) ||
//             null
//           );
//         }
//       });
//     },
//     [folderWithNotesSnippets, setSelectedFolder]
//   );

//   return (
//     <>
//       {selectedFolder ? (
//         <div>
//           <h2 className="text-xl font-bold text-primary-foreground">
//             {selectedFolder?.title}
//           </h2>

//           <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full justify-items-center">
//             {selectedFolder?.notes.map((note) => (
//               <li key={note.id}></li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         // Render categorized folders as before
//         Object.entries(categorizedFolders).map(([category, folders]) => (
//           <React.Fragment key={category}>
//             {folders.length > 0 && (
//               <>
//                 <div className="w-full mt-8">
//                   <h2 className="text-xl font-bold text-primary-foreground">
//                     {categoryTitles[category as Category]}
//                   </h2>
//                   <Separator className="my-4" />
//                 </div>
//                 <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full justify-items-center">
//                   {folders.map((folder) => (
//                     <GridView
//                       handleSelectedFolder={handleSelectedFolder}
//                       selectedFolder={selectedFolder}
//                       key={folder.id}
//                       {...folder}
//                     />
//                   ))}
//                 </ul>
//               </>
//             )}
//           </React.Fragment>
//         ))
//       )}
//     </>
//   );
// };

// export default FolderDisplay;
