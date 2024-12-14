import { isValidNumber } from "libphonenumber-js";
import * as z from "zod";

export const startupHiringSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z
    .string()
    .refine((v) => isValidNumber(v), { message: "Invalid phone number" }),
  email: z.string().email({ message: "Invalid email" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  designation: z.string().min(1, { message: "Designation is required" }),
  receiveUpdatesOnWhatsapp: z.boolean(),
});

export type TStartupHiring = z.infer<typeof startupHiringSchema>;
export const defaultValues: TStartupHiring = {
  name: "",
  phone: "",
  email: "",
  companyName: "",
  designation: "",
  receiveUpdatesOnWhatsapp: false,
};
