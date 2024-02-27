import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type AvatarProps = {
  user: KindeUser | null;
};

const UserAvatar = ({ user }: AvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={user?.picture || ""} />
      <AvatarFallback>
        <Loader2 className="animate-spin" />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
