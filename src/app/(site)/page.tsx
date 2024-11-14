import GetAppSection from "@/components/custom/home/get-app";
import "./style.css";
import Landing from "@/components/custom/home/landing";
import TrendingJobs from "@/components/custom/home/trending-jobs";
import ChatWithDecisionmakers from "@/components/custom/home/chat-with-decisionmakers";
import Cities from "@/components/custom/home/cities";

export default function Page() {
  return (
    <div className="lg:pt-32 md:pt-20 pt-8 space-y-10">
      <Landing />
      <GetAppSection />
      <TrendingJobs />
      <ChatWithDecisionmakers />
      <Cities />
    </div>
  );
}
