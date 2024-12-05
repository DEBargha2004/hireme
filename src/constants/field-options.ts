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
