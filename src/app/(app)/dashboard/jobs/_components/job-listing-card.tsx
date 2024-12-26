import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, MoreVertical, Pencil, Trash2 } from "lucide-react";

export default function JobListingCard() {
  return (
    <div className="@container p-8 border hover:bg-primary/5 transition-all flex justify-start items-start gap-5 w-full">
      <div className="w-full space-y-2">
        <div className="flex justify-start items-center gap-4">
          <h1>Flutter Mobile App Developer</h1>
          <Badge className="rounded-full">Opening</Badge>
        </div>
        <p className="flex @2xl:flex-row flex-col justify-start @2xl:items-center items-start @2xl:gap-3 gap-1 text-muted-foreground text-sm">
          <span className="text-base font-medium">Rs 3-5 LPA</span>
          <span>Pune, MH</span>
          <span>1-3 Years</span>
          <span>Graduation/Diploma</span>
        </p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="p-3 rounded-full w-9 h-9">
            <MoreVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Pencil />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:text-destructive-foreground focus:bg-destructive">
            <Trash2 />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
