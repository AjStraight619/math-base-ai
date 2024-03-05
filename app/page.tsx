import { getMostRecentChatId } from "@/actions/chat-actions";
import { addUserToDatabase, checkIfUserExists } from "@/actions/user-actions";
import CallToAction from "@/components/landing-page/call-to-action";
import Features from "@/components/landing-page/features";
import Navbar from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import WhyMathBase from "@/components/landing-page/why-math-base";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  let dbUser;
  let mostRecentChatId;
  dbUser = user ? await checkIfUserExists(user.id) : null;

  if (!dbUser) {
    await addUserToDatabase(user);
  }

  if (dbUser) {
    mostRecentChatId = await getMostRecentChatId(dbUser?.id);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar user={user} mostRecentChatId={mostRecentChatId} />

      <Hero />
      <CallToAction user={user} />
      {/* <div className="fixed top-1/2 -translate-y-1/2  -z-50">
        <Circles />
      </div> */}
      <WhyMathBase />
      <Features />
    </main>
  );
}
