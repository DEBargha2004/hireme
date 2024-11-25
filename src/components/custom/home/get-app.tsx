import chatDirectly from "@/../public/chat-directly-new.png";
import { Button, ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function GetAppButtonLinked({ className, ...props }: ButtonProps) {
  return (
    <Link href={"https://cgmeetup.vercel.app"} className="block">
      <Button
        className={cn(
          "text-black font-semibold px-10 py-5 rounded-full",
          className,
        )}
        {...props}
      >
        Get App
      </Button>
    </Link>
  );
}

export default function GetAppSection() {
  return (
    <section className="w-full bg-cyan-50">
      <section className="section grid sm:grid-cols-2 pt-10">
        <div className="w-full flex flex-col justify-center gap-10 sm:text-left text-center">
          <h1 className="md:text-6xl text-5xl font-bold">
            Get the <span className="text-primary">Hireme</span> App
          </h1>
          <p className="text-black/90 ">
            We will send you a link via SMS. To download the app, simply open
            it.
          </p>
          <div className="md:flex hidden justify-start items-center gap-4">
            <div className="relative w-full">
              <Input
                className="w-full pl-12 h-12 placeholder:text-xs text-muted-foreground outline-none bg-background rounded-full"
                placeholder="Enter your Mobile number"
              />
              <div className="absolute top-0 h-full px-4 grid place-content-center text-xs text-muted-foreground">
                +91
              </div>
            </div>
            <Button className="text-black font-semibold px-10 py-5 rounded-full">
              Get App
            </Button>
          </div>
          <GetAppButtonLinked className="md:hidden flex mx-auto" />
        </div>
        <div className="w-full justify-end sm:flex hidden">
          <Image
            src={chatDirectly}
            alt="Chat Directly"
            width={200}
            height={200}
            className="w-4/5 object-cover"
          />
        </div>
      </section>
    </section>
  );
}
