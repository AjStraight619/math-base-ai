import { getRecentChatsDispay } from "@/actions/chat-actions";
import ChatActivity from "./chat-activity";
import NoteActivity from "./note-acitvity";
import SectionDivider from "./section-divider";

type ActivityFeedProps = {
  userId: string;
};

const ActivityFeed = async ({ userId }: ActivityFeedProps) => {
  const recentChatActivity = await getRecentChatsDispay(userId);

  return (
    <div className="flex flex-col items-center">
      <SectionDivider>Activity</SectionDivider>
      <ChatActivity recentChatActivity={recentChatActivity} />
      <NoteActivity />
    </div>
  );
};

export default ActivityFeed;
