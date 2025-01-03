import About from "@/components/custom/recruiter/about";
import Faq from "@/components/custom/recruiter/faq";
import Features from "@/components/custom/recruiter/features";
import HireInstantly from "@/components/custom/recruiter/hire-instantly";
import HiringProcess from "@/components/custom/recruiter/hiring-process";
import HiringSteps from "@/components/custom/recruiter/hiring-steps";

export default function Page() {
  return (
    <div className="space-y-28">
      <HireInstantly />
      <About />
      <HiringSteps />
      <HiringProcess />
      <Features />
      <Faq />
    </div>
  );
}
