"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import mediaHouse from "@/../public/mediahouses/logo_yourstory.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function MediaCoverage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="w-full bg-cyan-50/50 ">
      <div className="py-20 space-y-16 section">
        <h1 className="text-5xl font-bold">Media Coverage</h1>
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent className="py-10 px-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <CarouselItem key={i} className="lg:basis-1/3 md:basis-1/2">
                <div className="w-full bg-transparent">
                  <Link href={""}>
                    <div
                      className={cn(
                        "w-4/5 mx-auto p-8 bg-background shadow-spread-lg rounded-2xl ",
                        "flex flex-col justify-start items-center",
                      )}
                    >
                      <Image
                        src={mediaHouse}
                        alt="media house"
                        width={100}
                        height={100}
                      />
                      <Separator className="h-0.5 mt-5" />
                      <p className="text-muted-foreground font-semibold w-full text-left mt-6">
                        The start-up centric hiring platform directly connects
                      </p>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="-right-3" />
          <CarouselPrevious className="-left-3" />
        </Carousel>
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full border border-black ${
                current === i + 1 ? "bg-black" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
