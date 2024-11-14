import { ChevronRight } from "lucide-react";

const trendingJobs: { title: string; description: string }[] = [
  {
    title: "IT Engineering",
    description: "685K+ Candidates",
  },
  {
    title: "Operations",
    description: "Operations",
  },
  {
    title: "BPO & KPO",
    description: "490K+ Candidates",
  },
  {
    title: "Sales & BD",
    description: "360K+ Candidates",
  },
  {
    title: "Finance",
    description: "350K+ Candidates",
  },
  {
    title: "Marketing",
    description: "320K+ Candidates",
  },
  {
    title: "Personnel",
    description: "255K+ Candidates",
  },
];

export default function TrendingJobs() {
  return (
    <section className="section space-y-10">
      <h1 className="text-4xl font-bold " style={{ lineHeight: "1.3" }}>
        Trending Job Categories
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
        {trendingJobs.map((job) => (
          <TrendingJobCard key={job.title}>
            <TrendingJobTitle>{job.title}</TrendingJobTitle>
            <TrendingJobDescription>{job.description}</TrendingJobDescription>
          </TrendingJobCard>
        ))}
        <TrendingJobCard>
          <TrendingJobTitle>
            <ChevronRight />
          </TrendingJobTitle>
          <TrendingJobDescription>View More</TrendingJobDescription>
        </TrendingJobCard>
      </div>
    </section>
  );
}

function TrendingJobCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between items-start gap-2 p-12 border rounded-2xl space-y-3 shadow-lg transition-all hover:scale-105 hover:shadow-xl shrink-0">
      {children}
    </div>
  );
}

function TrendingJobTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-medium whitespace-nowrap">{children}</h2>;
}

function TrendingJobDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground whitespace-nowrap">{children}</p>;
}
