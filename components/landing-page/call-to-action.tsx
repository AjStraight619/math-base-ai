import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BorderGradient from "../ui/border-gradient";

const CallToAction = async ({ user }: { user: KindeUser | null }) => {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <section className="mb-28">
      {(await isAuthenticated()) ? (
        <BorderGradient>
          <Link
            className="group inline-flex items-center gap-2 px-3 py-3 rounded-md bg-black hover:bg-black/90 border transition-all text-black dark:text-gray-50"
            href="/dashboard"
          >
            Dashboard
            <ArrowRight className="group-hover:translate-x-2 duration-300" />
          </Link>
        </BorderGradient>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <BorderGradient>
            <LoginLink className="group inline-flex items-center gap-2 px-3 py-3 rounded-md dark:bg-black bg-gray-50 hover:bg-gray-50/80  dark:hover:bg-black/90 border transition-all text-black dark:text-gray-50">
              Sign in
              <ArrowRight className="group-hover:translate-x-2 duration-300" />
            </LoginLink>
          </BorderGradient>
          <BorderGradient>
            <RegisterLink className="group inline-flex items-center gap-2 px-3 py-3 rounded-md dark:bg-black bg-gray-50 hover:bg-gray-50/80 dark:hover:bg-black/90 border transition-all text-black dark:text-gray-50">
              Sign up
              <ArrowRight className="group-hover:translate-x-2 duration-300" />
            </RegisterLink>
          </BorderGradient>
        </div>
      )}
    </section>
  );
};

export default CallToAction;
