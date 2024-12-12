import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import NavbarHeader from "./navbar-header";

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
      <NavbarHeader />
      <p className="text-sm text-muted-foreground">Ajit</p>
      <Avatar>
        <AvatarImage />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
    </header>
  );
}
