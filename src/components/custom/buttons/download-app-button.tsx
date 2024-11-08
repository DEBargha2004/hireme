import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function DownloadAppButton({
  className,
  ...props
}: ButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "rounded-full text-black font-semibold px-7 py-5 text-base",
            className,
          )}
          {...props}
        >
          Download App
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
