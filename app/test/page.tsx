import AnimatedHeroSvg from "@/components/landing-page/animated-hero-svg";

export default function TestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24">
      <div className="h-96 w-96">
        <AnimatedHeroSvg />
      </div>
    </main>
  );
}
