import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function JobListingCard() {
  return (
    <div className="p-8 border hover:bg-primary/5 transition-all flex justify-start items-center gap-5 w-full">
      <div className="w-full space-y-2">
        <h1>Flutter Mobile App Developer</h1>
        <p className="flex justify-start gap-1 text-muted-foreground text-sm">
          <span>Pune, MH</span>
          <span>1-3 Years</span>
          <span>Graduation/Diploma</span>
          <span>Rs 3-5 LPA</span>
        </p>
      </div>

      <Button
        variant={"ghost"}
        className="text-primary hover:bg-muted hover:text-primary"
      >
        Opening
      </Button>
      <span className="text-primary">Edit</span>
      <span className="text-primary">Close</span>
      <Button variant={"ghost"} className="p-3">
        <MoreHorizontal />
      </Button>
    </div>
  );
}
