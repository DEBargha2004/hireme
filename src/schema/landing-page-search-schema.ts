import * as z from "zod";

export const landingPageSearchSchema = z.object({
  occupation: z.string().optional(),
  location: z.string().optional(),
});

export type TLandingPageSearchSchema = z.infer<typeof landingPageSearchSchema>;
