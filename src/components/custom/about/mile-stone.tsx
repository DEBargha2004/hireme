import { Briefcase, UserSearch } from "lucide-react";

const milestones = [
  {
    Icon: UserSearch,
    title: "190K+",
    description: "Verified Recruiters",
  },
  {
    Icon: Briefcase,
    title: "3.8M+",
    description: "Verified Candidates",
  },
];

export default function MileStones() {
  return (
    <div className="w-full">
      <div className="section space-y-10">
        <h1 className="sm:text-5xl text-4xl font-bold">Milestones</h1>
        <div className="grid sm:grid-cols-2 sm:space-y-0 space-y-10 xl:px-28 lg:px-20">
          {milestones.map((milestone, idx) => (
            <section
              key={idx}
              className="flex flex-col justify-start items-center gap-4"
            >
              <div className="h-16 w-16 bg-accent rounded-full flex justify-center items-center mb-5">
                <milestone.Icon className="text-black/70" />
              </div>
              <h1 className="text-6xl text-primary font-extrabold">
                {milestone.title}
              </h1>
              <p className="text-muted-foreground">{milestone.description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
