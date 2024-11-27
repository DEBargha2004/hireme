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
    question: "How do I hire the best candidate for a job?",
    answer: (
      <p>
        The Hireme app has over 3 million job seekers spread across 1200+ job
        categories. Hireme&apos;s AI algorithm selects the best-fit candidates
        for a position, helping recruiters connect directly with candidates who
        have relevant experience and the desired skills.
      </p>
    ),
  },
  {
    question:
      "Hiring for multiple roles can be expensive; how can I save money?",
    answer: (
      <p>
        Traditional hiring requires the hiring manager or startup founder to
        connect with consultancies that provide a larger pool of candidates.
        This, however, comes at a high cost. The Hireme app provides solutions
        to these issues. Hireme initially operates on a FREEMIUM model for
        recruiters, allowing them to use all features without restrictions.
        After the plan has been exhausted, Hireme charges recruiters a small fee
        for initiating chats with additional job seekers. Nonetheless, hiring on
        Hireme is effective yet economical.
      </p>
    ),
  },
  {
    question: "How soon can I start hiring for my job posting?",
    answer: (
      <p>
        Hireme helps recruiters initiate any hiring process within a day. Once a
        recruiter is verified, the job postings go live instantaneously.
        Consequently, the AI algorithm filters the best-fit candidates based on
        the requirements and allows recruiters to connect directly with relevant
        and active job seekers.
      </p>
    ),
  },
  {
    question: "How is Hireme different from other traditional portals?",
    answer: (
      <p>
        The traditional hiring process can be long-winded, expensive and
        inefficient. Hireme simplifies the entire hiring process. It is the best
        among job hiring apps; it lets the hiring manager or recruiter chat
        directly with AI-matched job seekers that have relevant skills and
        experience. Since no consultants are involved, the hiring process is
        seamless and extinguishes the possibility of spam or scam calls.
        Moreover, recruiters can schedule a video interview within the app
        without exchanging any of their personal information.
      </p>
    ),
  },
  {
    question: "Are there any job posting limitations for recruiters?",
    answer: (
      <p>
        Recruiters who have signed up and are verified are entitled to a 3-day
        complimentary trial for 30 chat initiations per day. After the trial
        period, they are subscribed to the FREEMIUM plan allowing 5 free chats a
        day. If the hiring manager/recruiter wants to chat with more candidates
        in a day, they can avail of a subscription to their chosen plan. For
        further details, check out the&nbsp;
        <span className="text-blue-600 underline">
          <Link href={"/product-pricing"}>product and pricing</Link>
        </span>
        &nbsp; of Hireme.
      </p>
    ),
  },
  {
    question:
      "What if a recruiter has special requirements? Who should they reach out to?",
    answer: (
      <p>
        If a recruiter has any special requirements, they can write to:&nbsp;
        <span className="text-blue-600 underline">
          <Link href={"mailto:sales@hireme.in"}>sales@hireme.in</Link>
        </span>
        .
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
