import { getRecentChatsDispay } from "@/actions/chat-actions";
import { getRecentNoteDisplay } from "@/actions/note-actions";
import ActivityMain from "./activity-main";

type ActivityFeedProps = {
  userId: string;
};

const ActivityFeed = async ({ userId }: ActivityFeedProps) => {
  const recentChatActivity = await getRecentChatsDispay(userId);
  const recentNoteActivity = await getRecentNoteDisplay(userId);

  console.log(JSON.stringify(recentNoteActivity, null, 2));

  return (
    <div className="flex flex-col items-center">
      <ActivityMain
        recentChatActivity={recentChatActivity}
        recentNoteActivity={recentNoteActivity}
      />
    </div>
  );
};

export default ActivityFeed;
