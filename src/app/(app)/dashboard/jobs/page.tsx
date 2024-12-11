import { Button } from "@/components/ui/button";
import JobListingCard from "./_components/job-listing-card";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <main className="w-full space-y-6">
      <Button>
        <Plus />
        <span>Post a new job</span>
      </Button>
      {Array.from({ length: 10 }).map((_, i) => (
        <JobListingCard key={i} />
      ))}
    </main>
  );
}
