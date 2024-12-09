import { Icon } from "./icon";

export type SidebarItem = {
  id: string;
  label: string;
  Icon: Icon;
  href: string;
  pattern?: string | string[];
  selected: (path: string) => boolean;
  children?: SidebarItem[];
  Other?: React.ReactNode;
};
