"use client";
import { useSidebarContext } from "@/context/sidebar-presence-context";
import React from "react";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen } = useSidebarContext();
  return (
    <div className={`${isSidebarOpen ? "ml-48" : ""} w-3/4`}>{children}</div>
  );
};

export default LayoutWrapper;
