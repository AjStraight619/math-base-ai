"use client";

import { Suspense } from "react";
import Search from "./search";

const SidebarDashboard = ({ data }: any) => {
  return (
    <div className="h-full mt-8 flex flex-col items-center justify-center">
      <Suspense>
        <Search />
      </Suspense>
    </div>
  );
};

export default SidebarDashboard;
