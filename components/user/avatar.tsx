import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type AvatarProps = {
  user: KindeUser | null;
};

const UserAvatar = ({ user }: AvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={user?.picture || ""} />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
