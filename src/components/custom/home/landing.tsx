"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StartHiringForm, { selectLocations } from "../forms/start-hiring-form";
import { startHiringSchema, TStartHiringSchema } from "@/schema/start-hiring";
import verifiedRecruiters from "@/../public/verified-recruiters.svg";
import jobsPosted from "@/../public/jobs-posted.svg";
import chatConversations from "@/../public/chat-conversations.svg";
import jobSeekers from "@/../public/job-seekers.svg";
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
    title: "190K+",
    description: "Verified Recruiters",
    image: verifiedRecruiters,
  },
  {
    title: "500K+",
    description: "Jobs Posted",
    image: jobsPosted,
  },
  {
    title: "25M+",
    description: "Chat Conversations",
    image: chatConversations,
  },
  {
    title: "3.8M+",
    description: "Job Seekers",
    image: jobSeekers,
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
      <h1
        className="md:text-6xl text-5xl font-bold "
        style={{ lineHeight: "1.3" }}
      >
        Direct <span className="text-primary">Hiring</span> App for Founders,
        Team Leaders and Hiring Managers
      </h1>
      <p className="text-lg text-muted-foreground ">
        Hirect simplifies the hiring process. Directly chatting with verified
        candidates matched by the AI algorithm ensures a simple, quick and
        effective hiring experience.
      </p>
      <StartHiringForm
        form={form}
        onSubmit={handleSubmit}
        locations={recommendedLocatons}
      />
      <div className="grid md:grid-cols-4 grid-cols-2 gap-y-6 pt-4">
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
