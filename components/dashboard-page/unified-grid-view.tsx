import { ActivityItem } from "@/lib/types";
import { createSnippet, getMonthAndDay } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ActivityDivider from "./activity-divider";

type UnifiedGridViewProps = {
  title: string;
  items: ActivityItem[];
};

const UnifiedGridView = ({ title, items }: UnifiedGridViewProps) => {
  return (
    <section className="mb-16 w-full">
      <ActivityDivider>{title}</ActivityDivider>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full items-center">
        {items.map((item) => (
          <li key={item.id}>
            <Card className="sm:max-w-48 min-h-48 max-h-64 w-full cursor-pointer text-primary/70 hover:text-primary">
              <CardHeader className="flex flex-row items-center justify-between p-2 w-full align-baseline">
                <CardTitle className="text-sm md:text-sm lg:text-md line-clamp-2 w-1/2">
                  {item.title}
                </CardTitle>
                <span className="text-xs">
                  {getMonthAndDay(item.updatedAt)}
                </span>
              </CardHeader>
              <CardContent className="text-sm">
                {createSnippet(item.firstContent)}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UnifiedGridView;
