import * as z from "zod";

export const jobSchema = z.object({
  company: z.string(),
  type: z.string(),
  title: z.string(),
  description: z.string(),
  isRemote: z.boolean(),
  experience: z.string(),
  education: z.string(),
  salary: z.object({
    min: z.number(),
    max: z.number(),
  }),
  location: z.string(),
});

export type TJob = z.infer<typeof jobSchema>;
export const defaultValues: TJob = {
  company: "",
  type: "",
  title: "",
  description: "",
  isRemote: false,
  experience: "",
  education: "",
  salary: {
    min: 0,
    max: 0,
  },
  location: "",
};
