"use client";

import Image from "next/image";
import recruiterHero from "@/../public/recruiter-hero.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecruiterForm from "../forms/recruiter-form";
import { useForm } from "react-hook-form";
import { recruiterSchema, TRecruiterSchema } from "@/schema/recruiter";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export default function HireInstantly() {
  const form = useForm<TRecruiterSchema>({
    resolver: zodResolver(recruiterSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      designation: "",
      receiveUpdates: false,
    },
  });

  const onSubmit = (data: TRecruiterSchema) => {};
  return (
    <div className="w-full py-10">
      <div className="section flex md:flex-row flex-col-reverse justify-between items-start gap-10">
        <section className="flex flex-col justify-start md:items-start md:text-left text-center items-center gap-6 w-full">
          <h1 className="md:text-6xl text-5xl font-bold">
            Want to <span className="text-primary">Hire</span> Instantly?
          </h1>
          <p className="text-muted-foreground lg:text-lg">
            Hirect is a job app that enables Founders/CXOs/Hiring
            Managers/Business Owners to chat directly with relevant, AI-filtered
            candidates, without consultants, and with 100% data privacy.
          </p>
          <Image
            src={recruiterHero}
            alt="Recruiter Hero"
            height={400}
            width={400}
            className="w-4/5 "
          />
        </section>
        <section className="flex flex-col justify-between items-end w-full">
          <Card className=" shadow-2xl lg:w-[85%] w-full h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-black/80 tracking-wide">
                Let us Simplify the Hiring Process
              </CardTitle>
              <p className="text-base text-muted-foreground">
                Register to find your Next Hire. Get Started Soon.
              </p>
            </CardHeader>
            <CardContent>
              <RecruiterForm form={form} onSubmit={onSubmit} />
            </CardContent>
          </Card>
          <p className="lg:w-[85%] w-full mt-10">
            <Link
              href={"/enterprise-hiring"}
              className="underline text-lg text-emerald-800 font-semibold "
            >
              Have Multiple Positions to Fill?
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
