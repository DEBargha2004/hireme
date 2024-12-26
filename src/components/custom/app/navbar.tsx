"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import NavbarHeader from "./navbar-header";
import SidebarSheetTrigger from "./sidebar/sidebar-sheet-trigger";
import { useEffect } from "react";
import { useSidebar } from "@/providers/sidebar-provider";

export default function Navbar({
  className,
  ...props
}: React.ComponentProps<"header">) {
  const { isSidebarExpanded, setIsSidebarExpanded, setIsSidebarOpen } =
    useSidebar();
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarExpanded(false);
      }
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <header
      className={cn(
        "flex justify-between items-center py-2 px-4 gap-2 shadow",
        className,
      )}
      {...props}
    >
      <div className="w-full flex justify-start items-center gap-4 whitespace-nowrap">
        <SidebarSheetTrigger />
        <NavbarHeader />
      </div>
      <p className="text-sm text-muted-foreground">Ajit</p>
      <Avatar>
        <AvatarImage />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
    </header>
  );
}
