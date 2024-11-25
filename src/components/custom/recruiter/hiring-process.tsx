import hiringProcess from "@/../public/hiring-process.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HiringProcess() {
  return (
    <div className="w-full">
      <div className="section grid md:grid-cols-2 gap-8">
        <section className="w-full">
          <Image
            src={hiringProcess}
            alt="Hiring Process"
            height={400}
            width={400}
            className="xl:w-4/5 w-full"
          />
        </section>
        <section className="flex flex-col justify-start md:items-start items-center gap-10 md:text-left text-center">
          <h1 className="md:text-3xl text-2xl font-bold">
            <span className="text-primary">Hireme</span>- Simplifying the Hiring
            Process
          </h1>
          <p className="text-muted-foreground">
            Hirect, a direct hiring platform for founders and hiring managers,
            is committed to meeting its users&apos; definitions of success. This
            chat-based platform is created to help high-growth startups meet
            their hiring needs in absence of middlemen.
          </p>
          <p className="text-muted-foreground">
            Hirect caters to the hiring needs of 190K+ verified recruiters. The
            AI algorithm&apos;s ability to correctly match recruiters to
            relevant candidates based on skills, experience, profile activity,
            location preferences, etc. makes hiring simple and effective.
          </p>
          <Button className="rounded-full text-black font-semibold px-10 py-5">
            Hire Now
          </Button>
        </section>
      </div>
    </div>
  );
}
