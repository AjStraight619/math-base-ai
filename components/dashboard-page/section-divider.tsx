import { LayoutGrid, List } from "lucide-react";
import { Button } from "../ui/button";
import CustomTooltip from "../ui/custom-tooltip";

type SectionDividerProps = {
  children: React.ReactNode;
  setDataView: (value: "grid" | "list") => void;
  dataView: "grid" | "list";
};

const SectionDivider = ({
  children,
  setDataView,
  dataView,
}: SectionDividerProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8 space-y-2 w-full">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
        {children}
      </h2>
      <div className="md:self-end md:mr-2 flex flex-row items-center gap-1">
        <CustomTooltip tooltipMessage="Grid View">
          <Button
            onClick={() => setDataView("grid")}
            size="icon"
            variant="ghost"
          >
            <LayoutGrid
              className={`${
                dataView === "grid" ? "text-primary" : "text-gray-500"
              }`}
            />
          </Button>
        </CustomTooltip>
        <CustomTooltip tooltipMessage="List View">
          <Button
            onClick={() => setDataView("list")}
            size="icon"
            variant="ghost"
          >
            <List
              className={`${
                dataView === "list" ? "text-primary" : "text-gray-500"
              }`}
            />
          </Button>
        </CustomTooltip>
      </div>
    </div>
  );
};

export default SectionDivider;
