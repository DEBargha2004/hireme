import GetAppSection from "@/components/custom/home/get-app";
import "./style.css";
import Landing from "@/components/custom/home/landing";
import TrendingJobs from "@/components/custom/home/trending-jobs";
import ChatWithDecisionmakers from "@/components/custom/home/chat-with-decisionmakers";
import Cities from "@/components/custom/home/cities";
import Recruiters from "@/components/custom/home/recruiters";
import Testimonials from "@/components/custom/home/testimonials";
import MediaCoverage from "@/components/custom/home/media-coverage";

export default function Page() {
  return (
    <div className="lg:pt-32 md:pt-20 pt-8 space-y-10">
      <Landing />
      <GetAppSection />
      <TrendingJobs />
      <ChatWithDecisionmakers />
      <Cities />
      <Recruiters />
      <Testimonials />
      <MediaCoverage />
    </div>
  );
}
