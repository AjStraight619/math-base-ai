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

const UserDropdown = React.memo(
  ({ user, mostRecentChatId }: UserDropdownProps) => {
    console.log("Most recent chat id: ", mostRecentChatId);
    const mostRecentChatPath = mostRecentChatId
      ? `/chat/${mostRecentChatId}`
      : "/chat/first-chat";

    const userProfilePath = `/dashboard/profile/${user?.id}`;

    // Dynamically update paths for options based on user data
    const updatedUserOptions = userOptions.map((option) => {
      if (option.name === "Chat") {
        return { ...option, path: mostRecentChatPath };
      } else if (option.name === "Settings") {
        return { ...option, path: userProfilePath };
      }
      return option;
    });

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
            {updatedUserOptions.map((option) => (
              <React.Fragment key={option.name}>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={liVariants}
                >
                  <Link
                    className="flex flex-row justify-start items-center gap-2 p-2 rounded-lg hover:bg-primary-foreground hover:cursor-pointer"
                    href={option.path}
                  >
                    {option.icon}
                    {option.name}
                  </Link>
                </motion.li>
                {option.name === "Note" && <Separator className="my-2" />}
              </React.Fragment>
            ))}
          </motion.ul>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

UserDropdown.displayName = "UserDropdown";

export default UserDropdown;
