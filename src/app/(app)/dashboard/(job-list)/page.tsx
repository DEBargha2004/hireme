import JobCardLong from "@/components/custom/job-card-long";

export default function Page() {
  return (
    <main className="w-full space-y-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <JobCardLong key={i} />
      ))}
    </main>
  );
}
