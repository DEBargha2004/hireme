"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import Sidenav from "./sidenav";
import AppLogo from "../../app-logo";
import { useSidebar } from "@/providers/sidebar-provider";
import SidebarTrigger from "./sidebar-trigger";

export default function Sidebar({
  className,
  ...props
}: React.ComponentProps<"aside">) {
  const { isSidebarExpanded, isSidebarOpen, setIsSidebarExpanded } =
    useSidebar();

  return (
    <aside
      className={cn(
        "flex flex-col justify-start transition-all gap-4",
        className,
        isSidebarExpanded ? "w-72" : "w-12",
      )}
      {...props}
    >
      <header className="p-2 shrink-0 h-10">
        {isSidebarExpanded && <AppLogo />}
      </header>
      <div className="h-full shrink px-1.5 overflow-y-scroll scroller-hide">
        <Sidenav />
      </div>
      <footer className="shrink-0 p-2">
        <SidebarTrigger />
      </footer>
    </aside>
  );
}
