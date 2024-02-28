import Image from "next/image";
import Link from "next/link";

const SidebarHeader = () => {
  return (
    <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
      <Link href="/">
        <Image src="/mathbase.svg" alt="Math Base" width={100} height={30} />
      </Link>
    </div>
  );
};

export default SidebarHeader;
