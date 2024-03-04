import { cn } from "@/lib/utils";

type BorderGradientProps = {
  children: React.ReactNode;
  className?: string;
};

const BorderGradient = ({ children, className }: BorderGradientProps) => {
  return (
    <div
      className={cn(
        "p-[1px] rounded-md bg-gradient-to-tr from-cyan-500 to-blue-700",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BorderGradient;
