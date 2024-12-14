"use client";

import banner from "@/../public/startup-hiring/banner_bg.webp";
import appView from "@/../public/startup-hiring/startup-hiring.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  defaultValues,
  startupHiringSchema,
  TStartupHiring,
} from "@/schema/startup-hiring";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import StartupHiringForm from "../forms/startup-hiring-form";

export default function Hero() {
  const form = useForm<TStartupHiring>({
    resolver: zodResolver(startupHiringSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: TStartupHiring) => {};
  return (
    <div className="min-h-[800px]">
      <div className="2xl:w-4/5 relative mx-auto">
        <Image
          alt="banner"
          src={banner}
          height={600}
          width={900}
          className="min-h-[700px] object-cover w-full absolute top-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <section className="section relative">
        <div className="grid md:grid-cols-2 gap-5 pt-20">
          <div className="md:text-left space-y-10">
            <h1
              className="md:text-5xl text-4xl font-bold text-white"
              style={{ lineHeight: "1.3" }}
            >
              Hirect - Direct Hiring for{" "}
              <span className="text-primary">Startups</span>
            </h1>
            <p className="text-white">
              Specially designed for Startup Leaders to hire talents directly.
              All Candidates at Hirect want to work in Startups only. Post a job
              and Chat Directly with the matching candidates. No Spam, No
              Waiting, No Cost, No Middle Man.
            </p>
            <div className="relative h-[400px] md:block hidden">
              <Image
                alt="appView"
                src={appView}
                height={600}
                width={600}
                className="w-3/4 absolute top-0 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
          <div className="flex md:justify-end justify-center h-fit">
            <Card className="w-full max-w-[450px] shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">
                  Let us Simplify the Hiring Process
                </CardTitle>
                <CardDescription>
                  Register to find your Next Hire. Get Started Soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StartupHiringForm form={form} onSubmit={onSubmit} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
