import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { mediaCoverages } from "@/constants/media-coverages";
import Link from "next/link";
import { format } from "date-fns";

export default function Page() {
  return (
    <div className="p-10">
      <div className="section space-y-10">
        <h1 className="md:text-6xl text-4xl font-bold">Media Coverage</h1>
        {mediaCoverages.map(({ title, coverages }, idx) => (
          <section key={idx} className="space-y-6">
            <h2 className="text-left font-semibold text-xl">
              {idx + 1}. {title}
            </h2>
            <Carousel>
              <CarouselContent className="gap-20">
                {coverages.map((coverage, idx) => (
                  <CarouselItem key={idx} className="w-[280px] basis-auto">
                    <div className="border p-3 py-5 rounded-3xl flex flex-col items-center gap-5">
                      <div className="h-16 aspect-[2/1] bg-muted"></div>
                      <h3 className="font-semibold min-h-[100px]">
                        {coverage.description}
                      </h3>
                      <Separator />
                      <div className="grid grid-cols-2 w-full [&>p]:px-3 [&>p]:text-muted-foreground mt-6">
                        <p>{format(coverage.date, "dd MMM yyyy")}</p>
                        <p>
                          <Link href={coverage.externalLink} target="_blank">
                            Read More
                          </Link>
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="right-0" />
              <CarouselPrevious className="left-0" />
            </Carousel>
          </section>
        ))}
      </div>
    </div>
  );
}
