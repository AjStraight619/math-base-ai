import { getFoldersWithNotes } from "@/actions/folder-actions";
import { Suspense } from "react";
import UserActivity from "./user-activity";

type UserActivityFetcherProps = {
  query: string;
};

const UserActivityFetcher = async ({ query }: UserActivityFetcherProps) => {
  const folderData = await getFoldersWithNotes();

  return (
    <Suspense>
      <UserActivity folderData={folderData} />
    </Suspense>
  );
};

export default UserActivityFetcher;
