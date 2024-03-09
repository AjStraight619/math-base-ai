import { getUserId } from "@/actions/user-actions";
import LayoutWrapper from "@/components/common/layout-wrapper";
import ActivityFeed from "@/components/dashboard-page/acivity-feed";
import WelcomeBanner from "@/components/dashboard-page/welcome-banner";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

type DashboardPageProps = {
  searchParams: {
    query: string;
  };
};

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  console.log(searchParams.query || "No query");

  const userId = await getUserId();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-24 px-8 md:px-12 w-full">
      {/* <Suspense fallback={<DashboardSkeleton />}>
        <UserActivityFetcher query={searchParams.query} />
      </Suspense> */}
      <LayoutWrapper>
        <WelcomeBanner firstname={user?.given_name} />
        <ActivityFeed userId={user?.id} />
      </LayoutWrapper>
    </main>
  );
}
