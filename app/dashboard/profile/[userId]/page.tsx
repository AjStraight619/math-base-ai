import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProfilePageProps = {
  params: {
    userId: string;
  };
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  return (
    <main className="flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </main>
  );
}
