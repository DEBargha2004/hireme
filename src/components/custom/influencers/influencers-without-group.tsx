"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export default function InfluencersWithoutGroup() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="my-10 mb-32 relative">
      <div className="section relative z-20">
        <Carousel opts={{ loop: true, align: "start" }}>
          <CarouselContent className="py-10 gap-5">
            {Array.from({ length: 7 }).map((_, idx) => (
              <CarouselItem key={idx} className="basis-auto">
                <div className="w-[250px] p-3 border rounded-3xl shadow-lg space-y-3 bg-background">
                  <div className="w-full aspect-square bg-muted rounded-3xl" />
                  <h1 className="font-medium">John Doe</h1>
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <div key={idx} className="grid place-content-center">
                        <div className="h-8 aspect-square bg-muted rounded-full border" />
                      </div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-0 md:flex hidden" />
          <CarouselPrevious className="left-0 md:flex hidden" />
        </Carousel>
      </div>
      <div className="absolute top-1/2 left-0 bg-primary w-full h-3/5" />
    </div>
  );
}
