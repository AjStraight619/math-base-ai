import { getMostRecentChatId } from "@/actions/chat-actions";
import { addUserToDatabase, checkIfUserExists } from "@/actions/user-actions";
import CallToAction from "@/components/landing-page/call-to-action";
import Features from "@/components/landing-page/features";
import Navbar from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import WhyMathBase from "@/components/landing-page/why-math-base";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function handleAuth() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }
  return user;
}

async function ensureUserInDatabase(user: KindeUser | null) {
  let dbUser = await checkIfUserExists(user?.id as string);
  if (!dbUser && user) {
    dbUser = await addUserToDatabase(user);
  }
  return dbUser;
}

export default async function Home() {
  const user = await handleAuth();
  if (!user) return null;

  const dbUser = await ensureUserInDatabase(user);
  const mostRecentChatId = dbUser
    ? await getMostRecentChatId(dbUser.id)
    : undefined;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar user={user} mostRecentChatId={mostRecentChatId} />

      <Hero />
      <CallToAction user={user} />

      <WhyMathBase />
      <Features />
    </main>
  );
}
