import { SidebarItem } from "@/types/sidebar-item";
import {
  BriefcaseBusiness,
  MessageSquareMore,
  Search,
  UserRound,
} from "lucide-react";
import micromatch from "micromatch";

export const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "For You",
    Icon: UserRound,
    href: "/dashboard",
    pattern: ["/dashboard", "/dashboard/new"],
    selected: function (path: string) {
      return this.pattern
        ? micromatch.isMatch(path, this.pattern)
        : path === "/dashboard";
    },
  },
  {
    id: "search",
    label: "Search",
    Icon: Search,
    href: "/dashboard/search",
    selected: (path: string) => path === "/dashboard/search",
  },
  {
    id: "messages",
    label: "Messages",
    Icon: MessageSquareMore,
    href: "/dashboard/message",
    selected: (path: string) => path === "/dashboard/message",
  },
  {
    id: "jobs",
    label: "Manage Jobs",
    Icon: BriefcaseBusiness,
    href: "/dashboard/jobs",
    pattern: "/dashboard/jobs/**",
    selected(path: string) {
      return micromatch.isMatch(path, this.pattern!);
    },
  },
];
