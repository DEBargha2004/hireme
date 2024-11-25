import f1 from "@/../public/recruiter-f1.svg";
import f2 from "@/../public/recruiter-f2.svg";
import f3 from "@/../public/recruiter-f3.svg";
import f4 from "@/../public/recruiter-f4.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  {
    title: "Relevant Candidates(AI Algorithm)",
    image: f1,
  },
  {
    title: "Direct Chat and Instant Response",
    image: f2,
  },
  {
    title: "Conduct Video Interviews",
    image: f3,
  },
  {
    title: "100% Data Privacy",
    image: f4,
  },
];

export default function Features() {
  return (
    <div className="w-full md:block hidden pb-20">
      <div className="section space-y-20">
        <h1 className="lg:text-4xl text-3xl font-bold">Key Features</h1>
        <div className="grid grid-cols-4 xl:gap-10 gap-6">
          {features.map((feature, idx) => (
            <section
              key={idx}
              className="flex flex-col justify-start items-center gap-10"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                height={600}
                width={200}
                className="w-auto xl:h-[300px] h-[250px] object-cover"
              />
              <h1 className="font-medium w-4/5">{feature.title}</h1>
            </section>
          ))}
        </div>
        <Button className="rounded-full text-black font-semibold px-10 py-5">
          Hire Now
        </Button>
      </div>
    </div>
  );
}
