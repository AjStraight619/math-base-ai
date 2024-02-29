import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative w-[10rem]">
      <Input
        className="pl-8"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
      />
      <SearchIcon
        size={20}
        className="absolute left-2 -translate-y-1/2 top-1/2"
      />
    </div>
  );
};

export default Search;
