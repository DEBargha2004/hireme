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
    <main className="space-y-6">
      <div className="flex justify-between items-center gap-3">
        <Select>
          <SelectTrigger className="w-[200px]">
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
        <Input />
        <Button className="w-[120px]">
          <Search />
        </Button>
      </div>
      {filterSections.map((f) => (
        <div key={f.key} className="space-y-2">
          <h1 className="text-lg font-medium">{f.title}</h1>
          <div className="grid grid-cols-8 gap-4">
            {f.options.map((o) => (
              <Link
                key={o.value}
                href={`${pathname}?${new URLSearchParams({
                  ...(searchParamsObj ?? {}),
                  [f.key]: o.value,
                }).toString()}`}
                className="block"
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
