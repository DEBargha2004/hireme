import JobSeekersAbout from "@/components/custom/job-seekers/about";
import Faq from "@/components/custom/job-seekers/faq";
import GetHired from "@/components/custom/job-seekers/get-hired";
import Hero from "@/components/custom/job-seekers/hero";
import HiringSteps from "@/components/custom/job-seekers/hiring-steps";
import KeyFeatures from "@/components/custom/job-seekers/key-features";
import { Metadata } from "next";
import { headers } from "next/headers";
import logo from "@/../public/app-logo.png";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") || "http";

  const baseUrl = `${protocol}://${host}`;
  return {
    title: "HireMe - AI-Powered Job Search for Job Seekers",
    description:
      "Find your dream job on HireMe. Join 10,000+ daily fresh job seekers and connect with top startups using AI-powered matching and instant chat.",
    alternates: {
      canonical: `${baseUrl}/job-seeker`,
    },
    openGraph: {
      title: "HireMe - AI-Powered Job Search for Job Seekers",
      description:
        "Find your dream job on HireMe. Join 10,000+ daily fresh job seekers and connect with top startups using AI-powered matching and instant chat.",
      url: `${baseUrl}/job-seeker`,
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
      title: "HireMe - AI-Powered Job Search for Job Seekers",
      description:
        "Find your dream job on HireMe. Join 10,000+ daily fresh job seekers and connect with top startups.",
      images: [logo.src],
    },
  };
}

export default function Page() {
  return (
    <div className="space-y-28 pt-20">
      {/* <Hero /> */}
      <HiringSteps />
      <JobSeekersAbout />
      <GetHired />
      <KeyFeatures />
      <Faq />
    </div>
  );
}
