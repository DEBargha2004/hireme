import yourStory from "@/../public/mediahouses/logo_yourstory.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function MediaCoverage() {
  return (
    <div className="w-full pb-7">
      <div className="section space-y-8">
        <h1 className="sm:text-6xl text-4xl font-bold">Media Coverage</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-20 lg:gap-14 gap-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full p-3 rounded-3xl [&>*]:mt-5 [&>*:nth-child(1)]:mt-0 [&>*:nth-child(4)]:mt-10 border shadow-spread-sm"
            >
              <div className="w-full pt-5">
                <Image
                  src={yourStory}
                  alt="image"
                  height={40}
                  width={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur voluptatibus aliquam voluptatum aliqua
              </p>
              <Separator />
              <div className="flex justify-between items-center p-4 [&>*]:text-muted-foreground">
                <p>4 April, 2022</p>
                <p>Read More</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <Button
            variant={"outline"}
            className="px-7 py-5 rounded-full border-black"
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
}
