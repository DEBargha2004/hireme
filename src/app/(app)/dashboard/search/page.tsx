"use client";

import { Button } from "@/components/ui/button";
import { filterSections } from "@/constants/filter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { use } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const searchParamsObj = use(searchParams);
  const pathname = usePathname();
  return (
    <main className="space-y-6">
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
              >
                <Button
                  className={cn(
                    "bg-primary/5 hover:bg-primary/10 text-primary border border-transparent text-base py-5",
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
