import { cn } from "@/lib/utils";

export default function AboutHirect() {
  return (
    <div className="w-full space-y-10 py-14">
      <div className="section space-y-10">
        <h1 className="sm:text-6xl text-5xl font-bold">
          About <span className="text-primary">Hire</span>
        </h1>
        <div
          className={cn(
            "grid sm:grid-cols-3 sm:grid-rows-2 gap-4",
            "[&>*]:aspect-video sm:[&>:nth-child(odd)]:aspect-auto sm:[&>*:nth-child(even)]:aspect-video",
            "[&>*]:hidden [&>:nth-child(1)]:block sm:[&>*]:block [&>*]:rounded-xl",
            "sm:[&>*:nth-child(odd)]:row-span-2 [&>*]:bg-primary",
          )}
        >
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <article className="text-center space-y-3 [&>*]:text-black/70 [&>*]:text-base">
          <p>Hireme was founded in 2018 as a direct hiring application.</p>
          <p>
            Our vision of virtually connecting the skill-oriented workforce with
            high-growth startups and SMEs has manifested into our service
            provisions. Hireme&apos;s AI algorithm helps connect recruiters
            directly with relevant candidates equipped with desired skills and
            experience.
          </p>
          <p>
            Our philosophy has always been to simplify the hiring process.
            Hireme offers direct chat and video call features which have enabled
            over 3M job seekers to connect directly with over 190K recruiters on
            our platform.
          </p>
          <p>
            Our commitment to offering a modern and effective solution to the
            outdated hiring process has allowed recruiters and startups to
            efficiently improve their hiring process by connecting directly with
            candidates.
          </p>
        </article>
      </div>
    </div>
  );
}
