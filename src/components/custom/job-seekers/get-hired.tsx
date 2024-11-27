import getHiredImage from "@/../public/job-seeker/simplify-hiring-process.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GetHired() {
  return (
    <div>
      <div className="section grid md:grid-cols-2 gap-10">
        <section className="flex">
          <Image
            src={getHiredImage}
            alt="getHiredImage"
            height={400}
            width={400}
            className="lg:w-auto lg:h-full w-full h-auto m-auto"
          />
        </section>
        <section className="flex flex-col justify-start md:items-start items-center md:text-left text-center gap-6 [&>p]:text-muted-foreground">
          <h1 className="text-5xl font-bold">
            Simply Get <span className="text-primary">Hired</span>
          </h1>
          <p>
            Hireme enables job seekers to find the latest job openings during
            their job search. Job seekers looking for a job can instantly
            register on the application, upload their resume, get verified, and
            find a job. Hireme has 3.8M+ verified job seekers searching for
            startup jobs across 1200+ categories. All the recruiters on the
            Hireme app are 100% verified, and since there are no consultants on
            this job app, there are no spam or scam calls.
          </p>
          <p>
            Hireme is a leading job portal in India that streamlines the hiring
            process by directly connecting the job seeker to the hiring manager
            so they can chat instantly for free, unlike most traditional hiring
            processes, which are unreliable, long-winded and expensive.
          </p>
          <Button className="px-7 py-5 rounded-full text-black">
            Get Started
          </Button>
        </section>
      </div>
    </div>
  );
}
