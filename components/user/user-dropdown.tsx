"use client";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "./avatar";

type UserDropdownProps = {
  user: KindeUser | null;
};

const UserDropdown = ({ user }: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
