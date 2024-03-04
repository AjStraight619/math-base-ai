import { addUserToDatabase, checkIfUserExists } from "@/actions/user-actions";
import AnimatedMath from "@/components/landing-page/animated-math";
import CallToAction from "@/components/landing-page/call-to-action";
import Features from "@/components/landing-page/features";
import Navbar from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import WhyMathBase from "@/components/landing-page/why-math-base";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  let dbUser;
  dbUser = user ? await checkIfUserExists(user.id) : null;
  if (!dbUser && user) {
    await addUserToDatabase(user);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar user={user} />

      <Hero />
      <CallToAction user={user} />
      <div className="fixed top-1/2 -translate-y-1/2 right-[10rem] -z-50">
        <AnimatedMath />
      </div>
      <WhyMathBase />
      <Features />
    </main>
  );
}
