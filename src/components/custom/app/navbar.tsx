import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Navbar({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "flex justify-between items-center py-3 px-4 gap-2 shadow",
        className,
      )}
      {...props}
    >
      <h1 className="w-full font-semibold text-lg">For You</h1>
      <p className="text-sm text-muted-foreground">Ajit</p>
      <Avatar>
        <AvatarImage />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
    </header>
  );
}
