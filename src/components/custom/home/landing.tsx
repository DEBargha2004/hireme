"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StartHiringForm, { selectLocations } from "../forms/start-hiring-form";
import { startHiringSchema, TStartHiringSchema } from "@/schema/start-hiring";

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
    <section className="section space-y-10">
      <h1
        className="md:text-6xl text-5xl font-bold section-container"
        style={{ lineHeight: "1.3" }}
      >
        Direct <span className="text-primary">Hiring</span> App for Founders,
        Team Leaders and Hiring Managers
      </h1>
      <p className="text-lg text-muted-foreground section-container">
        Hirect simplifies the hiring process. Directly chatting with verified
        candidates matched by the AI algorithm ensures a simple, quick and
        effective hiring experience.
      </p>
      <StartHiringForm
        form={form}
        onSubmit={handleSubmit}
        locations={recommendedLocatons}
      />
    </section>
  );
}
