"use client";

import { usePathname } from "next/navigation";
import SidebarDashboard from "./sidebar-dashboard";

const Sidebar = () => {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/test") return null; // if we are on home page dont show sidebar
  return (
    <nav className="fixed top-0 left-0 w-48 h-full border border-r p-6 hidden md:block">
      <div className="flex flex-col">
        <SidebarDashboard />
      </div>
    </nav>
  );
};

export default Sidebar;
