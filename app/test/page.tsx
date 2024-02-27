import Logo from "@/components/landing-page/logo";
import Image from "next/image";

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col p-24 items-center justify-center gap-6">
      {" "}
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/mathbase.svg"
        alt="Next.js Logo"
        width={220}
        height={150}
        priority
      />
      <Logo />
    </div>
  );
}
