"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filterSections } from "@/constants/filter";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { use } from "react";

const selectables = ["Galaxy Building", "Mall Building", "Office Building"];

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const searchParamsObj = use(searchParams);
  const pathname = usePathname();
  return (
    <main className="space-y-6 @container">
      <div className="flex justify-between items-center gap-3">
        <Select>
          <SelectTrigger className="md:w-[200px] w-[120px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            {selectables.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="w-full flex justify-end">
          <Input placeholder="Search..." className="md:w-[350px]" />
        </div>
        <Button className="md:w-[120px] w-12">
          <Search />
        </Button>
      </div>
      {filterSections.map((f) => (
        <div key={f.key} className="space-y-2">
          <h1 className="text-lg font-medium">{f.title}</h1>
          <div className={cn("flex flex-wrap gap-4")}>
            {f.options.map((o) => (
              <Link
                key={o.value}
                href={`${pathname}?${new URLSearchParams({
                  ...(searchParamsObj ?? {}),
                  [f.key]: o.value,
                }).toString()}`}
                className="block min-w-32"
              >
                <Button
                  className={cn(
                    "bg-primary/5 hover:bg-primary/10 text-primary border border-transparent text-base py-5 w-full",
                    searchParamsObj[f.key] === o.value && "border-primary",
                  )}
                >
                  {o.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
