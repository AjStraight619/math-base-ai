type SectionDividerProps = {
  children: React.ReactNode;
};

const SectionDivider = ({ children }: SectionDividerProps) => {
  return (
    <h2 className="mb-8 text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
      {children}
    </h2>
  );
};

export default SectionDivider;
