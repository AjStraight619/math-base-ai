"use client";

import { dashboardLinks } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Search from "./search";
import SidebarDivider from "./sidebar-divider";

const SidebarDashboard = ({ data }: any) => {
  return (
    <div className="h-full mt-8 flex flex-col items-center justify-center space-y-4">
      <Suspense>
        <Search />
      </Suspense>
      <SidebarDivider title="Quick Links" />

      {dashboardLinks.map((link) => (
        <Link
          key={link.path}
          className="flex flex-row items-center justify-center w-full gap-2 text-primary/70 group transition-all duration-300"
          href={"/folders"}
        >
          <span className="group-hover:text-primary duration-300">
            {link.name}
          </span>{" "}
          <span className="group-hover:text-primary group-hover:translate-x-2 duration-300">
            <ArrowRight size={20} />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarDashboard;
