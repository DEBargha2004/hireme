import { cn } from "@/lib/utils";
import micromatch from "micromatch";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: {
  label: string;
  href: string;
  isSelected: (path: string) => boolean;
}[] = [
  {
    label: "All Jobs",
    href: "/dashboard/jobs",
    isSelected(path) {
      return path === "/dashboard/jobs";
    },
  },
  {
    label: "Opening",
    href: "/dashboard/jobs/opening",
    isSelected(path) {
      return micromatch.isMatch(path, this.href);
    },
  },
  {
    label: "Closed",
    href: "/dashboard/jobs/closed",
    isSelected(path) {
      return micromatch.isMatch(path, this.href);
    },
  },
  {
    label: "Rejected",
    href: "/dashboard/jobs/rejected",
    isSelected(path) {
      return micromatch.isMatch(path, this.href);
    },
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex justify-start items-center">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={cn(
            "inline-block p-2.5 px-5 border-b-[3px] border-transparent hover:bg-muted font-medium",
            link.isSelected(pathname) && "text-primary border-primary",
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
