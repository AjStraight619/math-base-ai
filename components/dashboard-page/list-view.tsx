import { ActivityItem } from "@/lib/types";
import { getMonthAndDay } from "@/lib/utils";
import ActivityDivider from "./activity-divider";

type UnifiedListViewProps = {
  title: string;
  items: ActivityItem[];
};

const UnifiedListView = ({ title, items }: UnifiedListViewProps) => {
  return (
    <section className="mb-16 w-full">
      <ActivityDivider>{title}</ActivityDivider>
      <ul className="flex flex-col  divide-y w-full space-y-2">
        {items.map((item) => (
          <li
            className="flex flex-row items-center justify-between w-full"
            key={item.id}
          >
            <span>{getMonthAndDay(item.updatedAt)}</span>
            <span>{item?.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UnifiedListView;
