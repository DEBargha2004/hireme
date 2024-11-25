import step1 from "@/../public/hiring-steps/step-image-1.png";
import step2 from "@/../public/hiring-steps/step-image-2.png";
import step3 from "@/../public/hiring-steps/step-image-3.png";
import check from "@/../public/check-circle.png";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

const steps: {
  image: string | StaticImageData;
  title: string;
  description: string;
}[] = [
  {
    image: step1,
    title: "Step 1",
    description: "Build a Profile",
  },
  {
    image: step2,
    title: "Step 2",
    description: "Post a Job in 5 Minutes",
  },
  {
    image: step3,
    title: "Step 3",
    description: "Chat Directly with Relevant Candidates",
  },
];

export default function HiringSteps() {
  return (
    <div className="w-full">
      <div className="section space-y-10">
        <h1 className="md:text-4xl text-3xl font-bold">
          Start Hiring in 3 Easy Steps
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
                    src={check}
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
      </div>
    </div>
  );
}
