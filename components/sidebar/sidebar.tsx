"use client";

import { SidebarMetaData } from "@/lib/types";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import UserDropdown from "../user/user-dropdown";
import SidebarChat from "./sidebar-chat";
import SidebarDashboard from "./sidebar-dashboard";

type SidebarProps = {
  chats: SidebarMetaData;
};

const Sidebar = ({ chats }: SidebarProps) => {
  const { user, isLoading } = useKindeBrowserClient();
  const pathname = usePathname();
  if (pathname === "/") return null; // if we are on home page dont show sidebar
  const isChatPath = pathname.includes("/chat/");
  const isDashboardPath = pathname.includes("/dashboard");

  return (
    <aside className="fixed top-0 left-0 w-48 h-screen border border-r p-2 pb-4 hidden md:block ">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          <div>
            {isDashboardPath && <SidebarDashboard />}
            {isChatPath && <SidebarChat chats={chats} />}
          </div>
        </div>
        <div className="mt-auto">
          {isLoading ? <Skeleton /> : <UserDropdown user={user} />}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
