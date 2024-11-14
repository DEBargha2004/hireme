import Bengaluru from "@/../public/cities/Bengaluru.png";
import Delhi from "@/../public/cities/Delhi.png";
import Mumbai from "@/../public/cities/Mumbai.png";
import Pune from "@/../public/cities/pune.png";
import Hyderabad from "@/../public/cities/Hyderabad.png";
import Image from "next/image";

const locations = [Bengaluru, Delhi, Mumbai, Pune, Hyderabad];

export default function Cities() {
  return (
    <section className="w-full">
      <div className="pt-10 section space-y-10">
        <h1 className="text-4xl font-bold">Find Candidates in your City</h1>
        <div className="grid md:grid-cols-5 lg:gap-2 gap-8">
          {locations.map((location, idx) => (
            <div
              key={idx}
              className="w-full md:h-auto h-[120px] flex justify-center"
            >
              <Image
                alt="location"
                className="object-cover w-fit"
                src={location}
                height={100}
                width={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
