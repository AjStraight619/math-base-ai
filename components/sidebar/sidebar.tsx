"use client";

import { useSidebarContext } from "@/context/sidebar-presence-context";
import { SidebarMetaData } from "@/lib/types";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CustomTooltip from "../ui/custom-tooltip";
import { Skeleton } from "../ui/skeleton";
import UserDropdown from "../user/user-dropdown";
import SidebarChat from "./sidebar-chat";
import SidebarDashboard from "./sidebar-dashboard";

type SidebarProps = {
  chats: SidebarMetaData;
};

const buttonVariants = {
  open: { x: 0, ease: "easeOut" },
  closed: { x: "100%" },
};
const Sidebar = ({ chats }: SidebarProps) => {
  const { user, isLoading } = useKindeBrowserClient();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();
  if (pathname === "/") return null;
  const isChatPath = pathname.includes("/chat/");
  const isDashboardPath = pathname.includes("/dashboard");

  return (
    <>
      <SidebarToggleButton
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isHovering={isHovering}
        setIsHovering={setIsHovering}
      />
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`fixed top-0 left-0 w-48 h-screen border border-r p-2 pb-4 hidden md:block dark:bg-neutral-950 bg-gray-100 ${
              isHovering ? "opacity-65" : ""
            }`}
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
  isHovering: boolean;
  setIsHovering: (value: boolean) => void;
};

const SidebarToggleButton = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isHovering,
  setIsHovering,
}: SidebarToggleButtonProps) => {
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsHovering(false);
  };
  return (
    <CustomTooltip
      tooltipMessage={`${isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}`}
    >
      <motion.button
        onClick={handleSidebarToggle}
        className={`fixed top-1/2  z-50  rounded-lg translate-y-[-50%] md:block hidden ${
          isSidebarOpen ? "left-48" : "left-[3px]"
        }`}
        variants={buttonVariants}
        animate={isSidebarOpen ? "open" : "closed"}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </motion.button>
    </CustomTooltip>
  );
};
