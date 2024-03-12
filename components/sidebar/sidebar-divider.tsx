import { Separator } from "../ui/separator";

type SidebarDivider = {
  title?: string;
};

const SidebarDivider = ({ title }: SidebarDivider) => {
  return (
    <div className="flex flex-col space-y-1 w-full mt-4">
      <span className="text-primary/80">{title}</span>
      <Separator />
    </div>
  );
};

export default SidebarDivider;
