"use client";

import { useSidebar } from "@/providers/sidebar-provider";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavigationHelper() {
  const pathname = usePathname();
  const { setIsSidebarOpen } = useSidebar();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);
  return <></>;
}
