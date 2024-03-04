import AnimatedHeroSvg from "./animated-hero-svg";
import Logo from "./animated-logo";

const Hero = () => {
  return (
    <section className="flex flex-col items-center space-y-8 pt-8 mb-20 relative">
      <div className="absolute top-16 ml-1 h-[30rem] w-[30rem] -z-10">
        {/* <Image src="/temple.svg" alt="hero" width={500} height={500} /> */}
        <AnimatedHeroSvg />
      </div>

      <Logo />
      <h1 className="text-lg font-semibold dark:text-primary/70 text-black text-center text-pretty tracking-tight leading-6">
        Welcome to Math Base. Explore new opportunities with AI.
      </h1>
    </section>
  );
};

export default Hero;
