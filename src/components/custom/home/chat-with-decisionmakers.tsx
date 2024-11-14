import hireDirectHirect from "@/../public/hire-direct-hirect-new.png";
import hireChat from "@/../public/hirect-chart.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ChatWithDecisionmakers() {
  return (
    <section className="w-full">
      <section className="w-full">
        <div className="section grid md:grid-cols-2 pt-10 gap-10">
          <section className="flex flex-col justify-start md:items-start items-center gap-10 md:text-left">
            <h1 className="text-4xl font-bold">
              Chat directly with Decision-Makers
            </h1>
            <p className="text-muted-foreground">
              Hirect encourages direct and quick responses between job-seekers
              and recruiters. Through the bi-directional direct chat feature,
              candidates can chat directly with relevant and verified recruiters
              on this job search app.
            </p>
            <Button className="rounded-full text-black font-semibold px-7 py-5">
              Get Hired
            </Button>
          </section>
          <section>
            <Image
              alt="Hire Direct Hirect"
              src={hireDirectHirect}
              height={400}
              width={400}
              className="h-full md:w-auto w-full"
            />
          </section>
        </div>
      </section>
      <section className="w-full bg-primary pt-10">
        <div className="section grid md:grid-cols-2  gap-10">
          <section className="pr-10">
            <Image
              alt="Hire Direct Hirect"
              src={hireChat}
              className="h-full md:w-auto w-full"
            />
          </section>
          <section className="flex flex-col md:col-start-2 row-start-1 justify-center md:items-start items-center md:text-left gap-6">
            <h1 className="text-4xl font-bold">Hire Directly with Hirect</h1>
            <p>
              3.8M+ candidates chat directly with 190K+ recruiters on Hirect.
            </p>
            <Button
              className="rounded-full text-black font-semibold px-7 py-5"
              variant={"secondary"}
            >
              Instant Hiring
            </Button>
          </section>
        </div>
      </section>
    </section>
  );
}
