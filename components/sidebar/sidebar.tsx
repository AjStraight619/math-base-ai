"use client";

import { usePathname } from "next/navigation";
import NewChat from "./new-chat";
import SidebarDashboard from "./sidebar-dashboard";
import SidebarHeader from "./sidebar-header";

const Sidebar = () => {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/test") return null; // if we are on home page dont show sidebar
  const isChatPath = pathname.includes("/chat/");
  const isDashboardPath = pathname.includes("/dashboard");

  return (
    <nav className="fixed top-0 left-0 w-48 h-full border border-r p-2 pb-4 hidden md:block">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between ">
          <SidebarHeader />
          {isChatPath && <NewChat />}
        </div>
        {isDashboardPath && <SidebarDashboard />}
      </div>
    </nav>
  );
};

export default Sidebar;
