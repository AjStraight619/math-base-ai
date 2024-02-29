"use client";

import { SidebarMetaData } from "@/lib/types";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import UserDropdown from "../user/user-dropdown";
import SidebarChat from "./sidebar-chat";
import SidebarDashboard from "./sidebar-dashboard";

type SidebarProps = {
  chats: SidebarMetaData;
};

const Sidebar = ({ chats }: SidebarProps) => {
  const { user, isLoading } = useKindeBrowserClient();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  if (pathname === "/") return null;
  const isChatPath = pathname.includes("/chat/");
  const isDashboardPath = pathname.includes("/dashboard");

  return (
    <>
      <SidebarToggleButton
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-0 left-0 w-48 h-screen border border-r p-2 pb-4 hidden md:block "
          >
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
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
type SidebarToggleButtonProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

const SidebarToggleButton = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarToggleButtonProps) => {
  return (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="md:block hidden fixed -translate-y-1/2 top-1/2 left-52 z-50 p-2  rounded-lg"
    >
      {isSidebarOpen ? "Close" : "Open"}
    </button>
  );
};
