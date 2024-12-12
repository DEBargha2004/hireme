import { filterSections } from "./filter";

export type FieldOption = { label: string; value: string };

export const designations: FieldOption[] = [
  { label: "HR", value: "hr" },
  { label: "Founder/CEO", value: "founder/ceo" },
  { label: "CTO", value: "cto" },
  { label: "CMO", value: "cmo" },
  { label: "COO", value: "coo" },
  { label: "Others", value: "others" },
];

export const roles: FieldOption[] = [
  { label: "Technical", value: "technical" },
  { label: "Non-Technical", value: "non-technical" },
  { label: "Both", value: "both" },
];

export const numberOfCandidates: FieldOption[] = [
  { label: "0-10", value: "0-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-100", value: "51-100" },
  { label: "100+", value: "100+" },
];

export const jobTypes: FieldOption[] = [
  {
    label: "Part Time",
    value: 'part-time'
  },
  {
    label: "Full Time",
    value: "full-time"
  },
  {
    label: "Contract",
    value: "contract"
  },
  {
    label: "Internship",
    value: "internship"
  }, {
    label: "Freelance",
    value: 'freelance'
  }
]

export const experienceList = filterSections.find(f => f.key === 'exp')!.options
export const educationList = filterSections.find(f => f.key === "edu")!.options