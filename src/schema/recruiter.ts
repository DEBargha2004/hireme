import { isValidPhoneNumber } from "libphonenumber-js";
import * as z from "zod";

export const recruiterSchema = z.object({
  name: z.string().min(1),
  phone: z
    .string()
    .refine((v) => isValidPhoneNumber(v), { message: "Invalid phone number" }),
  email: z.string().email(),
  company: z.string().min(1, { message: "Company name is required" }),
  designation: z.string().min(1, { message: "Designation is required" }),
  receiveUpdates: z.boolean(),
});

export type TRecruiterSchema = z.infer<typeof recruiterSchema>;
