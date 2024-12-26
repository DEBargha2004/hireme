"use client";

import Link from "next/link";
import SidebarChatItem from "./_components/sidebar-chat-item";
import { usePathname } from "next/navigation";
import micromatch from "micromatch";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isChatOpen = micromatch.isMatch(pathname, "/dashboard/message/*");
  return (
    <div className="w-full h-[calc(100dvh-88px)] flex">
      <div
        className={cn(
          "h-full space-y-3 overflow-y-auto scroller-hide md:border-r lg:w-1/3 md:w-2/5 w-full",
          isChatOpen ? "hidden md:block" : "block",
        )}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Link
            className="block"
            key={i}
            href={`/dashboard/message/${i}`}
            replace={pathname === "/dashboard/message" ? false : true}
          >
            <SidebarChatItem active={pathname === `/dashboard/message/${i}`} />
          </Link>
        ))}
      </div>
      <div
        className={cn(
          "h-full overflow-y-scroll scroller-hide bg-muted/50 md:w-3/5 lg:w-2/3 w-full",
          isChatOpen ? "block" : "hidden md:block",
        )}
      >
        {children}
      </div>
    </div>
  );
}
