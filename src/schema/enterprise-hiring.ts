import * as z from "zod";

export const enterpriseHiringSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email" }),
  company: z.string().min(1, { message: "Company name is required" }),
  designation: z.string().min(1, { message: "Designation is required" }),
  numberOfCandidates: z
    .string()
    .min(1, { message: "Number of candidates is required" }),
  role: z.string().min(1, { message: "Role is required" }),
  receiveUpdates: z.boolean(),
});

export type TEnterpriseHiring = z.infer<typeof enterpriseHiringSchema>;

export const getDefaultValues = (): TEnterpriseHiring => ({
  name: "",
  phone: "",
  email: "",
  company: "",
  designation: "",
  numberOfCandidates: "",
  role: "",
  receiveUpdates: false,
});
