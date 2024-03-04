import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import Image from "next/image";
import UserDropdown from "../user/user-dropdown";

type NavbarProps = {
  user: KindeUser | null;
};

const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav className="fixed left-0 top-0 w-full h-16 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit   lg:dark:bg-zinc-800/30 z-50">
      <div className="container mx-auto flex h-full items-center justify-between px-6 relative">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
          <Image src="/mathbase.svg" alt="Math Base" width={100} height={30} />
        </div>
        <div className=" flex gap-2 items-center">
          <UserDropdown user={user} />
          {/* <ModeToggle /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
