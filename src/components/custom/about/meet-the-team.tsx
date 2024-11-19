import ankur from "@/../public/influencers/Ankur.png";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <div className="w-full py-10">
      <div className="section space-y-10">
        <h1 className="sm:text-6xl text-5xl font-bold">
          Meet The <span className="text-primary">Team</span>
        </h1>
        <div className="grid lg:grid-cols-3 xs:grid-cols-2 lg:gap-10 gap-4 lg:px-20 xl:px-32">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full space-y-6 p-4 rounded-2xl shadow-spread-sm"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden">
                <Image
                  src={ankur}
                  alt="ankur"
                  height={200}
                  width={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 justify-start items-center">
                <h1 className="text-xl font-medium">Abhishek Gupta</h1>
                <p className="text-muted-foreground">CEO</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
