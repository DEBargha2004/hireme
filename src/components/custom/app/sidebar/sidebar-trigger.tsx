import { Button } from "@/components/ui/button";
import { useSidebar } from "@/providers/sidebar-provider";
import { PanelLeft } from "lucide-react";

export default function SidebarTrigger() {
  const { toggleSidebarExpanded } = useSidebar();

  return (
    <Button
      variant={"ghost"}
      onClick={toggleSidebarExpanded}
      className="px-2 h-8"
    >
      <PanelLeft />
    </Button>
  );
}
