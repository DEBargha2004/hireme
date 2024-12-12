import { Button } from "@/components/ui/button";
import JobListingCard from "../_components/job-listing-card";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full space-y-6">
      <Link href={"/dashboard/jobs/new"}>
        <Button>
          <Plus />
          <span>Post a new job</span>
        </Button>
      </Link>
      {Array.from({ length: 10 }).map((_, i) => (
        <JobListingCard key={i} />
      ))}
    </main>
  );
}
