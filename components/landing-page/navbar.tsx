import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import Image from "next/image";
import UserDropdown from "../user/user-dropdown";

type NavbarProps = {
  user: KindeUser | null;
};

const Navbar = async ({ user }: NavbarProps) => {
  // Get user from kinde auth, if no user exists in the database, add them.

  return (
    <nav className="fixed left-0 top-0 w-full h-16 border-b border-gray-300 bg-gradient-to-b from-zinc-200   backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit   lg:dark:bg-zinc-800/30">
      <div className="container mx-auto flex h-full items-center justify-between px-6 relative">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
          <Image src="/mathbase.svg" alt="Math Base" width={100} height={30} />
        </div>
        <div className="mr-8 flex gap-2 items-center">
          <UserDropdown user={user} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
