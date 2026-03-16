import About from "@/components/custom/recruiter/about";
import Faq from "@/components/custom/recruiter/faq";
import Features from "@/components/custom/recruiter/features";
import HireInstantly from "@/components/custom/recruiter/hire-instantly";
import HiringProcess from "@/components/custom/recruiter/hiring-process";
import HiringSteps from "@/components/custom/recruiter/hiring-steps";
import { Metadata } from "next";
import { headers } from "next/headers";
import logo from "@/../public/app-logo.png";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") || "http";

  const baseUrl = `${protocol}://${host}`;
  return {
    title: "HireMe - AI-Powered Hiring for Employers",
    description:
      "Hire top talent faster with HireMe. Join 120,000+ startups and use AI-powered matching, instant chat, and video interviews to find your next hire.",
    alternates: {
      canonical: `${baseUrl}/recruiter`,
    },
    openGraph: {
      title: "HireMe - AI-Powered Hiring for Employers",
      description:
        "Hire top talent faster with HireMe. Join 120,000+ startups and use AI-powered matching, instant chat, and video interviews to find your next hire.",
      url: `${baseUrl}/recruiter`,
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
      title: "HireMe - AI-Powered Hiring for Employers",
      description:
        "Hire top talent faster with HireMe. Join 120,000+ startups and use AI-powered matching to find your next hire.",
      images: [logo.src],
    },
  };
}

export default function Page() {
  return (
    <div className="space-y-28 pt-20">
      {/* <HireInstantly /> */}
      <HiringSteps />
      <About />
      <HiringProcess />
      <Features />
      <Faq />
    </div>
  );
}
