import { Button } from "@/components/ui/button";
import Image from "next/image";
import recruiterBanner from "@/../public/recruiter-banner.png";

export default function About() {
  return (
    <div className="w-full ">
      <div className="section flex md:flex-row flex-col justify-between items-start gap-10">
        <div className="md:w-3/5 space-y-6 md:text-left text-center">
          <h1 className="md:text-4xl text-3xl font-bold ">
            <span className="text-primary">Hiring</span> App for Founders and
            Hiring Managers
          </h1>
          <p className="text-muted-foreground">
            A targeted job portal for SMEs and Startups - Hireme is a
            mobile-first chat-based platform that fulfills the hiring
            requirements of 190K+ verified recruiters. Hireme as a direct hiring
            app connects recruiters to 3.8M+ verified candidates who are
            searching for jobs in Indian startups. Moreover, Hireme allows for
            direct and private communication without the interference of
            consultants.
          </p>
          <Button className="rounded-full text-black font-semibold px-10 py-5">
            Hire Now
          </Button>
        </div>
        <div className="md:w-2/5 w-full">
          <Image
            src={recruiterBanner}
            alt="Recruiter Banner"
            height={400}
            width={400}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
