import { Bot, LayoutDashboard, LogOut, Settings } from "lucide-react";
import React from "react";

export const links = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: React.createElement(LayoutDashboard),
  },
  {
    path: "/chat",
    name: "Chat",
    icon: React.createElement(Bot),
  },
] as const;

export const userOptions = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: React.createElement(LayoutDashboard),
  },
  {
    path: "/settings",
    name: "Settings",
    icon: React.createElement(Settings),
  },

  {
    path: "/api/auth/logout",
    name: "Logout",
    icon: React.createElement(LogOut),
  },
] as const;
