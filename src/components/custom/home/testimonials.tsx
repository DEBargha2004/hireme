"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ankur from "@/../public/influencers/Ankur.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length - 1);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className="w-full pt-10">
      <div className="section space-y-10">
        <h1 className="text-4xl font-bold">Influencer&apos;s Take on Hirect</h1>
        <div className="lg:w-4/5 md:w-[90%] mx-auto">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnMouseEnter: true,
                playOnInit: true,
              }),
            ]}
            setApi={setApi}
          >
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, i) => (
                <CarouselItem key={i} className="">
                  <div className="p-12 flex md:flex-row flex-col justify-start md:items-start items-center lg:gap-10 gap-8">
                    <Image
                      alt="ankur"
                      src={ankur}
                      height={300}
                      width={300}
                      className="h-[350px] w-[250px] object-cover rounded-lg"
                    />
                    <div className="md:text-left select-none">
                      <h1 className="text-3xl font-bold">Ankur Warikoo</h1>
                      <p className="text-muted-foreground mt-1">
                        Entreprenuer, Public Speaker and Angel Investor
                      </p>
                      <article className="text-muted-foreground mt-8 text-sm ">
                        Recently, I&apos;d done a story on the perks that people
                        get as a part of the Warikoo team that we have, and we
                        got a lot of amazing responses. But, on such a big
                        scale, hiring becomes a bit easy. What if you are
                        actually small? What if you are just starting out? What
                        if you are an HR Recruiter looking for some finite
                        specific skills? It becomes hard, and that&apos;s why
                        Hirect. Hirect allows you to chat directly with 3
                        Million candidates. There is 100% privacy. It&apos;s
                        like WhatsApp chatting with people that you would want
                        to recruit. And that&apos;s why it&apos;s become such a
                        meaningful way to get straight into the talent market
                        without any consultants involved. Check them out!
                      </article>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="sm:flex hidden" />
            <CarouselPrevious className="sm:flex hidden" />
            <div className="flex justify-center items-center gap-3 mt-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full border border-black",
                    current === i && "bg-primary/70",
                  )}
                ></div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button
                variant={"outline"}
                className="px-7 py-5 rounded-full border-2 font-medium"
              >
                View More
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
