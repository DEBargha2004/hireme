import byjus from "@/../public/companies/Byju_s.png";
import hp from "@/../public/companies/hp.png";
import emudra from "@/../public/companies/emudra.png";
import bajajfinServe from "@/../public/companies/bajajfinserve.png";
import technook from "@/../public/companies/technook.png";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { strict } from "assert";

const images: { className?: string; img: StaticImageData }[] = [
  { img: byjus, className: "h-6" },
  { img: hp },
  { img: emudra, className: "h-12" },
  { img: bajajfinServe, className: "h-5" },
  { img: technook },
];

export default function CompanyNames() {
  return (
    <div className="py-20">
      <div className="section flex flex-col justify-start items-center gap-20">
        <h1 className="md:text-4xl text-3xl font-bold">
          Recruiters that have employed Enterprise{" "}
          <span className="text-primary">Hiring</span> Services
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {images.map((img, i) => (
            <div
              key={i}
              className={cn(
                "w-[120px] h-16 rounded-lg shadow-md bg-card border",
                "flex justify-center items-center",
              )}
            >
              <Image
                alt="image"
                src={img.img}
                height={30}
                width={100}
                className={cn("w-auto h-8 object-contain", img.className)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
