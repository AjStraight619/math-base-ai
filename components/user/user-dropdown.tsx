"use client";
import { liVariants, ulVariants, userOptions } from "@/lib/data";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import UserAvatar from "./avatar";

type UserDropdownProps = {
  user: KindeUser | null;
};

const UserDropdown = ({ user }: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary-foreground hover:cursor-pointer">
          <UserAvatar user={user} />
          <span className="text-sm">
            {user?.given_name} {user?.family_name}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
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
                    href={option.path}
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
