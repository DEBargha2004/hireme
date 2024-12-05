"use client";

import Image from "next/image";
import strategicPartnership from "@/../public/strategic-partnership.png";
import { useForm } from "react-hook-form";
import {
  enterpriseHiringSchema,
  getDefaultValues,
  TEnterpriseHiring,
} from "@/schema/enterprise-hiring";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EnterpriseHiringForm from "../forms/enterprise-hiring-form";

export default function Hero() {
  const form = useForm<TEnterpriseHiring>({
    resolver: zodResolver(enterpriseHiringSchema),
    defaultValues: getDefaultValues(),
  });
  const onSubmit = (data: TEnterpriseHiring) => {};
  return (
    <div>
      <div className="section grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col justify-start items-center gap-10 md:text-left text-center">
          <h1
            className="md:text-5xl text-4xl font-bold"
            style={{ lineHeight: "1.3" }}
          >
            Enterprise <span className="text-primary">Hiring</span> - To meet
            large-scale hiring requirements
          </h1>
          <p className="text-muted-foreground">
            Hireme&apos;s enterprise hiring services are ideal for recruiters
            who need to fill multiple roles or for recruiters looking to quickly
            expand their teams. The enterprise hiring services account for the
            provision of a designated professional in charge of meeting all the
            hiring requirements. The AI algorithm, combined with personalized
            recommendations, enables recruiters to efficiently build a skilled
            workforce.
          </p>
          <Image
            alt="hero"
            src={strategicPartnership}
            height={400}
            width={500}
            className="h-auto w-full"
          />
        </div>
        <div>
          <Card className="lg:w-4/5 ml-auto shadow-xl p-5 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                Get in touch with the Account Manager
              </CardTitle>
              <p className="text-base text-muted-foreground">
                Build your Team Instantly. Get Started Soon.
              </p>
            </CardHeader>
            <CardContent>
              <EnterpriseHiringForm form={form} onSubmit={onSubmit} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
