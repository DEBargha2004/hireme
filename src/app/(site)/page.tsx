import GetAppSection from "@/components/custom/home/get-app";
import Landing from "@/components/custom/home/landing";
import TrendingJobs from "@/components/custom/home/trending-jobs";
import ChatWithDecisionmakers from "@/components/custom/home/chat-with-decisionmakers";
import Cities from "@/components/custom/home/cities";
import Recruiters from "@/components/custom/home/recruiters";
import Testimonials from "@/components/custom/home/testimonials";
import MediaCoverage from "@/components/custom/home/media-coverage";
import { Metadata } from "next";
import { headers } from "next/headers";
import logo from "@/../public/app-logo.png";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") || "http";

  const baseUrl = `${protocol}://${host}`;
  return {
    title: "HireMe - AI-Powered Job Matching for Faster Hiring",
    description:
      "Join 120,000+ startups and 10,000+ daily fresh job seekers on HireMe. The ultimate AI-powered hiring & job search platform with instant chat and video interviews.",
    alternates: {
      canonical: `${baseUrl}/`,
    },
    openGraph: {
      title: "HireMe - AI-Powered Job Matching for Faster Hiring",
      description:
        "Join 120,000+ startups and 10,000+ daily fresh job seekers on HireMe. The ultimate AI-powered hiring & job search platform with instant chat and video interviews.",
      url: `${baseUrl}/`,
      siteName: "HireMe",
      images: [
        {
          url: logo.src,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "HireMe - AI-Powered Job Matching for Faster Hiring",
      description:
        "Join 120,000+ startups and 10,000+ daily fresh job seekers on HireMe.",
      images: [logo.src],
    },
  };
}

export default function Page() {
  return (
    <div className="lg:pt-32 md:pt-20 pb-10 pt-8 space-y-10">
      <Landing />
      <GetAppSection />
      <TrendingJobs />
      <ChatWithDecisionmakers />
      <Cities />
      {/* <Recruiters />
      <Testimonials />
      <MediaCoverage /> */}
    </div>
  );
}
