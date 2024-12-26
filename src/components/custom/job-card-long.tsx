import { BriefcaseBusiness, Dot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function JobCardLong() {
  return (
    <div
      className={cn(
        "p-5 border gap-5 w-full rounded hover:bg-accent transition-all",
        "grid @4xl:grid-cols-[90px_1fr_1fr_150px] grid-cols-[70px_1fr]",
      )}
    >
      <div className="flex flex-col justify-between items-center gap-10 shrink-0">
        <Avatar>
          <AvatarImage />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <h1 className="text-primary text-sm whitespace-nowrap">Rs 3 - 5 LPA</h1>
      </div>
      <div className="w-full self-stretch flex flex-col justify-between items-start shrink-0">
        <h1 className="text-base font-semibold">John Doe</h1>
        <p className="text-muted-foreground flex justify-start items-center text-sm [&>span]:whitespace-nowrap">
          <span>20 years old</span>
          <Dot className="h-4 w-4" />
          <span>Fresher</span>
          <Dot className="h-4 w-4" />
          <span className="text-primary">Last active today</span>
        </p>
        <p className="text-sm space-x-1">
          <span className="text-muted-foreground">Job Preference:</span>
          <span>Flutter</span>
        </p>
        <p className="line-clamp-1 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sed
          autem consectetur dolorum temporibus ab inventore modi aperiam cu
        </p>
      </div>
      <div className="w-full self-stretch @4xl:flex hidden flex-col justify-center items-start shrink-0 gap-5">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="relative">
            <div className="flex justify-start items-center gap-4 relative z-20">
              <div className="h-6 w-6 rounded-full bg-primary grid place-content-center">
                <BriefcaseBusiness
                  className="text-white scale-50"
                  fill="currentColor"
                />
              </div>
              <span className="text-xs text-muted-foreground">
                Jul 2021 - Jul 2022
              </span>
              <span className="line-clamp-1 text-sm">
                Massachutesetts Institute of Technology
              </span>
            </div>
            <div
              className={cn(
                "absolute bottom-1/2 left-3 -translate-x-1/2 w-[2px] border-r border-black/50 border-dotted",
                "h-[calc(100%+20px)] block",
                i === 0 && "hidden",
              )}
            />
          </div>
        ))}
      </div>
      <div className="w-full @4xl:col-start-4 col-start-2 self-stretch my-auto">
        <Button className="w-full max-w-[200px] py-5">Start Chatting</Button>
      </div>
    </div>
  );
}
