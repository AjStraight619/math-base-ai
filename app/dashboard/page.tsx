import { getUserId } from "@/actions/user-actions";
import UserActivityFetcher from "@/components/dashboard-page/user-activity-fetcher";
import { Suspense } from "react";

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

  console.log(userId);

  return (
    <main className="min-h-screen flex flex-col justify-between items-center py-24 px-8 md:px-12">
      <Suspense fallback={<div>Loading...</div>}>
        <UserActivityFetcher query={searchParams.query} />
      </Suspense>
    </main>
  );
}
