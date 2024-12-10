type Option = {
  label: string;
  value: string;
};

export type FilterSection = {
  title: string;
  key: string;
  options: Option[];
};

export const filterSections: FilterSection[] = [
  {
    title: "Required Education",
    key: "edu",
    options: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "Doctorate",
        value: "doctorate",
      },
      {
        label: "Post Graduation",
        value: "post-graduation",
      },
      {
        label: "Graduation/Diploma",
        value: "graduation-diploma",
      },
      {
        label: "Higher Secondary",
        value: "higher-secondary",
      },
      {
        label: "School",
        value: "school",
      },
    ],
  },
  {
    title: "Required Experience",
    key: "exp",
    options: [
      {
        label: "Any Experience",
        value: "any",
      },
      {
        label: "Fresher",
        value: "0",
      },
      {
        label: "0-1 Year",
        value: "0-1",
      },
      {
        label: "1-3 Year",
        value: "1-3",
      },
      {
        label: "3-5 Year",
        value: "3-5",
      },
      {
        label: "5-10 Year",
        value: "5-10",
      },
      {
        label: "10+ Year",
        value: "10+",
      },
    ],
  },
  {
    title: "Offered Salary(Anually)",
    key: "salary",
    options: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "0-2 LPA",
        value: "0-2",
      },
      {
        label: "2-5 LPA",
        value: "2-5",
      },
      {
        label: "5-10 LPA",
        value: "5-10",
      },
      {
        label: "10-20 LPA",
        value: "10-20",
      },
      {
        label: "20-30 LPA",
        value: "20-30",
      },
      {
        label: "30 LPA+",
        value: "30+",
      },
    ],
  },
  {
    title: "Gender",
    key: "gender",
    options: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ],
  },
  {
    title: "Age",
    key: "age",
    options: [
      {
        label: "18-50",
        value: "18-50",
      },
      {
        label: "50+",
        value: "50+",
      },
    ],
  },
];
