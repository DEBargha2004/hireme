import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function SidebarChatItem({ active }: { active?: boolean }) {
  return (
    <div
      className={cn(
        "flex justify-between items-start gap-2 p-4 transition-all hover:bg-muted cursor-pointer",
        active && "bg-muted",
      )}
    >
      <Avatar className="border">
        <AvatarImage />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className=" w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-lg ">John Doe</h1>
          <span className="text-xs text-muted-foreground">Yesterday</span>
        </div>
        <p className="text-sm line-clamp-1">Flutter Mobile App Developer</p>
        <p className="text-muted-foreground line-clamp-1">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}
