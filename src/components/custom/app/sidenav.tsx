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

export default function Sidenav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex flex-col justify-start items-start gap-3", className)}
      {...props}
    >
      {sidebarItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="hover:bg-muted transition-all rounded-[3px] block w-full"
        >
          <SidebarItem
            className="py-1.5 px-2"
            data-selected={item.selected(pathname)}
          >
            <SidebarItemIcon Icon={item.Icon} />
            <SidebarItemLabel>{item.label}</SidebarItemLabel>
          </SidebarItem>
        </Link>
      ))}
    </nav>
  );
}
