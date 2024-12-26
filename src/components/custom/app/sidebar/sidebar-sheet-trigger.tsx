import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSidebar } from "@/providers/sidebar-provider";
import { AlignJustify } from "lucide-react";
import AppLogo from "../../app-logo";
import Sidenav from "./sidenav";

export default function SidebarSheetTrigger() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"secondary"}
          className="px-2.5 shrink-0 rounded-full md:hidden block h-9 w-9"
        >
          <AlignJustify size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col gap-10">
        <SheetHeader>
          <SheetTitle>
            <AppLogo />
          </SheetTitle>
        </SheetHeader>
        <Sidenav />
      </SheetContent>
    </Sheet>
  );
}
