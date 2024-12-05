import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

export const styledInputClass = cn(
  "h-10 rounded-full px-4",
  "focus-visible:bg-blue-50 focus-visible:ring-0",
);

export const StyledFormInput: React.FC<React.ComponentProps<"input">> = ({
  className,
  ...props
}) => {
  return <Input className={cn(styledInputClass, className)} {...props} />;
};
