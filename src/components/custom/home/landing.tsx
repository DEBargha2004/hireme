"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StartHiringForm, { selectLocations } from "../forms/start-hiring-form";
import { startHiringSchema, TStartHiringSchema } from "@/schema/start-hiring";
import verifiedRecruiters from "@/../public/verified-recruiters.svg";
import jobsPosted from "@/../public/jobs-posted.svg";
import chatConversations from "@/../public/chat-conversations.svg";
import jobSeekers from "@/../public/job-seekers.svg";
import globe from "@/../public/globe.svg";
import Image from "next/image";

const locations = [
  "San Francisco",
  "New York",
  "San Diego",
  "Los Angeles",
  "San Jose",
  "Ventura",
  "Fresno",
  "Sacramento",
  "Long Beach",
  "Oakland",
];

const features = [
  {
    title: "120,000+",
    description: "Startups hiring on our app",
    image: verifiedRecruiters,
  },
  {
    title: "10,000+",
    description: "Daily fresh job seekers",
    image: jobSeekers,
  },
  {
    title: "Verified",
    description: "Recruiters & candidates",
    image: jobsPosted,
  },
  {
    title: "AI-Powered",
    description: "Job matching for faster hiring",
    image: globe,
  },
  {
    title: "Instant Chat",
    description: "With video interviews",
    image: chatConversations,
  },
];

export default function Landing() {
  const form = useForm<TStartHiringSchema>({
    resolver: zodResolver(startHiringSchema),
  });

  const recommendedLocatons = selectLocations(
    locations,
    form.watch("location") ?? "",
  );

  const handleSubmit = async (data: TStartHiringSchema) => {
    console.log(data);
  };
  return (
    <section className="section space-y-12">
      <section>
        <h1
          className="md:text-6xl text-5xl font-bold mb-10"
          style={{ lineHeight: "1.3" }}
        >
          <span className="text-primary">HireMe</span> - AI-Powered Job Matching
          for Faster Hiring
        </h1>
        <h2 className="md:text-4xl text-3xl font-bold mb-12">
          Find Your Dream Job or Hire Top Talent Instantly
        </h2>
        <p className="text-lg text-muted-foreground ">
          HireMe is a <strong>chat-based, mobile-first</strong> hiring platform
          designed for <strong>startups and SMEs</strong>. Unlike traditional
          job portals, HireMe directly connects{" "}
          <strong>job seekers with hiring managers</strong>—no middlemen, no
          delays.
        </p>
      </section>
      <StartHiringForm
        form={form}
        onSubmit={handleSubmit}
        locations={recommendedLocatons}
      />
      <div className="grid md:grid-cols-5 grid-cols-2 gap-y-6 pt-4">
        {features.map((f, f_idx) => (
          <section
            key={f_idx}
            className="flex flex-col items-center justify-start gap-2 "
          >
            <div className="p-2 rounded-full bg-accent">
              <Image
                alt={f.description}
                src={f.image}
                height={80}
                width={80}
                className="h-8 w-8"
              />
            </div>
            <p className="font-bold text-muted-foreground text-lg">{f.title}</p>
            <span className="text-black/70">{f.description}</span>
          </section>
        ))}
      </div>
    </section>
  );
}
