import { Separator } from "@/components/ui/separator";
import AppLogo from "../app-logo";
import Link from "next/link";

type FooterLabel = {
  title: string;
  data: { title: string; href?: string }[];
};

const footerLabel: FooterLabel[] = [
  {
    title: "Hireme",
    data: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About Us",
        href: "/aboutus",
      },
      {
        title: "Recruiters",
        href: "/recruiter",
      },
      {
        title: "Job Seekers",
        href: "/job-seeker",
      },
      {
        title: "Enterprise Hiring",
        href: "/enterprise-hiring",
      },
      {
        title: "Media",
        href: "/media-coverage",
      },
      {
        title: "Influencers",
        href: "/influencers",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "For Startup Hiring",
        href: "/startup-hiring",
      },
      {
        title: "Contact us",
        href: "/contact-us",
      },
    ],
  },
  {
    title: "Support",
    data: [
      {
        title: "Support@hireme.in",
        href: "mailto:support@hireme.in",
      },
      {
        title: "For Recruiters Schedule a Call",
      },
    ],
  },
  {
    title: "Legal",
    data: [
      {
        title: "Privacy Policy",
        href: "/privacypolicy",
      },
      {
        title: "Terms & Conditions",
        href: "/termsconditions",
      },
      {
        title: "Refund Policy",
        href: "/refund-cancellation-policy",
      },
    ],
  },
];

export default function Footer() {
  return (
    <section className="w-full bg-[#0E101A] space-y-10 ">
      <div className="w-[80%] mx-auto py-10 ">
        <div className="grid md:grid-cols-5 px-4 md:gap-4 gap-6">
          <section className="flex flex-col justify-start md:items-start md:text-left text-center items-center gap-10 md:col-span-2">
            <AppLogo className="h-12 w-fit" variant="light" width={300} />
            <p className="text-white  lg:max-w-[300px] max-w-[250px] lg:text-base text-sm">
              Chat Directly. Hire Instantly. Trusted by 3.8M+ verified job
              seekers and 190K+ verified recruiters.
            </p>
          </section>
          {footerLabel.map((item, index) => (
            <section
              className="flex flex-col justify-start md:items-start items-center gap-6 md:text-left text-center"
              key={index}
            >
              <h1 className="text-white text-2xl font-semibold">
                {item.title}
              </h1>
              <div>
                {item.data.map((item, index) => (
                  <Link key={index} href={item.href ?? ""}>
                    <p
                      key={index}
                      className="text-white py-1.5 lg:text-base text-xs"
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-10">
          <Separator className="h-0.5 bg-primary" />
          <div>
            <h2 className="text-white lg:text-lg px-4 md:text-left text-center">
              © PHILOCALIST JOBS PRIVATE LIMITED. All Rights Reserved.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
