/* eslint-disable react/no-unescaped-entities */

type WelcomeBannerProps = {
  firstname: string | null | undefined;
};

const WelcomeBanner = async ({ firstname }: WelcomeBannerProps) => {
  return (
    <section className="mb-16">
      <div className="text-center py-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
          Welcome, {firstname}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
          Let's continue your learning journey!
        </p>
      </div>
    </section>
  );
};

export default WelcomeBanner;
