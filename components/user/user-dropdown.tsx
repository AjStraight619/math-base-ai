"use client";
import { liVariants, ulVariants, userOptions } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import CustomTooltip from "../ui/custom-tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import UserAvatar from "./avatar";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

type UserDropdownProps = {
  user: KindeUser | null;
  mostRecentChatId?: string;
};

const UserDropdown = ({ user, mostRecentChatId }: UserDropdownProps) => {
  const mostRecentChatPath = mostRecentChatId
    ? `/chat/${mostRecentChatId}`
    : "/chat/first-chat";

  return (
    <DropdownMenu>
      <CustomTooltip tooltipMessage="User Options">
        <DropdownMenuTrigger className="" asChild>
          <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary-foreground hover:cursor-pointer ">
            <UserAvatar user={user} />
            <span className="text-sm">
              {user?.given_name + " " + user?.family_name}
            </span>
          </div>
        </DropdownMenuTrigger>
      </CustomTooltip>
      <DropdownMenuContent className="p-2">
        <motion.ul variants={ulVariants} animate="animate" initial="hidden">
          {userOptions.map((option) => {
            return (
              <React.Fragment key={option.name}>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={liVariants}
                >
                  <Link
                    className="flex flex-row justify-start items-center gap-2 p-2 rounded-lg hover:bg-primary-foreground hover:cursor-pointer"
                    href={
                      option.path === "/chat" ? mostRecentChatPath : option.path
                    }
                  >
                    {option.icon}
                    {option.name}
                  </Link>
                </motion.li>
                {option.name === "Note" && <Separator className="my-2" />}
              </React.Fragment>
            );
          })}
        </motion.ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
