import JobSeekersAbout from "@/components/custom/job-seekers/about";
import Faq from "@/components/custom/job-seekers/faq";
import GetHired from "@/components/custom/job-seekers/get-hired";
import Hero from "@/components/custom/job-seekers/hero";
import HiringSteps from "@/components/custom/job-seekers/hiring-steps";
import KeyFeatures from "@/components/custom/job-seekers/key-features";

export default function Page() {
  return (
    <div className="space-y-28">
      <Hero />
      <JobSeekersAbout />
      <HiringSteps />
      <GetHired />
      <KeyFeatures />
      <Faq />
    </div>
  );
}
