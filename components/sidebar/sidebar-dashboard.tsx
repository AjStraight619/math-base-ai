"use client";

import Search from "./search";

const SidebarDashboard = ({ data }: any) => {
  return (
    <div className="h-full mt-8 flex flex-col items-center justify-center">
      <Search />
    </div>
  );
};

export default SidebarDashboard;
