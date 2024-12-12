"use client";

import JobForm from "@/components/custom/forms/job";
import { defaultValues, jobSchema, TJob } from "@/schema/job";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Page() {
  const form = useForm<TJob>({
    resolver: zodResolver(jobSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (e: TJob) => {};
  return (
    <main>
      <JobForm form={form} onSubmit={onSubmit} />
    </main>
  );
}
