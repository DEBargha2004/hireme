import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question:
      "Is it mandatory for candidates to post their resumes on the Hireme app?",
    answer: (
      <p>
        The registration process on Hireme allows job seekers to upload their
        resumes. Nonetheless, uploading a resume is not mandatory since the
        profile covers all the necessary information a job seeker chooses to
        highlight. A job seeker&#39;s profile can get verified in the absence of
        a resume as well.
      </p>
    ),
  },
  {
    question: "Does it cost you to find a job on this app?",
    answer: (
      <p>
        While most traditional job portals in India charge job seekers to find a
        relevant job, Hireme allows job seekers to build their profiles and chat
        with verified recruiters for free.
      </p>
    ),
  },
  {
    question:
      "How can job seekers secure themselves from any job frauds or scams on this app?",
    answer: (
      <p>
        All the recruiters who post the jobs on this app are 100 % verified.
        Furthermore, the AI algorithm ensures that the candidates are matched
        with active recruiters offering jobs that best suit the job seeker&#39;s
        skill set and experience. Since there are no consultants involved, job
        seekers on Hireme are completely immune to spam or scam calls.
      </p>
    ),
  },
  {
    question:
      "Would job seekers need to follow up with the recruiter to get a response or feedback?",
    answer: (
      <p>
        The Hireme app allows job seekers to connect directly with hiring
        managers who could end up being their prospective boss. Job seekers can
        always follow up with the recruiter using our direct-chat feature. Job
        seekers can also schedule video interviews, and get feedback instantly.
      </p>
    ),
  },
];

export default function Faq() {
  return (
    <div className="w-full pb-16">
      <div className="section space-y-20">
        <h1 className="md:text-4xl text-3xl font-bold">FAQ</h1>
        <Accordion type="multiple" className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={idx.toString()}>
              <AccordionTrigger
                triggerSymbol={
                  <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:hidden">
                    <Minus id="minus" /> <Plus id="plus" />
                  </span>
                }
                className="w-full [&[data-state=open]>span>svg[id=minus]]:block [&[data-state=closed]>span>svg[id=plus]]:block"
              >
                <p className="text-left w-full text-sm">
                  Q{idx + 1} {faq.question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <span className="p-5 inline-block">{faq.answer}</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div></div>
      </div>
    </div>
  );
}
