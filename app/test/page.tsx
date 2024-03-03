import { Button } from "@/components/ui/button";

export default function TestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24">
      <Button className="border-3 border-gradient">Hello</Button>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-2 rounded-lg">
        <div className="bg-white p-4 rounded-lg">Your content here</div>
      </div>
    </main>
  );
}
