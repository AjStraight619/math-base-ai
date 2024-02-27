import { addUserToDatabase, checkIfUserExists } from "@/actions/user-actions";
import { links } from "@/lib/data";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import UserDropdown from "../user/user-dropdown";

const Navbar = async () => {
  // Get user from kinde auth, if no user exists in the database, add them.
  let dbUser;
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  dbUser = user ? await checkIfUserExists(user.id) : null;
  if (!dbUser && user) {
    await addUserToDatabase(user);
  }

  console.log("user", user);

  return (
    <nav className="fixed left-0 top-0 w-full h-16 border-b border-gray-300 bg-gradient-to-b from-zinc-200   backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit   lg:dark:bg-zinc-800/30">
      <div className="container mx-auto flex h-full items-center justify-between px-6 relative">
        <ul className="flex items-center gap-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="hover:underline" href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mr-8 flex gap-2 items-center">
          <UserDropdown user={user} />
          <span className="text-sm">{dbUser?.fullName}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
