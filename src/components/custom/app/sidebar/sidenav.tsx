"use client";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { sidebarItems } from "@/constants/sidebar";
import { useSidebar } from "@/providers/sidebar-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Sidenav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  const pathname = usePathname();
  const { isSidebarExpanded } = useSidebar();

  return (
    <nav
      className={cn("flex flex-col justify-start items-start gap-3", className)}
      {...props}
    >
      {sidebarItems.map((item) => (
        <Link key={item.href} href={item.href} className="block w-full">
          <TooltipProvider delayDuration={20}>
            <Tooltip>
              <TooltipTrigger className="w-full">
                <SidebarItem
                  className="transition-all rounded-[3px] p-2"
                  data-selected={item.selected(pathname)}
                >
                  <SidebarItemIcon Icon={item.Icon} />
                  <SidebarItemLabel
                    className={cn(
                      "whitespace-nowrap font-medium",
                      isSidebarExpanded ? "block" : "md:hidden",
                    )}
                  >
                    {item.label}
                  </SidebarItemLabel>
                </SidebarItem>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className={cn(isSidebarExpanded ? "hidden" : "md:block hidden")}
              >
                {item.label}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      ))}
    </nav>
  );
}
