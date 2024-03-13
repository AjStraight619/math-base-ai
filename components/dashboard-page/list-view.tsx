import { ActivityItem } from "@/lib/types";
import { getMonthAndDay } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type UnifiedListViewProps = {
  title: string;
  items: ActivityItem[];
};

const UnifiedListView = ({ title, items }: UnifiedListViewProps) => {
  console.log(
    "Current title: ",
    title.split(" ").slice(1).join("").split("s").slice(0, 1)
  );
  return (
    <section className="mb-16 w-full">
      <Table>
        <TableCaption>{title}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>
              {title.split(" ").slice(1).join("").split("s").slice(0, 1)}
            </TableHead>
            <TableHead className="text-right">Tags</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {getMonthAndDay(item.updatedAt)}
              </TableCell>
              <TableCell className="line-clamp-1">{item.title}</TableCell>
              <TableCell>
                {item.firstContent === "" ? "No Content" : item.firstContent}
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <ActivityDivider>{title}</ActivityDivider> */}
      {/* <ul className="flex flex-col  divide-y w-full space-y-2">
        {items.map((item) => (
          <li
            className="flex flex-row items-center justify-between w-full"
            key={item.id}
          >
            <span>{getMonthAndDay(item.updatedAt)}</span>
            <span>{item?.title}</span>
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default UnifiedListView;
