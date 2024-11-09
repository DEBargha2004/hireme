import * as z from "zod";

export const startHiringSchema = z.object({
  occupation: z.string().optional(),
  location: z.string().optional(),
});

export type TStartHiringSchema = z.infer<typeof startHiringSchema>;
