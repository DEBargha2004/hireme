import handShakeImage from "@/../public/job-seeker/india_s-first-job.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function JobSeekersAbout() {
  return (
    <div>
      <div className="section grid md:grid-cols-2 grid-cols-1 gap-4">
        <section className="space-y-8 md:text-left text-center">
          <h1
            className="md:text-4xl text-4xl font-bold "
            style={{ lineHeight: "1.3" }}
          >
            <span className="text-primary">Hireme</span>- The Direct Job Search
            Application
          </h1>
          <p
            className="text-sm md:text-base text-muted-foreground md:w-[90%]
          "
          >
            With 190K+ verified recruiters and 3.8M+ verified candidates, Hireme
            offers candidates the opportunity to directly connect with the
            decision-makers. Moreover, the AI algorithm ensures that candidates
            are only recommended for jobs that are a good fit for their skill
            set, experience, and professional goals. In addition to direct chat,
            Hireme has an in-built video call feature that allows the entire
            hiring process to take place without hassle on the app itself.
          </p>
          <Button className="text-black font-semibold px-10 py-5 rounded-full">
            Get Hired
          </Button>
        </section>
        <section className="flex items-center">
          <Image
            src={handShakeImage}
            alt="handShakeImage"
            height={600}
            width={600}
          />
        </section>
      </div>
    </div>
  );
}
