import step1 from "@/../public/job-seeker/step-image-1.svg";
import step2 from "@/../public/job-seeker/step-image-2.svg";
import step3 from "@/../public/job-seeker/step-image-3.svg";
import checkCircle from "@/../public/check-circle.png";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const steps: {
  image: string | StaticImageData;
  title: string;
  description: string;
}[] = [
  {
    image: step1,
    title: "Step 1",
    description: "Build yor Profile",
  },
  {
    image: step2,
    title: "Step 2",
    description: "Chat Directly with Decision-Makers",
  },
  {
    image: step3,
    title: "Step 3",
    description: "Get Hired",
  },
];

export default function HiringSteps() {
  return (
    <div className="w-full">
      <div className="section space-y-14">
        <h1 className="md:text-4xl text-3xl font-bold">
          Get Hired in 3 Simple Steps
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {steps.map((step, idx) => (
            <section key={idx} className="relative z-0">
              <div className="flex flex-col items-center justify-start gap-4">
                <h1 className="text-lg font-semibold">{step.title}</h1>
                <div className="relative h-[200px] z-30 aspect-square rounded-full grid place-content-center bg-emerald-100">
                  <Image
                    src={step.image}
                    alt={step.title}
                    height={100}
                    width={100}
                    className="w-16 h-auto"
                  />
                  <Image
                    src={checkCircle}
                    alt="check"
                    height={40}
                    width={40}
                    className="absolute top-4 right-4 w-8 h-auto"
                  />
                </div>
                <p className="text-lg font-medium">{step.description}</p>
              </div>
              <div
                className={cn(
                  "absolute w-[calc(100%+40px)] border-t border-black border-dotted top-1/2 left-1/2 z-0",
                  "hidden lg:block",
                  idx === steps.length - 1 && "hidden lg:hidden",
                )}
              >
                <svg
                  width={12}
                  height={12}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3"
                >
                  <polygon points="0 0 12 6 0 12 2.5 6" fill="black" />
                </svg>
              </div>
            </section>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <Button className="text-black font-semibold px-10 py-5 rounded-full">
            Get Hired
          </Button>
        </div>
      </div>
    </div>
  );
}
