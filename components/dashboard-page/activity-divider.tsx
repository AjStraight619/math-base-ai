import React from "react";
import { Separator } from "../ui/separator";

type ActivityDividerProps = {
  children: React.ReactNode;
};

const ActivityDivider = ({ children }: ActivityDividerProps) => {
  return (
    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-1 w-full">
      <div className="text-primary-foreground text-center sm:text-left">
        {children}
      </div>
      <Separator />
    </div>
  );
};

export default ActivityDivider;
