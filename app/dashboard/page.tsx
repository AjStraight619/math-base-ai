type DashboardPageProps = {
  searchParams: {
    query: string;
  };
};

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  console.log(searchParams.query || "No query");

  return (
    <main className="min-h-screen flex flex-col justify-between items-end md:items-center py-24 px-8 md:px-12">
      <h1>Dashboard</h1>
    </main>
  );
}
