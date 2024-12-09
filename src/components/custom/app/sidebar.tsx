import { cn } from "@/lib/utils";
import React from "react";
import Sidenav from "./sidenav";
import AppLogo from "../app-logo";

export default function Sidebar({
  className,
  ...props
}: React.ComponentProps<"aside">) {
  return (
    <aside className={cn("space-y-10 p-5", className)} {...props}>
      <AppLogo className="h-8" />
      <Sidenav />
    </aside>
  );
}
