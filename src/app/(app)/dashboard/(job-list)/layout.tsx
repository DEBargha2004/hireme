"use client";

import { dashboardTabs } from "@/constants/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardJobFilter from "../_components/filter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main className="space-y-6">
      <div className="flex justify-between items-center gap-4">
        <div>
          {dashboardTabs.map((item, index) => (
            <Link
              key={index}
              href={item.id}
              className={cn(
                "inline-block p-3 px-5 border-b-[3px] border-transparent hover:bg-muted",
                item.id === pathname &&
                  "border-primary text-primary font-semibold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <DashboardJobFilter />
      </div>
      {children}
    </main>
  );
}
