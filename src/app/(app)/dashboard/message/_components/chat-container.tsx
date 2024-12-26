import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "Tailwind",
  "Prisma",
  "tRPC",
  "Clerk",
  "TypeScript",
  "Zod",
  "Tailwind",
  "Prisma",
  "tRPC",
  "Clerk",
];

const messages = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum ea vero architecto, cumque delectus quisquam veniam?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum ea vero architecto, cumque delectus quisquam veniam?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum ea vero architecto, cumque delectus quisquam veniam?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum ea vero architecto, cumque delectus quisquam veniam?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum ea vero architecto, cumque delectus quisquam veniam?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum ea vero architecto, cumque delectus quisquam veniam?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum ea vero architecto, cumque delectus quisquam veniam?",
];

export default function ChatContainer({}: { id: string }) {
  return (
    <div className="py-4 pb-0 px-8 space-y-4">
      <div
        className={cn(
          "flex items-center gap-1 p-2 rounded-full bg-muted w-fit",
          "[&>button]:bg-background [&>button]:rounded-full",
        )}
      >
        <Button variant={"secondary"}>Chat</Button>
        <Button variant={"secondary"}>Online Profile</Button>
      </div>
      <div className="flex xl:flex-row flex-col justify-start gap-10">
        <div className="xl:w-2/5 min-w-[400px] space-y-3">
          <h1 className="text-2xl font-medium">John Kumar Mishra</h1>
          <div className="flex justify-start items-center gap-10 text-muted-foreground">
            <section className="flex justify-start items-center gap-1">
              <Briefcase size={20} />
              <span>Fresher</span>
            </section>
            <section className="flex justify-start items-center gap-1">
              <GraduationCap size={20} />
              <span>MCA</span>
            </section>
          </div>
          <div className="flex justify-start items-center gap-10">
            <p className="text-muted-foreground">Job Preference:</p>
            <p>Bangalore, KA · Flutter</p>
          </div>
          <h2 className="font-semibold">Rs 2 - 5 LPA</h2>
          <div className="flex justify-start items-center gap-2">
            <p className="text-muted-foreground">Present</p>
            <p>Sunrule Technologies</p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            {skills.map((skill, idx) => (
              <Badge
                key={idx}
                variant={"secondary"}
                className="text-sm font-medium rounded-full py-1.5 px-4 border-primary bg-transparent text-primary"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className="pt-20 space-y-3">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={cn(
              "flex justify-start items-start gap-2",
              idx % 2 === 1 && "flex-row-reverse",
            )}
          >
            <Avatar>
              <AvatarImage />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className={cn("p-3 rounded-lg bg-muted max-w-[400px] w-3/5")}>
              {message}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-20  sticky bottom-0 bg-background">
        <div className="relative">
          <Textarea
            rows={3}
            className="h-full border  resize-none focus-visible:ring-0 focus:bg-accent"
          />
          <Button
            className="absolute bottom-2 right-2 h-8 px-3 text-xs rounded-full"
            variant={"outline"}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
