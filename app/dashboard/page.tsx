import { getUserId } from "@/actions/user-actions";
import DataList from "./data-list";

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
    <main className="min-h-screen flex flex-col justify-between items-center  py-24 px-8 md:px-12">
      <DataList />
    </main>
  );
}
