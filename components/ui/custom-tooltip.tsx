import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type CustomTooltipProps = {
  children: React.ReactNode;
  tooltipMessage: string;
};

const CustomTooltip = ({ children, tooltipMessage }: CustomTooltipProps) => {
  return (
    <TooltipProvider delayDuration={0.2}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{tooltipMessage}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
