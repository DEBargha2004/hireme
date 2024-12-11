import JobListingCard from "../_components/job-listing-card";

export default function Page() {
  return (
    <main className="w-full space-y-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <JobListingCard key={i} />
      ))}
    </main>
  );
}
